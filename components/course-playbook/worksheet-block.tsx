"use client"

import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from "react"
import { Copy } from "lucide-react"
import type { LeafBlock } from "@/lib/course-playbook/types"
import { copyToClipboard } from "./copy-to-clipboard"
import { InlineText, stripInline } from "./inline-text"
import { isStorageUsable, parseStoredArray, readStored, removeStored, storageKey, subscribeStorage, writeStored } from "./safe-storage"

type WorksheetData = Extract<LeafBlock, { type: "worksheet" }>

const NEUTRAL = "Nội dung chỉ nằm trên trình duyệt này, không gửi đi đâu."
const SAVING_ON = "Phiếu tự lưu trên trình duyệt này, không gửi đi đâu."
const SAVED = "Đã lưu trên trình duyệt này."
const BLOCKED = "Trình duyệt này không cho lưu tự động. Dùng nút “Sao chép phiếu” để giữ lại nội dung."
const isString = (value: unknown): value is string => typeof value === "string"
const serverSnapshot = () => null
const noSubscribe = () => () => {}

/** Ghi các ô vào localStorage (xoá khoá nếu tất cả trống). true = lưu được. */
function persist(key: string, values: string[]): boolean {
  if (values.some((value) => value)) return writeStored(key, JSON.stringify(values))
  removeStored(key)
  return isStorageUsable()
}

/**
 * Phiếu ghi kết quả (số ô tuỳ ý, kể cả hàng chục ô): tự lưu mọi ô (debounce 500 ms) vào localStorage
 * `tony-pb-<moduleSlug>-<id>` dưới dạng một mảng JSON, sao chép cả phiếu, xoá hai bước.
 * Giá trị đã lưu đọc bằng useSyncExternalStore (server = null → hydrate khớp); chữ người đọc gõ giữ trong `override`
 * nên vẫn dùng được khi trình duyệt chặn localStorage. Thông báo trạng thái luôn nói đúng việc lưu được hay không.
 */
export function WorksheetBlock({ block, moduleSlug }: { block: WorksheetData; moduleSlug: string }) {
  // id ổn định theo dữ liệu (không dùng useId: id theo vị trí cây có thể lệch giữa HTML server và client trong dev)
  const uid = `cpb-ws-${moduleSlug}-${block.id}`
  const key = storageKey(moduleSlug, block.id)
  const count = block.fields.length
  const stored = useSyncExternalStore(subscribeStorage, () => readStored(key), serverSnapshot)
  const usable = useSyncExternalStore<boolean | null>(noSubscribe, isStorageUsable, serverSnapshot)
  const [override, setOverride] = useState<string[] | null>(null)
  const [note, setNote] = useState<string | null>(null)
  const [armed, setArmed] = useState(false)
  const saveTimer = useRef<number | undefined>(undefined)
  const armTimer = useRef<number | undefined>(undefined)
  const pending = useRef<string[] | null>(null)
  const fromStorage = useMemo(() => parseStoredArray(stored, count, isString), [stored, count])
  const values = override ?? fromStorage ?? block.fields.map(() => "")
  const status = note ?? (usable === null ? NEUTRAL : usable ? SAVING_ON : BLOCKED)

  useEffect(() => {
    const queue = pending
    const timers = [saveTimer, armTimer]
    return () => {
      timers.forEach((timer) => window.clearTimeout(timer.current))
      if (queue.current) persist(key, queue.current) // người đọc rời trang khi chưa kịp lưu
    }
  }, [key])

  function handleInput(index: number, value: string) {
    const next = values.map((current, i) => (i === index ? value : current))
    setOverride(next)
    pending.current = next
    window.clearTimeout(saveTimer.current)
    saveTimer.current = window.setTimeout(() => {
      pending.current = null
      setNote(persist(key, next) ? SAVED : BLOCKED)
    }, 500)
  }

  async function handleCopy() {
    if (!values.some((value) => value.trim())) {
      setNote("Phiếu đang trống, chưa có gì để sao chép.")
      return
    }
    const text = block.fields.map((field, i) => `${stripInline(field)}:\n${values[i].trim()}`).join("\n\n")
    const ok = await copyToClipboard(text)
    setNote(ok ? "Đã sao chép phiếu. Dán vào chat mới hoặc ghi chú của bạn." : "Không sao chép tự động được. Hãy bôi đen từng ô và sao chép tay.")
  }

  function handleClear() {
    window.clearTimeout(armTimer.current)
    if (!armed) {
      setArmed(true)
      armTimer.current = window.setTimeout(() => setArmed(false), 4000)
      return
    }
    setArmed(false)
    window.clearTimeout(saveTimer.current)
    pending.current = null
    setOverride(block.fields.map(() => ""))
    removeStored(key)
    setNote("Đã xoá phiếu.")
  }

  return (
    <form className="cpb-ws" onSubmit={(event) => event.preventDefault()}>
      <h3 className="cpb-ws-title">{block.title}</h3>
      {block.note && <p className="cpb-muted"><InlineText text={block.note} /></p>}
      {block.fields.map((field, i) => (
        <div className="cpb-ws-field" key={i}>
          <label htmlFor={`${uid}-${i}`}><span>{String(i + 1).padStart(2, "0")}</span><InlineText text={field} /></label>
          <textarea id={`${uid}-${i}`} rows={3} autoComplete="off" value={values[i] ?? ""} onChange={(event) => handleInput(i, event.target.value)} />
        </div>
      ))}
      <div className="cpb-ws-row">
        <button type="button" className="cpb-btn cpb-btn-primary" onClick={handleCopy}><Copy size={18} aria-hidden="true" />Sao chép phiếu</button>
        <button type="button" className="cpb-btn cpb-btn-secondary" onClick={handleClear}>{armed ? "Bấm lần nữa để xoá hết" : "Xoá phiếu"}</button>
      </div>
      <p className="cpb-status" role="status" aria-live="polite">{status}</p>
    </form>
  )
}
