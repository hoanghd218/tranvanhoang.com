import { readFile, writeFile, rename } from "node:fs/promises"
import { createHash } from "node:crypto"
import { execFile } from "node:child_process"
import { promisify, parseArgs } from "node:util"
import { resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { isIP } from "node:net"

const run = promisify(execFile)
const root = fileURLToPath(new URL("../", import.meta.url))
const hash = bytes => createHash("sha256").update(bytes).digest("hex")

export function validateMediaBaseUrl(value) {
  const url = new URL(value)
  if (url.protocol !== "https:" || url.username || url.password || url.port || url.pathname !== "/" || url.search || url.hash || isIP(url.hostname) || !url.hostname.includes(".") || url.hostname.endsWith(".localhost") || url.hostname.endsWith(".local")) throw new Error("Media base URL must be a public HTTPS origin")
  return url.origin
}

export function validateUploadPlan(plan) {
  const collection = plan?.manifest?.collection
  if (plan?.manifest?.version !== 1 || !/^products\/extensions\/docs\/2026-10-11-[a-f0-9]{12}$/.test(collection) || !Array.isArray(plan.files) || !plan.files.length || !Array.isArray(plan.manifest.images) || !plan.manifest.images.length) throw new Error("Invalid media upload plan")
  const ids = new Set()
  for (const image of plan.manifest.images) {
    if (!["rocketflow", "rocketlisting", "rocketspy"].includes(image.product) || typeof image.id !== "string" || !image.id.startsWith(`${image.product}/`) || !/^[a-z0-9/-]+$/.test(image.id) || ids.has(image.id) || typeof image.title !== "string" || !image.title.trim() || image.title.length > 160 || !Number.isInteger(image.width) || !Number.isInteger(image.height) || image.width < 1 || image.height < 1 || image.width > 20000 || image.height > 20000) throw new Error("Invalid image metadata")
    ids.add(image.id)
  }
  const keys = new Set()
  for (const file of plan.files) {
    if (!file.key.startsWith(`${collection}/`) || !/^[a-zA-Z0-9_./-]+$/.test(file.key) || file.key.split("/").includes("..") || keys.has(file.key) || !/^[a-f0-9]{64}$/.test(file.sha256) || !Number.isInteger(file.size) || file.size <= 0) throw new Error("Invalid media object")
    keys.add(file.key)
  }
  for (const key of [plan.manifest.archiveKey, plan.manifest.libraryKey, ...plan.manifest.images.flatMap(image => [image.key, image.thumbnailKey, image.originalKey])]) {
    if (!keys.has(key)) throw new Error("Manifest references an unstaged object")
  }
}

async function concurrent(items, action, count = 4) {
  let next = 0, failure
  const results = await Promise.allSettled(Array.from({ length: Math.min(count, items.length) }, async () => {
    while (!failure && next < items.length) {
      const item = items[next++]
      try { await action(item) } catch (error) { failure = error; throw error }
    }
  }))
  const failed = results.find(result => result.status === "rejected")
  if (failed) throw failed.reason
}

export async function verifyMediaFiles(files, baseUrl, fetchImpl = fetch) {
  baseUrl = validateMediaBaseUrl(baseUrl)
  await concurrent(files, async file => {
    const response = await fetchImpl(`${baseUrl}/${file.key}`, { signal: AbortSignal.timeout(30000) })
    if (!response.ok) throw new Error(`Public verification HTTP ${response.status}: ${file.key}`)
    if (response.headers.get("content-type")?.split(";")[0] !== file.contentType.split(";")[0]) throw new Error(`Public content type differs: ${file.key}`)
    const bytes = Buffer.from(await response.arrayBuffer())
    if (bytes.length !== file.size || hash(bytes) !== file.sha256) throw new Error(`Public content differs: ${file.key}`)
    if (file.disposition && !response.headers.get("content-disposition")?.includes("attachment")) throw new Error("ZIP download disposition is missing")
  })
}

export async function publishMediaManifest(plan, baseUrl, { outputPath = resolve(root, "lib/data/product-media.json"), fetchImpl = fetch } = {}) {
  validateUploadPlan(plan)
  baseUrl = validateMediaBaseUrl(baseUrl)
  await verifyMediaFiles(plan.files, baseUrl, fetchImpl)
  const manifest = { ...plan.manifest, baseUrl }
  // Keep the previous live catalog until every public object has been verified.
  const text = "{\n" + Object.entries(manifest).map(([key, value]) => key === "images"
    ? `  "images": [\n${manifest.images.map(image => `    ${JSON.stringify(image)}`).join(",\n")}\n  ]`
    : `  ${JSON.stringify(key)}: ${JSON.stringify(value)}`).join(",\n") + "\n}"
  await writeFile(`${outputPath}.tmp`, text + "\n")
  await rename(`${outputPath}.tmp`, outputPath)
  console.log(`Verified ${plan.files.length} public objects. Published ${manifest.images.length} images from ${baseUrl}.`)
  return manifest
}

async function upload(plan, bucket, baseUrl) {
  validateUploadPlan(plan)
  if (!/^[a-z0-9][a-z0-9-]{1,61}[a-z0-9]$/.test(bucket)) throw new Error("Invalid R2 bucket name")
  if (!process.env.CLOUDFLARE_ACCOUNT_ID) throw new Error("Set CLOUDFLARE_ACCOUNT_ID for the intended account")
  const cli = resolve(root, "node_modules/wrangler/bin/wrangler.js")
  let uploaded = 0, skipped = 0
  await concurrent(plan.files, async file => {
    if (hash(await readFile(file.path)) !== file.sha256) throw new Error(`Staged object changed: ${file.key}`)
    if (baseUrl) {
      const response = await fetch(`${baseUrl}/${file.key}`, { signal: AbortSignal.timeout(30000) })
      if (response.ok) {
        if (hash(Buffer.from(await response.arrayBuffer())) === file.sha256) { skipped++; return }
        throw new Error(`Existing public object differs: ${file.key}`)
      }
      if (response.status !== 404) throw new Error(`Cannot check existing object: HTTP ${response.status}`)
    }
    const args = [cli, "r2", "object", "put", `${bucket}/${file.key}`, "--remote", "--file", file.path, "--content-type", file.contentType, "--cache-control", "public, max-age=31536000, immutable"]
    if (file.disposition) args.push("--content-disposition", file.disposition)
    try { await run(process.execPath, args, { timeout: 120000, maxBuffer: 1024 ** 2 }) }
    catch { throw new Error(`R2 upload did not confirm success: ${file.key}. Verify remote state before retrying.`) }
    uploaded++
    if (uploaded % 10 === 0) console.log(`Uploaded ${uploaded}/${plan.files.length}; already present ${skipped}`)
  })
  console.log(`Upload complete: ${uploaded} uploaded; ${skipped} already present.`)
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { values } = parseArgs({ options: { plan: { type: "string", default: resolve(root, ".media/upload-plan.json") }, bucket: { type: "string" }, "base-url": { type: "string" }, "verify-only": { type: "boolean", default: false } } })
  const main = async () => {
    const plan = JSON.parse(await readFile(values.plan, "utf8"))
    const baseUrl = values["base-url"] ? validateMediaBaseUrl(values["base-url"]) : undefined
    if (!values["verify-only"]) await upload(plan, values.bucket || "tony-hoang-media", baseUrl)
    if (baseUrl) await publishMediaManifest(plan, baseUrl)
    else console.log("Staged objects uploaded. Pass --verify-only --base-url https://your-media-domain to verify and activate the website manifest.")
  }
  main().catch(error => { console.error(error.message); process.exitCode = 1 })
}
