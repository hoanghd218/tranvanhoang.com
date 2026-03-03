"use client"

import { useTranslations } from "next-intl"
import { LearningPathCards } from "@/components/learning/path-card"
import { Container, Section } from "@/components/custom/container"
import { SectionHeader } from "@/components/custom/section-header"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

export function LearningPathsSection() {
  const t = useTranslations("learnAi")

  return (
    <Section id="learning-paths" className="py-12">
      <Container>
        <ScrollReveal>
          <SectionHeader
            title={t("pathsTitle")}
            description={t("pathsSubtitle")}
            centered
          />
        </ScrollReveal>
        <div className="mt-12">
          <LearningPathCards />
        </div>
      </Container>
    </Section>
  )
}
