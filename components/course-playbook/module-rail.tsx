import Link from "next/link"
import { moduleSummaries } from "@/lib/course-playbook/course"
import { coursePath } from "./course-nav"

/**
 * Thanh 7 module trong hero: module đang xem được đánh dấu (aria-current="step"),
 * module đã soạn là liên kết, module chưa soạn là chữ thường kèm "Đang soạn".
 */
export function ModuleRail({ currentSlug, locale }: { currentSlug?: string; locale: string }) {
  return (
    <ol className="cpb-rail" aria-label="Các module của playbook">
      {moduleSummaries.map((module) => {
        const current = module.slug === currentSlug
        const body = (
          <>
            <i className="cpb-nd" aria-hidden="true" />
            <b>{module.number}</b>
            {module.title}
            {module.status === "soon" && <small>Đang soạn</small>}
          </>
        )
        return (
          <li key={module.slug} className={current ? "on" : undefined} aria-current={current ? "step" : undefined}>
            {module.status === "ready" && !current
              ? <Link className="cpb-rail-item" href={coursePath(locale, module.slug)}>{body}</Link>
              : <span className="cpb-rail-item">{body}</span>}
          </li>
        )
      })}
    </ol>
  )
}
