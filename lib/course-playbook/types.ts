/**
 * Hợp đồng dữ liệu của Playbook khoá "AI Mobile App Business OS".
 *
 * Nội dung mỗi module là DỮ LIỆU (lib/data/course-playbook/module-0X/), không nằm trong component.
 * Component trong components/course-playbook/ chỉ vẽ lại các khối dưới đây.
 * Đổi hợp đồng này = đổi cả hạ tầng lẫn 4 module → hỏi chủ repo trước.
 *
 * InlineText (mọi trường chữ):
 *   **đậm**        → <strong>
 *   `mã`           → <code>
 *   [chữ](url)     → liên kết; url bắt đầu bằng "/" hoặc "https://"
 *   Không dùng HTML thô, không dùng xuống dòng trong một trường (tách thành nhiều đoạn / mục).
 *
 * Riêng PromptBlock.text: giữ xuống dòng "\n"; phần người học phải thay ghi dạng {{gợi ý ví dụ}}
 * → hiện thành vùng tô màu, và khi bấm "Sao chép" vẫn ra đúng chữ gốc kèm dấu [ ].
 */

export type InlineText = string

/** Hình infographic. File nằm ở public/images/course-playbook/module-0X/*.webp */
export type Figure = {
  /** Đường dẫn công khai, ví dụ "/images/course-playbook/module-04/tong-quan.webp" */
  src: string
  width: number
  height: number
  /** Mô tả đủ để người không nhìn thấy ảnh vẫn hiểu hình nói gì (1–2 câu, có các số/thuật ngữ chính) */
  alt: string
  /** Chú thích hiện dưới hình, bắt đầu bằng "Hình N · " (N đếm trong cùng module) */
  caption: string
}

export type CardItem = { title: string; text: InlineText; meta?: string }
export type StepItem = { title: string; text: InlineText; output?: string; meta?: string }

export type AccordionItem = {
  /** Số hiện trong vòng tròn, ví dụ "1" */
  number?: string
  title: string
  /** Nghĩa tiếng Việt của title (chữ nhỏ dưới tiêu đề) */
  gloss?: string
  /** Câu hỏi mà mục này trả lời (hiện dạng chip) */
  question?: string
  blocks: LeafBlock[]
}

/** Khối không chứa accordion — accordion chỉ lồng sâu 1 cấp */
export type LeafBlock =
  | { type: "paragraph"; text: InlineText }
  | { type: "subheading"; text: string }
  | { type: "list"; ordered?: boolean; items: InlineText[] }
  | { type: "callout"; label: string; paragraphs: InlineText[] }
  | { type: "cards"; columns?: 2 | 3 | 4; items: CardItem[] }
  | { type: "steps"; items: StepItem[] }
  | { type: "table"; head: string[]; rows: InlineText[][]; caption?: string }
  | { type: "figure"; figure: Figure }
  | { type: "output"; label?: string; text: InlineText }
  | { type: "prompt"; title: string; when?: string; text: string; hint?: string; output?: string }
  | { type: "case"; case: CaseStudy }
  | { type: "worksheet"; id: string; title: string; note?: string; fields: string[] }
  | { type: "checklist"; id: string; title: string; intro?: string; items: ChecklistItem[]; riskNote?: string }
  | { type: "quote"; text: InlineText; by?: string }

export type Block = LeafBlock | { type: "accordion"; items: AccordionItem[]; expandFirst?: boolean }

export type ChecklistItem = { title: string; text?: InlineText }

/** Case thật. Số liệu của bên thứ ba PHẢI ghi rõ nguồn và "tự công bố, chưa kiểm chứng" nếu đúng như vậy. */
export type CaseStudy = {
  title: string
  tag?: string
  /** 2–4 cột nhỏ, ví dụ Bối cảnh / Cách làm / Kết quả tự công bố */
  columns: { label: string; text: InlineText }[]
  /** Dòng nguồn + lưu ý kiểm chứng */
  source: InlineText
}

export type Section = {
  /** Neo trang, kebab-case, duy nhất trong module. Mục lục tạo từ danh sách này. */
  id: string
  /** Nhãn nhỏ phía trên tiêu đề, ví dụ "WHAT · Bài 4.4" */
  kicker?: string
  title: string
  /** Cụm trong title được tô tím (phải là chuỗi con của title) */
  highlight?: string
  /** Câu dẫn nhập 1–3 câu */
  lead?: InlineText
  /** Tên ngắn hiện trong mục lục; mặc định dùng title */
  tocLabel?: string
  blocks: Block[]
}

export type ModuleFact = { label: string; value: string }

export type CourseModule = {
  slug: string // "module-04"
  number: string // "04"
  title: string // "Design"
  /** Tiêu đề lớn của hero */
  headline: string
  headlineHighlight?: string
  intro: string
  coreQuestion: string
  /** Sản phẩm đầu ra của module */
  output: string
  gate: { code: string; name: string }
  /** Chỉ ghi dữ kiện CÓ trong nguồn (số bài, số phút...). Thiếu thì bỏ, không bịa. */
  facts: ModuleFact[]
  sections: Section[]
}

/** Thông tin tóm tắt 7 module, dùng ở trang tổng và thanh tiến trình */
export type ModuleSummary = {
  slug: string
  number: string
  title: string
  question: string
  output: string
  gate: string
  /** ready = có dữ liệu đầy đủ · soon = chưa soạn, trang hiện "Đang soạn" */
  status: "ready" | "soon"
}
