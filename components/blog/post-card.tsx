"use client"

import Link from "next/link"
import { useLocale } from "next-intl"
import { ArrowUpRight, Brain, Compass, Layers3, PenLine } from "lucide-react"
import type { BlogPost } from "@/lib/mdx"

const icons = [Brain, Layers3, Compass, PenLine]
export function PostCard({ post, heading: Heading = "h2" }: { post: BlogPost; heading?: "h2" | "h3" }) {
  const locale = useLocale()
  const prefix = locale === "vi" ? "/vi" : ""
  const Icon = icons[Array.from(post.category).reduce((sum, char) => sum + char.charCodeAt(0), 0) % icons.length]
  const date = new Date(post.metadata.date)
  const readableDate = Number.isNaN(date.getTime()) ? post.metadata.date : new Intl.DateTimeFormat(locale === "en" ? "en-GB" : "vi-VN", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" }).format(date)
  return <article className="blog-post-card">
    <Link href={`${prefix}/blog/${post.category}/${post.slug}`} className="blog-post-link">
      <div className={`blog-post-visual blog-post-visual--${icons.indexOf(Icon)}`} aria-hidden="true"><span className="blog-orbit" /><span className="blog-orbit blog-orbit--second" /><Icon size={64} strokeWidth={1} /><ArrowUpRight className="blog-visual-arrow" size={24} strokeWidth={1.2} /></div>
      <div className="blog-post-copy"><p className="editorial-tag">{post.metadata.category}</p><Heading>{post.metadata.title}</Heading>{post.metadata.description && <p className="blog-post-description">{post.metadata.description}</p>}<div className="blog-post-meta"><time dateTime={post.metadata.date}>{readableDate}</time>{post.readingTime && <span>{locale === "en" ? post.readingTime.replace("phút", "min read") : post.readingTime}</span>}</div></div>
    </Link>
  </article>
}
