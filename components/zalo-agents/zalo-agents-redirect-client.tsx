"use client"

import { useCallback, useEffect, useRef } from "react"
import { useTranslations } from "next-intl"
import {
  getZaloTrackingParams,
  ZALO_GROUP_URL,
  ZALO_REDIRECT_EVENT,
  ZALO_REDIRECT_TIMEOUT_MS,
} from "@/lib/zalo-agents-tracking"

export function ZaloAgentsRedirectClient() {
  const t = useTranslations("zaloAgents")
  const eventSentRef = useRef(false)
  const redirectStartedRef = useRef(false)

  const redirectToZalo = useCallback(() => {
    if (redirectStartedRef.current) return

    redirectStartedRef.current = true
    window.location.replace(ZALO_GROUP_URL)
  }, [])

  const sendTrackingEvent = useCallback(() => {
    if (eventSentRef.current) return
    eventSentRef.current = true

    const timeoutId = window.setTimeout(redirectToZalo, ZALO_REDIRECT_TIMEOUT_MS)
    const gtag = window.gtag

    if (typeof gtag !== "function") {
      window.clearTimeout(timeoutId)
      redirectToZalo()
      return
    }

    const finishRedirect = () => {
      window.clearTimeout(timeoutId)
      redirectToZalo()
    }

    try {
      gtag("event", ZALO_REDIRECT_EVENT, {
        ...getZaloTrackingParams(window.location.search, document.referrer),
        transport_type: "beacon",
        event_callback: finishRedirect,
      })
    } catch {
      finishRedirect()
    }
  }, [redirectToZalo])

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState !== "visible") return

      document.removeEventListener("visibilitychange", handleVisibilityChange)
      sendTrackingEvent()
    }

    if (document.visibilityState === "visible") {
      sendTrackingEvent()
    } else {
      document.addEventListener("visibilitychange", handleVisibilityChange)
    }

    return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [sendTrackingEvent])

  const handleFallbackClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (eventSentRef.current) return

    event.preventDefault()
    sendTrackingEvent()
  }

  // Interstitial: minimal, centred, flat void black. The loading state is a
  // fade only — no spinner, no bounce.
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-surface px-[var(--space-5)] py-[var(--space-9)] sm:px-[var(--gutter-page)]">
      <div className="animate-fade-in w-full max-w-md text-center">
        <p className="eyebrow mb-[var(--space-4)]">Zalo Agents</p>
        <h1 className="heading-md">{t("title")}</h1>
        <p className="animate-fade-in-delay-1 mt-[var(--space-4)] text-text-secondary">
          {t("redirecting")}
        </p>
        <a
          href={ZALO_GROUP_URL}
          onClick={handleFallbackClick}
          className="mt-[var(--space-6)] inline-flex h-11 items-center justify-center rounded-[var(--radius-sm)] border border-hairline-strong px-[var(--space-5)] font-medium text-text-primary transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent hover:bg-surface-overlay active:scale-[var(--press-scale)]"
        >
          {t("fallbackLink")}
        </a>
        <p className="mt-[var(--space-4)] text-[length:var(--size-body-s)] text-text-tertiary">
          {t("fallbackHint")}
        </p>
      </div>
    </div>
  )
}
