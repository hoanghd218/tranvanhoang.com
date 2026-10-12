"use client"

import { useEffect, useState, type RefObject } from "react"

export function useBookFullscreen(root: RefObject<HTMLElement | null>) {
  const [overlay, setOverlay] = useState(false)
  const [native, setNative] = useState(false)
  useEffect(() => {
    const update = () => setNative(document.fullscreenElement === root.current)
    document.addEventListener("fullscreenchange", update)
    return () => document.removeEventListener("fullscreenchange", update)
  }, [root])
  useEffect(() => {
    if (!overlay) return
    const previous = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const escape = (event: KeyboardEvent) => { if (event.key === "Escape") setOverlay(false) }
    document.addEventListener("keydown", escape)
    return () => {
      document.body.style.overflow = previous
      document.removeEventListener("keydown", escape)
    }
  }, [overlay])

  async function toggle() {
    if (overlay) { setOverlay(false); return }
    if (document.fullscreenElement === root.current) {
      try { await document.exitFullscreen() } catch { /* Browser retains native exit controls. */ }
      return
    }
    if (document.fullscreenEnabled && root.current?.requestFullscreen) {
      try { await root.current.requestFullscreen(); return } catch { /* Use the in-page reader below. */ }
    }
    setOverlay(true)
  }
  return { expanded: overlay || native, overlay, toggle }
}
