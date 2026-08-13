import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface StoryCardProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category?: string;
  readTime?: string;
}

export function StoryCard({
  slug,
  title,
  excerpt,
  date,
  category,
  readTime,
}: StoryCardProps) {
  return (
    <article className="group h-full">
      <div className="rk-card rk-card-interactive flex h-full flex-col p-[var(--space-6)] md:p-[var(--space-7)]">
        {/* Date */}
        <div className="mb-[var(--space-4)] flex items-center gap-[var(--space-2)] text-[length:var(--size-caption)] text-text-tertiary">
          <Calendar size={16} strokeWidth={1.75} aria-hidden="true" />
          <time dateTime={date}>{date}</time>
          {readTime && (
            <>
              <span aria-hidden="true" className="h-1 w-1 rounded-[var(--radius-pill)] bg-hairline-strong" />
              <span>{readTime}</span>
            </>
          )}
        </div>

        {/* Category chip */}
        {category && (
          <span className="mb-[var(--space-3)] inline-flex w-fit items-center rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--size-caption)] text-text-secondary">
            {category}
          </span>
        )}

        {/* Title */}
        <h3 className="heading-serif mb-[var(--space-3)] text-[length:var(--size-h3)] leading-[var(--leading-snug)] text-text-primary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] group-hover:text-purple-300">
          <Link href={`/life/${slug}`}>{title}</Link>
        </h3>

        {/* Excerpt */}
        <p className="mb-[var(--space-6)] line-clamp-3 text-[length:var(--size-body-l)] leading-[var(--leading-loose)] text-text-secondary">
          {excerpt}
        </p>

        {/* Read more */}
        <Link
          href={`/life/${slug}`}
          className="mt-auto inline-flex items-center gap-[var(--space-2)] text-[length:var(--size-body-s)] font-medium text-purple-300 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-text-primary"
        >
          <span>Đọc tiếp</span>
          <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
