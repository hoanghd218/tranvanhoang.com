export const ZALO_GROUP_URL = "https://zalo.me/g/jlfoycrklxfw3fyfecbw"
export const ZALO_REDIRECT_EVENT = "zalo_redirect_clicked"
export const ZALO_REDIRECT_TIMEOUT_MS = 800

const MAX_VALUE_LENGTH = 100
const CLICK_ID_KEYS = ["gclid", "fbclid", "ttclid", "msclkid"] as const

type TrackingValue = string | undefined

export type ZaloTrackingParams = {
  destination: "zalo_agents_group"
  utm_source: string
  utm_medium: string
  utm_campaign?: TrackingValue
  utm_content?: TrackingValue
  utm_term?: TrackingValue
  utm_id?: TrackingValue
  referrer_host?: TrackingValue
  click_id?: TrackingValue
}

function normalizeValue(value: string | null): TrackingValue {
  if (!value) return undefined

  const normalized = value
    .trim()
    .toLowerCase()
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .slice(0, MAX_VALUE_LENGTH)

  return normalized || undefined
}

function getReferrerHost(referrer: string): TrackingValue {
  if (!referrer) return undefined

  try {
    return normalizeValue(new URL(referrer).hostname)
  } catch {
    return undefined
  }
}

export function getZaloTrackingParams(search: string, referrer = ""): ZaloTrackingParams {
  const query = new URLSearchParams(search)
  const clickId = CLICK_ID_KEYS.map((key) => query.get(key)).map(normalizeValue).find(Boolean)

  return {
    destination: "zalo_agents_group",
    utm_source: normalizeValue(query.get("utm_source")) ?? "direct",
    utm_medium: normalizeValue(query.get("utm_medium")) ?? "none",
    utm_campaign: normalizeValue(query.get("utm_campaign")),
    utm_content: normalizeValue(query.get("utm_content")),
    utm_term: normalizeValue(query.get("utm_term")),
    utm_id: normalizeValue(query.get("utm_id")),
    referrer_host: getReferrerHost(referrer),
    click_id: clickId,
  }
}

export type Gtag = (command: "event", eventName: string, params: Record<string, unknown>) => void

declare global {
  interface Window {
    gtag?: Gtag
  }
}
