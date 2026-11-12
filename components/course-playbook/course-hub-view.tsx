import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { courseMeta, moduleSummaries } from "@/lib/course-playbook/course"
import { BackToPlaybooks, LanguageNote } from "./course-chrome-links"
import { coursePath } from "./course-nav"
import { CourseShell } from "./course-shell"
import { Highlighted } from "./section-view"

/**
 * Trang tổng của khoá: hero (từ courseMeta) + 7 thẻ module.
 * Module đã soạn → cả thẻ là một liên kết; module chưa soạn → thẻ mờ nét đứt, chip "Đang soạn", không bấm được.
 * Số lượng "đã có / đang soạn" tính từ moduleSummaries, không gõ tay.
 */
export function CourseHubView({ locale }: { locale: string }) {
  const ready = moduleSummaries.filter((module) => module.status === "ready")
  const first = ready[0]
  return (
    <CourseShell locale={locale}>
      <section className="cpb-hero cpb-dark" aria-labelledby="cpb-hero-title">
        <div className="cpb-wrap">
          <div className="cpb-hero-top"><BackToPlaybooks locale={locale} /><LanguageNote locale={locale} /></div>
          <p className="cpb-kicker">Playbook thực hành · {moduleSummaries.length} module</p>
          <h1 id="cpb-hero-title"><Highlighted text={courseMeta.title} highlight="Business OS" /></h1>
          <p className="cpb-lead">{courseMeta.tagline}</p>
          <p className="cpb-lead cpb-lead-sub">{courseMeta.description}</p>
          {first && (
            <div className="cpb-hero-cta">
              <Link className="cpb-btn cpb-btn-primary" href={coursePath(locale, first.slug)}>Bắt đầu từ Module {first.number}<ArrowRight size={18} aria-hidden="true" /></Link>
            </div>
          )}
          <dl className="cpb-facts">
            <div><dt>Số module</dt><dd>{moduleSummaries.length}</dd></div>
            <div><dt>Đã có nội dung</dt><dd>{ready.length}</dd></div>
            <div><dt>Đang soạn</dt><dd>{moduleSummaries.length - ready.length}</dd></div>
          </dl>
        </div>
      </section>
      <section className="cpb-wrap cpb-hub" aria-labelledby="cpb-hub-title">
        <p className="cpb-kicker">Lộ trình</p>
        <h2 id="cpb-hub-title">Từng module, <span className="cpb-hl">một cổng quyết định</span></h2>
        <ol className="cpb-mods">
          {moduleSummaries.map((module) => (
            <li className="cpb-mod" key={module.slug} data-status={module.status}>
              <span className="cpb-mod-n" aria-hidden="true">{module.number}</span>
              <div className="cpb-mod-body">
                <h3>
                  {module.status === "ready"
                    ? <Link className="cpb-mod-link" href={coursePath(locale, module.slug)}><span className="cpb-sr">Module {module.number}: </span>{module.title}</Link>
                    : <><span className="cpb-sr">Module {module.number}: </span>{module.title}</>}
                </h3>
                <p className="cpb-mod-q">{module.question}</p>
                <dl className="cpb-mod-meta">
                  <div><dt>Đầu ra</dt><dd>{module.output}</dd></div>
                  <div><dt>Cổng</dt><dd>{module.gate}</dd></div>
                </dl>
              </div>
              {module.status === "ready"
                ? <span className="cpb-mod-go">Đọc module<ArrowRight size={18} aria-hidden="true" /></span>
                : <span className="cpb-chip cpb-chip-soon">Đang soạn</span>}
            </li>
          ))}
        </ol>
      </section>
    </CourseShell>
  )
}
