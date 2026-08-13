import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  // Pill radius, caption size, surface-overlay fill with one hairline.
  "inline-flex items-center justify-center rounded-[var(--radius-pill)] border border-transparent px-2 py-0.5 text-[length:var(--size-caption)] font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none transition-[color,background-color,border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "bg-surface-overlay border-hairline text-text-secondary [a&]:hover:border-hairline-accent [a&]:hover:text-text-primary",
        // Accent tone: purple tint, purple hairline, purple text — never a solid purple fill.
        secondary:
          "bg-[var(--purple-a12)] border-hairline-accent text-text-accent [a&]:hover:bg-[var(--purple-a24)]",
        destructive:
          "bg-surface-overlay border-[var(--status-critical)] text-status-critical [a&]:hover:bg-[var(--action-ghost-hover)]",
        outline:
          "border-hairline-strong text-text-primary [a&]:hover:bg-surface-overlay [a&]:hover:border-hairline-accent",
        ghost:
          "text-text-secondary [a&]:hover:bg-surface-overlay [a&]:hover:text-text-primary",
        link: "text-text-accent underline-offset-4 [a&]:hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      data-variant={variant}
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
