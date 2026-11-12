/**
 * PromptBlock.text: phần người học phải thay được ghi dạng {{gợi ý ví dụ}}.
 * Trên trang hiện thành vùng tô màu "[gợi ý ví dụ]"; khi sao chép ra đúng chữ "[gợi ý ví dụ]".
 */

const PLACEHOLDER = /\{\{([^{}\n]+?)\}\}/g

export type PromptPart = { text: string; placeholder: boolean }

/** Tách prompt thành các đoạn chữ thường và đoạn chỗ-điền (đã kèm dấu [ ]). */
export function splitPrompt(text: string): PromptPart[] {
  const parts: PromptPart[] = []
  let last = 0
  for (const match of text.matchAll(PLACEHOLDER)) {
    const start = match.index ?? 0
    if (start > last) parts.push({ text: text.slice(last, start), placeholder: false })
    parts.push({ text: `[${match[1].trim()}]`, placeholder: true })
    last = start + match[0].length
  }
  if (last < text.length) parts.push({ text: text.slice(last), placeholder: false })
  return parts
}

/** Chữ sẽ được đưa vào bộ nhớ tạm khi bấm "Sao chép". */
export function promptToPlainText(text: string): string {
  return splitPrompt(text).map((part) => part.text).join("")
}
