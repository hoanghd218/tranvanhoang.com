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
          <div className="mx-auto max-w-3xl">
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
                  <div className="mb-8 flex items-center gap-[var(--space-4)]">
                    <h2 className="heading-serif text-[length:var(--size-h3)] text-text-tertiary">
                      {year}
                    </h2>
                    <div aria-hidden="true" className="h-px flex-1 bg-hairline" />
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
              <div className="py-16">
                <p className="body-serif">
                  {t("emptyState")}
                  <br />
                  {t("emptyStateSubtitle")}
                </p>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Footer CTA — the one primary action on this screen */}
      <Section className="border-t border-hairline py-16">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-serif mb-[var(--space-4)] text-[length:var(--size-h2)] leading-[var(--leading-snug)] text-text-primary">
              {t("ctaTitle")}
            </h2>
            <p className="mx-auto mb-[var(--space-6)] max-w-[var(--max-width-prose)] text-[length:var(--size-body-l)] leading-[var(--leading-loose)] text-text-secondary">
              {t("ctaSubtitle")}
            </p>
            <Link
              href="/qua"
              className="inline-flex h-11 items-center justify-center rounded-[var(--radius-pill)] bg-rocket px-[var(--space-5)] font-medium text-stone transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:bg-rocket-hover hover:shadow-glow-sm active:scale-[var(--press-scale)] active:bg-rocket-press"
            >
              {t("ctaButton")}
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
