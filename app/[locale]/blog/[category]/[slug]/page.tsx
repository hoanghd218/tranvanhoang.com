import { getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { Link } from "@/i18n/navigation"
import { getPostBySlug, getRelatedPosts, getAllCategories, getAllPosts } from "@/lib/mdx"
import { renderArticle } from "@/lib/article-reader"
import type { Locale } from "@/i18n/routing"
import { PostCard } from "@/components/blog/post-card"
import { ArticleSchema } from "@/components/seo/article-schema"
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema"

interface BlogPostPageProps {
  params: Promise<{ locale: Locale; category: string; slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { locale, category, slug } = await params
  const post = getPostBySlug(category, slug)
  if (!post) return { title: "Tony Hoang" }
  const url = `https://tranvanhoang.com${locale === "vi" ? "/vi" : ""}/blog/${category}/${slug}`
  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title, description: post.metadata.description, type: "article",
      publishedTime: post.metadata.date, authors: [post.metadata.author || "Tony Hoang"], tags: post.metadata.tags,
    },
    alternates: { canonical: url, languages: {
      vi: `https://tranvanhoang.com/vi/blog/${category}/${slug}`,
      en: `https://tranvanhoang.com/blog/${category}/${slug}`,
    } },
  }
}

export function generateStaticParams() {
  return getAllPosts().map(post => ({ category: post.category, slug: post.slug }))
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, category, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "blog" })
  const post = getPostBySlug(category, slug)
  if (!post) notFound()
  const relatedPosts = getRelatedPosts(category, slug, 3)
  const currentCategory = getAllCategories().find(item => item.slug === category)
  const { content, headings } = await renderArticle(post.content, locale)
  const baseUrl = `https://tranvanhoang.com${locale === "vi" ? "/vi" : ""}`
  const categoryHref = `/blog?category=${encodeURIComponent(category)}` as const
  const date = new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "vi-VN", {
    day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
  }).format(new Date(post.metadata.date))

  return <div className="reader-page">
    <ArticleSchema title={post.metadata.title} description={post.metadata.description}
      datePublished={post.metadata.date} author={post.metadata.author || "Tony Hoang"}
      url={`${baseUrl}/blog/${category}/${slug}`} tags={post.metadata.tags} image={post.metadata.featuredImage} />
    <BreadcrumbSchema items={[
      { name: t("breadcrumbHome"), url: baseUrl },
      { name: t("breadcrumbBlog"), url: `${baseUrl}/blog` },
      ...(currentCategory ? [{ name: currentCategory.name, url: `${baseUrl}${categoryHref}` }] : []),
      { name: post.metadata.title, url: `${baseUrl}/blog/${category}/${slug}` },
    ]} />
    <div className="editorial-container">
      <nav className="reader-breadcrumb" aria-label={locale === "en" ? "Breadcrumb" : "Đường dẫn"}>
        <Link href="/blog">{t("breadcrumbBlog")}</Link><span aria-hidden="true">/</span>
        <Link href={{ pathname: "/blog", query: { category } }}>{currentCategory?.name || category}</Link>
      </nav>
      <header className="reader-header">
        <p className="eyebrow">{currentCategory?.name || category}</p>
        <h1>{post.metadata.title}</h1>
        <p className="reader-description">{post.metadata.description}</p>
        <div className="reader-meta"><time dateTime={post.metadata.date}>{date}</time><span>{post.readingTime}</span><span>{post.metadata.author}</span></div>
        <ul className="reader-tags" aria-label={locale === "en" ? "Topics" : "Chủ đề"}>{post.metadata.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
      </header>
      <div className="reader-layout">
        {headings.length > 0 && <aside className="reader-toc">
          <nav aria-label={locale === "en" ? "Table of contents" : "Mục lục"}>
            <h2>{locale === "en" ? "Contents" : "Mục lục"}</h2>
            <ol>{headings.map(heading => <li key={heading.id} className={heading.level === 3 ? "reader-toc-nested" : undefined}><a href={`#${heading.id}`}>{heading.title}</a></li>)}</ol>
          </nav>
        </aside>}
        <article className="reader-content" aria-label={post.metadata.title}>{content}</article>
      </div>
      <div className="reader-return"><Link href={{ pathname: "/blog", query: { category } }}>← {currentCategory?.name || t("breadcrumbBlog")}</Link></div>
      {relatedPosts.length > 0 && <section className="reader-related" aria-labelledby="related-title">
        <h2 id="related-title">{t("relatedPosts")}</h2>
        <div className="article-grid">{relatedPosts.map(related => <PostCard key={related.slug} post={related} />)}</div>
      </section>}
    </div>
  </div>
}
