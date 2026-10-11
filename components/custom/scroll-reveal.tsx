"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  duration?: number
}

/** Short translation only — 16px, matching the global fade-in keyframe. */
const TRAVEL = "16px"

const transforms: Record<NonNullable<ScrollRevealProps["direction"]>, string> = {
  up: `translateY(${TRAVEL})`,
  down: `translateY(-${TRAVEL})`,
  left: `translateX(${TRAVEL})`,
  right: `translateX(-${TRAVEL})`,
}

/**
 * Fade + short translation on entry. One curve (`--ease-trajectory`), no
 * bounce, no overshoot, no parallax. Reduced motion is neutralised globally
 * through the `data-scroll-reveal` hook in `globals.css`.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 420,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = React.useState(false)
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      data-scroll-reveal=""
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0)" : transforms[direction],
        transition: `opacity ${duration}ms var(--ease-trajectory) ${delay}ms, transform ${duration}ms var(--ease-trajectory) ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
