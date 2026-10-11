#!/usr/bin/env node
// Read-only public catalog sync. The site consumes this snapshot without browser API calls.
import { mkdir, rename, rm, writeFile } from "node:fs/promises"
import { dirname } from "node:path"
import { fileURLToPath, pathToFileURL } from "node:url"
import { randomUUID } from "node:crypto"

export const productIds = ["rocketflow", "rocketlisting", "rocketspy"]
const endpoint = "https://api-edu.ainexus.vn/ext/v1/plans"
const snapshotPath = fileURLToPath(new URL("../lib/data/extension-plans.json", import.meta.url))

function fail(message) { throw new Error(message) }
function boundedText(value, label, maximum) {
  if (typeof value !== "string" || !value.trim() || value.length > maximum || /[\u0000-\u001f\u007f]/u.test(value)) fail(`Invalid ${label}`)
  return value.trim()
}
function positiveOrNull(value, label) {
  if (value !== null && (!Number.isSafeInteger(value) || value <= 0)) fail(`Invalid ${label}`)
  return value
}
export function validatePlans(body, product) {
  if (!body || typeof body !== "object" || body.product !== product || !Array.isArray(body.items) || body.items.length > 1000) fail(`Invalid ${product} catalog response`)
  const seen = new Set()
  return body.items.map((item, index) => {
    const label = `${product} item ${index + 1}`
    if (!item || typeof item !== "object" || Array.isArray(item)) fail(`Invalid ${label}`)
    const skuCode = boundedText(item.skuCode, `${label} SKU`, 128)
    if (!/^[A-Za-z0-9_-]+$/u.test(skuCode) || seen.has(skuCode)) fail(`Invalid or duplicate ${label} SKU`)
    seen.add(skuCode)
    const name = boundedText(item.name, `${label} name`, 240)
    const plan = boundedText(item.plan, `${label} plan`, 64)
    if (!Number.isSafeInteger(item.listPrice) || item.listPrice < 0) fail(`Invalid ${label} price`)
    if (item.renewMode !== null && item.renewMode !== "stack") fail(`Invalid ${label} renewal mode`)
    return { skuCode, name, plan, listPrice: item.listPrice, durationDays: positiveOrNull(item.durationDays, `${label} duration`), renewMode: item.renewMode, deviceLimit: positiveOrNull(item.deviceLimit, `${label} device limit`) }
  })
}

export async function syncExtensionPlans({ fetchImpl = fetch, outputPath = snapshotPath } = {}) {
  // Validate every response before touching the existing snapshot.
  const entries = await Promise.all(productIds.map(async product => {
    const response = await fetchImpl(`${endpoint}?product=${product}`, {
      headers: { Accept: "application/json", "X-Ext-Version": "1.0.3", "User-Agent": "Mozilla/5.0 (compatible; TonyHoangCatalogSync/1.0)" },
      signal: AbortSignal.timeout(20_000),
    })
    if (!response.ok) fail(`${product}: public catalog returned HTTP ${response.status}`)
    const body = await response.json()
    return [product, validatePlans(body, product)]
  }))
  const snapshot = { updatedAt: new Date().toISOString(), products: Object.fromEntries(entries) }
  await mkdir(dirname(outputPath), { recursive: true })
  const temporaryPath = `${outputPath}.${randomUUID()}.tmp`
  try {
    await writeFile(temporaryPath, `${JSON.stringify(snapshot, null, 2)}\n`, { flag: "wx" })
    await rename(temporaryPath, outputPath)
  } finally {
    await rm(temporaryPath, { force: true })
  }
  return snapshot
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  try {
    const snapshot = await syncExtensionPlans()
    console.log(`Updated public extension plans: ${productIds.map(id => `${id}=${snapshot.products[id].length}`).join(", ")}`)
  } catch (error) {
    console.error(`Catalog sync failed; existing snapshot preserved: ${error instanceof Error ? error.message : String(error)}`)
    process.exitCode = 1
  }
}
