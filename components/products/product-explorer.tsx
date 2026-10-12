"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, ArrowRight } from "lucide-react"
import { getLocalizedProducts, getLocalizedCategories } from "@/lib/products"
import { ProductCard, productIcons } from "./product-card"

const normalize = (value: string) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").toLowerCase()
export function ProductExplorer({ initialCategory = "all", initialQuery = "", locale = "en" }: { initialCategory?: string; initialQuery?: string; locale?: string }) {
  const english = locale === "en"
  const products = getLocalizedProducts(locale)
  const productCategories = getLocalizedCategories(locale)
  const router = useRouter()
  const [category, setCategory] = useState(initialCategory)
  const [query, setQuery] = useState(initialQuery)
  const items = products.filter(product => (category === "all" || product.category === category) && normalize(`${product.name} ${product.description}`).includes(normalize(query)))
  function choose(value: string, search = query) {
    setCategory(value)
    const url = new URL(window.location.href)
    if (value === "all") url.searchParams.delete("category"); else url.searchParams.set("category", value)
    if (search.trim()) url.searchParams.set("q", search.trim()); else url.searchParams.delete("q")
    router.push(`${url.pathname}${url.search}`, { scroll: false })
  }
  return <>
    <div className="catalog-toolbar"><div className="catalog-filters" aria-label={english ? "Product categories" : "Loại sản phẩm"}><button aria-pressed={category === "all"} onClick={() => choose("all")}>{english ? "All" : "Tất cả"}</button>{productCategories.map(item => {
      const Icon = productIcons[item.id]
      return <button key={item.id} aria-pressed={category === item.id} onClick={() => choose(item.id)}><Icon size={17} aria-hidden="true" />{item.name}</button>
    })}</div><form className="catalog-search" role="search" onSubmit={event => { event.preventDefault(); choose(category) }}><Search size={18} aria-hidden="true" /><label className="sr-only" htmlFor="product-search">{english ? "Search products" : "Tìm sản phẩm"}</label><input id="product-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder={english ? "Search products…" : "Tìm sản phẩm…"} /><button type="submit">{english ? "Search" : "Tìm"}</button></form></div>
    <p className="catalog-count" role="status">{items.length} {english ? (items.length === 1 ? "product" : "products") : "sản phẩm"}{category !== "all" ? ` · ${productCategories.find(item => item.id === category)?.name || "Danh mục"}` : ""}</p>
    {items.length ? <div className="product-grid">{items.map(product => <ProductCard key={product.slug} product={product} locale={locale} />)}</div> : <div className="catalog-empty"><Search size={30} strokeWidth={1} aria-hidden="true" /><h2>{query ? (english ? "No products found." : "Không tìm thấy sản phẩm.") : (english ? "Products are being updated." : "Sản phẩm đang được cập nhật.")}</h2><p>{query ? (english ? "Try another keyword or browse all products." : "Thử một từ khóa khác hoặc xem toàn bộ sản phẩm.") : (english ? "Explore the available products while waiting for future updates." : "Khám phá các sản phẩm hiện có trong lúc chờ những cập nhật tiếp theo.")}</p><button className="theme-link theme-link--secondary" onClick={() => { choose("all", ""); setQuery("") }}>{english ? "View all products" : "Xem tất cả sản phẩm"} <ArrowRight size={17} aria-hidden="true" /></button></div>}
  </>
}
