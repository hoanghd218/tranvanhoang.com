import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { editorialContent as content, localizedPath } from "@/lib/editorial-content"
import { products, productCategories, formatProductPrice } from "@/lib/products"
import type { BlogPost } from "@/lib/mdx"
import type { LifeStory } from "@/lib/life-mdx"
import { ProductVisual, ProductCard, productIcons } from "@/components/products/product-card"
import { PostCard } from "@/components/blog/post-card"
import { Signature, ThemeLink } from "./primitives"

export function EditorialHome({ posts, stories, locale }: { posts: BlogPost[]; stories: LifeStory[]; locale: string }) {
  const path = (href: string) => localizedPath(href, locale)
  const featured = products.find(product => product.featured) || products[0]
  return <div className="editorial-home" id="home">
    <section className="hero-section architect-hero editorial-container" aria-labelledby="hero-title">
      <div className="hero-copy"><p className="eyebrow">{content.hero.eyebrow}</p>
        <h1 id="hero-title">{content.hero.title.map((line, i) => <span key={line} className={i === 2 ? "accent-heading" : ""}>{line}</span>)}</h1>
        <p className="hero-description">{content.hero.description}</p>
        <div className="hero-actions"><ThemeLink href={path("/products")} variant="primary">Khám phá sản phẩm</ThemeLink><ThemeLink href={path("/blog")}>Đọc bài viết</ThemeLink></div>
        <div className="hero-note"><span /><span className="eyebrow">{content.sections.heroNote}</span></div>
      </div>
      <figure className="bridge-artwork">
        <div className="bridge-image"><Image src={content.hero.artwork.src} alt={content.hero.artwork.alt} fill priority sizes="(max-width: 760px) calc(100vw - 48px), (max-width: 1100px) 52vw, 640px" /></div>
        <figcaption className="bridge-caption"><span>{content.hero.artwork.start}</span><span className="bridge-method">{content.hero.artwork.method}</span><span>{content.hero.artwork.destination}</span></figcaption>
      </figure>
    </section>
    <div className="category-strip"><nav className="editorial-container category-inner" aria-label="Loại sản phẩm"><span className="eyebrow category-label">{content.sections.categoryLabel}</span>{productCategories.map(category => {
      const Icon = productIcons[category.id]
      return <Link className="category-item" key={category.id} href={path(`/products?category=${category.id}`)}><Icon size={26} strokeWidth={1.2} aria-hidden="true" />{category.name}</Link>
    })}</nav></div>
    <section className="home-products editorial-container" aria-labelledby="products-title">
      <div className="section-heading"><div><p className="eyebrow">Từ bàn làm việc của tôi</p><h2 id="products-title">Sản phẩm & công cụ.</h2></div><ThemeLink href={path("/products")}>Tất cả sản phẩm</ThemeLink></div>
      {featured && <article className="home-featured-product"><Link href={path(`/products/${featured.slug}`)} aria-label={`Khám phá ${featured.name}`}><ProductVisual category={featured.category} icon={featured.icon} cover={featured.cover} large /></Link><div className="home-product-copy"><p className="eyebrow">{productCategories.find(item => item.id === featured.category)?.name} <span className="small-dot">·</span> {formatProductPrice(featured)}</p><h3>{featured.name}</h3><p>{featured.description}</p><ul>{featured.features.map(feature => <li key={feature}>{feature}</li>)}</ul><ThemeLink href={path(`/products/${featured.slug}`)} variant="primary">Khám phá sản phẩm</ThemeLink></div></article>}
      <div className="home-other-products">{products.filter(product => product.slug !== featured?.slug).map(product => <ProductCard key={product.slug} product={product} locale={locale} />)}</div>
    </section>
    {posts.length > 0 && <section className="home-writing" aria-labelledby="articles-title"><div className="editorial-container">
      <div className="section-heading"><div><p className="eyebrow">{content.sections.articlesEyebrow}</p><h2 id="articles-title">{content.sections.articlesTitle}</h2></div><ThemeLink href={path("/blog")}>{content.sections.allArticles}</ThemeLink></div>
      <div className="home-articles">{posts.slice(0, 3).map(post => <PostCard key={post.slug} post={post} heading="h3" />)}</div>
    </div></section>}
    <section className="home-activity editorial-container" aria-labelledby="activity-title"><div className="section-heading"><div><p className="eyebrow">Nhật ký cá nhân</p><h2 id="activity-title">Trên hành trình.</h2></div><ThemeLink href={path("/life")}>Tất cả hoạt động</ThemeLink></div>
      <div className="activity-list">{stories.slice(0, 3).map(story => <article className="activity-row" key={story.slug}><time dateTime={story.metadata.date}>{new Intl.DateTimeFormat("vi-VN", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(story.metadata.date))}</time><div><Link href={path(`/life/${story.slug}`)}><h3>{story.metadata.title}</h3></Link><p>{story.metadata.description}</p></div><Link href={path(`/life/${story.slug}`)} className="activity-arrow" aria-label={`Đọc ${story.metadata.title}`}><ArrowUpRight strokeWidth={1.2} aria-hidden="true" /></Link></article>)}</div>
    </section>
    <section className="home-about"><div className="about-section editorial-container" aria-labelledby="about-title"><div className="about-copy"><p className="eyebrow">{content.sections.aboutEyebrow}</p><h2 id="about-title">{content.sections.aboutTitle}</h2><p>{content.sections.aboutDescription}</p><Signature /><div><ThemeLink href={path("/about")}>Tìm hiểu thêm</ThemeLink></div></div><div className="portrait-frame"><Image src="/hoang-profile.webp" alt="Tony Hoang" fill sizes="(max-width: 760px) 100vw, 40vw" className="portrait-image" /></div></div></section>
  </div>
}
