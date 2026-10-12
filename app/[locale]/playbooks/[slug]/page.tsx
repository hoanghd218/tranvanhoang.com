import Link from "next/link"
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
  return <div className="editorial-container" style={{ paddingBlock: "32px" }}>
    <Link href={localizedPath("/playbooks", locale)}>← Tất cả playbook</Link>
    <p className="eyebrow" style={{ marginTop: "24px" }}>Tony Hoang · Playbook</p>
    <h1>{book.title}</h1><p style={{ marginBottom: "24px" }}>{book.description}</p>
    <ImageBookViewer key={book.slug} title={book.title} pages={book.pages} />
    {book.slug === "rea" && <p style={{ marginTop: "24px", fontSize: "14px" }}>Hệ thống hoá từ <a href="https://www.youtube.com/watch?v=FnB9tHKBJXQ" target="_blank" rel="noopener noreferrer">video của Eric Tech</a>. Ví dụ và bảng kiểm có phần AI đề xuất; bản nhỏ chạy được chưa đồng nghĩa sản phẩm sẵn sàng phát hành.</p>}
  </div>
}
