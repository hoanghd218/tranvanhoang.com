import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, Play } from "lucide-react"
import { products, productCategories, formatProductPrice } from "@/lib/products"
import { ProductVisual } from "@/components/products/product-card"
import { ProductGallery } from "@/components/products/product-gallery"
import { getProductMedia } from "@/lib/product-media"
import { getProductShowcase } from "@/lib/product-showcase"
import { ProductPreview, ProductTour } from "@/components/products/product-tour"
import { ExtensionPlans } from "@/components/products/extension-plans"
import { ThemeLink } from "@/components/editorial/primitives"
import { localizedPath } from "@/lib/editorial-content"

export function generateStaticParams() { return products.map(product => ({ slug: product.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = products.find(item => item.slug === slug)
  return { title: product?.name || "Sản phẩm không tồn tại", description: product?.description }
}
export default async function ProductPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const product = products.find(item => item.slug === slug)
  if (!product) notFound()
  const media = getProductMedia(slug)
  const showcase = getProductShowcase(slug, media?.images || [])
  return <div className="editorial-home product-detail editorial-container">
    <Link className="detail-back" href={localizedPath("/products", locale)}><ArrowLeft size={16} aria-hidden="true" />Tất cả sản phẩm</Link>
    <div className="product-detail-grid" id="product-overview"><div className="product-detail-copy"><div className="product-identity">{product.icon && <Image src={product.icon} width={40} height={40} alt="" />}<p className="eyebrow">{productCategories.find(item => item.id === product.category)?.name} · Tony Hoang</p></div><h1>{product.name}</h1><p className="product-description">{product.description}</p>{!product.extensionCode && <span className="detail-price">{formatProductPrice(product)}</span>}
      {product.extensionCode ? <div className="product-detail-actions"><ThemeLink variant="primary" href="#product-plans">Xem gói sử dụng</ThemeLink><ThemeLink href="#installation">Hướng dẫn cài đặt</ThemeLink>{media && <ThemeLink href="#product-gallery">Xem giao diện</ThemeLink>}</div> : product.status === "available" && product.action ? <ThemeLink variant="primary" href={localizedPath(product.action.href, locale)}>{product.action.label}</ThemeLink> : <p className="product-status">Thông tin phát hành sẽ được cập nhật.</p>}
      <ul className="product-feature-list">{product.features.map(feature => <li key={feature}><Check size={18} aria-hidden="true" />{feature}</li>)}</ul>
      {product.version && <p className="product-version">Chrome · Phiên bản {product.version}</p>}
    </div>{showcase.hero ? <ProductPreview name={product.name} image={showcase.hero} /> : <ProductVisual category={product.category} icon={product.icon} cover={product.cover} large />}</div>
    {product.extensionCode && <nav className="product-page-nav" aria-label="Nội dung sản phẩm"><a href="#product-overview">Tổng quan</a>{showcase.tour.length > 0 && <a href="#product-tour">Tính năng</a>}{media && <a href="#product-gallery">Thư viện ảnh</a>}<a href="#product-plans">Gói sử dụng</a><a href="#installation">Cài đặt</a></nav>}
    <section className="product-details-text"><h2>Về sản phẩm</h2><p>{product.details}</p>{product.videoUrl && <a className="theme-link theme-link--secondary" href={product.videoUrl}><Play size={17} aria-hidden="true" />Xem video hướng dẫn</a>}</section>
    <ProductTour name={product.name} items={showcase.tour} />
    {media?.images.length ? <ProductGallery productName={product.name} images={media.images} bundleUrl={media.bundleUrl} libraryUrl={media.libraryUrl} /> : product.screenshot && <figure className="product-screenshot"><Image src={product.screenshot} alt={`Giao diện và tính năng ${product.name}`} width={1280} height={800} sizes="(max-width: 760px) 100vw, 1000px" /><figcaption>Giao diện {product.name} · Ảnh từ bộ giới thiệu sản phẩm.</figcaption></figure>}
    {product.extensionCode && <ExtensionPlans code={product.extensionCode} />}
    {product.installation && <section className="product-installation" id="installation"><p className="eyebrow">Bắt đầu sử dụng</p><h2>Cài đặt trên Chrome.</h2><ol>{product.installation.map(step => <li key={step}>{step}</li>)}</ol>{product.releaseNote && <p className="release-note">{product.releaseNote}</p>}</section>}
  </div>
}
