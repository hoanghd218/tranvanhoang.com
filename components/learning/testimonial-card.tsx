"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

interface TestimonialCardProps {
  name: string
  role: string
  content: string
  avatar?: string
  rating?: number
}

export function TestimonialCard({
  name,
  role,
  content,
  avatar,
  rating = 5,
}: TestimonialCardProps) {
  // Generate initials from name
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2)

  return (
    <div className="rk-card flex h-full flex-col p-6">
      {/* Rating — Lucide stars only, never emoji */}
      <div className="flex gap-1" aria-label={`${rating}/5`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            strokeWidth={1.75}
            aria-hidden="true"
            className={cn(i < rating ? "text-rocket fill-rocket" : "text-text-tertiary")}
          />
        ))}
      </div>

      <p className="mt-5 leading-relaxed text-text-primary">&ldquo;{content}&rdquo;</p>

      <div className="mt-auto flex items-center gap-3 pt-6">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full border border-hairline bg-surface-overlay text-sm font-medium text-text-secondary">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              width={40}
              height={40}
              className="h-full w-full object-cover"
            />
          ) : (
            initials
          )}
        </div>

        <div>
          <p className="font-medium text-text-primary">{name}</p>
          <p className="text-sm text-text-tertiary">{role}</p>
        </div>
      </div>
    </div>
  )
}
