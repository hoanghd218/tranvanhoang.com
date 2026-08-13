"use client"

import { useTranslations } from "next-intl"
import { LearningPathCards } from "@/components/learning/path-card"
import { Container, Section } from "@/components/custom/container"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

export function LearningPathsSection() {
  const t = useTranslations("learnAi")

  return (
    <Section id="learning-paths" className="py-16 md:py-24">
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">{t("statPaths")}</p>
            <h2 className="heading-md">{t("pathsTitle")}</h2>
            <p className="mt-4 text-text-secondary">{t("pathsSubtitle")}</p>
          </div>
        </ScrollReveal>
        <div className="mt-12">
          <LearningPathCards />
        </div>
      </Container>
    </Section>
  )
}
