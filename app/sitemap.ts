import { MetadataRoute } from "next"
import { products } from "@/lib/products"
import { getAllPosts } from "@/lib/mdx"
import { getAllLifeStories } from "@/lib/life-mdx"

const baseUrl = "https://tranvanhoang.com"
const locales = ["vi", "en"]
const defaultLocale = "vi"

/** Build full URL — default locale has no prefix */
function localizedUrl(path: string, locale: string): string {
  if (locale === defaultLocale) return `${baseUrl}${path}`
  const translated = path === "/tai-nguyen" ? "/resources" : path === "/qua" ? "/gifts" : path
  return `${baseUrl}/${locale}${translated}`
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
    { path: "/blog", lastModified: new Date("2026-03-16") },
    { path: "/tai-nguyen", lastModified: new Date("2026-01-15") },
    { path: "/qua", lastModified: new Date("2026-01-15") },
    { path: "/life", lastModified: new Date("2026-03-01") },
    { path: "/products", lastModified: new Date("2026-10-11") },
    { path: "/coloring-book-kdp", lastModified: new Date("2026-10-11") },
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

  const productRoutes = products.flatMap(product => bilingualEntries(`/products/${product.slug}`, new Date("2026-10-11")))
  return [...staticRoutes, ...productRoutes, ...blogRoutes, ...lifeRoutes]
}
