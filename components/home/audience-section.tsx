"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { Brain, Megaphone, Briefcase, Check } from "lucide-react"

import { GradientText } from "@/components/custom/gradient-text"
import { BrandCard } from "@/components/custom/brand-card"
import { Container, Section } from "@/components/custom/container"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

const audienceIcons = [Brain, Megaphone, Briefcase]

type AudienceCardData = {
  title: string
  painPoints: string[]
  benefits: string[]
}

function AudienceCard({ data, index, painPointsLabel, benefitsLabel }: {
  data: AudienceCardData
  index: number
  painPointsLabel: string
  benefitsLabel: string
}) {
  const Icon = audienceIcons[index]

  return (
    <ScrollReveal delay={index * 150}>
      <BrandCard
        hoverBorder
        padding="lg"
        className="h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-coral/5 shimmer-border card-tilt"
      >
        <div className="flex flex-col gap-6">
          <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center">
            <Icon className="w-7 h-7 text-coral" />
          </div>

          <h3 className="text-xl font-semibold">
            <GradientText>{data.title}</GradientText>
          </h3>

          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              {painPointsLabel}
            </p>
            <ul className="space-y-2">
              {data.painPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral/60 mt-1.5 shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 pt-2">
            <p className="text-sm font-medium text-bronze uppercase tracking-wider">
              {benefitsLabel}
            </p>
            <ul className="space-y-2">
              {data.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-3.5 h-3.5 text-bronze mt-0.5 shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </BrandCard>
    </ScrollReveal>
  )
}

export function AudienceSection() {
  const t = useTranslations("home")
  const cards = t.raw("audienceCards") as AudienceCardData[]

  return (
    <Section className="bg-card/30">
      <Container>
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-md mb-4">
            {t("audienceTitle")} <GradientText>{t("audienceTitleHighlight")}</GradientText>
          </h2>
          <p className="text-muted-foreground">
            {t("audienceSubtitle")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <AudienceCard
              key={index}
              data={card}
              index={index}
              painPointsLabel={t("audiencePainPointsLabel")}
              benefitsLabel={t("audienceBenefitsLabel")}
            />
          ))}
        </div>
      </Container>
    </Section>
  )
}
