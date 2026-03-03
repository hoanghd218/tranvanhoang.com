"use client"

import { useLocale } from "next-intl"
import { usePathname, useRouter } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
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
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleLocale}
      aria-label={locale === "vi" ? "Switch to English" : "Chuyển sang Tiếng Việt"}
      title={locale === "vi" ? "English" : "Tiếng Việt"}
    >
      <Globe className="h-4 w-4" />
      <span className="sr-only">{locale === "vi" ? "EN" : "VI"}</span>
    </Button>
  )
}
