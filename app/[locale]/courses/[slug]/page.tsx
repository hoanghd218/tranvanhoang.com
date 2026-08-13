import type { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowDown, BookOpen, Check, Clock3, Gift, Languages } from "lucide-react"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { CourseVideoCard } from "@/components/courses/course-video-card"
import { Container, Section } from "@/components/custom/container"
import { BreadcrumbSchema } from "@/components/seo/breadcrumb-schema"
import { CourseSchema } from "@/components/seo/course-schema"
import { Link } from "@/i18n/navigation"
import { courses, getCourse } from "@/lib/courses"

const baseUrl = "https://tranvanhoang.com"

type CoursePageProps = { params: Promise<{ locale: string; slug: string }> }

const chipClass =
  "inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-3 py-1 text-xs text-text-secondary"

export function generateStaticParams() {
  return courses.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: CoursePageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const course = getCourse(slug)
  if (!course) notFound()
  const t = await getTranslations({ locale, namespace: `courses.${course.translationKey}` })
  const coursePath = `/courses/${course.slug}`
  const localizedPath = `${locale === "vi" ? "" : `/${locale}`}${coursePath}`
  const image = `${baseUrl}${course.cover}`
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `${baseUrl}${localizedPath}`,
      languages: { vi: `${baseUrl}${coursePath}`, en: `${baseUrl}/en${coursePath}`, "x-default": `${baseUrl}${coursePath}` },
    },
    openGraph: { title: t("metaTitle"), description: t("metaDescription"), type: "website", url: `${baseUrl}${localizedPath}`, images: [{ url: image, width: 1600, height: 900, alt: t("coverAlt") }] },
    twitter: { card: "summary_large_image", title: t("metaTitle"), description: t("metaDescription"), images: [image] },
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { locale, slug } = await params
  const course = getCourse(slug)
  if (!course) notFound()
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "courses" })
  const courseKey = course.translationKey
  const ct = (key: string) => t(`${courseKey}.${key}`)
  const coursePath = `/courses/${course.slug}`
  const localePrefix = locale === "vi" ? "" : `/${locale}`
  const localizedUrl = `${baseUrl}${localePrefix}${coursePath}`
  const outcomes = t.raw(`${course.translationKey}.outcomes`) as string[]
  const lessons = course.lessons.map((lesson, index) => ({
    ...lesson,
    title: t(`${course.translationKey}.lessons.${index}.title`),
    description: t(`${course.translationKey}.lessons.${index}.description`),
    topics: t.raw(`${course.translationKey}.lessons.${index}.topics`) as string[],
  }))

  return (
    <>
      <CourseSchema name={t(`${course.translationKey}.title`)} description={t(`${course.translationKey}.metaDescription`)} url={localizedUrl} language="vi" isFree lessons={lessons.map((lesson) => ({ name: lesson.title, description: lesson.description }))} />
      <BreadcrumbSchema items={[{ name: t("breadcrumbHome"), url: `${baseUrl}${localePrefix || "/"}` }, { name: t("catalog.eyebrow"), url: `${baseUrl}${localePrefix}/courses` }, { name: t(`${course.translationKey}.title`), url: localizedUrl }]} />

      {/* Hero — the one field on this route */}
      <Section className="rk-field py-12 md:py-20">
        <Container>
          <nav className="mb-8 flex items-center gap-2 text-sm text-text-tertiary" aria-label={t("breadcrumbLabel")}>
            <Link
              href="/courses"
              className="transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-text-primary"
            >
              {t("catalog.eyebrow")}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-text-primary" aria-current="page">{ct("title")}</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="rounded-[var(--radius-pill)] border border-hairline-accent bg-[var(--purple-a12)] px-3 py-1 text-xs font-medium text-text-accent">
                  {ct("free")}
                </span>
                <span className={chipClass}>{ct("level")}</span>
              </div>

              <h1 className="heading-xl">
                {ct("heroTitle")} <span className="text-gradient">{ct("heroHighlight")}</span>
              </h1>
              <p className="body-serif mt-6">{ct("description")}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                <span className={chipClass}><BookOpen size={16} strokeWidth={1.75} aria-hidden="true" /> {ct("lessonCount")}</span>
                <span className={chipClass}><Clock3 size={16} strokeWidth={1.75} aria-hidden="true" /> {ct("selfPaced")}</span>
                <span className={chipClass}><Languages size={16} strokeWidth={1.75} aria-hidden="true" /> {ct("language")}</span>
                <span className={chipClass}><Gift size={16} strokeWidth={1.75} aria-hidden="true" /> {ct("free")}</span>
              </div>

              <a
                href="#lessons"
                className="mt-8 inline-flex h-11 items-center gap-2 rounded-[var(--radius-pill)] bg-rocket px-[var(--space-5)] font-medium text-stone transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:bg-rocket-hover hover:shadow-glow-sm active:scale-[var(--press-scale)] active:bg-rocket-press"
              >
                {ct("startLearning")}
                <ArrowDown size={16} strokeWidth={1.75} aria-hidden="true" />
              </a>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-[var(--radius-lg)] border border-hairline bg-surface-card">
              <Image src={course.cover} alt={ct("coverAlt")} fill priority className="object-cover" sizes="(max-width: 1024px) 100vw, 55vw" />
            </div>
          </div>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="eyebrow mb-4">{ct("outcomesEyebrow")}</p>
              <h2 className="heading-md">{ct("outcomesTitle")}</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex gap-3 rounded-[var(--radius-md)] border border-hairline bg-surface-card p-4">
                  <Check size={20} strokeWidth={1.75} className="mt-0.5 shrink-0 text-status-positive" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-text-secondary">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Curriculum */}
      <Section id="lessons" className="py-16 md:py-24">
        <Container size="5xl">
          <div className="mb-10 max-w-[var(--max-width-prose)]">
            <p className="eyebrow mb-4">{ct("curriculumEyebrow")}</p>
            <h2 className="heading-md">{ct("curriculumTitle")}</h2>
            <p className="mt-4 text-text-secondary">{ct("curriculumDescription")}</p>
          </div>
          <div className="space-y-6">
            {lessons.map((lesson, index) => (
              <CourseVideoCard key={lesson.id} number={index + 1} title={lesson.title} description={lesson.description} topics={lesson.topics} embedUrl={lesson.embedUrl} shareUrl={lesson.shareUrl} available={lesson.available} watchLabel={ct("watchOnFathom")} unavailableLabel={ct("unavailableTitle")} unavailableDescription={ct("unavailableDescription")} unavailableLinkLabel={ct("unavailableLinkLabel")} workshopLabel={ct("workshopLabel")} />
            ))}
          </div>
        </Container>
      </Section>
    </>
  )
}
