import test from "node:test"
import assert from "node:assert/strict"
import { createHash } from "node:crypto"
import { mkdtemp, readFile, writeFile, rm, readdir } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { validateMediaBaseUrl, validateUploadPlan, publishMediaManifest } from "../scripts/upload-product-media.mjs"

const origin = "https://media.example.com"
const collection = "products/extensions/docs/2026-10-11-012345abcdef"
function fixture() {
  const bodies = new Map()
  const files = [
    ["image.webp", "image/webp"], ["thumb.webp", "image/webp"], ["original.png", "image/png"],
    ["index.html", "text/html; charset=utf-8"], ["library.zip", "application/zip"],
  ].map(([name, contentType]) => {
    const bytes = Buffer.from(`public contents for ${name}`)
    const key = `${collection}/${name}`
    bodies.set(key, bytes)
    return { key, path: `/private/staging/${name}`, size: bytes.length, sha256: createHash("sha256").update(bytes).digest("hex"), contentType,
      ...(name.endsWith(".zip") && { disposition: 'attachment; filename="library.zip"' }) }
  })
  const manifest = { version: 1, collection, baseUrl: null, archiveKey: files[4].key, libraryKey: files[3].key,
    images: [{ id: "rocketflow/demo", product: "rocketflow", title: "Demo", width: 1280, height: 720, key: files[0].key, thumbnailKey: files[1].key, originalKey: files[2].key }] }
  const fetchImpl = async url => {
    const key = new URL(url).pathname.slice(1)
    const file = files.find(item => item.key === key)
    assert.ok(file, `unexpected request ${url}`)
    return new Response(bodies.get(key), { headers: { "content-type": file.contentType, ...(file.disposition && { "content-disposition": file.disposition }) } })
  }
  return { plan: { manifest, files }, fetchImpl }
}

test("media origin rejects non-HTTPS, credentials, ports and URL suffixes", () => {
  assert.equal(validateMediaBaseUrl(`${origin}/`), origin)
  for (const value of ["http://media.example.com", "file:///tmp/library", "https://user:secret@media.example.com", "https://media.example.com:8443", `${origin}/objects`, `${origin}?token=secret`, `${origin}#gallery`, "not a URL", "https://localhost", "https://assets.localhost", "https://assets.local", "https://127.0.0.1", "https://10.0.0.1", "https://[::1]"]) {
    assert.throws(() => validateMediaBaseUrl(value), undefined, value)
  }
})

test("upload plan rejects missing referenced objects, traversal, wrong collections and duplicate keys", () => {
  assert.doesNotThrow(() => validateUploadPlan(fixture().plan))
  for (const field of ["key", "thumbnailKey", "originalKey"]) {
    const { plan } = fixture()
    plan.manifest.images[0][field] = `${collection}/missing-${field}`
    assert.throws(() => validateUploadPlan(plan), /unstaged object/)
  }
  for (const field of ["archiveKey", "libraryKey"]) {
    const { plan } = fixture()
    plan.manifest[field] = `${collection}/missing-${field}`
    assert.throws(() => validateUploadPlan(plan), /unstaged object/)
  }
  for (const key of [`${collection}/../escape.webp`, `${collection}/%2e%2e/escape.webp`, "other-collection/image.webp"]) {
    const { plan } = fixture()
    plan.files[0].key = key
    assert.throws(() => validateUploadPlan(plan), /Invalid media object/)
  }
  const { plan } = fixture()
  plan.files.push({ ...plan.files[0] })
  assert.throws(() => validateUploadPlan(plan), /Invalid media object/)
  assert.throws(() => validateUploadPlan({ manifest: { collection }, files: [] }), /Invalid media upload plan/)
})

test("upload plan rejects unsupported versions and malformed image metadata", () => {
  for (const version of [undefined, 0, 2, "1"]) {
    const { plan } = fixture()
    plan.manifest.version = version
    assert.throws(() => validateUploadPlan(plan), /Invalid media upload plan/)
  }
  for (const images of [undefined, {}, []]) {
    const { plan } = fixture()
    plan.manifest.images = images
    assert.throws(() => validateUploadPlan(plan), /Invalid media upload plan/)
  }
  const invalid = [
    { product: "unknown" }, { id: "rocketspy/demo" }, { id: "rocketflow/../private" }, { id: "rocketflow/demo?token=x" },
    { title: "" }, { title: "   " }, { title: 7 }, { title: "x".repeat(161) },
    { width: 0 }, { width: -1 }, { width: 1.5 }, { width: "1280" }, { width: 20001 }, { width: Infinity },
    { height: 0 }, { height: -1 }, { height: 1.5 }, { height: "720" }, { height: 20001 }, { height: NaN },
  ]
  for (const patch of invalid) {
    const { plan } = fixture()
    Object.assign(plan.manifest.images[0], patch)
    assert.throws(() => validateUploadPlan(plan), /Invalid image metadata/, JSON.stringify(patch))
  }
  const { plan } = fixture()
  plan.manifest.images.push({ ...plan.manifest.images[0] })
  assert.throws(() => validateUploadPlan(plan), /Invalid image metadata/)
})

test("failed public status or hash verification preserves the previous live manifest byte-for-byte", async () => {
  const directory = await mkdtemp(join(tmpdir(), "tony-media-"))
  const outputPath = join(directory, "product-media.json")
  const previous = '{"baseUrl":"https://previous.example.com","images":["existing"]}\n'
  try {
    for (const failure of ["status", "hash"]) {
      await writeFile(outputPath, previous)
      const { plan, fetchImpl } = fixture()
      await assert.rejects(publishMediaManifest(plan, origin, { outputPath, fetchImpl: async url => {
        if (url.endsWith("image.webp")) return failure === "status" ? new Response(null, { status: 503 }) : new Response(Buffer.alloc(plan.files[0].size, "x"), { headers: { "content-type": "image/webp" } })
        return fetchImpl(url)
      } }), failure === "status" ? /HTTP 503/ : /Public content differs/)
      assert.equal(await readFile(outputPath, "utf8"), previous)
      assert.deepEqual(await readdir(directory), ["product-media.json"])
    }
  } finally { await rm(directory, { recursive: true, force: true }) }
})

test("verified publication activates the public origin without leaking staging files", async () => {
  const directory = await mkdtemp(join(tmpdir(), "tony-media-"))
  const outputPath = join(directory, "product-media.json")
  try {
    const { plan, fetchImpl } = fixture()
    const requests = []
    const manifest = await publishMediaManifest(plan, origin, { outputPath, fetchImpl: async url => { requests.push(url); return fetchImpl(url) } })
    assert.equal(manifest.baseUrl, origin)
    assert.equal(manifest.images[0].key, plan.manifest.images[0].key)
    assert.equal(requests.length, plan.files.length)
    assert.ok(requests.every(url => url.startsWith(`${origin}/${collection}/`)))
    const saved = await readFile(outputPath, "utf8")
    assert.deepEqual(JSON.parse(saved), { ...plan.manifest, baseUrl: origin })
    assert.equal(saved.includes("/private/staging"), false)
    assert.equal("files" in manifest, false)
    assert.equal("path" in manifest.images[0], false)
    assert.deepEqual(await readdir(directory), ["product-media.json"])
  } finally { await rm(directory, { recursive: true, force: true }) }
})
