import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug, getRelatedPosts, getAllCategories } from "@/lib/mdx";
import { GradientText } from "@/components/custom/gradient-text";
import { Container, Section } from "@/components/custom/container";
import { PostCard } from "@/components/blog/post-card";

interface BlogPostPageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);

  if (!post) {
    return {
      title: "Bài viết không tồn tại",
    };
  }

  return {
    title: `${post.metadata.title} | Hoàng - AI Educator`,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      type: "article",
      publishedTime: post.metadata.date,
      authors: [post.metadata.author || "Hoàng"],
      tags: post.metadata.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metadata.title,
      description: post.metadata.description,
    },
  };
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  const params: { category: string; slug: string }[] = [];

  for (const category of categories) {
    const { getPostsByCategory } = await import("@/lib/mdx");
    const posts = getPostsByCategory(category.slug);
    for (const post of posts) {
      params.push({
        category: post.category,
        slug: post.slug,
      });
    }
  }

  return params;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(category, slug, 3);
  const categories = getAllCategories();
  const currentCategory = categories.find((c) => c.slug === category);

  return (
    <>
      {/* Hero */}
      <Section className="py-12 md:py-16">
        <Container>
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link href="/blog" className="hover:text-coral transition-colors">
              Blog
            </Link>
            <span>/</span>
            {currentCategory && (
              <>
                <Link
                  href={`/blog/${category}`}
                  className="hover:text-coral transition-colors"
                >
                  {currentCategory.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-foreground truncate max-w-[200px]">{post.metadata.title}</span>
          </nav>

          {/* Title & Meta */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-4">
              <GradientText>{post.metadata.title}</GradientText>
            </h1>
            <p className="text-xl text-muted-foreground mb-6">
              {post.metadata.description}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
              <span>{post.metadata.date}</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span>{post.readingTime} đọc</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground" />
              <span>{post.metadata.author}</span>
            </div>

            {/* Tags */}
            {post.metadata.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center mt-6">
                {post.metadata.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground hover:bg-coral/10 hover:text-coral transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Featured Image Placeholder */}
      <Section className="py-4">
        <Container>
          <div className="max-w-4xl mx-auto aspect-video rounded-2xl bg-gradient-to-br from-coral/10 to-bronze/10 flex items-center justify-center">
            <span className="text-6xl">📝</span>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section className="py-8">
        <Container>
          <article className="max-w-3xl mx-auto prose prose-lg prose-muted">
            {/* MDX Content */}
            <div className="mdx-content">
              {/* Note: In a real implementation, you'd use MDXRemote or similar */}
              {/* For now, we'll display the raw content with basic formatting */}
              <pre className="whitespace-pre-wrap font-sans text-base leading-relaxed text-muted-foreground">
                {post.content}
              </pre>
            </div>
          </article>

          {/* Share */}
          <div className="max-w-3xl mx-auto mt-12 pt-8 border-t border-border">
            <p className="text-center text-sm text-muted-foreground mb-4">
              Chia sẻ bài viết này
            </p>
            <div className="flex justify-center gap-3">
              <button className="px-4 py-2 rounded-lg bg-[#1877F2] text-white text-sm font-medium hover:opacity-90 transition-opacity">
                Facebook
              </button>
              <button className="px-4 py-2 rounded-lg bg-[#1DA1F2] text-white text-sm font-medium hover:opacity-90 transition-opacity">
                Twitter
              </button>
              <button className="px-4 py-2 rounded-lg bg-[#0A66C2] text-white text-sm font-medium hover:opacity-90 transition-opacity">
                LinkedIn
              </button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section className="py-12 bg-card/30">
          <Container>
            <h2 className="text-2xl font-semibold text-center mb-8">
              Bài viết liên quan
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <PostCard key={relatedPost.slug} post={relatedPost} />
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section className="py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-coral/10 to-bronze/10 border border-border">
            <h2 className="text-2xl font-semibold mb-4">
              Sẵn sàng học AI?
            </h2>
            <p className="text-muted-foreground mb-6">
              Nhận bộ quà tặng miễn phí và bắt đầu hành trình AI của bạn ngay hôm nay.
            </p>
            <Link
              href="/free-gift"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-coral text-white font-medium hover:bg-coral-dark transition-colors"
            >
              🎁 Nhận quà miễn phí
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
