import { ProductExplorer } from "@/components/products/product-explorer"
import { productCategories } from "@/lib/products"

export const metadata = { title: "Sản phẩm", description: "AI skills, phần mềm, Chrome extensions và ứng dụng di động của Tony Hoang." }
export default async function ProductsPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ category?: string | string[]; q?: string | string[] }> }) {
  const { locale } = await params
  const query = await searchParams
  const selectedCategory = Array.isArray(query.category) ? query.category[0] : query.category
  const search = (Array.isArray(query.q) ? query.q[0] : query.q)?.slice(0, 300) || ""
  const category = productCategories.some(item => item.id === selectedCategory) ? selectedCategory : "all"
  return <div className="editorial-home catalog-page"><div className="editorial-container">
    <header className="page-intro"><p className="eyebrow">The Workshop · Tony Hoang</p><h1>Sản phẩm & công cụ.</h1><p>AI skills, phần mềm và những tiện ích tôi xây dựng. Tìm công cụ phù hợp với cách bạn làm việc.</p></header>
    <ProductExplorer key={`${category}:${search}`} initialCategory={category} initialQuery={search} locale={locale} />
  </div></div>
}
