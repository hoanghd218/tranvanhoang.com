"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Nút "Mở tất cả / Đóng tất cả" cho một khối accordion. Các <details> do server vẽ sẵn (đọc được cả khi tắt JS);
 * nút này chỉ bật/tắt thuộc tính `open` của chúng và theo dõi sự kiện `toggle` để đổi nhãn cho đúng.
 */
export function AccordionToggleAll() {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [allOpen, setAllOpen] = useState(false)

  useEffect(() => {
    const root = buttonRef.current?.closest("[data-cpb-accs]")
    if (!root) return
    const items = Array.from(root.querySelectorAll<HTMLDetailsElement>(":scope > details"))
    const sync = () => setAllOpen(items.length > 0 && items.every((item) => item.open))
    sync()
    items.forEach((item) => item.addEventListener("toggle", sync))
    return () => items.forEach((item) => item.removeEventListener("toggle", sync))
  }, [])

  function handleClick() {
    const root = buttonRef.current?.closest("[data-cpb-accs]")
    root?.querySelectorAll<HTMLDetailsElement>(":scope > details").forEach((item) => {
      item.open = !allOpen
    })
  }

  return (
    <button ref={buttonRef} type="button" className="cpb-btn cpb-btn-secondary cpb-btn-sm" onClick={handleClick}>
      {allOpen ? "Đóng tất cả" : "Mở tất cả"}
    </button>
  )
}
