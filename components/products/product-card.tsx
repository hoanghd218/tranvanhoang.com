import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Blocks, AppWindow, Puzzle, Smartphone, Sparkles } from "lucide-react"
import { type Product, type ProductCategory, formatProductPrice, getLocalizedCategories } from "@/lib/products"
import { localizedPath } from "@/lib/editorial-content"

export const productIcons = { skill: Blocks, software: AppWindow, extension: Puzzle, mobile: Smartphone }
export function ProductVisual({ category, large = false, icon, cover, locale = "en" }: { category: ProductCategory; large?: boolean; icon?: string; cover?: string; locale?: string }) {
  const Icon = productIcons[category]
  if (cover) return <div className={`product-visual product-cover ${large ? "product-visual--large" : ""}`} aria-hidden="true">
    <Image src={cover} alt="" fill sizes={large ? "(max-width: 760px) calc(100vw - 48px), 560px" : "(max-width: 760px) calc(100vw - 48px), (max-width: 1100px) 45vw, 380px"} />
    {icon && <span className="product-cover-icon"><Image src={icon} alt="" width={32} height={32} /></span>}
  </div>
  return <div className={`product-visual product-visual--${category} ${large ? "product-visual--large" : ""}`} aria-hidden="true">
    <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
    <div className="visual-core">{icon ? <Image src={icon} alt="" width={large ? 80 : 56} height={large ? 80 : 56} /> : <Icon size={large ? 70 : 44} strokeWidth={1} />}</div>
    <span className="visual-spark"><Sparkles size={20} strokeWidth={1} /></span>
    <span className="visual-caption">{getLocalizedCategories(locale).find(item => item.id === category)?.name}</span>
  </div>
}
export function ProductCard({ product, locale = "en" }: { product: Product; locale?: string }) {
  return <article className="product-card">
    <Link href={localizedPath(`/products/${product.slug}`, locale)} className="product-card-link">
      <ProductVisual category={product.category} icon={product.icon} cover={product.cover} locale={locale} />
      <div className="product-card-copy"><div className="product-card-meta"><span className="eyebrow">{getLocalizedCategories(locale).find(item => item.id === product.category)?.name}</span><span className="product-price">{formatProductPrice(product, locale)}</span></div>
      <h3>{product.name}</h3><p>{product.description}</p><span className="product-card-action">{locale === "en" ? "Explore product" : "Khám phá sản phẩm"} <ArrowUpRight size={17} aria-hidden="true" /></span></div>
    </Link>
  </article>
}
