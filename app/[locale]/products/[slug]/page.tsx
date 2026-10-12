import { RoboShell } from "@/components/editorial/robo-shell"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, Play } from "lucide-react"
import { products, getLocalizedProducts, getLocalizedCategories, formatProductPrice } from "@/lib/products"
import { ProductVisual } from "@/components/products/product-card"
import { ProductGallery } from "@/components/products/product-gallery"
import { getProductMedia } from "@/lib/product-media"
import { getProductShowcase } from "@/lib/product-showcase"
import { ProductPreview, ProductTour } from "@/components/products/product-tour"
import { ExtensionPlans } from "@/components/products/extension-plans"
import { ThemeLink } from "@/components/editorial/primitives"
import { localizedPath } from "@/lib/editorial-content"

export function generateStaticParams() { return products.map(product => ({ slug: product.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params
  const product = getLocalizedProducts(locale).find(item => item.slug === slug)
  return { title: product?.name || (locale === "en" ? "Product not found" : "Sản phẩm không tồn tại"), description: product?.description }
}
export default async function ProductPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const product = getLocalizedProducts(locale).find(item => item.slug === slug)
  if (!product) notFound()
  const english = locale === "en"
  const media = getProductMedia(slug)
  const showcase = getProductShowcase(slug, media?.images || [])
  return <RoboShell locale={locale}><div className="product-detail editorial-container">
    <Link className="detail-back" href={localizedPath("/products", locale)}><ArrowLeft size={16} aria-hidden="true" />{english ? "All products" : "Tất cả sản phẩm"}</Link>
    <div className="product-detail-grid" data-reveal id="product-overview"><div className="product-detail-copy"><div className="product-identity">{product.icon && <Image src={product.icon} width={40} height={40} alt="" />}<p className="eyebrow">{getLocalizedCategories(locale).find(item => item.id === product.category)?.name} · Tony Hoang</p></div><h1>{product.name}</h1><p className="product-description">{product.description}</p>{!product.extensionCode && <span className="detail-price">{formatProductPrice(product, locale)}</span>}
      {product.extensionCode ? <div className="product-detail-actions"><ThemeLink variant="primary" href="#product-plans">{english ? "View plans" : "Xem gói sử dụng"}</ThemeLink><ThemeLink href="#installation">{english ? "Installation guide" : "Hướng dẫn cài đặt"}</ThemeLink>{media && <ThemeLink href="#product-gallery">{english ? "View interface" : "Xem giao diện"}</ThemeLink>}</div> : product.status === "available" && product.action ? <ThemeLink variant="primary" href={localizedPath(product.action.href, locale)}>{product.action.label}</ThemeLink> : <p className="product-status">{english ? "Release information will be updated." : "Thông tin phát hành sẽ được cập nhật."}</p>}
      <ul className="product-feature-list">{product.features.map(feature => <li key={feature}><Check size={18} aria-hidden="true" />{feature}</li>)}</ul>
      {product.version && <p className="product-version">Chrome · {english ? "Version" : "Phiên bản"} {product.version}</p>}
    </div>{showcase.hero ? <ProductPreview locale={locale} name={product.name} image={showcase.hero} /> : <ProductVisual category={product.category} icon={product.icon} cover={product.cover} locale={locale} large />}</div>
    {product.extensionCode && <nav className="product-page-nav" aria-label={english ? "Product navigation" : "Nội dung sản phẩm"}><a href="#product-overview">{english ? "Overview" : "Tổng quan"}</a>{showcase.tour.length > 0 && <a href="#product-tour">{english ? "Features" : "Tính năng"}</a>}{media && <a href="#product-gallery">{english ? "Gallery" : "Thư viện ảnh"}</a>}<a href="#product-plans">{english ? "Plans" : "Gói sử dụng"}</a><a href="#installation">{english ? "Install" : "Cài đặt"}</a></nav>}
    <section className="product-details-text" data-reveal><h2>{english ? "About this product" : "Về sản phẩm"}</h2><p>{product.details}</p>{product.videoUrl && <a className="theme-link theme-link--secondary" href={product.videoUrl}><Play size={17} aria-hidden="true" />{english ? "Watch the tutorial" : "Xem video hướng dẫn"}</a>}</section>
    <ProductTour locale={locale} name={product.name} items={showcase.tour} />
    {media?.images.length ? <ProductGallery locale={locale} productName={product.name} images={media.images} bundleUrl={media.bundleUrl} libraryUrl={media.libraryUrl} /> : product.screenshot && <figure className="product-screenshot"><Image src={product.screenshot} alt={english ? `${product.name} interface and features` : `Giao diện và tính năng ${product.name}`} width={1280} height={800} sizes="(max-width: 760px) 100vw, 1000px" /><figcaption>{english ? `${product.name} interface · Product documentation screenshot.` : `Giao diện ${product.name} · Ảnh từ bộ giới thiệu sản phẩm.`}</figcaption></figure>}
    {product.extensionCode && <ExtensionPlans locale={locale} code={product.extensionCode} />}
    {product.installation && <section className="product-installation" data-reveal id="installation"><p className="eyebrow">{english ? "GET STARTED" : "BẮT ĐẦU SỬ DỤNG"}</p><h2>{english ? "Install on Chrome." : "Cài đặt trên Chrome."}</h2><ol>{product.installation.map(step => <li key={step}>{step}</li>)}</ol>{product.releaseNote && <p className="release-note">{product.releaseNote}</p>}</section>}
  </div></RoboShell>
}
