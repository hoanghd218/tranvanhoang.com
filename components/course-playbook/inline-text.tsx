import type { ReactNode } from "react"
import Link from "next/link"

/**
 * InlineText — bộ đọc chữ an toàn cho mọi trường chữ của playbook khoá học.
 * Chỉ hiểu 3 cú pháp: **đậm**, `mã`, [chữ](url). Không bao giờ chèn HTML thô (không dùng dangerouslySetInnerHTML).
 * url chỉ nhận "/..." (nội bộ) hoặc "https://..." (ngoài, mở tab mới, rel="noopener noreferrer").
 * Cú pháp không hợp lệ (ví dụ url "javascript:") được hiện nguyên văn như chữ thường.
 */

// Dấu [ ] KHÔNG kèm "(url)" ngay sau (ví dụ "[x]", "[ví dụ: ...]") không khớp mẫu nào → hiện nguyên văn như chữ thường.
const TOKEN = /\*\*([^*]+?)\*\*|`([^`]+)`|\[([^[\]]+)\]\(([^)\s]+)\)/g

type Mode = { bold: boolean; links: boolean }

function isSafeUrl(url: string) {
  return (url.startsWith("/") && !url.startsWith("//")) || url.startsWith("https://")
}

function parse(text: string, mode: Mode): ReactNode[] {
  const nodes: ReactNode[] = []
  let last = 0
  for (const match of text.matchAll(TOKEN)) {
    const [raw, bold, code, label, url] = match
    const start = match.index ?? 0
    if (start > last) nodes.push(text.slice(last, start))
    last = start + raw.length
    const key = nodes.length
    if (bold !== undefined && mode.bold) {
      nodes.push(<strong key={key}>{parse(bold, { ...mode, bold: false })}</strong>)
    } else if (code !== undefined) {
      nodes.push(<code key={key}>{code}</code>)
    } else if (label !== undefined && mode.links && isSafeUrl(url)) {
      const inner = parse(label, { bold: true, links: false })
      nodes.push(
        url.startsWith("/")
          ? <Link key={key} href={url}>{inner}</Link>
          : <a key={key} href={url} target="_blank" rel="noopener noreferrer">{inner}</a>,
      )
    } else {
      nodes.push(raw)
    }
  }
  if (last < text.length) nodes.push(text.slice(last))
  return nodes
}

export function InlineText({ text }: { text: string }) {
  return <>{parse(text, { bold: true, links: true })}</>
}

/** Bỏ ký hiệu InlineText, chỉ giữ chữ — dùng khi sao chép phiếu hoặc đặt aria-label. */
export function stripInline(text: string): string {
  return text.replace(TOKEN, (_raw, bold?: string, code?: string, label?: string) => bold ?? code ?? label ?? "")
}
