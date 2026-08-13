import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * Rocket AI button.
 * Motion: one curve (--ease-trajectory), fast duration, no bounce.
 * Press scales to --press-scale and darkens the fill; it never changes hue.
 * Focus is the global 2px purple ring, so no local ring utilities here.
 * Disabled is 40% opacity with no colour change.
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[var(--radius-sm)] text-sm font-medium shrink-0 transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 aria-invalid:border-[var(--status-critical)]",
  {
    variants: {
      variant: {
        // The one primary per view: purple fill, glow on hover, darken on press.
        default:
          "bg-rocket text-stone hover:bg-rocket-hover hover:shadow-glow-sm active:scale-[var(--press-scale)] active:bg-rocket-press active:shadow-none",
        destructive:
          "bg-status-critical text-stone hover:brightness-110 active:scale-[var(--press-scale)] active:brightness-90",
        // DS secondary: transparent fill, hairline that turns purple on hover.
        outline:
          "border border-hairline-strong bg-transparent text-text-primary hover:bg-surface-overlay hover:border-hairline-accent active:scale-[var(--press-scale)]",
        secondary:
          "bg-surface-inset text-text-primary border border-hairline hover:border-hairline-accent hover:brightness-125 active:scale-[var(--press-scale)]",
        ghost:
          "text-text-primary hover:bg-[var(--action-ghost-hover)] active:scale-[var(--press-scale)]",
        link: "text-text-accent underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-[var(--space-5)] py-2 has-[>svg]:px-4",
        xs: "h-7 gap-1 px-2 text-xs has-[>svg]:px-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-12 px-[var(--space-6)] has-[>svg]:px-5",
        icon: "size-11",
        "icon-xs": "size-7 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
      // Marketing CTAs take the pill; everything else keeps --radius-sm.
      shape: {
        default: "",
        pill: "rounded-[var(--radius-pill)]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  shape = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      data-shape={shape}
      className={cn(buttonVariants({ variant, size, shape, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
