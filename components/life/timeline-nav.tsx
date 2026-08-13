"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TimelineNavProps {
  years: string[];
  currentYear: string;
}

export function TimelineNav({ years, currentYear }: TimelineNavProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();
  const scrollRef = useRef<HTMLDivElement>(null);
  const maxScroll = Math.max(0, years.length * 80 - 240);

  const handleYearClick = (year: string) => {
    // Update URL without full page reload
    const params = new URLSearchParams(window.location.search);
    params.set("year", year);
    router.push(`/life?${params.toString()}`, { scroll: true });
    // Scroll to top of stories
    window.scrollTo({ top: 300, behavior: "smooth" });
  };

  const scrollBy = (delta: number) => {
    if (scrollRef.current) {
      const newPosition = Math.max(0, Math.min(maxScroll, scrollPosition + delta));
      scrollRef.current.scrollTo({ left: newPosition, behavior: "smooth" });
      setScrollPosition(newPosition);
    }
  };

  const arrowClass =
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-hairline-strong text-text-secondary transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] hover:border-hairline-accent hover:bg-surface-overlay disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-hairline-strong disabled:hover:bg-transparent";

  return (
    <div className="sticky top-0 z-10 mb-8 border-b border-hairline bg-surface py-[var(--space-4)]">
      <div className="container-custom flex items-center gap-[var(--space-4)]">
        {/* Previous */}
        <button
          onClick={() => scrollBy(-200)}
          disabled={scrollPosition <= 0}
          className={arrowClass}
          aria-label="Scroll left"
        >
          <ChevronLeft size={20} strokeWidth={1.75} aria-hidden="true" />
        </button>

        {/* Years */}
        <div
          ref={scrollRef}
          className="scrollbar-hide flex flex-1 items-center gap-[var(--space-2)] overflow-x-auto"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {years.map((year) => {
            const isActive = year === currentYear;
            return (
              <button
                key={year}
                onClick={() => handleYearClick(year)}
                aria-current={isActive ? "true" : undefined}
                className={`min-h-11 whitespace-nowrap rounded-[var(--radius-pill)] border px-[var(--space-4)] py-[var(--space-2)] text-[length:var(--size-body-s)] font-medium transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] ${
                  isActive
                    ? "border-hairline-accent bg-[var(--purple-a12)] text-text-accent"
                    : "border-hairline bg-surface-overlay text-text-secondary hover:border-hairline-strong hover:text-text-primary"
                }`}
              >
                {year}
              </button>
            );
          })}
        </div>

        {/* Next */}
        <button
          onClick={() => scrollBy(200)}
          disabled={scrollPosition >= maxScroll}
          className={arrowClass}
          aria-label="Scroll right"
        >
          <ChevronRight size={20} strokeWidth={1.75} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
