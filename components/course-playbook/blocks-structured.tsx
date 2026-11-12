import type { CSSProperties } from "react"
import type { LeafBlock } from "@/lib/course-playbook/types"
import { InlineText, stripInline } from "./inline-text"

type Of<T extends LeafBlock["type"]> = Extract<LeafBlock, { type: T }>

/** Các khối có cấu trúc: thẻ, các bước, bảng, case thật. */

/** Số cột trên máy tính; mặc định theo số thẻ (2 → 2, 4 → 4, còn lại 3). Điện thoại luôn gọn lại. */
function defaultColumns(count: number): 2 | 3 | 4 {
  return count === 2 ? 2 : count === 4 ? 4 : 3
}

export function CardsBlock({ block }: { block: Of<"cards"> }) {
  return (
    <ul className="cpb-cards" data-cols={block.columns ?? defaultColumns(block.items.length)}>
      {block.items.map((item, i) => (
        <li className="cpb-card" key={i}>
          <p className="cpb-card-t">{item.title}</p>
          <p className="cpb-card-d"><InlineText text={item.text} /></p>
          {item.meta && <p className="cpb-card-m">{item.meta}</p>}
        </li>
      ))}
    </ul>
  )
}

export function StepsBlock({ block }: { block: Of<"steps"> }) {
  const hasEnd = block.items.some((item) => item.output || item.meta)
  return (
    <ol className="cpb-steps" data-end={hasEnd ? "true" : undefined}>
      {block.items.map((item, i) => (
        <li key={i}>
          <b className="cpb-step-t">{item.title}</b>
          <span className="cpb-step-d"><InlineText text={item.text} /></span>
          {(item.output || item.meta) && (
            <span className="cpb-step-end">
              {item.output && <em>{item.output}</em>}
              {item.meta && <small>{item.meta}</small>}
            </span>
          )}
        </li>
      ))}
    </ol>
  )
}

/** Bảng cuộn ngang TRONG khung của nó (không làm cả trang tràn ngang trên điện thoại). */
export function TableBlock({ block }: { block: Of<"table"> }) {
  const label = block.caption ? stripInline(block.caption) : "Bảng"
  return (
    <div className="cpb-table-wrap" role="region" aria-label={label} tabIndex={0}>
      <table className="cpb-table" style={{ "--cpb-cols": block.head.length } as CSSProperties}>
        {block.caption && <caption><InlineText text={block.caption} /></caption>}
        <thead>
          <tr>{block.head.map((cell, i) => <th scope="col" key={i}>{cell}</th>)}</tr>
        </thead>
        <tbody>
          {block.rows.map((row, r) => (
            <tr key={r}>{row.map((cell, c) => <td key={c}><InlineText text={cell} /></td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function CaseBlock({ block }: { block: Of<"case"> }) {
  const study = block.case
  return (
    <article className="cpb-case">
      <header>
        <h3>{study.title}</h3>
        {study.tag && <span className="cpb-chip">{study.tag}</span>}
      </header>
      <div className="cpb-case-body">
        <div className="cpb-case-cols" data-cols={study.columns.length}>
          {study.columns.map((column, i) => (
            <div key={i}>
              <span className="cpb-lab">{column.label}</span>
              <p><InlineText text={column.text} /></p>
            </div>
          ))}
        </div>
        <p className="cpb-src"><InlineText text={study.source} /></p>
      </div>
    </article>
  )
}
