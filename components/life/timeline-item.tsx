import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

interface TimelineItemProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
}

/**
 * Timeline row. The rail is a hairline; the node is a purple dot with a small
 * glow. Row surface uses the list-row radius.
 */
export function TimelineItem({
  slug,
  title,
  excerpt,
  date,
  readTime,
}: TimelineItemProps) {
  return (
    <article className="group relative pb-12 pl-8 last:pb-0 md:pl-12">
      {/* Timeline rail — a hairline, nothing heavier */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-px bg-hairline" />

      {/* Node */}
      <div
        aria-hidden="true"
        className="absolute left-[-3px] top-[14px] h-[7px] w-[7px] rounded-[var(--radius-pill)] bg-purple-300 shadow-glow-sm transition-shadow duration-[var(--duration-base)] ease-[var(--ease-trajectory)] group-hover:shadow-glow-md"
      />

      {/* List row */}
      <div className="-mx-[var(--space-3)] rounded-[var(--radius-md)] px-[var(--space-3)] py-[var(--space-3)] transition-colors duration-[var(--duration-base)] ease-[var(--ease-trajectory)] group-hover:bg-surface-overlay">
        {/* Date */}
        <div className="mb-[var(--space-2)] flex items-center gap-[var(--space-2)] text-[length:var(--size-caption)] text-text-tertiary">
          <Calendar size={16} strokeWidth={1.75} aria-hidden="true" />
          <time dateTime={date}>{date}</time>
          {readTime && (
            <>
              <span aria-hidden="true" className="h-1 w-1 rounded-[var(--radius-pill)] bg-hairline-strong" />
              <span>{readTime}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h3 className="heading-serif mb-[var(--space-2)] text-[length:var(--size-h4)] leading-[var(--leading-snug)] text-text-primary md:text-[length:var(--size-h3)]">
          <Link
            href={`/life/${slug}`}
            className="transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-purple-300"
          >
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="mb-[var(--space-3)] max-w-[var(--max-width-prose)] text-[length:var(--size-body)] leading-[var(--leading-loose)] text-text-secondary md:text-[length:var(--size-body-l)]">
          {excerpt}
        </p>

        {/* Read more */}
        <Link
          href={`/life/${slug}`}
          className="inline-flex items-center gap-[var(--space-2)] text-[length:var(--size-body-s)] font-medium text-purple-300 transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:text-text-primary"
        >
          <span>Đọc tiếp</span>
          <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
