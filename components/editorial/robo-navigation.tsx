"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { localizedPath } from "@/lib/editorial-content"

export function RoboNavigation({ locale, home }: { locale: string; home: boolean }) {
  const [open, setOpen] = useState(false)
  const en = locale === "en"
  // "#id" entries are homepage anchors; "/path" entries are pages.
  const items = [
    ["/community", en ? "Community" : "Cộng đồng"], ["#solutions", "Agency"],
    ["#resources", en ? "Resources" : "Tài nguyên"], ["/products", en ? "Products" : "Sản phẩm"],
    ["/blog", en ? "Writing" : "Bài viết"], ["#about", en ? "About" : "Về tôi"],
  ]
  const hrefFor = (target: string) => target.startsWith("#") ? `${home ? "" : localizedPath("/", locale)}${target}` : localizedPath(target, locale)
  return <div className="rl-nav-wrap">
    <button className="rl-menu-toggle" type="button" aria-expanded={open} aria-controls="robo-navigation" aria-label={en ? "Toggle navigation" : "Mở hoặc đóng menu"} onClick={() => setOpen(!open)}>{open ? <X size={19} /> : <Menu size={19} />}</button>
    <nav className={`rl-main-nav ${open ? "rl-main-nav--open" : ""}`} id="robo-navigation" aria-label={en ? "Main navigation" : "Điều hướng chính"} onKeyDown={event => { if (event.key === "Escape") { setOpen(false); event.currentTarget.parentElement?.querySelector("button")?.focus() } }}>
      {items.map(([target, label]) => <a key={target} href={hrefFor(target)} onClick={() => setOpen(false)}>{label}</a>)}
    </nav>
  </div>
}
