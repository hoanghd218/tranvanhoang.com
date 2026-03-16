"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { Gift, Search, Sparkles } from "lucide-react"

import { Link } from "@/i18n/navigation"
import { GradientText } from "@/components/custom/gradient-text"
import { Container, Section } from "@/components/custom/container"
import { TypewriterText } from "@/components/custom/typewriter-text"
import { FloatingIcons } from "@/components/custom/floating-icons"

export function HeroSection() {
  const t = useTranslations("home")

  return (
    <Section className="min-h-[80vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-coral/5 to-transparent pointer-events-none" />
      <FloatingIcons />

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left max-w-2xl">
            <h1 className="heading-xl mb-6 animate-fade-in">
              {t("heroTitle")}{" "}
              <GradientText>
                <TypewriterText
                  text={t("heroTitleHighlight")}
                  speed={60}
                  delay={800}
                />
              </GradientText>{" "}
              {t("heroTitleEnd")}
            </h1>

            <p className="text-lg text-muted-foreground mb-8 animate-fade-in-delay-1">
              {t("heroDescription")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-delay-2">
              <Link
                href="/qua"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold transition-all h-12 px-8 bg-coral text-white hover:bg-coral-dark active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background btn-ripple animate-glow-pulse"
              >
                <Gift className="w-5 h-5" /> {t("heroCta")}
              </Link>

              <Link
                href="/learn-ai"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-base font-semibold transition-all h-12 px-8 border-2 border-coral bg-transparent text-coral hover:bg-coral/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <Search className="w-5 h-5" /> {t("heroCtaSecondary")}
              </Link>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in-delay-3">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-coral/20 to-bronze/20 animate-pulse-slow" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-coral/10 to-bronze/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-coral/30 to-bronze/30 flex items-center justify-center animate-glow-pulse">
                    <Sparkles className="w-10 h-10 text-coral" />
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {t("heroDecorativeText")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  )
}
