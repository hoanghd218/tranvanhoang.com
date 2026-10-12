import { notFound } from "next/navigation"
import { ImageBookViewer } from "@/components/image-book/image-book-viewer"
import { getPlaybook, playbooks } from "@/lib/playbooks"
import { localizedPath } from "@/lib/editorial-content"

export function generateStaticParams() { return playbooks.map(({ slug }) => ({ slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params
  const book = getPlaybook(slug)
  if (!book) notFound()
  return { title: book.title, description: book.description, alternates: { canonical: `https://www.tranvanhoang.com${localizedPath(`/playbooks/${slug}`, locale)}` }, openGraph: { title: book.title, description: book.description, images: [{ url: book.pages[0].src, width: book.pages[0].width, height: book.pages[0].height, alt: book.title }] } }
}
export default async function PlaybookPage({ params }: { params: Promise<{ slug: string; locale: string }> }) {
  const { slug, locale } = await params
  const book = getPlaybook(slug)
  if (!book) notFound()
  return <div style={{ minHeight: "100svh", background: "#f1f0ea" }}>
    <h1 className="sr-only">{book.title}</h1>
    <ImageBookViewer key={book.slug} title={book.title} pages={book.pages} homeHref={localizedPath("/", locale)} />
  </div>
}
