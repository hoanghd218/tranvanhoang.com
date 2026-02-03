"use client"

import * as React from "react"

interface StepCardProps {
  number: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  isLast?: boolean
}

export function StepCard({
  number,
  title,
  description,
  icon: Icon,
  isLast = false,
}: StepCardProps) {
  return (
    <div className="relative">
      {/* Connector line (hidden on mobile, hidden for last item) */}
      {!isLast && (
        <div className="hidden md:block absolute top-7 left-[calc(50%+2rem)] right-0 h-0.5">
          <div className="h-full bg-gradient-to-r from-coral/30 to-transparent" />
        </div>
      )}

      <div className="text-center relative z-10">
        {/* Icon container */}
        <div className="relative inline-flex items-center justify-center w-14 h-14 mb-4">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-coral to-bronze opacity-10" />
          <div className="absolute inset-0 rounded-2xl bg-coral/10" />
          <Icon className="w-6 h-6 text-coral relative z-10" />
        </div>

        {/* Step number */}
        <div className="text-sm font-medium text-coral mb-2">
          Bước {number}
        </div>

        {/* Title */}
        <h3 className="font-semibold mb-2">{title}</h3>

        {/* Description */}
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
