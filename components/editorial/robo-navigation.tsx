"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { localizedPath } from "@/lib/editorial-content"

export function RoboNavigation({ locale, home }: { locale: string; home: boolean }) {
  const [open, setOpen] = useState(false)
  const en = locale === "en"
  const items = [
    ["services", en ? "Services" : "Dịch vụ"], ["process", en ? "Process" : "Quy trình"],
    ["solutions", en ? "Solutions" : "Giải pháp"], ["skills", "Skills"], ["apps", "Apps"], ["books", en ? "Books" : "Sách"],
  ]
  return <div className="rl-nav-wrap">
    <button className="rl-menu-toggle" type="button" aria-expanded={open} aria-controls="robo-navigation" aria-label={en ? "Toggle navigation" : "Mở hoặc đóng menu"} onClick={() => setOpen(!open)}>{open ? <X size={19} /> : <Menu size={19} />}</button>
    <nav className={`rl-main-nav ${open ? "rl-main-nav--open" : ""}`} id="robo-navigation" aria-label={en ? "Main navigation" : "Điều hướng chính"} onKeyDown={event => { if (event.key === "Escape") { setOpen(false); event.currentTarget.parentElement?.querySelector("button")?.focus() } }}>
      {items.map(([id, label]) => <a key={id} href={`${home ? "" : localizedPath("/", locale)}#${id}`} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
  </div>
}
