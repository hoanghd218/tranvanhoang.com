import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { getTranslations } from "next-intl/server"

import { Link } from "@/i18n/navigation"
import { getAllPosts } from "@/lib/mdx"

export async function TrustSection({ locale }: { locale: string }) {
  const t = await getTranslations({ locale, namespace: "home" })
  const blog = await getTranslations({ locale, namespace: "blog" })
  const posts = getAllPosts().slice(0, 3)
  const dateFormat = new Intl.DateTimeFormat(locale === "vi" ? "vi-VN" : "en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  return (
    <section className="section-spacing bg-surface">
      <div className="container-custom">
        <div className="mb-[var(--space-7)] grid gap-[var(--space-6)] lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="eyebrow mb-[var(--space-3)]">{t("proofEyebrow")}</p>
            <h2 className="heading-md text-text-primary">
              {t("proofTitle")} {" "}
              <span className="text-gradient">{t("proofTitleHighlight")}</span>
            </h2>
          </div>
          <p className="max-w-[64ch] text-[length:var(--size-body-l)] leading-[var(--leading-loose)] text-text-secondary">
            {t("proofSubtitle")}
          </p>
        </div>

        <div className="grid gap-[var(--space-4)] md:grid-cols-3">
          {posts.map((post, index) => (
            <article key={`${post.category}-${post.slug}`} className="h-full">
              <Link
                href={{
                  pathname: "/blog/[category]/[slug]",
                  params: { category: post.category, slug: post.slug },
                }}
                locale={locale === "en" ? "vi" : undefined}
                data-home-cta={`proof_article_${index + 1}`}
                data-home-destination={`${post.category}/${post.slug}`}
                className="rk-card rk-card-interactive group flex h-full flex-col p-[var(--space-5)]"
              >
                <p className="eyebrow text-text-accent">
                  {blog(`categories.${post.category}.name`)}
                </p>
                <h3 className="mt-[var(--space-4)] font-display text-[length:var(--size-h4)] font-bold leading-[var(--leading-snug)] text-text-primary group-hover:text-text-accent">
                  {post.metadata.title}
                </h3>
                <p className="mt-[var(--space-3)] line-clamp-3 text-sm leading-[var(--leading-loose)] text-text-secondary">
                  {post.metadata.description}
                </p>
                <div className="mt-auto flex items-center gap-2 pt-[var(--space-5)] text-xs text-text-tertiary">
                  <time dateTime={post.metadata.date}>{dateFormat.format(new Date(post.metadata.date))}</time>
                  <ArrowUpRight className="ml-auto size-4 text-text-accent" strokeWidth={1.75} />
                </div>
              </Link>
            </article>
          ))}
        </div>

        {locale === "en" && (
          <p className="mt-[var(--space-4)] text-sm text-text-tertiary">
            {t("contentLanguageNote")}
          </p>
        )}

        <div className="rk-card mt-[var(--space-7)] grid gap-[var(--space-5)] p-[var(--space-5)] md:grid-cols-[auto_1fr_auto] md:items-center md:p-[var(--space-6)]">
          <div className="relative size-20 overflow-hidden rounded-[var(--radius-lg)] border border-hairline">
            <Image src="/hoang-profile.webp" alt="Tony Hoang" fill className="object-cover" sizes="80px" />
          </div>
          <div>
            <p className="eyebrow mb-2">{t("aboutEyebrow")}</p>
            <h3 className="font-display text-[length:var(--size-h4)] font-bold text-text-primary">
              {t("aboutTitle")}
            </h3>
            <p className="mt-2 max-w-[64ch] text-sm leading-[var(--leading-loose)] text-text-secondary">
              {t("aboutDescription")}
            </p>
          </div>
          <Link
            href="/about"
            data-home-cta="about"
            data-home-destination="about"
            className="inline-flex h-11 items-center gap-2 font-medium text-text-accent"
          >
            {t("aboutCta")}
            <ArrowRight className="size-4" strokeWidth={1.75} />
          </Link>
        </div>
      </div>
    </section>
  )
}
