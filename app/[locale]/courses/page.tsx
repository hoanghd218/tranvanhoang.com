import type { Metadata } from "next"
import Image from "next/image"
import { ArrowRight, BookOpen, Clock3 } from "lucide-react"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { Container, Section } from "@/components/custom/container"
import { Link } from "@/i18n/navigation"
import { courses } from "@/lib/courses"

const baseUrl = "https://tranvanhoang.com"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "courses" })
  const path = `${locale === "vi" ? "" : `/${locale}`}/courses`
  return {
    title: t("catalog.metaTitle"),
    description: t("catalog.metaDescription"),
    alternates: {
      canonical: `${baseUrl}${path}`,
      languages: { vi: `${baseUrl}/courses`, en: `${baseUrl}/en/courses`, "x-default": `${baseUrl}/courses` },
    },
  }
}

export default async function CoursesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "courses" })

  return (
    <>
      {/* Hero — the one field on this route */}
      <Section className="rk-field py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="eyebrow mb-5">{t("catalog.eyebrow")}</p>
            <h1 className="heading-xl">
              {t("catalog.title")}{" "}
              <span className="text-gradient">{t("catalog.titleHighlight")}</span>
            </h1>
            <p className="body-serif mt-6">{t("catalog.subtitle")}</p>
          </div>
        </Container>
      </Section>

      <Section className="py-12 md:py-20">
        <Container>
          <div className="grid gap-6">
            {courses.map((course) => (
              <article key={course.slug} className="rk-card rk-card-interactive group overflow-hidden">
                <div className="grid lg:grid-cols-[1.08fr_0.92fr]">
                  <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[430px]">
                    <Image
                      src={course.cover}
                      alt={t(`${course.translationKey}.coverAlt`)}
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                    <span className="absolute left-5 top-5 rounded-[var(--radius-pill)] border border-hairline-accent bg-[var(--purple-a12)] px-3 py-1 text-xs font-medium text-text-accent backdrop-blur-[2px]">
                      {t(`${course.translationKey}.free`)}
                    </span>
                  </div>

                  <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                    <p className="eyebrow mb-4">{t(`${course.translationKey}.format`)}</p>
                    <h2 className="heading-md">{t(`${course.translationKey}.title`)}</h2>
                    <p className="mt-5 leading-relaxed text-text-secondary">
                      {t(`${course.translationKey}.shortDescription`)}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-3 py-1 text-xs text-text-secondary">
                        <BookOpen size={16} strokeWidth={1.75} aria-hidden="true" />
                        {t(`${course.translationKey}.lessonCount`)}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-3 py-1 text-xs text-text-secondary">
                        <Clock3 size={16} strokeWidth={1.75} aria-hidden="true" />
                        {t(`${course.translationKey}.selfPaced`)}
                      </span>
                    </div>

                    <Link
                      href={{ pathname: "/courses/[slug]", params: { slug: course.slug } }}
                      className="mt-8 inline-flex h-11 w-fit items-center gap-2 rounded-[var(--radius-pill)] bg-rocket px-[var(--space-5)] font-medium text-stone transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:bg-rocket-hover hover:shadow-glow-sm active:scale-[var(--press-scale)] active:bg-rocket-press"
                    >
                      {t("catalog.viewCourse")}
                      <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
