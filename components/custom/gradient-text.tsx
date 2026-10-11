import * as React from "react"
import { cn } from "@/lib/utils"

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  /**
   * Gradient angle in degrees. Only applied when `from`/`to` are supplied.
   */
  direction?: number
  /**
   * Optional gradient stops. Leave unset to use the design-system text
   * gradient (`--gradient-text`, stone -> purple-300).
   */
  from?: string
  to?: string
  /**
   * Whether to apply hover effect (default: true)
   */
  hover?: boolean
}

/**
 * The accent word in a headline. Exactly ONE per headline — the gradient is an
 * emphasis device, not a body-copy treatment.
 */
function GradientText({
  className,
  children,
  direction = 92,
  from,
  to,
  hover = true,
  ...props
}: GradientTextProps) {
  const custom = from && to

  return (
    <span
      className={cn(
        !custom && "text-gradient",
        custom && "bg-clip-text text-transparent",
        hover &&
          "transition-[filter] duration-[var(--duration-base)] ease-[var(--ease-trajectory)] hover:brightness-110",
        className
      )}
      style={
        custom
          ? {
              backgroundImage: `linear-gradient(${direction}deg, ${from} 0%, ${to} 100%)`,
            }
          : undefined
      }
      {...props}
    >
      {children}
    </span>
  )
}

export { GradientText }
