"use client"

import { useEffect, useRef, useState } from "react"
import { Menu, X, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLocale } from "next-intl"
import { editorialContent, localizedPath } from "@/lib/editorial-content"
import { Signature } from "@/components/editorial/primitives"

export function Header() {
  const [open, setOpen] = useState(false)
  const toggle = useRef<HTMLButtonElement>(null)
  const pathname = usePathname()
  const locale = useLocale()
  const target = (path: string) => localizedPath(path, locale)
  const active = (href: string) => pathname === target(href) || pathname.startsWith(`${target(href)}/`)
  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape" && open) { setOpen(false); toggle.current?.focus() }
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [open])
  return <header className="editorial-header">
    <div className="editorial-container header-inner">
      <Link href={target("/")} className="brand" aria-label="Tony Hoang — Trang chủ" onClick={() => setOpen(false)}><Signature /></Link>
      <nav className="desktop-navigation" aria-label="Điều hướng chính">
        {editorialContent.navigation.map((item) => <Link key={item.href} href={target(item.href)} aria-current={active(item.href) ? "page" : undefined}>{item.label}</Link>)}
      </nav>
      <a className="header-cta" href={editorialContent.contactHref}>Kết nối <ArrowUpRight size={14} aria-hidden="true" /></a>
      <button ref={toggle} className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Đóng menu" : "Mở menu"} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    <nav id="mobile-navigation" className="mobile-navigation" aria-label="Điều hướng mobile" hidden={!open}>
      {editorialContent.navigation.map((item) => <Link key={item.href} href={target(item.href)} aria-current={active(item.href) ? "page" : undefined} onClick={() => setOpen(false)}>{item.label}</Link>)}
      <a href={editorialContent.contactHref} onClick={() => setOpen(false)}>Kết nối</a>
    </nav>
  </header>
}
