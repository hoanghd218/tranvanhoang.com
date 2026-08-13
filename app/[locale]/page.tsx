import { HeroSection } from "@/components/home/hero-section"
import { AudienceSection } from "@/components/home/audience-section"
import { TeachingSection } from "@/components/home/teaching-section"
import { TrustSection } from "@/components/home/trust-section"
import { CTASection } from "@/components/home/cta-section"
import { HomepageAnalytics } from "@/components/home/homepage-analytics"
import { setRequestLocale } from "next-intl/server"

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="flex flex-col">
      <HomepageAnalytics />
      <HeroSection />
      <AudienceSection />
      <TeachingSection />
      <TrustSection locale={locale} />
      <CTASection />
    </div>
  )
}
