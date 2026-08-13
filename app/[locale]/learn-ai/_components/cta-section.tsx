"use client"

import { useTranslations } from "next-intl"
import { ArrowRight } from "lucide-react"
import { Container, Section } from "@/components/custom/container"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

/**
 * Closing statement — centring is allowed here. Flat void black, no purple block:
 * the accent is the one gradient word plus the button hairline.
 */
export function CTASection() {
  const t = useTranslations("learnAi")

  return (
    <Section className="py-20 md:py-28">
      <Container>
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="heading-md">
              {t("ctaTitle")} <span className="text-gradient">{t("ctaTitleHighlight")}</span>
            </h2>
            <p className="mt-5 text-text-secondary">{t("ctaSubtitle")}</p>
            <a
              href="#learning-paths"
              className="mt-9 inline-flex h-11 items-center gap-2 rounded-[var(--radius-pill)] border border-hairline-strong px-[var(--space-5)] font-medium text-text-primary transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent hover:bg-surface-overlay active:scale-[var(--press-scale)]"
            >
              {t("ctaButton")}
              <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
