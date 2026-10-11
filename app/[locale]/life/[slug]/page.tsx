import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { getAllLifeStories, getLifeStoryBySlug } from "@/lib/life-mdx"
import { renderArticle } from "@/lib/article-reader"
import { localizedPath } from "@/lib/editorial-content"
import type { Locale } from "@/i18n/routing"

export function generateStaticParams() { return getAllLifeStories().map(story => ({ slug: story.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const story = getLifeStoryBySlug(slug)
  return { title: story?.metadata.title || "Không tìm thấy ghi chép", description: story?.metadata.description }
}
export default async function ActivityDetail({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  const story = getLifeStoryBySlug(slug)
  if (!story) notFound()
  const { content } = await renderArticle(story.content, locale as Locale)
  return <div className="reader-page editorial-container"><Link href={localizedPath("/life", locale)} className="detail-back"><ArrowLeft size={16} aria-hidden="true" />Hoạt động & hành trình</Link><header className="reader-header"><p className="eyebrow">Ghi chép cá nhân · Tony Hoang</p><h1>{story.metadata.title}</h1><p>{story.metadata.description}</p><time dateTime={story.metadata.date}>{new Intl.DateTimeFormat("vi-VN", { dateStyle: "long", timeZone: "UTC" }).format(new Date(story.metadata.date))}</time></header><article className="reader-content activity-reader">{content}</article><div className="activity-reader"><Link href={localizedPath("/life", locale)} className="theme-link">← Xem các ghi chép khác</Link></div></div>
}
