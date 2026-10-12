import { RoboShell } from "@/components/editorial/robo-shell"
import { ProductExplorer } from "@/components/products/product-explorer"
import { productCategories } from "@/lib/products"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return locale === "en" ? { title: "Products", description: "AI skills, software, Chrome extensions and mobile apps by Tony Hoang." } : { title: "Sản phẩm", description: "AI skills, phần mềm, Chrome extensions và ứng dụng di động của Tony Hoang." }
}
export default async function ProductsPage({ params, searchParams }: { params: Promise<{ locale: string }>; searchParams: Promise<{ category?: string | string[]; q?: string | string[] }> }) {
  const { locale } = await params
  const query = await searchParams
  const selectedCategory = Array.isArray(query.category) ? query.category[0] : query.category
  const search = (Array.isArray(query.q) ? query.q[0] : query.q)?.slice(0, 300) || ""
  const category = productCategories.some(item => item.id === selectedCategory) ? selectedCategory : "all"
  const english = locale === "en"
  return <RoboShell locale={locale}><div className="catalog-page"><div className="editorial-container">
    <header className="page-intro" data-reveal><span className="rl-tag">THE WORKSHOP · TONY HOANG</span><h1>{english ? "Tools for your next idea." : "Công cụ cho ý tưởng tiếp theo."}</h1><p>{english ? "Explore AI skills and apps built for everyday work." : "Khám phá AI skills và những ứng dụng tôi xây dựng từ công việc mỗi ngày."}</p></header>
    <ProductExplorer key={`${category}:${search}`} initialCategory={category} initialQuery={search} locale={locale} />
  </div></div></RoboShell>
}
