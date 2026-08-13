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

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-6 py-16">
      <div className="w-full max-w-lg rounded-2xl border border-border bg-card p-8 text-center shadow-sm">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-coral">Zalo Agents</p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight">{t("title")}</h1>
        <p className="mb-6 text-muted-foreground">{t("redirecting")}</p>
        <a
          href={ZALO_GROUP_URL}
          onClick={handleFallbackClick}
          className="inline-flex min-h-11 items-center justify-center rounded-lg bg-coral px-6 py-3 font-medium text-white transition-colors hover:bg-coral-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2"
        >
          {t("fallbackLink")}
        </a>
        <p className="mt-4 text-sm text-muted-foreground">{t("fallbackHint")}</p>
      </div>
    </div>
  )
}
