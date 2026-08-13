"use client"

import type { LucideIcon } from "lucide-react"

interface StepCardProps {
  number: number
  title: string
  description: string
  icon: LucideIcon
  /** Kept for API compatibility — the trajectory rule is drawn by the section. */
  isLast?: boolean
}

/**
 * Numbered step. The section draws one continuous hairline above the row (the
 * trajectory); on mobile each step carries its own rule. The number is the accent.
 */
export function StepCard({ number, title, description, icon: Icon }: StepCardProps) {
  return (
    <div className="flex h-full flex-col border-t border-hairline pt-6 md:border-t-0 md:pt-0">
      <span className="font-display text-3xl leading-none font-bold text-rocket">
        {String(number).padStart(2, "0")}
      </span>

      <Icon size={24} strokeWidth={1.75} className="mt-6 text-text-secondary" aria-hidden="true" />

      <h3 className="font-display mt-4 text-lg font-bold tracking-tight text-text-primary">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-text-secondary">{description}</p>
    </div>
  )
}
