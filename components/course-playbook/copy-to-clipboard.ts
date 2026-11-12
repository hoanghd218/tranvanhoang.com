/**
 * Sao chép chữ vào bộ nhớ tạm: Clipboard API → execCommand("copy") → (người gọi) bôi đen để bấm Ctrl+C.
 * Chỉ gọi trong event handler của người dùng.
 */

function legacyCopy(text: string): boolean {
  const area = document.createElement("textarea")
  area.value = text
  area.setAttribute("readonly", "")
  area.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none"
  document.body.appendChild(area)
  area.select()
  let ok = false
  try {
    ok = document.execCommand("copy")
  } catch {
    ok = false
  }
  document.body.removeChild(area)
  return ok
}

export async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text)
      return true
    } catch {
      return legacyCopy(text)
    }
  }
  return legacyCopy(text)
}

/** Phương án cuối: bôi đen nội dung để người đọc tự bấm Ctrl+C. */
export function selectElementText(element: HTMLElement): void {
  const selection = window.getSelection()
  if (!selection) return
  const range = document.createRange()
  range.selectNodeContents(element)
  selection.removeAllRanges()
  selection.addRange(range)
}
