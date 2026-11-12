import type { LeafBlock } from "@/lib/course-playbook/types"
import { InlineText } from "./inline-text"

type Of<T extends LeafBlock["type"]> = Extract<LeafBlock, { type: T }>

/** Các khối chữ đơn giản: đoạn, tiêu đề nhỏ, danh sách, callout, đầu ra, trích dẫn. */

export function ParagraphBlock({ block }: { block: Of<"paragraph"> }) {
  return <p className="cpb-p"><InlineText text={block.text} /></p>
}

/** Trong accordion tiêu đề nhỏ hạ xuống h4 để không nhảy cấp. */
export function SubheadingBlock({ block, nested }: { block: Of<"subheading">; nested: boolean }) {
  const Tag = nested ? "h4" : "h3"
  return <Tag className="cpb-sub">{block.text}</Tag>
}

export function ListBlock({ block }: { block: Of<"list"> }) {
  const Tag = block.ordered ? "ol" : "ul"
  return (
    <Tag className="cpb-list">
      {block.items.map((item, i) => <li key={i}><InlineText text={item} /></li>)}
    </Tag>
  )
}

export function CalloutBlock({ block }: { block: Of<"callout"> }) {
  return (
    <div className="cpb-callout" role="note">
      <span className="cpb-lab">{block.label}</span>
      {block.paragraphs.map((text, i) => <p key={i}><InlineText text={text} /></p>)}
    </div>
  )
}

export function OutputBlock({ block }: { block: Of<"output"> }) {
  return (
    <div className="cpb-out">
      <span className="cpb-lab">{block.label ?? "Đầu ra"}</span>
      <p><InlineText text={block.text} /></p>
    </div>
  )
}

export function QuoteBlock({ block }: { block: Of<"quote"> }) {
  return (
    <blockquote className="cpb-quote">
      <p><InlineText text={block.text} /></p>
      {block.by && <footer>{block.by}</footer>}
    </blockquote>
  )
}
