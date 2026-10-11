import test from "node:test"
import assert from "node:assert/strict"
import { mkdtemp, readFile, writeFile, rm } from "node:fs/promises"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { syncExtensionPlans, validatePlans } from "../scripts/sync-extension-plans.mjs"

const validPlan = { skuCode: "RFLOW-PRO-1M", name: "RocketFlow Pro", plan: "pro", listPrice: 99000, durationDays: 30, renewMode: "stack", deviceLimit: 2 }

test("sync publishes real purchasable fields and strips unrelated response data", async () => {
  const directory = await mkdtemp(join(tmpdir(), "tony-catalog-"))
  const outputPath = join(directory, "plans.json")
  try {
    const snapshot = await syncExtensionPlans({ outputPath, fetchImpl: async url => {
      const product = new URL(url).searchParams.get("product")
      return { ok: true, json: async () => ({ product, items: product === "rocketflow" ? [{ ...validPlan, internalNotes: "not public" }] : [] }) }
    } })
    assert.equal(snapshot.products.rocketflow[0].skuCode, validPlan.skuCode)
    assert.equal(snapshot.products.rocketflow[0].listPrice, 99000)
    assert.equal("internalNotes" in snapshot.products.rocketflow[0], false)
    assert.deepEqual(JSON.parse(await readFile(outputPath, "utf8")), snapshot)
  } finally { await rm(directory, { recursive: true, force: true }) }
})

test("one failed product request preserves the entire previous snapshot", async () => {
  const directory = await mkdtemp(join(tmpdir(), "tony-catalog-"))
  const outputPath = join(directory, "plans.json")
  const previous = '{"previous":"catalog"}\n'
  await writeFile(outputPath, previous)
  try {
    await assert.rejects(syncExtensionPlans({ outputPath, fetchImpl: async url => {
      const product = new URL(url).searchParams.get("product")
      return product === "rocketspy" ? { ok: false, status: 503 } : { ok: true, json: async () => ({ product, items: [] }) }
    } }), /HTTP 503/)
    assert.equal(await readFile(outputPath, "utf8"), previous)
  } finally { await rm(directory, { recursive: true, force: true }) }
})

test("rejects wrong product responses, unsafe checkout codes and invalid prices", () => {
  assert.throws(() => validatePlans({ product: "rocketspy", items: [validPlan] }, "rocketflow"), /catalog response/)
  for (const skuCode of ["../../admin", "SKU?redirect=other", "SKU/OTHER"]) {
    assert.throws(() => validatePlans({ product: "rocketflow", items: [{ ...validPlan, skuCode }] }, "rocketflow"), /SKU/)
  }
  for (const listPrice of [-1, 1.5, "99000", Infinity]) {
    assert.throws(() => validatePlans({ product: "rocketflow", items: [{ ...validPlan, listPrice }] }, "rocketflow"), /price/)
  }
})
