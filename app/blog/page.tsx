import { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, getAllCategories, getTagCounts } from "@/lib/mdx";
import { PostCard } from "@/components/blog/post-card";
import { GradientText } from "@/components/custom/gradient-text";
import { Container, Section } from "@/components/custom/container";

export const metadata: Metadata = {
  title: "Blog | Hoàng - AI Educator",
  description: "Chia sẻ kiến thức về AI, marketing, và trải nghiệm thực tế. Học AI từ cơ bản đến nâng cao.",
  openGraph: {
    title: "Blog | Hoàng - AI Educator",
    description: "Chia sẻ kiến thức về AI cho người mới",
    type: "website",
  },
};

const POSTS_PER_PAGE = 9;

export default function BlogPage() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();
  const tagCounts = getTagCounts();
  const popularTags = Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);

  return (
    <>
      {/* Hero Section */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">
              Blog <GradientText>AI & Marketing</GradientText>
            </h1>
            <p className="text-lg text-muted-foreground">
              Chia sẻ kiến thức, kinh nghiệm và hướng dẫn về AI cho người mới bắt đầu.
              Không có thuật ngữ phức tạp, chỉ có những gì bạn thực sự cần.
            </p>
          </div>
        </Container>
      </Section>

      {/* Categories */}
      <Section className="py-8 bg-card/30">
        <Container>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog"
              className="px-4 py-2 rounded-full bg-coral text-white text-sm font-medium transition-colors hover:bg-coral-dark"
            >
              Tất cả
            </Link>
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/${category.slug}`}
                className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-muted-foreground transition-colors hover:border-coral hover:text-foreground"
              >
                {category.name}
                <span className="ml-1.5 text-xs opacity-60">({category.count})</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* Posts Grid */}
      <Section className="py-12">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.slice(0, POSTS_PER_PAGE).map((post) => (
              <PostCard key={`${post.category}-${post.slug}`} post={post} />
            ))}
          </div>

          {allPosts.length > POSTS_PER_PAGE && (
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Hiện có {allPosts.length} bài viết
              </p>
              <button className="px-6 py-2 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors">
                Xem thêm bài viết
              </button>
            </div>
          )}

          {allPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground mb-4">
                Chưa có bài viết nào
              </p>
              <p className="text-sm text-muted-foreground">
                Hãy quay lại sau nhé!
              </p>
            </div>
          )}
        </Container>
      </Section>

      {/* Popular Tags */}
      {popularTags.length > 0 && (
        <Section className="py-12 bg-card/30">
          <Container>
            <h2 className="text-xl font-semibold text-center mb-6">
              Chủ đề phổ biến
            </h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {popularTags.map(([tag, count]) => (
                <Link
                  key={tag}
                  href={`/blog/tags/${tag}`}
                  className="px-3 py-1.5 rounded-lg bg-card border border-border text-sm text-muted-foreground hover:border-coral hover:text-foreground transition-colors"
                >
                  #{tag}
                  <span className="ml-1.5 text-xs opacity-60">({count})</span>
                </Link>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Newsletter CTA */}
      <Section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-coral/10 to-bronze/10 border border-border">
            <h2 className="text-2xl font-semibold mb-4">
              Không bỏ lỡ bài viết mới
            </h2>
            <p className="text-muted-foreground mb-6">
              Đăng ký nhận bài viết mới qua email. Không spam, unsubscribe bất cứ lúc nào.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-2 rounded-lg bg-background border border-border focus:outline-none focus:ring-2 focus:ring-coral"
              />
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors"
              >
                Đăng ký
              </button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  );
}
