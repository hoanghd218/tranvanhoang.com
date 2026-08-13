"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/lib/mdx";

interface PostCardProps {
  post: BlogPost;
  /** Wider, roomier card for the lead post. Never a gradient fill. */
  featured?: boolean;
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const tCommon = useTranslations("common");

  return (
    <article className={`group h-full ${featured ? "md:col-span-2" : ""}`}>
      <Link
        href={`/blog/${post.category}/${post.slug}`}
        className={`rk-card rk-card-interactive flex h-full flex-col overflow-hidden ${
          featured ? "p-[var(--space-6)] md:p-[var(--space-7)]" : "p-[var(--space-5)]"
        }`}
      >
        {/* Featured image — rendered only when the post actually has one */}
        {post.metadata.featuredImage && (
          <div className="mb-[var(--space-5)] overflow-hidden rounded-[var(--radius-md)] border border-hairline bg-surface-inset">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.metadata.featuredImage}
              alt=""
              className="aspect-video w-full object-cover"
              loading="lazy"
            />
          </div>
        )}

        {/* Category chip */}
        <div className="mb-[var(--space-4)]">
          <span className="inline-flex items-center rounded-[var(--radius-pill)] border border-hairline-accent bg-[var(--purple-a12)] px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--size-caption)] text-text-accent">
            {post.metadata.category}
          </span>
        </div>

        {/* Title */}
        <h3
          className={`font-display font-bold text-text-primary transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] group-hover:text-text-accent ${
            featured
              ? "mb-[var(--space-3)] text-[length:var(--size-h3)] leading-snug"
              : "mb-[var(--space-2)] text-[length:var(--size-h4)] leading-snug line-clamp-2"
          }`}
        >
          {post.metadata.title}
        </h3>

        {/* Description */}
        <p
          className={`text-[length:var(--size-body-s)] leading-[var(--leading-loose)] text-text-secondary ${
            featured ? "line-clamp-3" : "line-clamp-2"
          }`}
        >
          {post.metadata.description}
        </p>

        {/* Tags */}
        {post.metadata.tags.length > 0 && (
          <div className="mt-[var(--space-4)] flex flex-wrap gap-[var(--space-2)]">
            {post.metadata.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--size-caption)] text-text-secondary"
              >
                {tag}
              </span>
            ))}
            {post.metadata.tags.length > 3 && (
              <span className="rounded-[var(--radius-pill)] border border-hairline bg-surface-overlay px-[var(--space-3)] py-[var(--space-1)] text-[length:var(--size-caption)] text-text-tertiary">
                +{post.metadata.tags.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Meta */}
        <div className="mt-auto flex items-center gap-[var(--space-3)] pt-[var(--space-5)] text-[length:var(--size-caption)] text-text-tertiary">
          <span>{post.metadata.date}</span>
          {post.readingTime && (
            <>
              <span aria-hidden="true" className="h-1 w-1 rounded-[var(--radius-pill)] bg-hairline-strong" />
              <span>{tCommon("readingTime", { minutes: post.readingTime })}</span>
            </>
          )}
          <ArrowUpRight
            className="ml-auto opacity-0 transition-opacity duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] group-hover:opacity-100"
            size={16}
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </div>
      </Link>
    </article>
  );
}
