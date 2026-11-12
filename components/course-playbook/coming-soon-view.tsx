import type { ModuleSummary } from "@/lib/course-playbook/types"
import { BackToPlaybooks, LanguageNote } from "./course-chrome-links"
import { CourseShell } from "./course-shell"
import { ModuleFooterNav } from "./module-footer-nav"
import { ModuleRail } from "./module-rail"

/** Trang thân thiện cho module chưa soạn: nói rõ "Đang soạn", vẫn cho thấy câu hỏi, đầu ra và cổng của module. */
export function ComingSoonView({ summary, locale }: { summary: ModuleSummary; locale: string }) {
  return (
    <CourseShell locale={locale}>
      <section className="cpb-hero cpb-dark" aria-labelledby="cpb-hero-title">
        <div className="cpb-wrap">
          <div className="cpb-hero-top"><BackToPlaybooks locale={locale} /><LanguageNote locale={locale} /></div>
          <p className="cpb-kicker">Playbook thực hành · Module {summary.number} · {summary.title}</p>
          <h1 id="cpb-hero-title">Module {summary.number} — {summary.title} <span className="cpb-hl">đang soạn</span></h1>
          <p className="cpb-lead">Nội dung module này đang được biên soạn. Dưới đây là những gì module sẽ trả lời và tạo ra.</p>
          <ModuleRail currentSlug={summary.slug} locale={locale} />
        </div>
      </section>
      <div className="cpb-wrap cpb-soon">
        <ul className="cpb-cards" data-cols="3">
          <li className="cpb-card cpb-card-soft"><p className="cpb-card-t">Câu hỏi cốt lõi</p><p className="cpb-card-d">{summary.question}</p></li>
          <li className="cpb-card"><p className="cpb-card-t">Sản phẩm đầu ra</p><p className="cpb-card-d">{summary.output}</p></li>
          <li className="cpb-card"><p className="cpb-card-t">Cổng quyết định</p><p className="cpb-card-d">{summary.gate}</p></li>
        </ul>
      </div>
      <ModuleFooterNav slug={summary.slug} locale={locale} />
    </CourseShell>
  )
}
