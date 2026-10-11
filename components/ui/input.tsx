import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Surface-inset fill, hairline border, 6px radius, 44px tall.
        "bg-surface-inset border-hairline text-text-primary placeholder:text-text-tertiary h-11 w-full min-w-0 rounded-[var(--radius-sm)] border px-3 py-1 text-base transition-[color,border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-trajectory)] file:text-text-primary file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-40 md:text-sm",
        // Focus takes the purple hairline; the 2px purple ring itself is global.
        "focus-visible:border-hairline-accent",
        "aria-invalid:border-[var(--status-critical)]",
        className
      )}
      {...props}
    />
  )
}

export { Input }
