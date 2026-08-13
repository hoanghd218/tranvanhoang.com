import { MetadataRoute } from "next"
import { getAllPosts } from "@/lib/mdx"
import { getAllLifeStories } from "@/lib/life-mdx"

const baseUrl = "https://tranvanhoang.com"
const locales = ["vi", "en"]
const defaultLocale = "vi"

/** Build full URL — default locale has no prefix */
function localizedUrl(path: string, locale: string): string {
  if (locale === defaultLocale) return `${baseUrl}${path}`
  return `${baseUrl}/${locale}${path}`
}

/** Build alternates map for a given path */
function buildAlternates(path: string) {
  const languages: Record<string, string> = {}
  for (const locale of locales) {
    languages[locale] = localizedUrl(path, locale)
  }
  languages["x-default"] = localizedUrl(path, defaultLocale)
  return { languages }
}

/** Create entries for both locales of a given path */
function bilingualEntries(path: string, lastModified: Date): MetadataRoute.Sitemap {
  return locales.map((locale) => ({
    url: localizedUrl(path, locale),
    lastModified,
    alternates: buildAlternates(path),
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { path: "/", lastModified: new Date("2026-03-16") },
    { path: "/about", lastModified: new Date("2026-03-01") },
    { path: "/learn-ai", lastModified: new Date("2026-03-01") },
    { path: "/learn-ai/ai-for-beginners", lastModified: new Date("2026-02-01") },
    { path: "/learn-ai/ai-for-marketing", lastModified: new Date("2026-02-01") },
    { path: "/learn-ai/ai-for-work", lastModified: new Date("2026-02-01") },
    { path: "/courses", lastModified: new Date("2026-08-13") },
    { path: "/courses/vibe-coding-sale-page", lastModified: new Date("2026-08-13") },
    { path: "/blog", lastModified: new Date("2026-03-16") },
    { path: "/tai-nguyen", lastModified: new Date("2026-01-15") },
    { path: "/qua", lastModified: new Date("2026-01-15") },
    { path: "/life", lastModified: new Date("2026-03-01") },
  ]

  // Static routes — both vi and en versions
  const staticRoutes = staticPages.flatMap(({ path, lastModified }) =>
    bilingualEntries(path, lastModified)
  )

  // Blog posts — both vi and en versions
  const posts = getAllPosts()
  const blogRoutes = posts.flatMap((post) => {
    const path = `/blog/${post.category}/${post.slug}`
    return bilingualEntries(path, new Date(post.metadata.date))
  })

  // Life stories — both vi and en versions
  const stories = getAllLifeStories()
  const lifeRoutes = stories.flatMap((story) => {
    const path = `/life/${story.slug}`
    return bilingualEntries(path, new Date(story.metadata.date))
  })

  return [...staticRoutes, ...blogRoutes, ...lifeRoutes]
}
