"use client"

import Image from "next/image"
import { Quote, Star } from "lucide-react"
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
    <div className="h-full p-6 bg-card border border-border rounded-xl hover:border-coral/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Quote icon */}
      <Quote className="w-8 h-8 text-coral/20 mb-4" />

      {/* Rating stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-4 h-4",
              i < rating ? "text-coral fill-coral" : "text-muted-foreground"
            )}
          />
        ))}
      </div>

      {/* Content */}
      <p className="text-muted-foreground mb-6 leading-relaxed">
        &ldquo;{content}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        {/* Avatar or initials */}
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-coral to-bronze flex items-center justify-center text-white font-medium text-sm">
          {avatar ? (
            <Image
              src={avatar}
              alt={name}
              width={40}
              height={40}
              className="w-full h-full rounded-full object-cover"
            />
          ) : (
            initials
          )}
        </div>

        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  )
}
