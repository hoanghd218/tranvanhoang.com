import Image from "next/image"
import { ZoomIn } from "lucide-react"
import type { LeafBlock } from "@/lib/course-playbook/types"
import { FigureZoomLink } from "./figure-lightbox"
import { InlineText } from "./inline-text"

/**
 * Hình infographic: ảnh WebP tối ưu sẵn nên dùng `unoptimized` (cùng quy ước với image-book và thư viện ảnh sản phẩm).
 * Bấm vào hình mở lightbox; chữ "Phóng to" luôn hiện để người đọc biết hình bấm được.
 */
export function FigureBlock({ block }: { block: Extract<LeafBlock, { type: "figure" }> }) {
  const { src, width, height, alt, caption } = block.figure
  return (
    <figure className="cpb-fig">
      <FigureZoomLink src={src} caption={caption}>
        <Image src={src} width={width} height={height} alt={alt} loading="lazy" unoptimized />
        <span className="cpb-zoom"><ZoomIn size={16} aria-hidden="true" />Phóng to</span>
      </FigureZoomLink>
      <figcaption><InlineText text={caption} /></figcaption>
    </figure>
  )
}
