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
import { Input } from "@/components/ui/input"

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
      {/* Hero — carries the one 42° field on this screen */}
      <Section className="rk-field rk-field-soft">
        <Container>
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-[var(--space-5)]">
              {t("heroTitle")} <GradientText>{t("heroTitleHighlight")}</GradientText>
            </h1>
            <p className="body-serif">{t("heroSubtitle")}</p>
          </div>
        </Container>
      </Section>

      {/* Category Filter & View Toggle */}
      <Section padding="8" className="border-y border-hairline">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Category Pills — selected is a purple tint plus purple hairline */}
            <div className="flex flex-wrap gap-2">
              <Link href="/tai-nguyen" className={`${pillBase} border-hairline-accent bg-[var(--purple-a12)] text-text-accent`}>
                {t("allCategories")}
                <span className="ml-1.5 text-[length:var(--size-caption)] opacity-80">({allResources.length})</span>
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={{ pathname: "/tai-nguyen", query: { category: category.slug } }}
                  className={`${pillBase} border-hairline bg-surface-overlay text-text-secondary hover:border-hairline-accent hover:text-text-primary`}
                >
                  {category.name}
                  <span className="ml-1.5 text-[length:var(--size-caption)] opacity-70">({category.count})</span>
                </Link>
              ))}
            </div>

            {/* View Toggle */}
            <ViewToggle className="self-start sm:self-auto" />
          </div>
        </Container>
      </Section>

      {/* Resources Grid — 3-up, never 5 */}
      <Section padding="12">
        <Container>
          <div
            id="resources-grid"
            className="grid gap-[var(--space-5)] md:grid-cols-2 lg:grid-cols-3"
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
            <div className="py-[var(--space-9)]">
              <p className="mb-3 text-[length:var(--size-h3)] text-text-primary">{t("noResources")}</p>
              <p className="text-[length:var(--size-body-s)] text-text-secondary">
                {t("noResourcesSubtitle")}
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section padding="16">
        <Container>
          <div className="rk-card mx-auto max-w-2xl p-[var(--space-7)]">
            <h2 className="mb-3 text-[length:var(--size-h2)] font-bold">{t("newsletterTitle")}</h2>
            <p className="mb-[var(--space-5)] text-text-secondary">{t("newsletterSubtitle")}</p>
            <form className="flex flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder={t("emailPlaceholder")}
                className="flex-1"
                aria-label={t("emailPlaceholder")}
              />
              <Button type="submit" className="shrink-0">
                {t("subscribe")}
              </Button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}

/** Filter chip base — pill radius, 14px, hairline. */
const pillBase =
  "inline-flex items-center rounded-[var(--radius-pill)] border px-4 py-2 text-[length:var(--size-body-s)] font-medium transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)]"
