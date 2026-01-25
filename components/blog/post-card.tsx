"use client";

import Link from "next/link";
import { BlogPost } from "@/lib/mdx";
import { GradientText } from "@/components/custom/gradient-text";

export function PostCard({ post }: { post: BlogPost }) {
  return (
    <article className="group">
      <Link
        href={`/blog/${post.category}/${post.slug}`}
        className="block bg-card border border-border rounded-xl overflow-hidden transition-all duration-300 hover:border-coral/50 hover:shadow-lg"
      >
        {/* Featured Image Placeholder */}
        <div className="aspect-video bg-gradient-to-br from-coral/10 to-bronze/10 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl">📝</span>
          </div>
          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-background/80 backdrop-blur-sm border border-border">
              {post.metadata.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title */}
          <h3 className="text-lg font-semibold mb-2 group-hover:text-coral transition-colors line-clamp-2">
            <GradientText>{post.metadata.title}</GradientText>
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {post.metadata.description}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{post.metadata.date}</span>
            <span>{post.readingTime}</span>
          </div>

          {/* Tags */}
          {post.metadata.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-3">
              {post.metadata.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
              {post.metadata.tags.length > 3 && (
                <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                  +{post.metadata.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      </Link>
    </article>
  );
}
