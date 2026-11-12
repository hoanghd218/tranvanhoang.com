"use client"

import { useEffect, useState } from "react"
import { ChevronRight } from "lucide-react"

export type TocItem = { id: string; label: string }

function TocList({ items, current }: { items: TocItem[]; current: string }) {
  return (
    <ol className="cpb-toc-list">
      {items.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`} aria-current={item.id === current ? "true" : undefined}>{item.label}</a>
        </li>
      ))}
    </ol>
  )
}

/**
 * Mục lục của module: cột dính bên trái trên máy tính (đánh dấu mục đang đọc bằng IntersectionObserver),
 * hộp gập <details> trên điện thoại / máy tính bảng (chọn xong thì gập lại).
 */
export function ModuleToc({ items }: { items: TocItem[] }) {
  const [current, setCurrent] = useState(items[0]?.id ?? "")

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setCurrent(entry.target.id)
      })
    }, { rootMargin: "-20% 0px -70% 0px" })
    items.forEach((item) => {
      const section = document.getElementById(item.id)
      if (section) observer.observe(section)
    })
    return () => observer.disconnect()
  }, [items])

  return (
    <div className="cpb-toc">
      <details
        className="cpb-toc-m"
        onClick={(event) => {
          if ((event.target as HTMLElement).closest("a")) event.currentTarget.open = false
        }}
      >
        <summary>Trong trang này<ChevronRight size={20} aria-hidden="true" /></summary>
        <TocList items={items} current={current} />
      </details>
      <nav className="cpb-toc-d" aria-label="Mục lục">
        <p className="cpb-toc-title">Trong trang này</p>
        <TocList items={items} current={current} />
      </nav>
    </div>
  )
}
