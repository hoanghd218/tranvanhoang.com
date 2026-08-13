"use client"

import { useLocale, useTranslations } from "next-intl"
import { Gift, Check } from "lucide-react"

import { Link } from "@/i18n/navigation"

/**
 * Closing statement — the one homepage layout allowed to centre.
 * Flat void black, never a purple block.
 */
export function CTASection() {
  const t = useTranslations("home")
  const locale = useLocale()
  const features = t.raw("ctaFeatures") as string[]

  return (
    <section className="section-spacing bg-surface">
      <div className="container-custom">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Gift className="size-6 text-rocket" strokeWidth={1.75} />

          <h2 className="heading-lg mt-[var(--space-4)] text-text-primary">
            {t("ctaTitle")}{" "}
            <span className="text-gradient">{t("ctaTitleHighlight")}</span>{" "}
            {t("ctaTitleEnd")}
          </h2>

          <p className="mt-[var(--space-4)] max-w-[56ch] text-[length:var(--size-body-l)] leading-[var(--leading-loose)] text-text-secondary">
            {t("ctaSubtitle")}
          </p>

          <div className="mt-[var(--space-5)] flex flex-wrap justify-center gap-[var(--space-2)]">
            {features.map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-[var(--space-3)] py-1 text-[length:var(--size-caption)] text-text-secondary"
              >
                <Check className="size-4" strokeWidth={1.75} />
                {feature}
              </span>
            ))}
          </div>

          <Link
            href="/qua"
            locale={locale === "en" ? "vi" : undefined}
            data-home-cta="closing_resource"
            data-home-destination="qua"
            className="mt-[var(--space-6)] inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-pill)] bg-rocket px-[var(--space-5)] font-medium text-stone transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:bg-rocket-hover hover:shadow-glow-sm active:scale-[var(--press-scale)] active:bg-rocket-press"
          >
            {t("ctaButton")}
          </Link>

          <p className="mt-[var(--space-4)] text-[length:var(--size-caption)] text-text-tertiary">
            {t("ctaNote")}{locale === "en" ? ` ${t("resourceLanguageNote")}` : ""}
          </p>
        </div>
      </div>
    </section>
  )
}
