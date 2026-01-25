import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronLeft, Calendar, Clock } from "lucide-react";
import { Container, Section } from "@/components/custom/container";
import { QuoteHighlight } from "@/components/life";
import { getAllLifeStories, getLifeStoryBySlug } from "@/lib/life-mdx";

interface StoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const stories = getAllLifeStories();
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getLifeStoryBySlug(slug);

  if (!story) {
    return {
      title: "Không tìm thấy | Hoàng",
    };
  }

  return {
    title: `${story.metadata.title} | Cuộc sống - Hoàng`,
    description: story.metadata.description,
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getLifeStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  return (
    <>
      {/* Breadcrumb */}
      <Section className="py-6 bg-life-card/30">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/life" className="hover:text-life-sage transition-colors">
              Cuộc sống
            </Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px]">
              {story.metadata.title}
            </span>
          </nav>
        </Container>
      </Section>

      {/* Hero */}
      <Section className="py-12">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            {/* Date and reading time */}
            <div className="flex items-center justify-center gap-4 text-sm text-life-sand mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <time dateTime={story.metadata.date}>
                  {new Date(story.metadata.date).toLocaleDateString("vi-VN", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>
                  {Math.ceil(story.content.split(/\s+/g).length / 200)} phút đọc
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="heading-serif text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight">
              {story.metadata.title}
            </h1>

            {/* Description */}
            <p className="body-serif text-lg text-muted-foreground">
              {story.metadata.description}
            </p>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section className="py-8">
        <Container>
          <article className="max-w-3xl mx-auto">
            {/* Featured Quote (if available in content) */}
            <QuoteHighlight
              quote="Cuộc sống là những khoảnh khắc nhỏ tạo nên những kỷ niệm lớn."
              author="Hoàng"
              className="mb-12"
            />

            {/* MDX Content */}
            <div className="prose prose-lg prose-invert max-w-none">
              <div className="mdx-content whitespace-pre-wrap font-sans text-base leading-relaxed text-muted-foreground">
                {story.content}
              </div>
            </div>

            {/* Back link */}
            <div className="mt-16 pt-8 border-t border-life-border">
              <Link
                href="/life"
                className="inline-flex items-center gap-2 text-life-sage hover:text-life-sand transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Quay lại Cuộc sống</span>
              </Link>
            </div>
          </article>
        </Container>
      </Section>
    </>
  );
}
