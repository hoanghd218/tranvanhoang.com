"use client"

import { useTranslations } from "next-intl"
import { Zap, Target, TrendingUp, Clock } from "lucide-react"

import { Link } from "@/i18n/navigation"
import { GradientText } from "@/components/custom/gradient-text"
import { Container, Section } from "@/components/custom/container"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

const pathIcons = [Zap, Target, TrendingUp]

type LearningPathData = {
  title: string
  slug: string
  description: string
  modules: string[]
  duration: string
}

function LearningPathCard({ path, index, keyContentLabel, viewDetailLabel }: {
  path: LearningPathData
  index: number
  keyContentLabel: string
  viewDetailLabel: string
}) {
  const Icon = pathIcons[index]

  return (
    <ScrollReveal delay={index * 150}>
      <div className="group relative overflow-hidden rounded-xl bg-card border border-border p-6 transition-all duration-300 hover:border-coral/50 cursor-pointer h-full shimmer-border card-tilt">
        <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center">
                <Icon className="w-6 h-6 text-coral" />
              </div>
              <h3 className="text-lg font-semibold">{path.title}</h3>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mb-4">{path.description}</p>

          <div className="space-y-2 mb-4">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              {keyContentLabel}
            </p>
            <ul className="space-y-1">
              {path.modules.map((module, i) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-coral/60" />
                  <span>{module}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-bronze/10 text-bronze">
              <Clock className="w-3 h-3" /> {path.duration}
            </span>
          </div>

          <Link
            href={`/learn-ai` as "/learn-ai"}
            className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold transition-all border-2 border-coral rounded-lg text-coral bg-transparent hover:bg-coral/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {viewDetailLabel}
          </Link>
        </div>
      </div>
    </ScrollReveal>
  )
}

export function TeachingSection() {
  const t = useTranslations("home")
  const paths = t.raw("teachingPaths") as LearningPathData[]

  return (
    <Section>
      <Container>
        <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-md mb-4">
            {t("teachingTitle")} <GradientText>{t("teachingTitleHighlight")}</GradientText>
          </h2>
          <p className="text-muted-foreground">
            {t("teachingSubtitle")}
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6">
          {paths.map((path, index) => (
            <LearningPathCard
              key={path.slug}
              path={path}
              index={index}
              keyContentLabel={t("teachingKeyContent")}
              viewDetailLabel={t("teachingViewDetail")}
            />
          ))}
        </div>

        <ScrollReveal delay={400} className="text-center mt-8">
          <Link
            href="/learn-ai"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("teachingViewAll")}
          </Link>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
