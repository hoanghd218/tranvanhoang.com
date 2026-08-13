"use client"

import { useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"
import { Container, Section } from "@/components/custom/container"

/**
 * Learn-AI hero — the single 42° Possibility Field on this page.
 * No other section on the route may use `.rk-field`.
 */
export function HeroSection() {
  const t = useTranslations("learnAi")

  return (
    <Section className="rk-field py-20 md:py-28">
      <Container>
        <div className="max-w-3xl animate-fade-in">
          <p className="eyebrow mb-5">{t("title")}</p>
          <h1 className="heading-xl">
            {t("heroTitle")} <span className="text-gradient">{t("heroTitleHighlight")}</span>{" "}
            {t("heroTitleEnd")}
          </h1>
          <p className="body-serif mt-6">{t("heroSubtitle")}</p>
          <a
            href="#learning-paths"
            className="mt-9 inline-flex h-11 items-center gap-2 rounded-[var(--radius-pill)] bg-rocket px-[var(--space-5)] font-medium text-stone transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:bg-rocket-hover hover:shadow-glow-sm active:scale-[var(--press-scale)] active:bg-rocket-press"
          >
            {t("heroCta")}
            <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </Section>
  )
}
