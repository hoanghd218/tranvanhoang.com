import { HeroSection } from "@/components/home/hero-section"
import { AudienceSection } from "@/components/home/audience-section"
import { TeachingSection } from "@/components/home/teaching-section"
import { TrustSection } from "@/components/home/trust-section"
import { CTASection } from "@/components/home/cta-section"

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <AudienceSection />
      <TeachingSection />
      <TrustSection />
      <CTASection />
    </div>
  )
}
