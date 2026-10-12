import Link from "next/link"
import { playbooks } from "@/lib/playbooks"
import { localizedPath } from "@/lib/editorial-content"

export const metadata = { title: "Playbook", description: "Sổ tay thực hành và quy trình của Tony Hoang." }
export default async function PlaybooksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <div className="editorial-container" style={{ paddingBlock: "40px" }}>
    <p className="eyebrow">Tony Hoang</p><h1>Playbook</h1>
    {playbooks.map(book => <article key={book.slug} style={{ marginBlock: "24px" }}><h2><Link href={localizedPath(`/playbooks/${book.slug}`, locale)}>{book.title} →</Link></h2><p>{book.description}</p><p>{book.pages.length} trang</p></article>)}
  </div>
}
