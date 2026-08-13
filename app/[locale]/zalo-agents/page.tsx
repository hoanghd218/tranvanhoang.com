import type { Metadata } from "next"
import { getTranslations, setRequestLocale } from "next-intl/server"
import { ZaloAgentsRedirectClient } from "@/components/zalo-agents/zalo-agents-redirect-client"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "zaloAgents" })

  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    robots: {
      index: false,
      follow: false,
    },
  }
}

export default async function ZaloAgentsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  return <ZaloAgentsRedirectClient />
}
