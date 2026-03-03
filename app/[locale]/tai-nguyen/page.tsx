import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import {
  getAllResources,
  getResourcesByCategory,
  getResourceCategories,
} from "@/lib/resources"
import { ResourceCard, ViewToggle } from "@/components/resources"
import { GradientText } from "@/components/custom/gradient-text"
import { Container, Section } from "@/components/custom/container"
import { Button } from "@/components/ui/button"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "resources" })
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

export default async function TaiNguyenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "resources" })

  const allResources = getAllResources()
  const categories = getResourceCategories()
  const initialCategory = "all"
  const initialResources = getResourcesByCategory(initialCategory)

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

      {/* Category Filter & View Toggle */}
      <Section className="py-8 bg-card/30">
        <Container>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Link
                href="/tai-nguyen"
                className="px-4 py-2 rounded-full bg-coral text-white text-sm font-medium transition-colors hover:bg-coral-dark"
              >
                {t("allCategories")}
                <span className="ml-1.5 text-xs opacity-80">({allResources.length})</span>
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={{ pathname: "/tai-nguyen", query: { category: category.slug } } as any}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground transition-colors hover:border-coral hover:text-foreground"
                >
                  {category.name}
                  <span className="ml-1.5 text-xs opacity-60">({category.count})</span>
                </Link>
              ))}
            </div>

            {/* View Toggle */}
            <ViewToggle />
          </div>
        </Container>
      </Section>

      {/* Resources Grid */}
      <Section className="py-12">
        <Container>
          <div
            id="resources-grid"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {initialResources.map((resource) => (
              <ResourceCard
                key={`${resource.type}-${resource.title}`}
                resource={resource}
                viewMode="card"
              />
            ))}
          </div>

          {initialResources.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">{t("noResources")}</p>
              <p className="text-sm text-muted-foreground">{t("noResourcesSubtitle")}</p>
            </div>
          )}
        </Container>
      </Section>

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
              <Button
                type="submit"
                className="bg-coral text-white hover:bg-coral-dark"
              >
                {t("subscribe")}
              </Button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}
