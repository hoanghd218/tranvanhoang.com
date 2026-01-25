import { Quote } from "lucide-react";

interface QuoteHighlightProps {
  quote: string;
  author?: string;
  className?: string;
}

export function QuoteHighlight({ quote, author, className = "" }: QuoteHighlightProps) {
  return (
    <figure
      className={`relative max-w-2xl mx-auto my-12 text-center ${className}`}
    >
      {/* Decorative quote icon */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-life-card border border-life-border flex items-center justify-center">
        <Quote className="w-5 h-5 text-life-sage" />
      </div>

      {/* Quote content */}
      <blockquote className="body-serif text-xl md:text-2xl text-foreground italic leading-relaxed px-8 pt-8">
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      {author && (
        <figcaption className="mt-4 text-sm text-muted-foreground font-sans">
          — {author}
        </figcaption>
      )}

      {/* Decorative line */}
      <div className="mt-6 flex items-center justify-center gap-4">
        <div className="w-12 h-px bg-life-sage/30" />
        <div className="w-2 h-2 rounded-full bg-life-sage" />
        <div className="w-12 h-px bg-life-sage/30" />
      </div>
    </figure>
  );
}
