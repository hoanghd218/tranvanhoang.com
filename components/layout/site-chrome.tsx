"use client"

import { usePathname } from "next/navigation"

/** Book detail routes have their own focused reader navigation. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const reader = /^\/(?:vi\/|en\/)?playbooks\/[^/]+\/?$/.test(pathname)
  return reader ? null : children
}
