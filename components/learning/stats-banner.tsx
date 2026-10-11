"use client"

import { Container } from "@/components/custom/container"
import { AnimatedCounter } from "@/components/custom/animated-counter"
import { ScrollReveal } from "@/components/custom/scroll-reveal"
import { cn } from "@/lib/utils"

interface Stat {
  value: string
  label: string
}

interface StatsBannerProps {
  stats: Stat[]
  className?: string
}

/**
 * StatCard row — carbon cards on flat void black.
 * Label is an eyebrow, value sits in the display face at --size-display-l.
 */
export function StatsBanner({ stats, className }: StatsBannerProps) {
  return (
    <div className={cn("py-12 md:py-16", className)}>
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100} className="h-full">
              <div className="rk-card flex h-full flex-col gap-3 p-6">
                <p className="eyebrow">{stat.label}</p>
                <p className="font-display text-4xl leading-none font-bold text-text-primary md:text-[length:var(--size-display-l)]">
                  <AnimatedCounter value={stat.value} />
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </div>
  )
}
