import * as React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Container max-width (default: "6xl")
   */
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | "full"
  /**
   * Horizontal padding (default: "6")
   */
  padding?: "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "12" | "16" | "20"
  /**
   * Center content horizontally (default: true)
   */
  center?: boolean
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Vertical padding (default: "16" = py-16)
   */
  padding?: "0" | "4" | "8" | "12" | "16" | "20" | "24"
}

const sizeClasses: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
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

function Container({
  className,
  children,
  size = "6xl",
  padding = "6",
  center = true,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        center && "mx-auto",
        sizeClasses[size],
        paddingClasses[padding],
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
 * Section component with consistent vertical spacing
 */
function Section({
  className,
  children,
  padding = "16",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(sectionPaddingClasses[padding], className)}
      {...props}
    >
      {children}
    </section>
  )
}

export { Container, Section }
