import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { Container, Section } from "@/components/custom/container"
import { LifeHero, TimelineNav, TimelineItem, QuoteHighlight } from "@/components/life"
import { getAllLifeStories, getAllYears, type LifeStory } from "@/lib/life-mdx"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "life" })
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  }
}

export default async function LifePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "life" })

  const stories = getAllLifeStories()
  const years = getAllYears()
  const currentYear = years[0] || "2025"

  // Group stories by year
  const storiesByYear = stories.reduce<Record<string, LifeStory[]>>((acc, story) => {
    const year = story.year
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(story)
    return acc
  }, {})

  return (
    <>
      {/* Hero Section */}
      <LifeHero
        subtitle={t("heroSubtitle")}
        title={t("heroTitle")}
        description={t("heroDescription")}
      />

      {/* Timeline Navigation */}
      {years.length > 0 && (
        <TimelineNav
          years={years}
          currentYear={currentYear}
        />
      )}

      {/* Stories by Year */}
      <Section className="py-8">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Quote Highlight */}
            <QuoteHighlight
              quote={t("pageQuote")}
              author={t("pageQuoteAuthor")}
              className="mb-16"
            />

            {/* Stories Timeline */}
            <div className="space-y-16">
              {years.map((year) => (
                <div key={year} className="relative">
                  {/* Year header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-life-sage/30 flex-1" />
                    <h2 className="heading-serif text-2xl text-life-sage">{year}</h2>
                    <div className="h-px bg-life-sage/30 flex-1" />
                  </div>

                  {/* Stories for this year */}
                  <div className="space-y-8">
                    {storiesByYear[year]?.map((story) => (
                      <TimelineItem
                        key={story.slug}
                        slug={story.slug}
                        title={story.metadata.title}
                        excerpt={story.metadata.description}
                        date={story.metadata.date}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {stories.length === 0 && (
              <div className="text-center py-16">
                <p className="body-serif text-muted-foreground">
                  {t("emptyState")}
                  <br />
                  {t("emptyStateSubtitle")}
                </p>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Footer CTA */}
      <Section className="py-16 bg-life-card/50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-serif text-2xl mb-4">{t("ctaTitle")}</h2>
            <p className="body-serif text-muted-foreground mb-6">{t("ctaSubtitle")}</p>
            <Link
              href="/free-gift"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-life-sage text-white font-medium hover:bg-life-sage-dark transition-colors"
            >
              <span>{t("ctaButton")}</span>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
