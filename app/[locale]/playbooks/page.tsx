import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { RoboShell } from "@/components/editorial/robo-shell"
import { coursePath } from "@/components/course-playbook/course-nav"
import { courseMeta, moduleSummaries } from "@/lib/course-playbook/course"
import { playbooks } from "@/lib/playbooks"
import { localizedPath } from "@/lib/editorial-content"
import "./ai-mobile-app/course-playbook.css"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return { title: locale === "en" ? "Books & Playbooks" : "Sách & Playbook", description: locale === "en" ? "Practical books and workflows by Tony Hoang. Book content is in Vietnamese." : "Sổ tay thực hành và quy trình của Tony Hoang." }
}

export default async function PlaybooksPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const en = locale === "en"
  const readyModules = moduleSummaries.filter(module => module.status === "ready").length
  return <RoboShell locale={locale}>
    <section className="rl-container rl-section" style={{ paddingTop: 170 }}>
      <div className="rl-section-head"><div><span className="rl-tag">{en ? "BOOKS & PLAYBOOKS" : "SÁCH & PLAYBOOK"}</span>
        <h1>{en ? "Read. Build. Make it yours." : "Đọc. Thực hành. Biến thành của bạn."}</h1>
        <p>{en ? "Practical guides for turning ideas into working systems." : "Sổ tay thực hành để biến ý tưởng thành hệ thống chạy được."}</p>
      </div></div>
      {playbooks.map(book => <article key={book.slug} className="rl-card rl-book-layout">
        <Link className="rl-book-cover" href={localizedPath(`/playbooks/${book.slug}`, locale)} aria-label={en ? "Read the REA workflow" : `Đọc ${book.title}`}>
          <Image src={book.pages[0].src} alt={book.pages[0].alt} width={book.pages[0].width} height={book.pages[0].height} unoptimized />
        </Link>
        <div className="rl-card-body"><span className="rl-tag">{en ? "VIETNAMESE BOOK" : "SÁCH TIẾNG VIỆT"}</span>
          <h2>{en ? "The REA workflow" : book.title}</h2>
          <p>{en ? "From a reference app to a working build — a practical guide in 6 steps and 10 pages." : book.description}</p>
          <p>{book.pages.length} {en ? "pages · Book content is in Vietnamese" : "trang · Nội dung sách bằng tiếng Việt"}</p>
          <Link className="rl-button" href={localizedPath(`/playbooks/${book.slug}`, locale)}>{en ? "Read the book" : "Đọc sách"}<ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </article>)}
      <article className="rl-card rl-book-layout" style={{ marginTop: 20 }}>
        <Link className="rl-book-cover" href={coursePath(locale)} aria-label={en ? "Open the AI Mobile App Business OS playbook" : `Mở playbook ${courseMeta.title}`}>
          <span className="cpb-cover" aria-hidden="true"><small>Playbook</small><b>AI Mobile App <span>Business OS</span></b><span className="cpb-cover-dots">{moduleSummaries.map(module => <i key={module.slug} data-on={module.status === "ready" ? "" : undefined} />)}</span></span>
        </Link>
        <div className="rl-card-body"><span className="rl-tag">{en ? "COURSE PLAYBOOK · VIETNAMESE" : "PLAYBOOK KHOÁ HỌC · TIẾNG VIỆT"}</span>
          <h2>{courseMeta.title}</h2>
          <p>{en ? "From market opportunity to the first paying customer — a hands-on playbook in 7 modules, built with AI." : courseMeta.tagline}</p>
          <p>{en ? `${readyModules} of ${moduleSummaries.length} modules available · Course content is in Vietnamese` : `${readyModules}/${moduleSummaries.length} module đã có · Nội dung khoá học bằng tiếng Việt`}</p>
          <Link className="rl-button" href={coursePath(locale)}>{en ? "Open the playbook" : "Mở playbook"}<ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
      </article>
    </section>
  </RoboShell>
}
