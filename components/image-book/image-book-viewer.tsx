"use client"

import Link from "next/link"
import Image from "next/image"
import { type CSSProperties, useId, useRef, useState, useSyncExternalStore } from "react"
import { ChevronLeft, ChevronRight, Maximize, Minimize, ZoomIn, ZoomOut } from "lucide-react"
import { useBookFullscreen } from "./use-book-fullscreen"
import { FlipBookSurface } from "./flip-book-surface"
import styles from "./image-book-viewer.module.css"

export type ImageBookPage = {
  src: string
  alt: string
  width: number
  height: number
  thumbnail?: string
}

export type ImageBookViewerProps = {
  title: string
  pages: readonly ImageBookPage[]
  className?: string
  locale?: string
  homeHref?: string
}

/** View-only reader. Remount with key={productId} when switching books. */
export function ImageBookViewer({ title, pages, className = "", homeHref, locale = "vi" }: ImageBookViewerProps) {
  const en = locale === "en"
  const text = (vi: string, english: string) => en ? english : vi
  const desktop = useSyncExternalStore(subscribeDesktop, () => window.matchMedia("(min-width: 768px)").matches, () => false)
  const reducedMotion = useSyncExternalStore(subscribeMotion, () => window.matchMedia("(prefers-reduced-motion: reduce)").matches, () => true)
  const [flipFailed, setFlipFailed] = useState(false)
  const [selected, setSelected] = useState(0)
  const [zoomed, setZoomed] = useState(false)
  const [error, setError] = useState("")
  const animated = !zoomed && !reducedMotion && !flipFailed && pages.length > 1
  const root = useRef<HTMLElement>(null)
  const fullscreen = useBookFullscreen(root)
  const touch = useRef<{ x: number; y: number } | null>(null)
  const id = useId()
  const index = Math.min(selected, Math.max(0, pages.length - 1))
  // Desktop spreads: cover, 2–3, 4–5… Mobile displays only selected page.
  const start = index === 0 ? 0 : index % 2 === 0 ? index - 1 : index
  const spread = start === 0 ? [0] : [start, start + 1].filter(i => i < pages.length)

  function select(next: number) {
    setSelected(Math.max(0, Math.min(pages.length - 1, next)))
    setZoomed(false)
    setError("")
  }

  function turn(direction: number) {
    select(desktop ? direction > 0 ? start === 0 ? 1 : start + 2 : start <= 1 ? 0 : start - 2 : index + direction)
  }

  if (!pages.length) return <section className={`${styles.reader} ${className}`} aria-label={title}><p>{text("Chưa có trang để xem.", "No pages available.")}</p></section>

  return <section ref={root} className={`${styles.reader} ${fullscreen.overlay ? styles.overlay : ""} ${className}`} aria-label={title}
    onKeyDown={event => {
      if (zoomed) return
      if (event.target instanceof HTMLElement && event.target.closest("input, select, textarea")) return
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault()
        turn(event.key === "ArrowLeft" ? -1 : 1)
      }
    }}>
    <header className={styles.header}>{homeHref ? <Link className={styles.homeLink} href={homeHref}>← {text("Về thư viện sách", "Back to books")}</Link> : <h2>{title}</h2>}<button type="button" onClick={fullscreen.toggle} aria-pressed={fullscreen.expanded} aria-label={fullscreen.expanded ? text("Thoát toàn màn hình", "Exit fullscreen") : text("Xem toàn màn hình", "View fullscreen")}>{fullscreen.expanded ? <Minimize size={20} aria-hidden="true" /> : <Maximize size={20} aria-hidden="true" />}</button></header>
    <div id={id} className={`${styles.stage} ${zoomed ? styles.zoomed : ""}`} tabIndex={0} aria-label={text("Trang sách. Dùng phím mũi tên để chuyển trang.", "Book pages. Use arrow keys to turn pages.")}
      onTouchStart={event => {
        if (event.touches.length !== 1) { touch.current = null; return }
        const point = event.touches[0]; touch.current = { x: point.clientX, y: point.clientY }
      }}
      onTouchCancel={() => { touch.current = null }}
      onTouchEnd={event => {
        const from = touch.current
        touch.current = null
        if (!from || zoomed || animated || event.touches.length > 0) return
        const point = event.changedTouches[0]
        const dx = point.clientX - from.x, dy = point.clientY - from.y
        if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy) * 1.5) turn(dx < 0 ? 1 : -1)
      }}>
      {animated ? <FlipBookSurface pages={pages} selected={index} onSelect={setSelected} onFailure={() => setFlipFailed(true)} /> : Array.from(new Set([...spread, index])).map(i => <BookPage key={`${i}-${pages[i].src}`} page={pages[i]} number={i + 1} en={en}
        className={`${spread.includes(i) ? styles.spreadPage : ""} ${i === index ? styles.activePage : ""}`} />)}
    </div>
    <div className={styles.controls}>
      <button type="button" onClick={() => turn(-1)} disabled={index === 0} aria-controls={id} aria-label={text("Trang trước", "Previous page")}><ChevronLeft aria-hidden="true" /></button>
      <label><span className={styles.pageWord}>{text("Trang", "Page")}</span> <select aria-label={text("Chọn trang", "Select page")} aria-controls={id} value={index} onChange={event => select(Number(event.target.value))}>{pages.map((_, i) => <option key={i} value={i}>{i + 1}</option>)}</select> / {pages.length}</label>
      <button type="button" onClick={() => turn(1)} disabled={index >= pages.length - 1 || (spread.at(-1) === pages.length - 1 && index > 0 && desktop)} aria-controls={id} aria-label={text("Trang tiếp", "Next page")}><ChevronRight aria-hidden="true" /></button>
      <button type="button" onClick={() => setZoomed(value => !value)} aria-pressed={zoomed} aria-controls={id} aria-label={zoomed ? text("Thu về vừa trang", "Fit page") : text("Phóng to trang", "Zoom in")}>{zoomed ? <ZoomOut aria-hidden="true" /> : <ZoomIn aria-hidden="true" />}</button>
    </div>
    <p className={`${styles.status} ${error ? styles.visibleStatus : ""}`} role="status">{error || `${text("Trang", "Page")} ${index + 1} / ${pages.length} — ${pages[index].alt}`}</p>
    <nav className={styles.thumbnails} aria-label={`${text("Chọn trang", "Select page")} ${title}`}>
      {pages.map((page, i) => <button key={`${i}-${page.src}`} type="button" onClick={() => select(i)} aria-pressed={index === i} aria-controls={id} aria-label={`${text("Trang", "Page")} ${i + 1}: ${page.alt}`}>
        <Image src={page.thumbnail || page.src} alt="" width={72} height={96} unoptimized loading="lazy" /><span>{i + 1}</span>
      </button>)}
    </nav>
  </section>
}

function BookPage({ page, number, className, en }: { page: ImageBookPage; number: number; className: string; en: boolean }) {
  const [failed, setFailed] = useState(false)
  const [attempt, setAttempt] = useState(0)
  return <figure className={`${styles.page} ${className}`} style={{ "--page-ratio": page.width / page.height } as CSSProperties}>
    {failed ? <div className={styles.failure} role="alert"><p>{en ? `Could not load page ${number}.` : `Không tải được trang ${number}.`}</p><button type="button" onClick={() => { setFailed(false); setAttempt(value => value + 1) }}>{en ? "Retry" : "Thử lại"}</button></div>
      : <Image key={attempt} src={page.src} alt={page.alt} width={page.width} height={page.height} unoptimized onError={() => setFailed(true)} draggable={false} />}
  </figure>
}

function subscribeDesktop(onChange: () => void) {
  const query = window.matchMedia("(min-width: 768px)")
  query.addEventListener("change", onChange)
  return () => query.removeEventListener("change", onChange)
}

function subscribeMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)")
  query.addEventListener("change", onChange)
  return () => query.removeEventListener("change", onChange)
}
