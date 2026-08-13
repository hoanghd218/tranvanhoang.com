import { getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { Link } from "@/i18n/navigation"
import NextLink from "next/link"
import { getPostBySlug, getRelatedPosts, getAllCategories } from "@/lib/mdx"
import { Container, Section } from "@/components/custom/container"
import { PostCard } from "@/components/blog/post-card"
import { ArticleSchema } from "@/components/seo/article-schema"
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema"

interface BlogPostPageProps {
  params: Promise<{
    locale: string
    category: string
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { locale, category, slug } = await params
  const t = await getTranslations({ locale, namespace: "blog" })
  const post = getPostBySlug(category, slug)

  if (!post) {
    return { title: t("postNotFound") }
  }

  const ogImage = post.metadata.featuredImage || "https://tranvanhoang.com/images/og-default.png"

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: "article",
      publishedTime: post.metadata.date,
      authors: [post.metadata.author || "Tony Hoang"],
      tags: post.metadata.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.metadata.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.description,
      images: [ogImage],
    },
    alternates: {
      canonical: `https://tranvanhoang.com/blog/${category}/${slug}`,
      languages: {
        vi: `https://tranvanhoang.com/blog/${category}/${slug}`,
        en: `https://tranvanhoang.com/en/blog/${category}/${slug}`,
      },
    },
  }
}

export async function generateStaticParams() {
  const categories = getAllCategories()
  const params: { category: string; slug: string }[] = []

  for (const category of categories) {
    const { getPostsByCategory } = await import("@/lib/mdx")
    const posts = getPostsByCategory(category.slug)
    for (const post of posts) {
      params.push({
        category: post.category,
        slug: post.slug,
      })
    }
  }

  return params
}

const SHARE_BUTTON_CLASS =
  "inline-flex h-11 items-center justify-center rounded-[var(--radius-sm)] border border-hairline-strong px-[var(--space-5)] text-[length:var(--size-body-s)] font-medium text-text-primary transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent hover:bg-surface-overlay"

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, category, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "blog" })
  const tCommon = await getTranslations({ locale, namespace: "common" })

  const post = getPostBySlug(category, slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(category, slug, 3)
  const categories = getAllCategories()
  const currentCategory = categories.find((c) => c.slug === category)

  const baseUrl = "https://tranvanhoang.com"

  return (
    <>
      {/* JSON-LD Structured Data */}
      <ArticleSchema
        title={post.metadata.title}
        description={post.metadata.description}
        datePublished={post.metadata.date}
        author={post.metadata.author || "Tony Hoang"}
        url={`${baseUrl}/blog/${category}/${slug}`}
        tags={post.metadata.tags}
        image={post.metadata.featuredImage}
      />
      <BreadcrumbSchema
        items={[
          { name: t("breadcrumbHome"), url: baseUrl },
          { name: t("breadcrumbBlog"), url: `${baseUrl}/blog` },
          ...(currentCategory
            ? [{ name: currentCategory.name, url: `${baseUrl}/blog/${category}` }]
            : []),
          { name: post.metadata.title, url: `${baseUrl}/blog/${category}/${slug}` },
        ]}
      />

      {/* Post header — the one 42° field on this screen */}
      <Section className="rk-field py-12 md:py-16">
        <Container>
          {/* Breadcrumb */}
          <nav className="mb-[var(--space-6)] flex items-center gap-[var(--space-2)] text-[length:var(--size-body-s)] text-text-tertiary">
            <Link
              href="/blog"
              className="transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-text-primary"
            >
              {t("breadcrumbBlog")}
            </Link>
            <span aria-hidden="true">/</span>
            {currentCategory && (
              <>
                <Link
                  href={{ pathname: "/blog/[category]", params: { category } }}
                  className="transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-text-primary"
                >
                  {currentCategory.name}
                </Link>
                <span aria-hidden="true">/</span>
              </>
            )}
            <span className="max-w-[200px] truncate text-text-secondary">{post.metadata.title}</span>
          </nav>

          {/* Title & meta */}
          <div className="max-w-3xl">
            <h1 className="heading-md mb-[var(--space-4)] text-text-primary">
              {post.metadata.title}
            </h1>
            <p className="mb-[var(--space-6)] max-w-[var(--max-width-prose)] text-[length:var(--size-body-l)] leading-[var(--leading-loose)] text-text-secondary">
              {post.metadata.description}
            </p>

            <div className="flex flex-wrap items-center gap-[var(--space-3)] text-[length:var(--size-body-s)] text-text-tertiary">
              <span>{post.metadata.date}</span>
              {post.readingTime && (
                <>
                  <span aria-hidden="true" className="h-1 w-1 rounded-[var(--radius-pill)] bg-hairline-strong" />
                  <span>{tCommon("readingTime", { minutes: post.readingTime })}</span>
                </>
              )}
              <span aria-hidden="true" className="h-1 w-1 rounded-[var(--radius-pill)] bg-hairline-strong" />
              <span>{post.metadata.author}</span>
            </div>

            {/* Tags */}
            {post.metadata.tags.length > 0 && (
              <div className="mt-[var(--space-5)] flex flex-wrap gap-[var(--space-2)]">
                {post.metadata.tags.map((tag) => (
                  <NextLink
                    key={tag}
                    href={`/blog/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--size-caption)] text-text-secondary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent hover:text-text-accent"
                  >
                    #{tag}
                  </NextLink>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Featured image — only when the post actually has one */}
      {post.metadata.featuredImage && (
        <Section className="py-4">
          <Container>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.metadata.featuredImage}
              alt=""
              className="mx-auto w-full max-w-4xl rounded-[var(--radius-lg)] border border-hairline object-cover"
            />
          </Container>
        </Section>
      )}

      {/* Content — 64ch reading column */}
      <Section className="py-8">
        <Container>
          <article className="mdx-content max-w-[var(--max-width-prose)]">
            <div className="whitespace-pre-wrap font-sans text-[length:var(--size-body-l)] leading-[var(--leading-loose)] text-text-secondary">
              {post.content}
            </div>
          </article>

          {/* Share */}
          <div className="mt-12 max-w-[var(--max-width-prose)] border-t border-hairline pt-8">
            <p className="mb-[var(--space-4)] text-[length:var(--size-body-s)] text-text-tertiary">
              {t("shareThis")}
            </p>
            <div className="flex flex-wrap gap-[var(--space-3)]">
              <button className={SHARE_BUTTON_CLASS}>Facebook</button>
              <button className={SHARE_BUTTON_CLASS}>Twitter</button>
              <button className={SHARE_BUTTON_CLASS}>LinkedIn</button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related posts — 3-up */}
      {relatedPosts.length > 0 && (
        <Section className="border-t border-hairline py-12">
          <Container>
            <h2 className="font-display mb-[var(--space-6)] text-[length:var(--size-h3)] font-bold text-text-primary">
              {t("relatedPosts")}
            </h2>
            <div className="grid gap-[var(--space-5)] md:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((relatedPost) => (
                <PostCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA — the one primary action on this screen */}
      <Section className="py-16">
        <Container>
          <div className="rk-card mx-auto max-w-2xl p-[var(--space-7)] text-center">
            <h2 className="font-display mb-[var(--space-4)] text-[length:var(--size-h2)] font-bold leading-[var(--leading-snug)] text-text-primary">
              {t("readyToLearnAi")}
            </h2>
            <p className="mx-auto mb-[var(--space-6)] max-w-[var(--max-width-prose)] text-[length:var(--size-body)] leading-[var(--leading-loose)] text-text-secondary">
              {t("readyToLearnAiDesc")}
            </p>
            <Link
              href="/qua"
              className="inline-flex h-11 items-center justify-center rounded-[var(--radius-pill)] bg-rocket px-[var(--space-5)] font-medium text-stone transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:bg-rocket-hover hover:shadow-glow-sm active:scale-[var(--press-scale)] active:bg-rocket-press"
            >
              {t("getFreeGift")}
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
