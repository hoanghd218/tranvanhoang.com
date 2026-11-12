"use client"

import { useEffect, useRef, useState } from "react"
import { Check, Copy } from "lucide-react"
import { copyToClipboard, selectElementText } from "./copy-to-clipboard"

type State = "idle" | "done" | "fail"

/**
 * Nút "Sao chép" cho prompt. Thứ tự: Clipboard API → execCommand → bôi đen nội dung để bấm Ctrl+C.
 * Có vùng aria-live riêng để người dùng đọc màn hình nghe được kết quả.
 */
export function CopyButton({ text, targetId }: { text: string; targetId: string }) {
  const [state, setState] = useState<State>("idle")
  const [announce, setAnnounce] = useState("")
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => {
    return () => window.clearTimeout(timer.current)
  }, [])

  async function handleClick() {
    const ok = await copyToClipboard(text)
    window.clearTimeout(timer.current)
    if (ok) {
      setState("done")
      setAnnounce("Đã sao chép prompt vào bộ nhớ tạm.")
    } else {
      const target = document.getElementById(targetId)
      if (target) selectElementText(target)
      setState("fail")
      setAnnounce("Không sao chép tự động được. Prompt đã được bôi đen, bấm Ctrl+C để sao chép.")
    }
    timer.current = window.setTimeout(() => {
      setState("idle")
      setAnnounce("")
    }, 2400)
  }

  return (
    <>
      <button type="button" className="cpb-copy" data-state={state === "idle" ? undefined : state} onClick={handleClick}>
        {state === "done" ? <Check size={18} aria-hidden="true" /> : <Copy size={18} aria-hidden="true" />}
        <span>{state === "done" ? "Đã sao chép" : state === "fail" ? "Đã bôi đen, bấm Ctrl+C" : "Sao chép"}</span>
      </button>
      <span className="cpb-sr" role="status" aria-live="polite">{announce}</span>
    </>
  )
}
