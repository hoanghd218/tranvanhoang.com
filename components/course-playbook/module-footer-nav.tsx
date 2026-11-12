import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { ModuleSummary } from "@/lib/course-playbook/types"
import { coursePath, getNeighbours } from "./course-nav"

function NeighbourLink({ module, locale, direction }: { module: ModuleSummary; locale: string; direction: "prev" | "next" }) {
  const label = direction === "prev" ? "Module trước" : "Module kế tiếp"
  const body = (
    <>
      <span className="cpb-lab">{label}</span>
      <b>{direction === "prev" && <ArrowLeft size={18} aria-hidden="true" />}Module {module.number} · {module.title}{direction === "next" && <ArrowRight size={18} aria-hidden="true" />}</b>
      {module.status === "soon" && <small>Đang soạn</small>}
    </>
  )
  return module.status === "ready"
    ? <Link className="cpb-foot-link" data-dir={direction} href={coursePath(locale, module.slug)}>{body}</Link>
    : <span className="cpb-foot-link" data-dir={direction} aria-disabled="true">{body}</span>
}

/** Chân module: module trước · về trang tổng 7 module · module sau (chưa soạn thì hiện mờ, không bấm được). */
export function ModuleFooterNav({ slug, locale }: { slug: string; locale: string }) {
  const { prev, next } = getNeighbours(slug)
  return (
    <nav className="cpb-foot-nav" aria-label="Chuyển module">
      <div className="cpb-wrap">
        {prev ? <NeighbourLink module={prev} locale={locale} direction="prev" /> : <span />}
        <Link className="cpb-btn cpb-btn-secondary" href={coursePath(locale)}>Về trang tổng 7 module</Link>
        {next ? <NeighbourLink module={next} locale={locale} direction="next" /> : <span />}
      </div>
    </nav>
  )
}
