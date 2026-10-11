import { readFile, writeFile, mkdir, realpath } from "node:fs/promises"
import { createHash } from "node:crypto"
import { resolve, dirname, sep } from "node:path"
import { fileURLToPath } from "node:url"
import { parseArgs } from "node:util"
import sharp from "sharp"

const root = fileURLToPath(new URL("../", import.meta.url))
const products = ["rocketflow", "rocketlisting", "rocketspy"]
const preferred = ["04-workflow-light-1920x1080", "08-products-wide-light", "rs02-window-1280-vi"]
const labels = { login: "Đăng nhập", gen: "Tạo nội dung", flow: "Flow", chatgpt: "ChatGPT", gemini: "Gemini", grok: "Grok", muse: "Muse", image: "Ảnh", video: "Video", workflow: "Workflow", dark: "Tối", light: "Sáng", logs: "Nhật ký", history: "Lịch sử", prompts: "Thư viện prompt", queue: "Hàng đợi", settings: "Cài đặt", storyboard: "Storyboard", scene: "Cảnh", full: "Toàn bộ", page: "Trang", shared: "Chung", locks: "Khóa", sidepanel: "Panel", panel: "Panel", script: "Kịch bản", to: "→", timeline: "Timeline", review: "Duyệt", before: "Trước", run: "Chạy", prompt: "Prompt", editor: "Chỉnh sửa", scrape: "Thu thập", results: "Kết quả", product: "Sản phẩm", products: "Sản phẩm", detail: "Chi tiết", media: "Media", variants: "Biến thể", search: "Tìm kiếm", wide: "Cửa sổ rộng", window: "Cửa sổ riêng", book: "Sách", mcp: "MCP", popup: "Popup", vi: "Tiếng Việt", en: "English", "ket-qua": "Kết quả", "dang-tai": "Đang tải", "khong-phai-amazon": "Ngoài Amazon", captcha: "CAPTCHA", "khoa-free": "Giới hạn Free", "cua-so": "Cửa sổ riêng", "cai-dat": "Cài đặt", "tro-giup": "Trợ giúp" }

function titleFor(name) {
  const stem = name.replace(/^(?:\d+|rs\d+)-/, "").replace(/-\d+(?:x\d+)?/g, "")
  return labels[stem] || stem.split("-").map(word => labels[word] || word).join(" · ")
}
const digest = bytes => createHash("sha256").update(bytes).digest("hex")

export async function prepareProductMedia({ sourceDir, archivePath, outputDir = resolve(root, ".media") }) {
  sourceDir = await realpath(sourceDir)
  const entries = JSON.parse(await readFile(resolve(sourceDir, "capture-manifest.json"), "utf8"))
  if (!Array.isArray(entries) || !entries.length) throw new Error("Empty media source")
  const sourceFiles = []
  const ids = new Set()
  for (const entry of entries) {
    if (!products.includes(entry.app) || !/^[a-z0-9-]+$/.test(entry.name) || entry.file !== `${entry.app}/${entry.name}.png` || entry.demo !== true) throw new Error("Invalid demo media entry")
    if (ids.has(entry.file)) throw new Error("Duplicate media entry")
    ids.add(entry.file)
    const path = await realpath(resolve(sourceDir, entry.file))
    if (!path.startsWith(`${sourceDir}${sep}`)) throw new Error("Media source escapes library")
    const bytes = await readFile(path)
    const { width, height } = await sharp(bytes).metadata()
    if (width !== entry.width || height !== entry.height) throw new Error(`Source dimensions differ: ${entry.file}`)
    sourceFiles.push({ ...entry, bytes })
  }
  const extras = await Promise.all(["index.html", "README.md", "capture-manifest.json"].map(async name => ({ name, bytes: await readFile(resolve(sourceDir, name)) })))
  const archive = await readFile(archivePath)
  if (archive.subarray(0, 4).toString("hex") !== "504b0304") throw new Error("Invalid ZIP archive")
  const hash = createHash("sha256").update("webp-q88-thumb320-q82-v1")
  for (const file of [...sourceFiles, ...extras]) hash.update(file.bytes)
  hash.update(archive)
  const collection = `products/extensions/docs/2026-10-11-${hash.digest("hex").slice(0, 12)}`
  const files = []
  async function save(relative, bytes, contentType, disposition) {
    const key = `${collection}/${relative}`, path = resolve(outputDir, key)
    await mkdir(dirname(path), { recursive: true })
    await writeFile(path, bytes)
    files.push({ key, path, size: bytes.length, sha256: digest(bytes), contentType, ...(disposition && { disposition }) })
    return key
  }
  const images = []
  for (const entry of sourceFiles) {
    const originalKey = await save(entry.file, entry.bytes, "image/png")
    const key = await save(`webp/${entry.app}/${entry.name}.webp`, await sharp(entry.bytes).webp({ quality: 88 }).toBuffer(), "image/webp")
    const thumbnailKey = await save(`thumbs/${entry.app}/${entry.name}.webp`, await sharp(entry.bytes).resize(320, 200, { fit: "inside", withoutEnlargement: true }).webp({ quality: 82 }).toBuffer(), "image/webp")
    images.push({ id: `${entry.app}/${entry.name}`, product: entry.app, title: titleFor(entry.name), width: entry.width, height: entry.height, key, thumbnailKey, originalKey })
  }
  images.sort((a, b) => Number(preferred.some(name => b.id.endsWith(`/${name}`))) - Number(preferred.some(name => a.id.endsWith(`/${name}`))) || a.id.localeCompare(b.id))
  for (const file of extras) await save(file.name, file.bytes, file.name.endsWith("html") ? "text/html; charset=utf-8" : file.name.endsWith("json") ? "application/json" : "text/plain; charset=utf-8")
  const archiveKey = await save("rocket-extensions-docs-media.zip", archive, "application/zip", 'attachment; filename="rocket-extensions-docs-media.zip"')
  const manifest = { version: 1, baseUrl: null, collection, archiveKey, libraryKey: `${collection}/index.html`, images }
  const plan = { manifest, files }
  await mkdir(outputDir, { recursive: true })
  await writeFile(resolve(outputDir, "upload-plan.json"), JSON.stringify(plan, null, 2) + "\n")
  const pngSize = sourceFiles.reduce((sum, file) => sum + file.bytes.length, 0)
  const webpSize = files.filter(file => file.key.includes("/webp/")).reduce((sum, file) => sum + file.size, 0)
  console.log(`${images.length} images; PNG ${(pngSize / 1024 ** 2).toFixed(2)} MiB → WebP ${(webpSize / 1024 ** 2).toFixed(2)} MiB. ${files.length} upload files staged.`)
  return plan
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const { values } = parseArgs({ options: { source: { type: "string", default: resolve(root, "../rocketflow-extension/artifacts/extensions-docs-2026-10-11") }, archive: { type: "string", default: resolve(root, "../rocketflow-extension/dist/rocket-extensions-docs-media.zip") }, output: { type: "string", default: resolve(root, ".media") } } })
  prepareProductMedia({ sourceDir: values.source, archivePath: values.archive, outputDir: values.output }).catch(error => { console.error(error.message); process.exitCode = 1 })
}
