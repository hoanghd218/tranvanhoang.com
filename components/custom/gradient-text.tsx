import * as React from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Gradient direction in degrees (default: 135)
   */
  direction?: number
  /**
   * Custom CSS gradient stops
   */
  from?: string
  to?: string
  /**
   * Whether to apply hover effect (default: true)
   */
  hover?: boolean
}

function GradientText({
  className,
  children,
  direction = 135,
  from = "var(--coral)",
  to = "var(--bronze)",
  hover = true,
  ...props
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-br bg-clip-text text-transparent",
        hover && "transition-all duration-300 hover:brightness-110",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(${direction}deg, ${from} 0%, ${to} 100%)`,
      }}
      {...props}
    >
      {children}
    </span>
  )
}

export { GradientText }
