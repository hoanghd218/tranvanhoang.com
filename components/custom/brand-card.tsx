import * as React from "react"
import { cn } from "@/lib/utils"

interface BrandCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether the card reacts to pointer input (default: true).
   * Hover lifts the card 2px, swaps the hairline to purple and adds the small
   * glow. Emphasis is never a coloured left border and never a gradient fill.
   */
  hoverBorder?: boolean
  /**
   * Card padding size: "sm" | "md" | "lg" | "none" (default: "md")
   */
  padding?: "sm" | "md" | "lg" | "none"
}

/** Padding from the spacing scale: 16 / 24 / 32. */
const paddingClasses: Record<NonNullable<BrandCardProps["padding"]>, string> = {
  sm: "p-[var(--space-4)]",
  md: "p-[var(--space-5)]",
  lg: "p-[var(--space-6)]",
  none: "",
}

function BrandCard({
  className,
  children,
  hoverBorder = true,
  padding = "md",
  ...props
}: BrandCardProps) {
  return (
    <div
      className={cn(
        // Carbon fill, 16px radius, one 8% hairline, no drop shadow at rest.
        "rk-card",
        hoverBorder && "rk-card-interactive",
        paddingClasses[padding],
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

export { BrandCard }
