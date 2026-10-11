import Image from "next/image"
import { ExternalLink } from "lucide-react"
import type { ProductMediaImage } from "@/lib/product-media"

export function ProductPreview({ name, image }: { name: string; image: ProductMediaImage }) {
  return <figure className="product-preview">
    <a href="#product-gallery" className="product-preview-image" aria-label={`Xem thư viện giao diện ${name}`}>
      <Image src={image.src} alt={`Giao diện ${name}: ${image.title}. Dữ liệu demo.`} width={image.width} height={image.height} unoptimized priority />
    </a>
    <figcaption><span>{image.title}</span><span>Dữ liệu demo</span></figcaption>
  </figure>
}

export function ProductTour({ name, items }: { name: string; items: { image: ProductMediaImage; title: string }[] }) {
  if (!items.length) return null
  return <section id="product-tour" className="product-tour" aria-labelledby="product-tour-title">
    <div className="section-heading"><div><p className="eyebrow">Góc nhìn tính năng</p><h2 id="product-tour-title">Bên trong {name}.</h2></div><span className="product-gallery-demo">Giao diện thật · Dữ liệu demo</span></div>
    <div className="product-tour-grid">{items.map((item, index) => <figure className="product-tour-item" key={item.image.id}>
      <a href={item.image.original} target="_blank" rel="noopener noreferrer" className="product-tour-image" aria-label={`Mở ảnh gốc: ${item.title} (tab mới)`}>
        <Image src={item.image.src} alt={`${name}: ${item.title}. Dữ liệu demo.`} width={item.image.width} height={item.image.height} unoptimized loading="lazy" />
        <span className="product-tour-expand"><ExternalLink size={16} aria-hidden="true" /></span>
      </a>
      <figcaption><span className="product-tour-number" aria-hidden="true">0{index + 1}</span><h3>{item.title}</h3></figcaption>
    </figure>)}</div>
  </section>
}
