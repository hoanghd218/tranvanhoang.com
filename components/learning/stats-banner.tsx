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

export function StatsBanner({ stats, className }: StatsBannerProps) {
  return (
    <div className={cn("border-y border-border bg-card/50", className)}>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
          {stats.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              delay={index * 100}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-coral mb-1">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </div>
  )
}
