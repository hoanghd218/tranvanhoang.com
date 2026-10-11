import { evaluate } from "@mdx-js/mdx"
import * as runtime from "react/jsx-runtime"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"
import type { ReactNode } from "react"
import type { MDXComponents } from "mdx/types"
import { useMDXComponents as baseComponents } from "@/mdx-components"
import { getAllPosts } from "@/lib/mdx"
import { getPathname } from "@/i18n/navigation"
import { routing, type Pathnames, type Locale } from "@/i18n/routing"

export type ReaderHeading = { id: string; title: string; level: number }
type StaticPathname = Exclude<Pathnames, `${string}[${string}`>
type ElementNode = { type: string; tagName?: string; value?: string; properties?: { id?: string }; children?: ElementNode[] }
function text(node: ElementNode): string { return node.value || node.children?.map(text).join("") || "" }

export async function renderArticle(source: string, locale: Locale) {
  const headings: ReaderHeading[] = []
  function collectHeadings() {
    return (tree: ElementNode) => {
      function visit(node: ElementNode) {
        if (node.tagName && /^h[1-3]$/.test(node.tagName) && node.properties?.id) {
          headings.push({ id: node.properties.id, title: text(node), level: Number(node.tagName[1]) })
        }
        node.children?.forEach(visit)
      }
      visit(tree)
    }
  }
  const { default: Content } = await evaluate(source, {
    ...runtime, development: false, remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug, collectHeadings],
  })
  const articlePaths = new Set(getAllPosts().map(post => `/blog/${post.category}/${post.slug}`))
  function resolveHref(href?: string) {
    if (!href || href === "#") return undefined
    if (href.startsWith("#")) return headings.some(heading => `#${heading.id}` === href) ? href : undefined
    if (/^(https?:\/\/|mailto:|tel:)/i.test(href)) return href
    if (!href.startsWith("/")) return undefined
    const url = new URL(href, "https://tranvanhoang.com")
    if (articlePaths.has(url.pathname)) return `${locale === "en" ? "/en" : ""}${href}`
    if (Object.hasOwn(routing.pathnames, url.pathname) && !url.pathname.includes("[")) {
      return `${getPathname({ locale, href: url.pathname as StaticPathname })}${url.search}${url.hash}`
    }
    return undefined
  }
  function ReaderLink({ href, children, className }: { href?: string; children?: ReactNode; className?: string }) {
    const resolved = resolveHref(href)
    return resolved ? <a href={resolved} className={className}>{children}</a> : <span className={className}>{children}</span>
  }
  const components: MDXComponents = baseComponents({
    h1: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h2: ({ children, ...props }) => <h2 {...props}>{children}</h2>,
    h3: ({ children, ...props }) => <h3 {...props}>{children}</h3>,
    h4: ({ children, ...props }) => <h4 {...props}>{children}</h4>,
    a: ReaderLink,
    Callout: ({ children, type = "info" }) => <aside className={`reader-callout reader-callout--${type}`}>{children}</aside>,
    Card: ({ children, title, href }) => <div className="reader-callout"><h4><ReaderLink href={href}>{title}</ReaderLink></h4>{children}</div>,
    Button: ({ children, href }) => <ReaderLink href={href} className="reader-action">{children}</ReaderLink>,
  })
  return { content: <Content components={components} />, headings }
}
