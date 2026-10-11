import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { getAllLifeStories } from "@/lib/life-mdx"
import { localizedPath } from "@/lib/editorial-content"

export const metadata = { title: "Hoạt động & hành trình", description: "Những ghi chép, trải nghiệm và hoạt động của Tony Hoang." }
export default async function ActivityPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const stories = getAllLifeStories()
  return <div className="editorial-home activity-page editorial-container"><header className="page-intro"><p className="eyebrow">Nhật ký cá nhân · Tony Hoang</p><h1>Hoạt động & hành trình.</h1><p>Những trải nghiệm, bài học và ghi chép ngoài công việc.</p></header><div className="activity-list">{stories.map(story => <article className="activity-row" key={story.slug}><time dateTime={story.metadata.date}>{new Intl.DateTimeFormat("vi-VN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(story.metadata.date))}</time><div><p className="eyebrow">{story.metadata.tags?.[0] || "Ghi chép"}</p><Link href={localizedPath(`/life/${story.slug}`, locale)}><h2>{story.metadata.title}</h2></Link><p>{story.metadata.description}</p></div><Link href={localizedPath(`/life/${story.slug}`, locale)} className="activity-arrow" aria-label={`Đọc ${story.metadata.title}`}><ArrowUpRight aria-hidden="true" /></Link></article>)}</div>{!stories.length && <p className="catalog-empty">Những ghi chép mới sẽ được cập nhật tại đây.</p>}</div>
}
