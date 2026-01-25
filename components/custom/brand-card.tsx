import * as React from "react"
import { cn } from "@/lib/utils"

interface BrandCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Whether to show coral border on hover (default: true)
   */
  hoverBorder?: boolean
  /**
   * Card padding size: "sm" | "md" | "lg" | "none" (default: "md")
   */
  padding?: "sm" | "md" | "lg" | "none"
}

function BrandCard({
  className,
  children,
  hoverBorder = true,
  padding = "md",
  ...props
}: BrandCardProps) {
  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    none: "",
  }

  return (
    <div
      className={cn(
        "bg-card rounded-xl border border-border transition-all duration-300",
        hoverBorder && "hover:border-coral",
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
