import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Rocket AI button recipes.
 *
 * States are fixed by the design system: hover brightens the fill one step and
 * adds the small purple glow, press scales to `--press-scale` and darkens the
 * fill (never a colour change), disabled is 40% opacity with no colour change.
 * Labels are sentence case, 1-3 words, never caps.
 */
const ctaButtonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0",
    "font-sans text-sm font-medium",
    "transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rocket focus-visible:ring-offset-2 focus-visible:ring-offset-surface",
    "active:scale-[var(--press-scale)]",
    "disabled:pointer-events-none disabled:opacity-40",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        // The one primary per view: purple fill, glow on hover, darkens on press.
        default:
          "bg-rocket text-stone hover:bg-rocket-hover hover:shadow-glow-sm active:bg-rocket-press",
        // Quiet fill on the void: overlay wash + hairline, purple hairline on hover.
        secondary:
          "bg-surface-overlay text-text-primary border border-hairline hover:border-hairline-accent",
        // Transparent with a stronger hairline.
        outline:
          "bg-transparent text-text-primary border border-hairline-strong hover:bg-surface-overlay hover:border-hairline-accent",
        // No chrome until hover.
        ghost: "bg-transparent text-text-primary hover:bg-surface-overlay",
      },
      size: {
        default: "h-11 px-[var(--space-5)]",
        sm: "h-9 px-[var(--space-4)] text-xs",
        lg: "h-12 px-[var(--space-6)] text-base",
        icon: "size-11 px-0",
      },
      /**
       * Marketing CTAs are pills; in-product buttons take the 6px button radius.
       */
      shape: {
        pill: "rounded-[var(--radius-pill)]",
        square: "rounded-[var(--radius-sm)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "pill",
    },
  }
)

interface CTAButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof ctaButtonVariants> {
  asChild?: boolean
  /**
   * Whether to show loading spinner (default: false)
   */
  loading?: boolean
}

function CTAButton({
  className,
  variant,
  size,
  shape,
  asChild = false,
  loading = false,
  disabled,
  children,
  ...props
}: CTAButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="cta-button"
      data-variant={variant}
      data-size={size}
      className={cn(ctaButtonVariants({ variant, size, shape, className }))}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-live="polite"
      {...props}
    >
      {loading && (
        <svg
          className="animate-spin h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
          role="status"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="1.75"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </Comp>
  )
}

export { CTAButton, ctaButtonVariants }
