"use client"

import { cn } from "@/lib/utils"
import { GradientText } from "./gradient-text"

interface SectionHeaderProps {
  title: string
  description?: string
  /**
   * Centring is opt-in. Content is left-aligned by default; only closing or
   * statement layouts centre.
   */
  centered?: boolean
  className?: string
  titleClassName?: string
  /**
   * The single accent word inside `title`, rendered with the text gradient.
   */
  highlightText?: string
  /**
   * Optional eyebrow label above the heading. Caps + wide tracking; the
   * tracking drops automatically under `lang="vi"`.
   */
  eyebrow?: string
}

export function SectionHeader({
  title,
  description,
  centered = false,
  className,
  titleClassName,
  highlightText,
  eyebrow,
}: SectionHeaderProps) {
  const renderTitle = () => {
    if (!highlightText) return title
    const parts = title.split(highlightText)
    return (
      <>
        {parts[0]}
        <GradientText>{highlightText}</GradientText>
        {parts[1]}
      </>
    )
  }

  return (
    <div className={cn(centered && "text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-[var(--space-3)]")}>{eyebrow}</p>
      )}
      <h2 className={cn("heading-md text-text-primary", titleClassName)}>
        {renderTitle()}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-[var(--space-4)] max-w-[64ch] text-text-secondary",
            centered && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  )
}
