"use client"

import { useEffect } from "react"

/** Records one consistent GA4 event while preserving normal link behaviour. */
export function HomepageAnalytics() {
  useEffect(() => {
    function trackHomepageClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return

      const link = target.closest<HTMLElement>("[data-home-cta]")
      if (!link || typeof window.gtag !== "function") return

      window.gtag("event", "homepage_cta_click", {
        cta_position: link.dataset.homeCta,
        destination: link.dataset.homeDestination,
        locale: document.documentElement.lang,
      })
    }

    document.addEventListener("click", trackHomepageClick)
    return () => document.removeEventListener("click", trackHomepageClick)
  }, [])

  return null
}
