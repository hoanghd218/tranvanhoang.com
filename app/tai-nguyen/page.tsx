import { Metadata } from "next"
import Link from "next/link"
import {
  getAllResources,
  getResourcesByCategory,
  getResourceCategories,
} from "@/lib/resources"
import { ResourceCard, ViewToggle } from "@/components/resources"
import { GradientText } from "@/components/custom/gradient-text"
import { Container, Section } from "@/components/custom/container"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Tài nguyên | Hoàng - AI Educator",
  description:
    "Chia sẻ tài nguyên học AI, template, checklist, video và nhiều hơn nữa. Tất cả miễn phí cho cộng đồng.",
  openGraph: {
    title: "Tài nguyên | Hoàng - AI Educator",
    description: "Tài nguyên học AI miễn phí",
    type: "website",
  },
}

export default function TaiNguyenPage() {
  const allResources = getAllResources()
  const categories = getResourceCategories()
  const initialCategory = "all"
  const initialResources = getResourcesByCategory(initialCategory)

  return (
    <>
      {/* Hero Section */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Tài nguyên <GradientText>miễn phí</GradientText>
            </h1>
            <p className="text-lg text-muted-foreground">
              Template, checklist, video hướng dẫn và nhiều tài nguyên khác để
              bạn học AI hiệu quả hơn. Tất cả đều miễn phí.
            </p>
          </div>
        </Container>
      </Section>

      {/* Category Filter & View Toggle */}
      <Section className="py-8 bg-card/30">
        <Container>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              <Link
                href="/tai-nguyen"
                className="px-4 py-2 rounded-full bg-coral text-white text-sm font-medium transition-colors hover:bg-coral-dark"
              >
                Tất cả
                <span className="ml-1.5 text-xs opacity-80">
                  ({allResources.length})
                </span>
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.slug}
                  href={`/tai-nguyen?category=${category.slug}`}
                  className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground transition-colors hover:border-coral hover:text-foreground"
                >
                  {category.name}
                  <span className="ml-1.5 text-xs opacity-60">
                    ({category.count})
                  </span>
                </Link>
              ))}
            </div>

            {/* View Toggle */}
            <ViewToggle />
          </div>
        </Container>
      </Section>

      {/* Resources Grid */}
      <Section className="py-12">
        <Container>
          <div
            id="resources-grid"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {initialResources.map((resource) => (
              <ResourceCard
                key={`${resource.type}-${resource.title}`}
                resource={resource}
                viewMode="card"
              />
            ))}
          </div>

          {initialResources.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                Chưa có tài nguyên nào
              </p>
              <p className="text-sm text-muted-foreground">
                Hãy quay lại sau nhé!
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* Newsletter CTA */}
      <Section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-coral/10 to-bronze/10 border border-border">
            <h2 className="text-2xl font-semibold mb-4">
              Không bỏ lỡ tài nguyên mới
            </h2>
            <p className="text-muted-foreground mb-6">
              Đăng ký nhận tài nguyên mới qua email. Không spam, unsubscribe
              bất cứ lúc nào.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-coral"
              />
              <Button
                type="submit"
                className="bg-coral text-white hover:bg-coral-dark"
              >
                Đăng ký
              </Button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}
