import { getTranslations, setRequestLocale } from "next-intl/server"
import { Link } from "@/i18n/navigation"
import { notFound } from "next/navigation"
import { ChevronLeft, Calendar, Clock } from "lucide-react"
import { Container, Section } from "@/components/custom/container"
import { QuoteHighlight } from "@/components/life"
import { getAllLifeStories, getLifeStoryBySlug } from "@/lib/life-mdx"

interface StoryPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export async function generateStaticParams() {
  const stories = getAllLifeStories()
  return stories.map((story) => ({
    slug: story.slug,
  }))
}

export async function generateMetadata({ params }: StoryPageProps) {
  const { locale, slug } = await params
  const t = await getTranslations({ locale, namespace: "life" })
  const story = getLifeStoryBySlug(slug)

  if (!story) {
    return { title: t("storyNotFound") }
  }

  return {
    title: `${story.metadata.title} | ${t("storyTitleSuffix")}`,
    description: story.metadata.description,
    alternates: {
      canonical: `https://tranvanhoang.com/life/${slug}`,
    },
  }
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { locale, slug } = await params
  setRequestLocale(locale)
  const t = await getTranslations({ locale, namespace: "life" })
  const story = getLifeStoryBySlug(slug)

  if (!story) {
    notFound()
  }

  const dateLocale = locale === "vi" ? "vi-VN" : "en-US"
  const readingMinutes = Math.ceil(story.content.split(/\s+/g).length / 200)

  return (
    <>
      {/* Breadcrumb */}
      <Section className="border-b border-hairline py-6">
        <Container>
          <nav className="flex items-center gap-[var(--space-2)] text-[length:var(--size-body-s)] text-text-tertiary">
            <Link
              href="/life"
              className="transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-text-primary"
            >
              {t("breadcrumbLife")}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="max-w-[200px] truncate text-text-secondary">
              {story.metadata.title}
            </span>
          </nav>
        </Container>
      </Section>

      {/* Hero — the one 42° field on this screen, at its dimmer setting */}
      <Section className="rk-field rk-field-soft py-12 md:py-16">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Date and reading time */}
            <div className="mb-[var(--space-5)] flex flex-wrap items-center gap-[var(--space-4)] text-[length:var(--size-body-s)] text-text-tertiary">
              <div className="flex items-center gap-[var(--space-2)]">
                <Calendar size={16} strokeWidth={1.75} aria-hidden="true" />
                <time dateTime={story.metadata.date}>
                  {new Date(story.metadata.date).toLocaleDateString(dateLocale, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex items-center gap-[var(--space-2)]">
                <Clock size={16} strokeWidth={1.75} aria-hidden="true" />
                <span>{readingMinutes} {t("minutesRead")}</span>
              </div>
            </div>

            {/* Title */}
            <h1 className="heading-serif-lg mb-[var(--space-5)] text-text-primary">
              {story.metadata.title}
            </h1>

            {/* Description */}
            <p className="body-serif">{story.metadata.description}</p>
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section className="py-8">
        <Container>
          <article className="max-w-3xl mx-auto">
            {/* Featured Quote */}
            <QuoteHighlight
              quote={t("featuredQuote")}
              author={t("featuredQuoteAuthor")}
              className="mb-12"
            />

            {/* MDX Content — 64ch reading column */}
            <div className="mdx-content max-w-[var(--max-width-prose)] whitespace-pre-wrap font-sans text-[length:var(--size-body-l)] leading-[var(--leading-loose)] text-text-secondary">
              {story.content}
            </div>

            {/* Back link */}
            <div className="mt-16 border-t border-hairline pt-8">
              <Link
                href="/life"
                className="inline-flex items-center gap-[var(--space-2)] text-[length:var(--size-body-s)] font-medium text-purple-300 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-text-primary"
              >
                <ChevronLeft size={16} strokeWidth={1.75} aria-hidden="true" />
                <span>{t("backToLife")}</span>
              </Link>
            </div>
          </article>
        </Container>
      </Section>
    </>
  )
}
