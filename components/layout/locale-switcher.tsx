"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Locale } from "@/i18n/routing"

export function LocaleSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()

  const toggleLocale = () => {
    const newLocale = locale === "vi" ? "en" : "vi"
    // pathname may include dynamic segments — cast needed for type-safe router
    router.replace(pathname as "/", { locale: newLocale })
  }

  return (
    // Ghost control, pill radius, hairline border. Active locale carries the accent.
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      aria-label={locale === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"}
      title={locale === "vi" ? "English" : "Tiếng Việt"}
      className={cn(
        "h-9 gap-1.5 rounded-[var(--radius-pill)] border border-hairline bg-transparent px-3",
        "text-text-secondary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)]",
        "hover:border-hairline-accent hover:bg-surface-overlay hover:text-text-primary"
      )}
    >
      <Globe className="h-4 w-4" strokeWidth={1.75} />
      <span className="text-xs font-medium uppercase text-text-accent">{locale}</span>
      <span className="sr-only">{locale === "vi" ? "EN" : "VI"}</span>
    </Button>
  )
}
