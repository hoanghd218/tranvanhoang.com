"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, ArrowRight } from "lucide-react"
import { products, productCategories } from "@/lib/products"
import { ProductCard, productIcons } from "./product-card"

const normalize = (value: string) => value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").toLowerCase()
export function ProductExplorer({ initialCategory = "all", initialQuery = "", locale = "vi" }: { initialCategory?: string; initialQuery?: string; locale?: string }) {
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
    <div className="catalog-toolbar"><div className="catalog-filters" aria-label="Loại sản phẩm"><button aria-pressed={category === "all"} onClick={() => choose("all")}>Tất cả</button>{productCategories.map(item => {
      const Icon = productIcons[item.id]
      return <button key={item.id} aria-pressed={category === item.id} onClick={() => choose(item.id)}><Icon size={17} aria-hidden="true" />{item.name}</button>
    })}</div><form className="catalog-search" role="search" onSubmit={event => { event.preventDefault(); choose(category) }}><Search size={18} aria-hidden="true" /><label className="sr-only" htmlFor="product-search">Tìm sản phẩm</label><input id="product-search" type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="Tìm sản phẩm…" /><button type="submit">Tìm</button></form></div>
    <p className="catalog-count" role="status">{items.length} sản phẩm{category !== "all" ? ` · ${productCategories.find(item => item.id === category)?.name || "Danh mục"}` : ""}</p>
    {items.length ? <div className="product-grid">{items.map(product => <ProductCard key={product.slug} product={product} locale={locale} />)}</div> : <div className="catalog-empty"><Search size={30} strokeWidth={1} aria-hidden="true" /><h2>{query ? "Không tìm thấy sản phẩm." : "Sản phẩm đang được cập nhật."}</h2><p>{query ? "Thử một từ khóa khác hoặc xem toàn bộ sản phẩm." : "Khám phá các sản phẩm hiện có trong lúc chờ những cập nhật tiếp theo."}</p><button className="theme-link theme-link--secondary" onClick={() => { choose("all", ""); setQuery("") }}>Xem tất cả sản phẩm <ArrowRight size={17} aria-hidden="true" /></button></div>}
  </>
}
