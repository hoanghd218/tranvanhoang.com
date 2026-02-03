import { Metadata } from "next"
import { HeroSection } from "./_components/hero-section"
import { StatsSection } from "./_components/stats-section"
import { LearningPathsSection } from "./_components/learning-paths-section"
import { HowItWorksSection } from "./_components/how-it-works-section"
import { TestimonialsSection } from "./_components/testimonials-section"
import { CTASection } from "./_components/cta-section"

export const metadata: Metadata = {
  title: "Học AI | Hoàng - AI Educator",
  description: "Các lộ trình học AI được thiết kế cho ngườii mới. Từ cơ bản đến ứng dụng thực tế.",
}

export default function LearnAIPage() {
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
