import Image from "next/image"
import { ExternalLink } from "lucide-react"
import type { ProductMediaImage } from "@/lib/product-media"

export function ProductPreview({ name, image, locale = "en" }: { name: string; image: ProductMediaImage; locale?: string }) {
  const english = locale === "en"
  return <figure className="product-preview">
    <a href="#product-gallery" className="product-preview-image" aria-label={english ? `View ${name} interface gallery` : `Xem thư viện giao diện ${name}`}>
      <Image src={image.src} alt={english ? `${name} interface. Demo data. Screenshot in original language.` : `Giao diện ${name}: ${image.title}. Dữ liệu demo.`} width={image.width} height={image.height} unoptimized priority />
    </a>
    <figcaption><span>{english ? `${name} interface` : image.title}</span><span>{english ? "Demo data · Original language" : "Dữ liệu demo"}</span></figcaption>
  </figure>
}

export function ProductTour({ name, items, locale = "en" }: { name: string; locale?: string; items: { image: ProductMediaImage; title: string }[] }) {
  const english = locale === "en"
  const titles: Record<string, string> = { "Storyboard & cảnh": "Storyboard & scenes", "Duyệt trước khi chạy": "Review before running", "Thu thập listing": "Collect listings", "Chi tiết sản phẩm": "Product details", "Media & biến thể": "Media & variations", "Nghiên cứu trong popup": "Research in the popup", "Phân tích sách": "Book analysis", "Kết nối MCP": "MCP connection" }
  if (!items.length) return null
  return <section id="product-tour" className="product-tour" aria-labelledby="product-tour-title">
    <div className="section-heading"><div><p className="eyebrow">{english ? "FEATURE TOUR" : "Góc nhìn tính năng"}</p><h2 id="product-tour-title">{english ? `Inside ${name}.` : `Bên trong ${name}.`}</h2></div><span className="product-gallery-demo">{english ? "Real interface · Demo data" : "Giao diện thật · Dữ liệu demo"}</span></div>
    <div className="product-tour-grid">{items.map((item, index) => <figure className="product-tour-item" key={item.image.id}>
      <a href={item.image.original} target="_blank" rel="noopener noreferrer" className="product-tour-image" aria-label={english ? `Open original: ${titles[item.title] || item.title} (new tab)` : `Mở ảnh gốc: ${item.title} (tab mới)`}>
        <Image src={item.image.src} alt={english ? `${name}: ${titles[item.title] || item.title}. Demo data. Screenshot in original language.` : `${name}: ${item.title}. Dữ liệu demo.`} width={item.image.width} height={item.image.height} unoptimized loading="lazy" />
        <span className="product-tour-expand"><ExternalLink size={16} aria-hidden="true" /></span>
      </a>
      <figcaption><span className="product-tour-number" aria-hidden="true">0{index + 1}</span><h3>{english ? titles[item.title] || item.title : item.title}</h3></figcaption>
    </figure>)}</div>
  </section>
}
