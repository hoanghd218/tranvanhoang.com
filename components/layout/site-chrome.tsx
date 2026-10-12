"use client"

import { usePathname } from "next/navigation"

/** Book detail routes have their own focused reader navigation. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const reader = /^\/(?:vi\/|en\/)?playbooks\/[^/]+\/?$/.test(pathname)
  const home = /^\/(?:vi\/?|en\/?)?$/.test(pathname)
  const products = /^\/(?:vi\/|en\/)?(?:products|playbooks|coloring-book-kdp)(?:\/|$)/.test(pathname)
  return reader || home || products ? null : children
}
