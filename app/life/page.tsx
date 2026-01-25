import { Metadata } from "next";
import { Container, Section } from "@/components/custom/container";
import { LifeHero, TimelineNav, TimelineItem, QuoteHighlight } from "@/components/life";
import { getAllLifeStories, getAllYears, type LifeStory } from "@/lib/life-mdx";

export const metadata: Metadata = {
  title: "Cuộc sống | Hoàng",
  description: "Nhật ký cuộc sống, những khoảnh khắc và bài học từ hành trình của tôi.",
};

export default function LifePage() {
  const stories = getAllLifeStories();
  const years = getAllYears();
  const currentYear = years[0] || "2025";

  // Group stories by year
  const storiesByYear = stories.reduce<Record<string, LifeStory[]>>((acc, story) => {
    const year = story.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(story);
    return acc;
  }, {});

  // Featured quote for the page
  const pageQuote = "Cuộc sống không phải là những gì xảy ra với bạn, mà là những gì bạn làm với những gì xảy ra với bạn.";

  return (
    <>
      {/* Hero Section */}
      <LifeHero
        subtitle="Nhật ký cá nhân"
        title="Cuộc sống"
        description="Đây là nơi tôi chia sẻ những khoảnh khắc, suy nghĩ và bài học từ hành trình của mình. Mong rằng những câu chuyện này sẽ mang đến cho bạn một góc nhìn khác về cuộc sống."
      />

      {/* Timeline Navigation */}
      {years.length > 0 && (
        <TimelineNav
          years={years}
          currentYear={currentYear}
        />
      )}

      {/* Stories by Year */}
      <Section className="py-8">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Quote Highlight */}
            <QuoteHighlight
              quote={pageQuote}
              author="Khuyết danh"
              className="mb-16"
            />

            {/* Stories Timeline */}
            <div className="space-y-16">
              {years.map((year) => (
                <div key={year} className="relative">
                  {/* Year header */}
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px bg-life-sage/30 flex-1" />
                    <h2 className="heading-serif text-2xl text-life-sage">
                      {year}
                    </h2>
                    <div className="h-px bg-life-sage/30 flex-1" />
                  </div>

                  {/* Stories for this year */}
                  <div className="space-y-8">
                    {storiesByYear[year]?.map((story) => (
                      <TimelineItem
                        key={story.slug}
                        slug={story.slug}
                        title={story.metadata.title}
                        excerpt={story.metadata.description}
                        date={story.metadata.date}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {stories.length === 0 && (
              <div className="text-center py-16">
                <p className="body-serif text-muted-foreground">
                  Chưa có câu chuyện nào được đăng tải.
                  <br />
                  Hãy quay lại sau nhé!
                </p>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Footer CTA */}
      <Section className="py-16 bg-life-card/50">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="heading-serif text-2xl mb-4">
              Theo dõi hành trình của tôi
            </h2>
            <p className="body-serif text-muted-foreground mb-6">
              Đăng ký nhận tin để không bỏ lỡ những câu chuyện mới nhất.
            </p>
            <a
              href="/free-gift"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-life-sage text-white font-medium hover:bg-life-sage-dark transition-colors"
            >
              <span>Đăng ký nhận tin</span>
            </a>
          </div>
        </Container>
      </Section>
    </>
  );
}
