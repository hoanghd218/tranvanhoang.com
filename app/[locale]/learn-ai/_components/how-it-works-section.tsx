"use client"

import { useTranslations } from "next-intl"
import { Map, BookOpen, Target, Award } from "lucide-react"
import { Container, Section } from "@/components/custom/container"
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
    <Section className="py-16 md:py-24">
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl">
            <h2 className="heading-md">{t("howItWorksTitle")}</h2>
            <p className="mt-4 text-text-secondary">{t("howItWorksSubtitle")}</p>
          </div>
        </ScrollReveal>

        {/* The trajectory: one continuous hairline above the step row */}
        <div className="mt-12 hidden h-px w-full bg-hairline md:block" />

        <div className="grid gap-10 md:grid-cols-4 md:gap-8 mt-10 md:mt-8">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150} className="h-full">
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
