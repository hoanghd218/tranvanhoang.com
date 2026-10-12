"use client"

import { usePathname } from "next/navigation"
import { localizedPath } from "@/lib/editorial-content"

export function RoboLanguageSwitch({ locale }: { locale: string }) {
  const pathname = usePathname().replace(/^\/(en|vi)(?=\/|$)/, "") || "/"
  return <nav className="rl-language" aria-label={locale === "en" ? "Language" : "Ngôn ngữ"}>
    {["en", "vi"].map(language => <a key={language} href={localizedPath(pathname, language)} hrefLang={language}
      aria-label={language === "en" ? "English" : "Tiếng Việt"} aria-current={locale === language ? "true" : undefined}
      onClick={event => { event.currentTarget.href = localizedPath(pathname, language) + window.location.search + window.location.hash }}>
      {language.toUpperCase()}
    </a>)}
  </nav>
}
