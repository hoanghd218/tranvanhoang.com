import { setRequestLocale } from "next-intl/server"
import { EditorialHome } from "@/components/editorial/home"

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  return <EditorialHome locale={locale} />
}
