import type { CourseModule } from "@/lib/course-playbook/types"
import { collectFigures } from "./collect-figures"
import { buildRenderContext } from "./course-nav"
import { CourseShell } from "./course-shell"
import { LightboxProvider } from "./figure-lightbox"
import { ModuleFooterNav } from "./module-footer-nav"
import { ModuleHero } from "./module-hero"
import { ModuleToc } from "./module-toc"
import { SectionView } from "./section-view"

/**
 * Trang đầy đủ của một module: hero → (mục lục | các section) → chân chuyển module.
 * Mục lục lấy từ danh sách section (tocLabel ?? title). LightboxProvider bọc cả thân trang
 * để mọi hình của module chuyển trước/sau được với nhau.
 */
export function ModuleView({ module, locale }: { module: CourseModule; locale: string }) {
  const ctx = buildRenderContext(module.slug, locale)
  const toc = module.sections.map((section) => ({ id: section.id, label: section.tocLabel ?? section.title }))
  return (
    <CourseShell locale={locale}>
      <ModuleHero module={module} locale={locale} firstSectionId={toc[0]?.id} />
      <LightboxProvider figures={collectFigures(module)}>
        <div className="cpb-wrap cpb-layout">
          <ModuleToc items={toc} />
          <div className="cpb-content">
            {module.sections.map((section) => <SectionView key={section.id} section={section} ctx={ctx} />)}
          </div>
        </div>
      </LightboxProvider>
      <ModuleFooterNav slug={module.slug} locale={locale} />
    </CourseShell>
  )
}
