import type { CourseModule, Figure, LeafBlock } from "@/lib/course-playbook/types"

/** Gom mọi hình của một module theo thứ tự đọc (kể cả hình nằm trong accordion) cho lightbox trước/sau. */
export function collectFigures(module: CourseModule): Figure[] {
  const figures: Figure[] = []
  const visit = (block: LeafBlock | { type: "accordion"; items: { blocks: LeafBlock[] }[] }) => {
    if (block.type === "figure") figures.push(block.figure)
    else if (block.type === "accordion") block.items.forEach((item) => item.blocks.forEach(visit))
  }
  module.sections.forEach((section) => section.blocks.forEach(visit))
  return figures
}
