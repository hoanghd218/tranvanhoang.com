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
    <article className="group relative">
      {/* Card background with life colors */}
      <div className="h-full p-6 md:p-8 rounded-2xl bg-life-card border border-life-border transition-all duration-300 hover:border-life-sage/50 hover:shadow-lg hover:shadow-life-sage/5">
        {/* Date */}
        <div className="flex items-center gap-2 text-sm text-life-sage mb-4">
          <Calendar className="w-4 h-4" />
          <time dateTime={date}>{date}</time>
          {readTime && (
            <>
              <span className="text-life-border">•</span>
              <span>{readTime}</span>
            </>
          )}
        </div>

        {/* Category tag (optional) */}
        {category && (
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-life-sage/10 text-life-sage mb-3">
            {category}
          </span>
        )}

        {/* Title */}
        <h3 className="heading-serif text-xl md:text-2xl mb-3 text-foreground group-hover:text-life-sage transition-colors">
          <Link href={`/life/${slug}`}>
            {title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="body-serif text-muted-foreground mb-6 line-clamp-3">
          {excerpt}
        </p>

        {/* Read more link */}
        <Link
          href={`/life/${slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-life-sage hover:text-life-sand transition-colors"
        >
          <span>Đọc tiếp</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
}
