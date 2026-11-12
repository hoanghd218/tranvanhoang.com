"use client"

import { createContext, useCallback, useContext, useMemo, useRef, useState, type MouseEvent, type ReactNode } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, X } from "lucide-react"
import type { Figure } from "@/lib/course-playbook/types"
import { InlineText } from "./inline-text"

/**
 * Xem ảnh lớn bằng <dialog> gốc của trình duyệt (tự có Esc, khoá tab trong hộp thoại, nền mờ).
 * LightboxProvider giữ danh sách MỌI hình của trang để chuyển trước/sau; FigureZoomLink là liên kết bao quanh hình.
 * Khi không có JavaScript, FigureZoomLink vẫn là liên kết mở ảnh ở tab mới.
 */

type LightboxApi = { open: (figure: Pick<Figure, "src" | "caption">, opener: HTMLElement) => boolean }
const LightboxContext = createContext<LightboxApi | null>(null)

export function LightboxProvider({ figures, children }: { figures: Figure[]; children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const boxRef = useRef<HTMLDivElement>(null)
  const openerRef = useRef<HTMLElement | null>(null)
  const [isOpen, setIsOpen] = useState(false)
  const [index, setIndex] = useState(0)
  const [full, setFull] = useState(false)
  const count = figures.length

  const show = useCallback((target: number) => {
    setIndex(((target % count) + count) % count)
    setFull(false)
    boxRef.current?.scrollTo(0, 0)
  }, [count])

  const open = useCallback((ref: Pick<Figure, "src" | "caption">, opener: HTMLElement) => {
    const dialog = dialogRef.current
    // src + caption: cùng một ảnh dùng hai lần với chú thích khác nhau vẫn mở đúng hình
    const target = figures.findIndex((item) => item.src === ref.src && item.caption === ref.caption)
    if (!dialog || typeof dialog.showModal !== "function" || target < 0) return false
    openerRef.current = opener
    setIsOpen(true)
    show(target)
    if (!dialog.open) dialog.showModal()
    return true
  }, [figures, show])

  const api = useMemo<LightboxApi>(() => ({ open }), [open])
  const figure = figures[index]

  return (
    <LightboxContext.Provider value={api}>
      {children}
      <dialog
        ref={dialogRef}
        className="cpb-lb cpb-dark"
        aria-label="Xem infographic phóng to"
        onClose={() => {
          setIsOpen(false)
          openerRef.current?.focus()
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") show(index - 1)
          else if (event.key === "ArrowRight") show(index + 1)
        }}
      >
        <div className="cpb-lb-in">
          <div className="cpb-lb-bar">
            <p aria-live="polite">{figure && isOpen && <InlineText text={figure.caption} />}</p>
            <div className="cpb-lb-row">
              {count > 1 && (
                <>
                  <button type="button" className="cpb-btn cpb-btn-secondary cpb-btn-sm" onClick={() => show(index - 1)}>
                    <ChevronLeft size={18} aria-hidden="true" />Ảnh trước
                  </button>
                  <button type="button" className="cpb-btn cpb-btn-secondary cpb-btn-sm" onClick={() => show(index + 1)}>
                    Ảnh sau<ChevronRight size={18} aria-hidden="true" />
                  </button>
                </>
              )}
              <button type="button" className="cpb-btn cpb-btn-secondary cpb-btn-sm" aria-pressed={full} onClick={() => setFull((value) => !value)}>
                {full ? <Minimize2 size={16} aria-hidden="true" /> : <Maximize2 size={16} aria-hidden="true" />}
                {full ? "Vừa màn hình" : "Xem cỡ gốc"}
              </button>
              <button type="button" className="cpb-btn cpb-btn-primary cpb-btn-sm" onClick={() => dialogRef.current?.close()}>
                <X size={18} aria-hidden="true" />Đóng
              </button>
            </div>
          </div>
          <div ref={boxRef} className="cpb-lb-img" data-full={full ? "true" : undefined}>
            {figure && isOpen && (
              <Image src={figure.src} alt={figure.alt} width={figure.width} height={figure.height} unoptimized style={full ? { width: figure.width } : undefined} />
            )}
          </div>
        </div>
      </dialog>
    </LightboxContext.Provider>
  )
}

/** Liên kết bao quanh hình + chữ "Phóng to". Chuột giữa, Ctrl/Cmd-click vẫn mở ảnh ở tab mới như liên kết thường. */
export function FigureZoomLink({ src, caption, children }: { src: string; caption: string; children: ReactNode }) {
  const lightbox = useContext(LightboxContext)
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!lightbox || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) return
    if (lightbox.open({ src, caption }, event.currentTarget)) event.preventDefault()
  }
  return (
    <a className="cpb-fig-btn" href={src} target="_blank" rel="noopener noreferrer" aria-haspopup="dialog" onClick={handleClick}>
      {children}
    </a>
  )
}
