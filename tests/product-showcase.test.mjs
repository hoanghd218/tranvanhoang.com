import test from "node:test"
import assert from "node:assert/strict"
import { readFile } from "node:fs/promises"
import { getProductShowcase } from "../lib/product-showcase.ts"

const snapshot = JSON.parse(await readFile(new URL("../lib/data/product-media.json", import.meta.url), "utf8"))

test("each extension showcase references existing unique captures from its own published collection", () => {
  for (const slug of ["rocketflow", "rocketlisting", "rocketspy"]) {
    const images = snapshot.images.filter(image => image.product === slug)
    const showcase = getProductShowcase(slug, images)
    assert.ok(images.includes(showcase.hero), `${slug} hero is not published`)
    assert.equal(showcase.tour.length, 3, `${slug} is missing a curated capture`)
    assert.equal(new Set([showcase.hero.id, ...showcase.tour.map(item => item.image.id)]).size, 4)
    for (const item of showcase.tour) {
      assert.ok(images.includes(item.image))
      assert.ok(item.title.trim())
      assert.equal(item.image.product, slug)
    }
  }
})

test("missing curated media falls back to available image and omits unavailable tour entries", () => {
  const images = snapshot.images.filter(image => image.product === "rocketflow")
  const full = getProductShowcase("rocketflow", images)
  const fallback = images.find(image => image.id !== full.hero.id && !full.tour.some(item => item.image.id === image.id))
  assert.ok(fallback)
  const partial = getProductShowcase("rocketflow", [fallback, full.tour[0].image])
  assert.equal(partial.hero, fallback)
  assert.equal(partial.tour.length, 1)
  assert.equal(partial.tour[0].image, full.tour[0].image)
  assert.deepEqual(getProductShowcase("rocketflow", []), { hero: undefined, tour: [] })
})

test("non-extension products safely omit curated tour and accept an optional fallback", () => {
  const fallback = snapshot.images[0]
  assert.deepEqual(getProductShowcase("coloring-book-skill", []), { hero: undefined, tour: [] })
  assert.deepEqual(getProductShowcase("unknown-product", [fallback]), { hero: fallback, tour: [] })
})
