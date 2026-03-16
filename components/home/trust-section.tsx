"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { Award, Users, BookOpen, Star } from "lucide-react"

import { GradientText } from "@/components/custom/gradient-text"
import { Container, Section } from "@/components/custom/container"
import { ScrollReveal } from "@/components/custom/scroll-reveal"
import { AnimatedCounter } from "@/components/custom/animated-counter"

const statIcons = [Award, Users, BookOpen, Star]

type StatData = {
  value: string
  label: string
  description: string
}

function StatCard({ stat, index }: { stat: StatData; index: number }) {
  const Icon = statIcons[index]

  return (
    <ScrollReveal delay={index * 150} className="text-center">
      <div className="group cursor-pointer">
        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-coral/10 flex items-center justify-center icon-pop">
          <Icon className="w-8 h-8 text-coral transition-transform duration-300 group-hover:scale-110" />
        </div>
        <div className="text-4xl font-bold mb-2">
          <GradientText>
            <AnimatedCounter value={stat.value} />
          </GradientText>
        </div>
        <p className="font-semibold text-foreground mb-1">{stat.label}</p>
        <p className="text-sm text-muted-foreground">{stat.description}</p>
      </div>
    </ScrollReveal>
  )
}

export function TrustSection() {
  const t = useTranslations("home")
  const stats = t.raw("trustStats") as StatData[]

  return (
    <Section className="bg-card/50">
      <Container>
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-md mb-4">
            {t("trustTitle")} <GradientText>{t("trustTitleHighlight")}</GradientText>
          </h2>
          <p className="text-muted-foreground">
            {t("trustSubtitle")}
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

      </Container>
    </Section>
  )
}
