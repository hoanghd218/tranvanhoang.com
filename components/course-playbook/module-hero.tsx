import type { CourseModule } from "@/lib/course-playbook/types"
import { BackToPlaybooks, LanguageNote } from "./course-chrome-links"
import { ModuleRail } from "./module-rail"
import { Highlighted } from "./section-view"

/**
 * Hero của trang module: nền tối, số module, tiêu đề lớn (cụm tô sáng), giới thiệu, câu hỏi cốt lõi,
 * dữ kiện (chỉ những gì có trong dữ liệu) + sản phẩm đầu ra + cổng quyết định, rồi thanh 7 module.
 */
export function ModuleHero({ module, locale, firstSectionId }: { module: CourseModule; locale: string; firstSectionId?: string }) {
  return (
    <section className="cpb-hero cpb-dark" aria-labelledby="cpb-hero-title">
      <div className="cpb-wrap">
        <div className="cpb-hero-top"><BackToPlaybooks locale={locale} /><LanguageNote locale={locale} /></div>
        <p className="cpb-kicker">Playbook thực hành · Module {module.number} · {module.title}</p>
        <h1 id="cpb-hero-title"><Highlighted text={module.headline} highlight={module.headlineHighlight} /></h1>
        <p className="cpb-lead">{module.intro}</p>
        <p className="cpb-core"><span className="cpb-lab">Câu hỏi cốt lõi</span>{module.coreQuestion}</p>
        {firstSectionId && (
          <div className="cpb-hero-cta"><a className="cpb-btn cpb-btn-primary" href={`#${firstSectionId}`}>Bắt đầu đọc</a></div>
        )}
        <dl className="cpb-facts">
          {module.facts.map((fact, i) => <div key={i}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}
          <div><dt>Sản phẩm đầu ra</dt><dd>{module.output}</dd></div>
          <div><dt>Cổng quyết định</dt><dd>{module.gate.code} — {module.gate.name}</dd></div>
        </dl>
        <ModuleRail currentSlug={module.slug} locale={locale} />
      </div>
    </section>
  )
}
