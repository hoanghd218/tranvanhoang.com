"use client"

import { useMemo, useRef, type FormEvent } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Search, RotateCcw } from "lucide-react"
import type { BlogPost, CategoryInfo } from "@/lib/mdx"
import { PostCard } from "./post-card"

const normalize = (value: string) => value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D").toLowerCase()
export function BlogExplorer({ posts, categories, locale }: { posts: BlogPost[]; categories: CategoryInfo[]; locale: string }) {
  const params = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  const query = params.get("q") || ""
  const category = params.get("category") || ""
  const tag = params.get("tag") || ""
  const searchForm = useRef<HTMLFormElement>(null)
  const en = locale === "en"
  const tags = useMemo(() => [...new Set(posts.flatMap(post => post.metadata.tags))].sort((a, b) => a.localeCompare(b, locale)), [posts, locale])
  const filtered = useMemo(() => posts.filter(post => (!category || post.category === category) && (!tag || post.metadata.tags.includes(tag)) && normalize([post.metadata.title, post.metadata.description, post.metadata.category, ...post.metadata.tags].join(" ")).includes(normalize(query.trim()))), [posts, category, tag, query])
  function update(key: string, value: string) {
    const next = new URLSearchParams(params.toString())
    if (value) next.set(key, value)
    else next.delete(key)
    router.push(`${pathname}${next.size ? `?${next}` : ""}`, { scroll: false })
  }
  function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); update("q", String(new FormData(event.currentTarget).get("q") || "").trim()) }
  function reset() { searchForm.current?.reset(); router.push(pathname, { scroll: false }) }
  return <>
    <div className="blog-tools"><form ref={searchForm} className="blog-search" role="search" onSubmit={submit}><label htmlFor="blog-search">{en ? "Search articles" : "Tìm bài viết"}</label><div className="blog-search-field"><Search size={20} aria-hidden="true" /><input id="blog-search" name="q" type="search" key={query} defaultValue={query} placeholder={en ? "Title, topic, keyword…" : "Tiêu đề, chủ đề, từ khóa…"} /><button type="submit">{en ? "Search" : "Tìm kiếm"}</button></div></form>
    <fieldset className="blog-filter"><legend>{en ? "Categories" : "Chủ đề"}</legend><div className="blog-filter-items"><button type="button" aria-pressed={!category} onClick={() => update("category", "")}>{en ? "All" : "Tất cả"}</button>{categories.map(item => <button type="button" key={item.slug} aria-pressed={category === item.slug} onClick={() => update("category", item.slug)}>{item.name}</button>)}</div></fieldset>
    {tags.length > 0 && <fieldset className="blog-filter blog-tag-filter"><legend>{en ? "Tags" : "Thẻ bài viết"}</legend><div className="blog-filter-items">{tags.map(item => <button type="button" key={item} aria-pressed={tag === item} onClick={() => update("tag", tag === item ? "" : item)}>#{item}</button>)}</div></fieldset>}</div>
    <div className="blog-results-bar"><p role="status" aria-live="polite">{filtered.length} {en ? "articles" : "bài viết"}{query && <> · “{query}”</>}</p>{(query || category || tag) && <button className="blog-reset" type="button" onClick={reset}><RotateCcw size={15} aria-hidden="true" />{en ? "Reset filters" : "Xóa bộ lọc"}</button>}</div>
    {filtered.length ? <div className="blog-post-grid">{filtered.map(post => <PostCard key={`${post.category}/${post.slug}`} post={post} />)}</div> : <div className="blog-empty"><Search size={32} strokeWidth={1.2} aria-hidden="true" /><h2>{en ? "No matching articles" : "Chưa tìm thấy bài viết phù hợp"}</h2><p>{en ? "Try another keyword or clear your filters." : "Thử từ khóa khác hoặc xóa bộ lọc để xem tất cả bài viết."}</p><button type="button" className="theme-link theme-link--primary" onClick={reset}>{en ? "View all articles" : "Xem tất cả bài viết"}</button></div>}
  </>
}
