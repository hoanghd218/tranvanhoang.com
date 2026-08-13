"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  orientation = "horizontal",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      data-orientation={orientation}
      orientation={orientation}
      className={cn(
        "group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",
        className
      )}
      {...props}
    />
  )
}

const tabsListVariants = cva(
  // No filled pill track: tabs sit flat and are marked by a purple underline.
  "rounded-[var(--radius-md)] p-[3px] group-data-[orientation=horizontal]/tabs:h-9 data-[variant=line]:rounded-none group/tabs-list text-text-secondary inline-flex w-fit items-center justify-center group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col",
  {
    variants: {
      variant: {
        default: "gap-1 bg-transparent",
        line: "gap-1 bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function TabsList({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List> &
  VariantProps<typeof tabsListVariants>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      data-variant={variant}
      className={cn(tabsListVariants({ variant }), className)}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "text-text-secondary hover:text-text-primary relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-[var(--radius-sm)] border border-transparent bg-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start disabled:pointer-events-none disabled:opacity-40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        // Active is text colour only — the marker is the underline, never a fill.
        "data-[state=active]:bg-transparent data-[state=active]:text-text-primary data-[state=active]:shadow-none",
        // The marker: a purple hairline with a small purple glow.
        "after:bg-rocket after:absolute after:opacity-0 after:transition-opacity after:duration-[var(--duration-fast)] after:ease-[var(--ease-trajectory)] after:shadow-[var(--glow-purple-sm)] group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-px group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-px data-[state=active]:after:opacity-100",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent, tabsListVariants }
