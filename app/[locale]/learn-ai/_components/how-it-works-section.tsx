"use client"

import { useTranslations } from "next-intl"
import { Map, BookOpen, Target, Award } from "lucide-react"
import { Container, Section } from "@/components/custom/container"
import { SectionHeader } from "@/components/custom/section-header"
import { StepCard } from "@/components/learning/step-card"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

export function HowItWorksSection() {
  const t = useTranslations("learnAi")

  const steps = [
    { number: 1, title: t("step1Title"), description: t("step1Desc"), icon: Map },
    { number: 2, title: t("step2Title"), description: t("step2Desc"), icon: BookOpen },
    { number: 3, title: t("step3Title"), description: t("step3Desc"), icon: Target },
    { number: 4, title: t("step4Title"), description: t("step4Desc"), icon: Award },
  ]

  return (
    <Section className="py-16 bg-card/30">
      <Container>
        <ScrollReveal>
          <SectionHeader
            title={t("howItWorksTitle")}
            description={t("howItWorksSubtitle")}
            centered
          />
        </ScrollReveal>
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150}>
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === steps.length - 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
