"use client"

import Image from "next/image"
import { useLocale, useTranslations } from "next-intl"
import { ArrowRight, BookOpen, Check, Clock3 } from "lucide-react"

import { Link } from "@/i18n/navigation"
import { ScrollReveal } from "@/components/custom/scroll-reveal"
import { vibeCodingCourse } from "@/lib/courses"

export function TeachingSection() {
  const t = useTranslations("home")
  const locale = useLocale()
  const course = useTranslations("courses.course")
  const outcomes = course.raw("outcomes") as string[]

  return (
    <section className="section-spacing border-y border-hairline bg-surface">
      <div className="container-custom">
        <ScrollReveal className="mb-[var(--space-7)] max-w-2xl">
          <p className="eyebrow mb-[var(--space-3)]">{t("teachingEyebrow")}</p>
          <h2 className="heading-md text-text-primary">
            {t("teachingTitle")} {" "}
            <span className="text-gradient">{t("teachingTitleHighlight")}</span>
          </h2>
          <p className="mt-[var(--space-3)] text-[length:var(--size-body-l)] leading-[var(--leading-loose)] text-text-secondary">
            {t("teachingSubtitle")}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <article className="rk-card rk-card-interactive group overflow-hidden">
            <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
              <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
                <Image
                  src={vibeCodingCourse.cover}
                  alt={t("teachingCoverAlt")}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </div>

              <div className="flex flex-col justify-center p-[var(--space-6)] md:p-[var(--space-8)]">
                <p className="eyebrow mb-[var(--space-3)] text-text-accent">{course("format")}</p>
                <h3 className="heading-md text-text-primary">{course("title")}</h3>
                <p className="mt-[var(--space-4)] leading-[var(--leading-loose)] text-text-secondary">
                  {t("teachingDescription")}
                </p>

                <ul className="mt-[var(--space-5)] space-y-[var(--space-3)]">
                  {outcomes.slice(0, 2).map((outcome) => (
                    <li key={outcome} className="flex items-start gap-3 text-sm text-text-primary">
                      <Check className="mt-0.5 size-4 shrink-0 text-rocket" strokeWidth={1.75} />
                      {outcome}
                    </li>
                  ))}
                </ul>

                <div className="mt-[var(--space-5)] flex flex-wrap gap-2 text-xs text-text-secondary">
                  <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-hairline px-3 py-1">
                    <BookOpen className="size-4" strokeWidth={1.75} /> {t("teachingAvailability")}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-[var(--radius-pill)] border border-hairline px-3 py-1">
                    <Clock3 className="size-4" strokeWidth={1.75} /> {course("selfPaced")}
                  </span>
                </div>

                <Link
                  href={{ pathname: "/courses/[slug]", params: { slug: vibeCodingCourse.slug } }}
                  locale={locale === "en" ? "vi" : undefined}
                  data-home-cta="featured_course"
                  data-home-destination="vibe-coding-sale-page"
                  className="mt-[var(--space-6)] inline-flex h-11 w-fit items-center gap-2 rounded-[var(--radius-pill)] bg-rocket px-[var(--space-5)] font-medium text-stone transition-all hover:bg-rocket-hover hover:shadow-glow-sm"
                >
                  {t("teachingCta")}
                  <ArrowRight className="size-4" strokeWidth={1.75} />
                </Link>
                {locale === "en" && (
                  <p className="mt-[var(--space-3)] text-xs text-text-tertiary">
                    {t("contentLanguageNote")}
                  </p>
                )}
              </div>
            </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  )
}
