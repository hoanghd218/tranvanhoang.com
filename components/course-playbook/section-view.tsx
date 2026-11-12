import type { ReactNode } from "react"
import type { Section } from "@/lib/course-playbook/types"
import { AccordionBlock } from "./accordion-block"
import type { RenderContext } from "./course-nav"
import { InlineText } from "./inline-text"
import { LeafBlockView } from "./leaf-block-view"

/** Tô tím cụm `highlight` (nếu là chuỗi con của chữ). Không khớp thì hiện chữ thường, không báo lỗi. */
export function Highlighted({ text, highlight }: { text: string; highlight?: string }): ReactNode {
  const at = highlight ? text.indexOf(highlight) : -1
  if (!highlight || at < 0) return text
  return (
    <>
      {text.slice(0, at)}
      <span className="cpb-hl">{highlight}</span>
      {text.slice(at + highlight.length)}
    </>
  )
}

/** Một section: nhãn nhỏ, tiêu đề (có cụm tô tím), câu dẫn nhập, rồi các khối theo thứ tự. */
export function SectionView({ section, ctx }: { section: Section; ctx: RenderContext }) {
  const headingId = `${section.id}-heading`
  return (
    <section id={section.id} className="cpb-section" aria-labelledby={headingId}>
      {section.kicker && <p className="cpb-kicker">{section.kicker}</p>}
      <h2 id={headingId}><Highlighted text={section.title} highlight={section.highlight} /></h2>
      {section.lead && <p className="cpb-lead"><InlineText text={section.lead} /></p>}
      {section.blocks.map((block, i) =>
        block.type === "accordion"
          ? <AccordionBlock key={i} block={block} ctx={ctx} path={`${section.id}-b${i}`} />
          : <LeafBlockView key={i} block={block} ctx={ctx} path={`${section.id}-b${i}`} />,
      )}
    </section>
  )
}
