"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { Brain, Megaphone, Briefcase, ArrowRight, Check } from "lucide-react"

import { ScrollReveal } from "@/components/custom/scroll-reveal"
import { Link } from "@/i18n/navigation"

const audienceIcons = [Brain, Megaphone, Briefcase]
const audiencePaths = [
  "/learn-ai/ai-for-beginners",
  "/learn-ai/ai-for-marketing",
  "/learn-ai/ai-for-work",
] as const

type AudienceCardData = {
  title: string
  painPoints: string[]
  benefits: string[]
  cta: string
}

function AudienceCard({ data, index, painPointsLabel, benefitsLabel }: {
  data: AudienceCardData
  index: number
  painPointsLabel: string
  benefitsLabel: string
}) {
  const Icon = audienceIcons[index]

  return (
    <ScrollReveal delay={index * 120}>
      <Link
        href={audiencePaths[index]}
        data-home-cta={`learning_path_${index + 1}`}
        data-home-destination={audiencePaths[index]}
        className="rk-card rk-card-interactive group flex h-full flex-col gap-[var(--space-5)] p-[var(--space-5)]"
      >
        <Icon className="size-6 text-rocket" strokeWidth={1.75} />

        <h3 className="font-display text-[length:var(--size-h4)] font-bold text-text-primary">
          {data.title}
        </h3>

        <div>
          <p className="eyebrow">{painPointsLabel}</p>
          <ul className="mt-[var(--space-3)] flex flex-col gap-[var(--space-2)]">
            {data.painPoints.map((point) => (
              <li
                key={point}
                className="flex items-start gap-[var(--space-3)] text-[length:var(--size-body-s)] text-text-secondary"
              >
                <span className="mt-2 size-1 shrink-0 rounded-full bg-hairline-strong" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <p className="eyebrow text-text-accent">{benefitsLabel}</p>
          <ul className="mt-[var(--space-3)] flex flex-col gap-[var(--space-2)]">
            {data.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-[var(--space-3)] text-[length:var(--size-body-s)] text-text-primary"
              >
                <Check className="mt-0.5 size-4 shrink-0 text-rocket" strokeWidth={1.75} />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <span className="inline-flex items-center gap-2 text-sm font-medium text-text-accent">
          {data.cta}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-0.5"
            strokeWidth={1.75}
          />
        </span>
      </Link>
    </ScrollReveal>
  )
}

export function AudienceSection() {
  const t = useTranslations("home")
  const cards = t.raw("audienceCards") as AudienceCardData[]

  return (
    <section className="section-spacing bg-surface">
      <div className="container-custom">
        <ScrollReveal className="mb-[var(--space-7)] max-w-2xl">
          <h2 className="heading-md text-text-primary">
            {t("audienceTitle")}{" "}
            <span className="text-gradient">{t("audienceTitleHighlight")}</span>
          </h2>
          <p className="mt-[var(--space-3)] text-[length:var(--size-body-l)] leading-[var(--leading-loose)] text-text-secondary">
            {t("audienceSubtitle")}
          </p>
        </ScrollReveal>

        {/* 3-up grid — never 5 */}
        <div className="grid gap-[var(--space-4)] md:grid-cols-3">
          {cards.map((card, index) => (
            <AudienceCard
              key={card.title}
              data={card}
              index={index}
              painPointsLabel={t("audiencePainPointsLabel")}
              benefitsLabel={t("audienceBenefitsLabel")}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
