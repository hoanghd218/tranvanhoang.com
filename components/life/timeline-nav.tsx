"use client";

import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface TimelineNavProps {
  years: string[];
  currentYear: string;
}

export function TimelineNav({
  years,
  currentYear,
}: TimelineNavProps) {
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

  return (
    <div className="sticky top-0 z-10 bg-life-background/95 backdrop-blur-sm border-b border-life-border py-4 mb-8">
      <div className="flex items-center justify-between gap-4">
        {/* Previous button */}
        <button
          onClick={() => scrollBy(-200)}
          disabled={scrollPosition <= 0}
          className="p-2 rounded-lg border border-life-border bg-life-card hover:border-life-sage/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-5 h-5 text-muted-foreground" />
        </button>

        {/* Years navigation */}
        <div
          ref={scrollRef}
          className="flex-1 flex items-center justify-center gap-2 overflow-x-auto scrollbar-hide px-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <style jsx>{`
            div::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {years.map((year) => (
            <button
              key={year}
              onClick={() => handleYearClick(year)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                year === currentYear
                  ? "bg-life-sage text-white"
                  : "text-muted-foreground hover:text-foreground hover:bg-life-card"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={() => scrollBy(200)}
          disabled={scrollPosition >= maxScroll}
          className="p-2 rounded-lg border border-life-border bg-life-card hover:border-life-sage/50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-5 h-5 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
