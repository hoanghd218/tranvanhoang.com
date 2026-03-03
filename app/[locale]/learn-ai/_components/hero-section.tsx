"use client"

import { useTranslations } from "next-intl"
import { GradientText } from "@/components/custom/gradient-text"
import { Container, Section } from "@/components/custom/container"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

export function HeroSection() {
  const t = useTranslations("learnAi")

  return (
    <Section className="py-16 md:py-24">
      <Container>
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6">
            {t("heroTitle")} <GradientText>{t("heroTitleHighlight")}</GradientText> {t("heroTitleEnd")}
          </h1>
          <p className="text-lg text-muted-foreground">{t("heroSubtitle")}</p>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
