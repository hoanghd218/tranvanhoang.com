import type { ProductMediaImage } from "./product-media"

// Curated real UI captures. Keep media choices separate from page layout.
const showcases: Record<string, { hero: string; tour: { image: string; title: string }[] }> = {
  rocketflow: {
    hero: "04-workflow-light-1920x1080",
    tour: [
      { image: "05-storyboard-scene-1920x1080", title: "Storyboard & cảnh" },
      { image: "02-review-before-run-1920x1080", title: "Duyệt trước khi chạy" },
      { image: "03-timeline-1920x1080", title: "Timeline" },
    ],
  },
  rocketlisting: {
    hero: "08-products-wide-light",
    tour: [
      { image: "05-scrape-light", title: "Thu thập listing" },
      { image: "07-product-detail-light", title: "Chi tiết sản phẩm" },
      { image: "03-product-media-variants-dark", title: "Media & biến thể" },
    ],
  },
  rocketspy: {
    hero: "rs02-window-1280-vi",
    tour: [
      { image: "rs02-popup-vi", title: "Nghiên cứu trong popup" },
      { image: "rs02-book", title: "Phân tích sách" },
      { image: "rs02-mcp", title: "Kết nối MCP" },
    ],
  },
}

export function getProductShowcase(slug: string, images: ProductMediaImage[]) {
  const config = showcases[slug]
  const find = (id: string) => images.find(image => image.id === `${slug}/${id}`)
  return {
    hero: (config && find(config.hero)) || images[0],
    tour: config?.tour.flatMap(item => {
      const image = find(item.image)
      return image ? [{ image, title: item.title }] : []
    }) || [],
  }
}
