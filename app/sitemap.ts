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

export default function sitemap(): MetadataRoute.Sitemap {
  // Static routes with priorities
  const staticPages: { path: string; priority: number; changeFreq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1, changeFreq: "weekly" },
    { path: "/about", priority: 0.8, changeFreq: "monthly" },
    { path: "/learn-ai", priority: 0.9, changeFreq: "weekly" },
    { path: "/learn-ai/ai-for-beginners", priority: 0.7, changeFreq: "monthly" },
    { path: "/learn-ai/ai-for-marketing", priority: 0.7, changeFreq: "monthly" },
    { path: "/learn-ai/ai-for-work", priority: 0.7, changeFreq: "monthly" },
    { path: "/blog", priority: 0.8, changeFreq: "weekly" },
    { path: "/tai-nguyen", priority: 0.7, changeFreq: "monthly" },
    { path: "/qua", priority: 0.6, changeFreq: "monthly" },
    { path: "/life", priority: 0.7, changeFreq: "weekly" },
    { path: "/courses/ai-automation-bim", priority: 0.8, changeFreq: "monthly" },
  ]

  const staticRoutes: MetadataRoute.Sitemap = staticPages.map(({ path, priority, changeFreq }) => ({
    url: localizedUrl(path, defaultLocale),
    lastModified: new Date(),
    changeFrequency: changeFreq,
    priority,
    alternates: buildAlternates(path),
  }))

  // Blog posts
  const posts = getAllPosts()
  const blogRoutes: MetadataRoute.Sitemap = posts.map((post) => {
    const path = `/blog/${post.category}/${post.slug}`
    return {
      url: localizedUrl(path, defaultLocale),
      lastModified: new Date(post.metadata.date),
      changeFrequency: "weekly" as const,
      priority: 0.6,
      alternates: buildAlternates(path),
    }
  })

  // Life stories
  const stories = getAllLifeStories()
  const lifeRoutes: MetadataRoute.Sitemap = stories.map((story) => {
    const path = `/life/${story.slug}`
    return {
      url: localizedUrl(path, defaultLocale),
      lastModified: new Date(story.metadata.date),
      changeFrequency: "monthly" as const,
      priority: 0.5,
      alternates: buildAlternates(path),
    }
  })

  return [...staticRoutes, ...blogRoutes, ...lifeRoutes]
}
