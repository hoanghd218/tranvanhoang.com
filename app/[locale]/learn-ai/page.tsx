import { getTranslations, setRequestLocale } from "next-intl/server"
import { HeroSection } from "./_components/hero-section"
import { StatsSection } from "./_components/stats-section"
import { LearningPathsSection } from "./_components/learning-paths-section"
import { HowItWorksSection } from "./_components/how-it-works-section"
import { TestimonialsSection } from "./_components/testimonials-section"
import { CTASection } from "./_components/cta-section"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "learnAi" })
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  }
}

export default async function LearnAIPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <>
      <HeroSection />
      <StatsSection />
      <LearningPathsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
