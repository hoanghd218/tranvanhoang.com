import snapshot from "./data/extension-plans.json"

export type ExtensionCode = "rocketflow" | "rocketlisting" | "rocketspy"
export type ExtensionPlan = {
  skuCode: string
  name: string
  plan: string
  listPrice: number
  durationDays: number | null
  renewMode: string | null
  deviceLimit: number | null
}
export function getExtensionPlans(code: ExtensionCode): ExtensionPlan[] {
  return snapshot.products[code] as ExtensionPlan[]
}
export function extensionCheckoutUrl(skuCode: string) {
  return `https://api-edu.ainexus.vn/pay/${encodeURIComponent(skuCode)}`
}
