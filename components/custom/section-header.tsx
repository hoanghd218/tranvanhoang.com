"use client"

import { cn } from "@/lib/utils"
import { GradientText } from "./gradient-text"

interface SectionHeaderProps {
  title: string
  description?: string
  centered?: boolean
  className?: string
  titleClassName?: string
  highlightText?: string
}

export function SectionHeader({
  title,
  description,
  centered = false,
  className,
  titleClassName,
  highlightText,
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
      <h2 className={cn("text-2xl md:text-3xl font-semibold mb-4", titleClassName)}>
        {renderTitle()}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  )
}
