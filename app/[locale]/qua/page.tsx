import { getTranslations, setRequestLocale } from "next-intl/server"
import { GiftClaimPageClient } from "@/components/gift/gift-claim-page-client"
import { getAllGifts } from "@/lib/gifts"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "giftClaim" })
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      type: "website",
    },
  }
}

export default async function QuaPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)

  const gifts = getAllGifts()

  return <GiftClaimPageClient gifts={gifts} />
}
