import type { LeafBlock } from "@/lib/course-playbook/types"
import { CalloutBlock, ListBlock, OutputBlock, ParagraphBlock, QuoteBlock, SubheadingBlock } from "./blocks-text"
import { CardsBlock, CaseBlock, StepsBlock, TableBlock } from "./blocks-structured"
import { ChecklistBlock } from "./checklist-block"
import type { RenderContext } from "./course-nav"
import { FigureBlock } from "./figure-block"
import { PromptBlock } from "./prompt-block"
import { WorksheetBlock } from "./worksheet-block"

export type LeafBlockViewProps = {
  block: LeafBlock
  ctx: RenderContext
  /** Đường dẫn duy nhất của khối trong trang (dùng làm id) */
  path: string
  /** true khi khối nằm trong accordion */
  nested?: boolean
}

/** Chọn component vẽ cho từng loại khối không-accordion. Thêm loại khối mới trong types.ts thì thêm một case ở đây. */
export function LeafBlockView({ block, ctx, path, nested = false }: LeafBlockViewProps) {
  switch (block.type) {
    case "paragraph": return <ParagraphBlock block={block} />
    case "subheading": return <SubheadingBlock block={block} nested={nested} />
    case "list": return <ListBlock block={block} />
    case "callout": return <CalloutBlock block={block} />
    case "cards": return <CardsBlock block={block} />
    case "steps": return <StepsBlock block={block} />
    case "table": return <TableBlock block={block} />
    case "figure": return <FigureBlock block={block} />
    case "output": return <OutputBlock block={block} />
    case "prompt": return <PromptBlock block={block} path={path} />
    case "case": return <CaseBlock block={block} />
    case "worksheet": return <WorksheetBlock block={block} moduleSlug={ctx.moduleSlug} />
    case "checklist": return <ChecklistBlock block={block} moduleSlug={ctx.moduleSlug} next={ctx.next} />
    case "quote": return <QuoteBlock block={block} />
  }
}
