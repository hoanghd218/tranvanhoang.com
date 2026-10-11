import assert from "node:assert/strict"
import { test } from "node:test"
import { getAllPosts, getAllCategories, getPostBySlug, getPostsByCategory } from "../lib/mdx.ts"

test("blog posts use their category directory and resolve their own route", () => {
  const posts = getAllPosts()
  const categories = getAllCategories()
  assert.ok(posts.length > 0)
  for (const post of posts) {
    assert.notEqual(post.category, "blog")
    assert.ok(categories.some(category => category.slug === post.category))
    assert.equal(getPostBySlug(post.category, post.slug)?.metadata.title, post.metadata.title)
    assert.ok(getPostsByCategory(post.category).some(item => item.slug === post.slug))
  }
  assert.equal(categories.reduce((count, category) => count + category.count, 0), posts.length)
})
