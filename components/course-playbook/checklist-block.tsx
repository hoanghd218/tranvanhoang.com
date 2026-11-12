"use client"

import { useMemo, useState, useSyncExternalStore } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { LeafBlock } from "@/lib/course-playbook/types"
import type { NextModuleLink } from "./course-nav"
import { InlineText } from "./inline-text"
import { parseStoredArray, readStored, storageKey, subscribeStorage, writeStored } from "./safe-storage"

type ChecklistData = Extract<LeafBlock, { type: "checklist" }>
const isBoolean = (value: unknown): value is boolean => typeof value === "boolean"
const serverSnapshot = () => null

/**
 * Checklist có thanh tiến độ, lưu vào localStorage `tony-pb-<moduleSlug>-<id>` (mảng true/false).
 * id "gate" = cổng quyết định của module: hộp nền tối, thêm nút sang module kế tiếp (khoá tới khi tick đủ).
 * Giá trị đã lưu đọc bằng useSyncExternalStore (server = null → hydrate khớp), mọi thay đổi của người đọc
 * giữ trong `override` để vẫn hoạt động ngay cả khi trình duyệt chặn localStorage.
 */
export function ChecklistBlock({ block, moduleSlug, next }: { block: ChecklistData; moduleSlug: string; next?: NextModuleLink }) {
  const total = block.items.length
  const key = storageKey(moduleSlug, block.id)
  const isGate = block.id === "gate"
  const stored = useSyncExternalStore(subscribeStorage, () => readStored(key), serverSnapshot)
  const [override, setOverride] = useState<boolean[] | null>(null)
  const [nudge, setNudge] = useState(false)
  const fromStorage = useMemo(() => parseStoredArray(stored, total, isBoolean), [stored, total])
  const checked = override ?? fromStorage ?? block.items.map(() => false)

  const done = checked.filter(Boolean).length
  const complete = total > 0 && done === total
  const nextLabel = next ? `Module ${next.number} — ${next.title}` : ""

  function toggle(index: number) {
    const updated = checked.map((value, i) => (i === index ? !value : value))
    setOverride(updated)
    setNudge(false)
    writeStored(key, JSON.stringify(updated))
  }

  let message: string
  if (complete) message = isGate ? `Đủ ${total} mục. Có thể đi tiếp.` : `Đủ ${total} mục.`
  else if (nudge && next) message = `Chưa đủ ${total} mục nên chưa nên mở ${nextLabel}.`
  else message = isGate ? `Còn thiếu ${total - done} mục. Chưa nên đi tiếp.` : `Còn thiếu ${total - done} mục.`

  return (
    <div className={`cpb-check${isGate ? " cpb-gate cpb-dark" : ""}`}>
      <h3 className="cpb-check-title">{block.title}</h3>
      {block.intro && <p className="cpb-check-intro"><InlineText text={block.intro} /></p>}
      <fieldset>
        <legend className="cpb-sr">{block.title}</legend>
        {block.items.map((item, i) => (
          <label className="cpb-gi" key={i}>
            <input type="checkbox" checked={checked[i] ?? false} onChange={() => toggle(i)} />
            <span><b>{item.title}</b>{item.text && <span><InlineText text={item.text} /></span>}</span>
          </label>
        ))}
      </fieldset>
      <div className="cpb-gate-sum">
        <b>{done} / {total} mục đã có</b>
        <div className="cpb-bar" aria-hidden="true"><i style={{ width: `${total ? Math.round((done / total) * 100) : 0}%` }} /></div>
        {isGate && next && (complete
          ? next.ready
            ? <Link className="cpb-btn cpb-btn-primary" href={next.href}>Mở {nextLabel}<ArrowRight size={18} aria-hidden="true" /></Link>
            : <span className="cpb-btn cpb-btn-ghost" aria-disabled="true">{nextLabel} — Đang soạn</span>
          : <button type="button" className="cpb-btn cpb-btn-primary" aria-disabled="true" onClick={() => setNudge(true)}>Mở {nextLabel}<ArrowRight size={18} aria-hidden="true" /></button>)}
      </div>
      <p className="cpb-gate-msg" role="status">{message}</p>
      {block.riskNote && <p className="cpb-risk"><InlineText text={block.riskNote} /></p>}
    </div>
  )
}
