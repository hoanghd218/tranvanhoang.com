"use client"

import Image from "next/image"
import { useId, useRef, useState } from "react"
import { ArrowLeft, ArrowRight, Download, ExternalLink } from "lucide-react"
import type { ProductMediaImage } from "@/lib/product-media"

type ProductGalleryProps = {
  productName: string
  images: ProductMediaImage[]
  bundleUrl: string
  libraryUrl: string
}

export function ProductGallery({ productName, images, bundleUrl, libraryUrl }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0)
  const [group, setGroup] = useState("all")
  const imageId = useId()
  const filterId = useId()
  const thumbnails = useRef<(HTMLButtonElement | null)[]>([])
  const groups = Array.from(new Set(images.map(image => image.group)))
  const visible = group === "all" ? images : images.filter(image => image.group === group)
  const current = visible[selected] || visible[0]
  if (!current) return null

  function select(index: number) {
    setSelected(index)
    thumbnails.current[index]?.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" })
  }

  return <section className="product-gallery" id="product-gallery" aria-label={`Thư viện ảnh ${productName}`}>
    <header className="product-gallery-heading"><div><p className="eyebrow">Giao diện sản phẩm</p><h2>Khám phá {productName}.</h2></div><span className="product-gallery-demo">Dữ liệu demo</span></header>
    <div className="product-gallery-toolbar"><div><label htmlFor={filterId}>Nhóm ảnh</label><select id={filterId} value={group} onChange={event => { setGroup(event.target.value); setSelected(0) }}><option value="all">Tất cả ảnh ({images.length})</option>{groups.map(item => <option key={item} value={item}>{item}</option>)}</select></div><span role="status">{visible.length} ảnh</span></div>
    <figure className="product-gallery-figure">
      <div className="product-gallery-stage" id={imageId}>
        <Image key={current.id} src={current.src} alt={`${productName} — ${current.title}. Dữ liệu demo.`} width={current.width} height={current.height} unoptimized />
      </div>
      <figcaption className="product-gallery-caption"><span aria-live="polite" aria-atomic="true">{selected + 1} / {visible.length} · {current.title}</span><span>Ảnh minh họa sử dụng dữ liệu demo.</span></figcaption>
    </figure>
    <div className="product-gallery-controls"><button type="button" onClick={() => select(selected - 1)} disabled={selected === 0} aria-controls={imageId}><ArrowLeft size={18} aria-hidden="true" />Ảnh trước</button><button type="button" onClick={() => select(selected + 1)} disabled={selected === visible.length - 1} aria-controls={imageId}>Ảnh tiếp<ArrowRight size={18} aria-hidden="true" /></button></div>
    <div className="product-gallery-thumbnails" aria-label="Chọn ảnh sản phẩm">{visible.map((image, index) => <button key={image.id} type="button" ref={element => { thumbnails.current[index] = element }} onClick={() => select(index)} aria-pressed={index === selected} aria-controls={imageId} aria-label={`Ảnh ${index + 1}: ${image.title}`}><Image src={image.thumbnail} alt="" width={120} height={80} unoptimized loading="lazy" /><span>{index + 1}</span></button>)}</div>
    <div className="product-gallery-links"><a href={current.original} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} aria-hidden="true" />Mở ảnh gốc<span className="sr-only"> (tab mới)</span></a><a href={libraryUrl} target="_blank" rel="noopener noreferrer"><ExternalLink size={16} aria-hidden="true" />Thư viện ảnh<span className="sr-only"> (tab mới)</span></a><a href={bundleUrl} download><Download size={16} aria-hidden="true" />Tải ZIP ảnh tài liệu</a></div>
  </section>
}
