"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { ArrowRight, BookOpen } from "lucide-react"

import { Link } from "@/i18n/navigation"

/**
 * Homepage hero — the ONE screen element carrying the 42° Possibility Field.
 * No other homepage section may use `.rk-field`.
 */
export function HeroSection() {
  const t = useTranslations("home")

  return (
    <section className="rk-field section-spacing flex min-h-[80vh] items-center">
      <div className="container-custom w-full">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* Copy column — left aligned by default, sentence case */}
          <div className="max-w-2xl">
            <p className="eyebrow animate-fade-in">{t("heroDecorativeText")}</p>

            <h1 className="heading-xl mt-[var(--space-4)] animate-fade-in text-text-primary">
              {t("heroTitle")}{" "}
              <span className="text-gradient">{t("heroTitleHighlight")}</span>{" "}
              {t("heroTitleEnd")}
            </h1>

            <p className="animate-fade-in-delay-1 mt-[var(--space-5)] max-w-[52ch] text-[length:var(--size-body-l)] leading-[var(--leading-loose)] text-text-secondary">
              {t("heroDescription")}
            </p>

            <div className="animate-fade-in-delay-2 mt-[var(--space-7)] flex flex-col gap-[var(--space-3)] sm:flex-row sm:items-center">
              {/* Primary — the only purple fill on this screen */}
              <Link
                href="/courses"
                data-home-cta="hero_primary"
                data-home-destination="courses"
                className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-pill)] bg-rocket px-[var(--space-5)] font-medium text-stone transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:bg-rocket-hover hover:shadow-glow-sm active:scale-[var(--press-scale)] active:bg-rocket-press"
              >
                <ArrowRight className="size-5" strokeWidth={1.75} />
                {t("heroCta")}
              </Link>

              <Link
                href="/blog"
                data-home-cta="hero_secondary"
                data-home-destination="blog"
                className="inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-pill)] border border-hairline-strong px-[var(--space-5)] font-medium text-text-primary transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent hover:bg-surface-overlay active:scale-[var(--press-scale)]"
              >
                <BookOpen className="size-5" strokeWidth={1.75} />
                {t("heroCtaSecondary")}
              </Link>
            </div>
          </div>

          {/* Portrait — sits on the field, so a single hairline ring is enough */}
          <div className="animate-fade-in-delay-3 flex justify-center lg:justify-end">
            <div className="relative size-64 overflow-hidden rounded-full border border-hairline-strong sm:size-80 lg:size-96">
              <Image
                src="/hoang-profile.webp"
                alt="Tony Hoang"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
