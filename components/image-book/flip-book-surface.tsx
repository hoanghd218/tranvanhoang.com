"use client"

import { useEffect, useRef } from "react"
import type { PageFlip } from "page-flip"
import type { ImageBookPage } from "./image-book-viewer"
import styles from "./image-book-viewer.module.css"

type Props = { pages: readonly ImageBookPage[]; selected: number; onSelect: (page: number) => void; onFailure: () => void }

/** The engine owns only descendants of the empty host, never React DOM. */
export function FlipBookSurface({ pages, selected, onSelect, onFailure }: Props) {
  const host = useRef<HTMLDivElement>(null)
  const engine = useRef<PageFlip | null>(null)
  const current = useRef(selected)
  const callbacks = useRef({ onSelect, onFailure })
  useEffect(() => { callbacks.current = { onSelect, onFailure } }, [onSelect, onFailure])
  useEffect(() => {
    current.current = selected
    const book = engine.current
    if (book) {
      const before = book.getCurrentPageIndex()
      if (before === selected) return
      const desktop = window.matchMedia("(min-width: 768px)").matches
      const next = desktop ? before === 0 ? 1 : before + 2 : before + 1
      const previous = desktop ? before <= 1 ? 0 : before - 2 : before - 1
      if (selected === next) book.flipNext()
      else if (selected === previous) book.flipPrev()
      else book.turnToPage(selected)
    }
  }, [selected])

  useEffect(() => {
    const parent = host.current
    if (!parent) return
    let disposed = false
    let observer: ResizeObserver | undefined
    let frame = 0
    let previousSize = ""
    void import("page-flip").then(({ PageFlip }) => {
      if (disposed) return
      const mount = () => {
        const desktop = window.matchMedia("(min-width: 768px)").matches
        const width = Math.max(1, Math.floor(Math.min(parent.clientWidth / (desktop ? 2 : 1), (desktop && window.innerHeight > 500 ? window.innerHeight * .72 : Math.max(1, (window.visualViewport?.height || window.innerHeight) - 132)) * pages[0].width / pages[0].height)))
        const height = Math.round(width * pages[0].height / pages[0].width)
        const size = `${width}-${height}-${desktop}`
        if (size === previousSize) return
        previousSize = size
        if (engine.current) { engine.current.getRender().stop(); engine.current.destroy() }
        const element = document.createElement("div")
        parent.replaceChildren(element)
        const nodes = pages.map((page, index) => {
          const node = document.createElement("div")
          node.className = styles.flipPage
          const image = document.createElement("img")
          image.src = page.src; image.alt = page.alt
          image.width = page.width; image.height = page.height
          image.draggable = false
          image.addEventListener("error", () => callbacks.current.onFailure(), { once: true })
          node.append(image)
          node.setAttribute("aria-label", `Trang ${index + 1}: ${page.alt}`)
          element.append(node)
          return node
        })
        const initialPage = current.current
        let initializing = true
        const book = new PageFlip(element, { width, height, size: "fixed", showCover: true, usePortrait: !desktop,
          drawShadow: true, maxShadowOpacity: .28, flippingTime: 700, mobileScrollSupport: false,
          showPageCorners: true, useMouseEvents: true, startPage: current.current, autoSize: true })
        engine.current = book
        book.on("flip", event => {
          if (initializing) return
          const page = Number(event.data)
          current.current = page
          callbacks.current.onSelect(current.current)
        })
        book.loadFromHTML(nodes)
        book.turnToPage(initialPage)
        initializing = false
      }
      mount()
      const resize = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(mount) }
      observer = new ResizeObserver(resize)
      observer.observe(parent)
      window.addEventListener("resize", resize)
      parent.addEventListener("book-cleanup", () => window.removeEventListener("resize", resize), { once: true })
    }).catch(() => { if (!disposed) callbacks.current.onFailure() })
    return () => {
      disposed = true
      cancelAnimationFrame(frame)
      observer?.disconnect()
      parent.dispatchEvent(new Event("book-cleanup"))
      if (engine.current) { engine.current.getRender().stop(); engine.current.destroy() }
      engine.current = null
      parent.replaceChildren()
    }
  }, [pages])
  return <div ref={host} className={styles.flipHost} aria-label="Sách lật trang. Kéo góc trang hoặc dùng nút chuyển trang." />
}
