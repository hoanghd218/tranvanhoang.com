import { setRequestLocale } from "next-intl/server"
import { EditorialHome } from "@/components/editorial/home"
import { getAllPosts } from "@/lib/mdx"
import { getAllLifeStories } from "@/lib/life-mdx"

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  return <EditorialHome posts={getAllPosts().slice(0, 3)} stories={getAllLifeStories().slice(0, 3)} locale={locale} />
}
