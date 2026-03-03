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
      {/* Hero Section */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              {t("heroTitle")} <GradientText>{t("heroTitleHighlight")}</GradientText>
            </h1>
            <p className="text-lg text-muted-foreground">{t("heroSubtitle")}</p>
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section className="py-8 bg-card/30">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full bg-coral text-white text-sm font-medium transition-colors hover:bg-coral-dark"
            >
              {t("allCategories")}
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={{ pathname: "/blog/[category]", params: { category: category.slug } }}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground transition-colors hover:border-coral hover:text-foreground"
              >
                {category.name}
                <span className="ml-1.5 text-xs opacity-60">({category.count})</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Posts Grid */}
      <Section className="py-12">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.slice(0, POSTS_PER_PAGE).map((post) => (
              <PostCard key={`${post.category}-${post.slug}`} post={post} />
            ))}
          </div>

          {allPosts.length > POSTS_PER_PAGE && (
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                {t("postsCount", { count: allPosts.length })}
              </p>
              <button className="px-6 py-2 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors">
                {t("loadMore")}
              </button>
            </div>
          )}

          {allPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">{t("noPosts")}</p>
              <p className="text-sm text-muted-foreground">{t("noPostsSubtitle")}</p>
            </div>
          )}
        </Container>
      </Section>

      {/* Popular Tags */}
      {popularTags.length > 0 && (
        <Section className="py-12 bg-card/30">
          <Container>
            <h2 className="text-xl font-semibold text-center mb-6">{t("popularTags")}</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {popularTags.map(([tag, count]) => (
                <NextLink
                  key={tag}
                  href={`/blog/tags/${tag}`}
                  className="px-3 py-1.5 rounded-lg bg-card border border-border text-sm text-muted-foreground hover:border-coral hover:text-foreground transition-colors"
                >
                  #{tag}
                  <span className="ml-1.5 text-xs opacity-60">({count})</span>
                </NextLink>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Newsletter CTA */}
      <Section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-coral/10 to-bronze/10 border border-border">
            <h2 className="text-2xl font-semibold mb-4">{t("newsletterTitle")}</h2>
            <p className="text-muted-foreground mb-6">{t("newsletterSubtitle")}</p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-coral"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors"
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
