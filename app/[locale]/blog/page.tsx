import { Suspense } from "react"
import { setRequestLocale } from "next-intl/server"
import { getAllPosts, getAllCategories } from "@/lib/mdx"
import { BlogExplorer } from "@/components/blog/blog-explorer"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return { title: locale === "en" ? "Articles & notes" : "Bài viết & ghi chép" }
}

export default async function BlogPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  const posts = getAllPosts().map(post => ({ ...post, content: "" }))
  return <div className="blog-page editorial-container">
    <header className="blog-intro"><p className="eyebrow">Tony Hoang / {locale === "en" ? "Journal" : "Ghi chép"}</p><h1>{locale === "en" ? "Articles & notes" : "Bài viết & ghi chép"}</h1></header>
    <Suspense fallback={<p>{locale === "en" ? "Loading articles…" : "Đang tải bài viết…"}</p>}><BlogExplorer posts={posts} categories={getAllCategories()} locale={locale} /></Suspense>
  </div>
}
