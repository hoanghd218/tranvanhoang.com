import type { Metadata } from "next"
import { setRequestLocale } from "next-intl/server"
import { RoboShell } from "@/components/editorial/robo-shell"
import { FreedomBuildersCommunityLanding } from "@/components/community/freedom-builders-community-landing"
import { getCommunityContent } from "@/lib/freedom-builders-community-content"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const { meta } = getCommunityContent(locale)
  const url = `https://tranvanhoang.com${locale === "en" ? "" : `/${locale}`}/community`
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: url, languages: { en: "https://tranvanhoang.com/community", vi: "https://tranvanhoang.com/vi/community", "x-default": "https://tranvanhoang.com/community" } },
    // Page-level openGraph replaces the layout's object, so repeat image/siteName/locale here.
    openGraph: {
      title: meta.title, description: meta.description, url, type: "website", siteName: "Tony Hoang",
      locale: locale === "vi" ? "vi_VN" : "en_US",
      images: [{ url: "https://tranvanhoang.com/images/freedombuilder-courses.png", width: 640, height: 640, alt: meta.title }],
    },
    twitter: { title: meta.title, description: meta.description },
  }
}

export default async function CommunityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  return <RoboShell locale={locale}><FreedomBuildersCommunityLanding locale={locale} /></RoboShell>
}
