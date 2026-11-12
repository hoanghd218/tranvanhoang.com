import { ChevronRight } from "lucide-react"
import type { Block } from "@/lib/course-playbook/types"
import { AccordionToggleAll } from "./accordion-toggle-all"
import type { RenderContext } from "./course-nav"
import { LeafBlockView } from "./leaf-block-view"

type AccordionData = Extract<Block, { type: "accordion" }>

/**
 * Accordion bằng <details> gốc (đọc được khi tắt JS, bàn phím và đọc màn hình hiểu sẵn).
 * Mục đầu mở sẵn khi expandFirst = true. Có nút "Mở tất cả" khi từ 2 mục trở lên.
 * Khối bên trong là LeafBlock (accordion chỉ lồng 1 cấp).
 */
export function AccordionBlock({ block, ctx, path }: { block: AccordionData; ctx: RenderContext; path: string }) {
  return (
    <div className="cpb-accs" data-cpb-accs>
      {block.items.length > 1 && <div className="cpb-accs-bar"><AccordionToggleAll /></div>}
      {block.items.map((item, i) => (
        <details className="cpb-acc" key={i} data-numbered={item.number ? "true" : undefined} open={block.expandFirst === true && i === 0 ? true : undefined}>
          <summary>
            {item.number && <span className="cpb-acc-n">{item.number}</span>}
            <span className="cpb-acc-t">
              <b>{item.title}</b>
              {item.gloss && <span className="cpb-acc-g">{item.gloss}</span>}
              {item.question && <span className="cpb-chip">{item.question}</span>}
            </span>
            <ChevronRight className="cpb-chev" size={22} aria-hidden="true" />
          </summary>
          <div className="cpb-acc-body">
            {item.blocks.map((leaf, j) => (
              <LeafBlockView key={j} block={leaf} ctx={ctx} path={`${path}-a${i}-b${j}`} nested />
            ))}
          </div>
        </details>
      ))}
    </div>
  )
}
