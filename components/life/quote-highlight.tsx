interface QuoteHighlightProps {
  quote: string;
  author?: string;
  className?: string;
}

/**
 * Pull quote. Display face, large, primary text, with a single purple hairline
 * rule. No icon badge, no decorative dots — the rule carries it.
 */
export function QuoteHighlight({ quote, author, className = "" }: QuoteHighlightProps) {
  return (
    <figure className={`my-12 max-w-[var(--max-width-prose)] ${className}`}>
      {/* Quote rule */}
      <div aria-hidden="true" className="mb-[var(--space-5)] h-px w-16 bg-hairline-accent" />

      <blockquote className="font-display text-[length:var(--size-h3)] font-medium leading-[var(--leading-snug)] tracking-[var(--tracking-h2)] text-text-primary md:text-[length:var(--size-h2)]">
        {quote}
      </blockquote>

      {author && (
        <figcaption className="mt-[var(--space-4)] text-[length:var(--size-body-s)] text-text-tertiary">
          — {author}
        </figcaption>
      )}
    </figure>
  );
}
