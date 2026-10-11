import data from "./data/product-media.json"

type MediaSnapshot = {
  baseUrl: string | null; archiveKey: string; libraryKey: string
  images: { id: string; product: string; title: string; width: number; height: number; key: string; thumbnailKey: string; originalKey: string }[]
}
const snapshot: MediaSnapshot = data

export type ProductMediaImage = {
  id: string; product: string; title: string; width: number; height: number
  src: string; thumbnail: string; original: string; group: string
}

function mediaGroup(id: string) {
  if (/login|settings|cai-dat|tro-giup|captcha|khoa-free|khong-phai|dang-tai/.test(id)) return "Thiết lập & trạng thái"
  if (/mcp/.test(id)) return "MCP"
  if (/workflow|script|timeline|review|prompt-editor/.test(id)) return "Workflow"
  if (/storyboard/.test(id)) return "Storyboard"
  if (/gen-/.test(id)) return "Tạo nội dung"
  if (/queue|history|logs|prompts/.test(id)) return "Quản lý"
  return "Nghiên cứu & kết quả"
}

export function getProductMedia(slug: string) {
  if (!snapshot.baseUrl) return null
  const url = (key: string) => `${snapshot.baseUrl}/${key}`
  const images: ProductMediaImage[] = snapshot.images
    .filter(image => image.product === slug)
    .map(image => ({
      id: image.id, product: image.product, title: image.title,
      group: mediaGroup(image.id),
      width: image.width, height: image.height,
      src: url(image.key), thumbnail: url(image.thumbnailKey), original: url(image.originalKey),
    }))
  if (!images.length) return null
  return { images, bundleUrl: url(snapshot.archiveKey), libraryUrl: url(snapshot.libraryKey) }
}
