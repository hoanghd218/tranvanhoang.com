import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

interface TimelineItemProps {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime?: string;
}

export function TimelineItem({
  slug,
  title,
  excerpt,
  date,
  readTime,
}: TimelineItemProps) {
  return (
    <article className="relative pl-8 md:pl-12 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-life-border" />

      {/* Timeline dot */}
      <div className="absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-life-sage ring-4 ring-life-background" />

      {/* Date */}
      <div className="flex items-center gap-2 text-sm text-life-sand mb-2">
        <Calendar className="w-3.5 h-3.5" />
        <time dateTime={date}>{date}</time>
        {readTime && (
          <>
            <span className="text-life-border">•</span>
            <span>{readTime}</span>
          </>
        )}
      </div>

      {/* Content */}
      <h3 className="heading-serif text-lg md:text-xl mb-2">
        <Link
          href={`/life/${slug}`}
          className="hover:text-life-sage transition-colors"
        >
          {title}
        </Link>
      </h3>

      <p className="body-serif text-muted-foreground text-sm md:text-base mb-3">
        {excerpt}
      </p>

      {/* Read more */}
      <Link
        href={`/life/${slug}`}
        className="inline-flex items-center gap-1 text-sm font-medium text-life-sage hover:text-life-sand transition-colors"
      >
        <span>Đọc tiếp</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </article>
  );
}
