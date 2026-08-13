import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import NextLink from "next/link"
import { getAllPosts, getAllCategories, getTagCounts } from "@/lib/mdx"
import { PostCard } from "@/components/blog/post-card"
import { GradientText } from "@/components/custom/gradient-text"
import { Container, Section } from "@/components/custom/container"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "blog" })
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      type: "website",
    },
  }
}

const POSTS_PER_PAGE = 9

const CHIP_BASE =
  "inline-flex min-h-11 items-center rounded-[var(--radius-pill)] border px-[var(--space-4)] py-[var(--space-2)] text-[length:var(--size-body-s)] font-medium transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)]"

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "blog" })

  const allPosts = getAllPosts()
  const categories = getAllCategories()
  const tagCounts = getTagCounts()
  const popularTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10)

  return (
    <>
      {/* Hero — the one 42° field on this screen */}
      <Section className="rk-field py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <h1 className="heading-lg mb-[var(--space-5)] text-text-primary">
              {t("heroTitle")} <GradientText>{t("heroTitleHighlight")}</GradientText>
            </h1>
            <p className="body-serif">{t("heroSubtitle")}</p>
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section className="border-y border-hairline py-[var(--space-6)]">
        <Container>
          <div className="flex flex-wrap gap-[var(--space-3)]">
            <Link
              href="/blog"
              aria-current="true"
              className={`${CHIP_BASE} border-hairline-accent bg-[var(--purple-a12)] text-text-accent`}
            >
              {t("allCategories")}
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={{ pathname: "/blog/[category]", params: { category: category.slug } }}
                className={`${CHIP_BASE} border-hairline bg-surface-overlay text-text-secondary hover:border-hairline-strong hover:text-text-primary`}
              >
                {category.name}
                <span className="ml-[var(--space-2)] text-[length:var(--size-caption)] text-text-tertiary">
                  ({category.count})
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Posts grid — 3-up, never 5 */}
      <Section className="py-12">
        <Container>
          <div className="grid gap-[var(--space-5)] md:grid-cols-2 lg:grid-cols-3">
            {allPosts.slice(0, POSTS_PER_PAGE).map((post, index) => (
              <PostCard
                key={`${post.category}-${post.slug}`}
                post={post}
                featured={index === 0}
              />
            ))}
          </div>

          {allPosts.length > POSTS_PER_PAGE && (
            <div className="mt-12 flex flex-col items-center gap-[var(--space-4)]">
              <p className="text-[length:var(--size-body-s)] text-text-tertiary">
                {t("postsCount", { count: allPosts.length })}
              </p>
              <button className="inline-flex h-11 items-center justify-center rounded-[var(--radius-sm)] border border-hairline-strong px-[var(--space-5)] font-medium text-text-primary transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent hover:bg-surface-overlay">
                {t("loadMore")}
              </button>
            </div>
          )}

          {allPosts.length === 0 && (
            <div className="py-16 text-center">
              <p className="mb-[var(--space-3)] text-[length:var(--size-h4)] text-text-primary">
                {t("noPosts")}
              </p>
              <p className="text-[length:var(--size-body-s)] text-text-tertiary">
                {t("noPostsSubtitle")}
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* Popular tags */}
      {popularTags.length > 0 && (
        <Section className="border-t border-hairline py-12">
          <Container>
            <h2 className="font-display mb-[var(--space-5)] text-[length:var(--size-h4)] font-bold text-text-primary">
              {t("popularTags")}
            </h2>
            <div className="flex flex-wrap gap-[var(--space-2)]">
              {popularTags.map(([tag, count]) => (
                <NextLink
                  key={tag}
                  href={`/blog/tags/${tag}`}
                  className="rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--size-caption)] text-text-secondary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent hover:text-text-primary"
                >
                  #{tag}
                  <span className="ml-[var(--space-2)] text-text-tertiary">({count})</span>
                </NextLink>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Newsletter CTA — the one primary action on this screen */}
      <Section className="py-16">
        <Container>
          <div className="rk-card mx-auto max-w-2xl p-[var(--space-7)] text-center">
            <h2 className="font-display mb-[var(--space-4)] text-[length:var(--size-h2)] font-bold leading-[var(--leading-snug)] text-text-primary">
              {t("newsletterTitle")}
            </h2>
            <p className="mx-auto mb-[var(--space-6)] max-w-[var(--max-width-prose)] text-[length:var(--size-body)] leading-[var(--leading-loose)] text-text-secondary">
              {t("newsletterSubtitle")}
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-[var(--space-3)] sm:flex-row">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="h-11 flex-1 rounded-[var(--radius-sm)] border border-hairline bg-surface-inset px-[var(--space-4)] text-text-primary placeholder:text-text-tertiary focus:border-hairline-accent focus:outline-none"
              />
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-[var(--radius-sm)] bg-rocket px-[var(--space-5)] font-medium text-stone transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:bg-rocket-hover hover:shadow-glow-sm active:scale-[var(--press-scale)] active:bg-rocket-press"
              >
                {t("subscribe")}
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}
