import { readFile, writeFile, mkdir, readdir } from "node:fs/promises"
import { createHash } from "node:crypto"
import { execFile } from "node:child_process"
import { promisify, parseArgs } from "node:util"
import { resolve } from "node:path"
import sharp from "sharp"

const { values } = parseArgs({ options: { source: { type: "string" }, slug: { type: "string" } } })
if (!values.source || !/^[a-z0-9-]+$/.test(values.slug || "") || !process.env.CLOUDFLARE_ACCOUNT_ID) throw new Error("Provide --source, --slug and CLOUDFLARE_ACCOUNT_ID")
const run = promisify(execFile)
const digest = bytes => createHash("sha256").update(bytes).digest("hex")
const pages = []
const names = (await readdir(values.source)).filter(name => /^\d+\.png$/.test(name)).sort((a, b) => Number.parseInt(a) - Number.parseInt(b))
if (!names.length || names.some((name, i) => Number.parseInt(name) !== i + 1)) throw new Error("Pages must be consecutively numbered PNGs starting at 01.png")
for (const name of names) {
  const source = await readFile(resolve(values.source, name))
  const full = await sharp(source).webp({ quality: 90 }).toBuffer()
  const thumbnail = await sharp(source).resize({ width: 144 }).webp({ quality: 75 }).toBuffer()
  const { width, height } = await sharp(source).metadata()
  pages.push({ full, thumbnail, width, height })
}
const version = digest(Buffer.concat(pages.map(page => page.full))).slice(0, 12)
const prefix = `playbooks/${values.slug}/${version}`
const stage = resolve(".media", values.slug)
await mkdir(stage, { recursive: true })
const result = []
for (const [i, page] of pages.entries()) {
  const urls = {}
  for (const variant of ["full", "thumbnail"]) {
    const key = `${prefix}/${String(i + 1).padStart(2, "0")}-${variant}.webp`
    const url = `https://media.ainexus.vn/${key}`
    const path = resolve(stage, `${i + 1}-${variant}.webp`)
    await writeFile(path, page[variant])
    const existing = await fetch(`${url}?check=${Date.now()}`)
    if (existing.status === 404) {
      // Do not retry uncertain writes. A later run verifies bytes before uploading.
      await run(process.execPath, ["node_modules/wrangler/bin/wrangler.js", "r2", "object", "put", `tony-hoang-media/${key}`, "--remote", "--file", path, "--content-type", "image/webp", "--cache-control", "public, max-age=31536000, immutable"], { timeout: 120000 })
    } else if (!existing.ok || digest(Buffer.from(await existing.arrayBuffer())) !== digest(page[variant])) {
      throw new Error(`Existing object mismatch: ${url}`)
    }
    const publicUrl = `${url}?v=${digest(page[variant]).slice(0, 12)}`
    const verified = await fetch(publicUrl)
    if (!verified.ok || verified.headers.get("content-type")?.split(";")[0] !== "image/webp" || digest(Buffer.from(await verified.arrayBuffer())) !== digest(page[variant])) throw new Error(`Public verification failed: ${url}`)
    urls[variant] = publicUrl
  }
  result.push({ src: urls.full, thumbnail: urls.thumbnail, width: page.width, height: page.height })
  console.log(`Verified page ${i + 1}/${pages.length}`)
}
await mkdir("lib/data/playbooks", { recursive: true })
await writeFile(`lib/data/playbooks/${values.slug}.json`, JSON.stringify(result, null, 2) + "\n")
