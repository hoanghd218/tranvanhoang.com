import * as React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Container max-width (default: "6xl" = the 1200px content max)
   */
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full"
  /**
   * Horizontal padding override. Unset uses the page gutter (32px, 24px on
   * small screens; 64px on full-bleed large surfaces).
   */
  padding?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "12" | "16" | "20"
  /**
   * Center content horizontally (default: true)
   */
  center?: boolean
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Vertical padding override. Unset uses the 96px section rhythm
   * (48px on small screens).
   */
  padding?: "0" | "4" | "8" | "12" | "16" | "20" | "24"
}

/** 1200px is the content max; the smaller steps stay on the Tailwind scale. */
const sizeClasses: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-[var(--max-width-content)]",
  "7xl": "max-w-[var(--max-width-content)]",
  full: "max-w-full",
}

const paddingClasses: Record<NonNullable<ContainerProps["padding"]>, string> = {
  "0": "px-0",
  "1": "px-1",
  "2": "px-2",
  "3": "px-3",
  "4": "px-4",
  "5": "px-5",
  "6": "px-6",
  "7": "px-7",
  "8": "px-8",
  "9": "px-9",
  "10": "px-10",
  "12": "px-12",
  "16": "px-16",
  "20": "px-20",
}

/** 24px on phones, 32px page gutter from `sm` up. */
const defaultGutter = "px-[var(--space-5)] sm:px-[var(--gutter-page)]"
/** Full-bleed surfaces breathe wider on large screens. */
const largeSurfaceGutter = "lg:px-[var(--gutter-page-lg)]"

function Container({
  className,
  children,
  size = "6xl",
  padding,
  center = true,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        center && "mx-auto",
        sizeClasses[size],
        padding ? paddingClasses[padding] : defaultGutter,
        !padding && size === "full" && largeSurfaceGutter,
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const sectionPaddingClasses: Record<NonNullable<SectionProps["padding"]>, string> = {
  "0": "py-0",
  "4": "py-4",
  "8": "py-8",
  "12": "py-12",
  "16": "py-16",
  "20": "py-20",
  "24": "py-24",
}

/**
 * Section wrapper carrying the 96px vertical rhythm between sections.
 */
function Section({
  className,
  children,
  padding,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        padding ? sectionPaddingClasses[padding] : "section-spacing",
        className
      )}
      {...props}
    >
      {children}
    </section>
  )
}

export { Container, Section }
