# Phase 2: Create Shared UI Components

## Overview

Create reusable UI components in `components/custom/` and `components/learning/` for use across sections.

**Priority:** P2
**Status:** Pending
**Effort:** 1.5h
**Blocked By:** Phase 1

## Files to Create

### 1. `components/custom/section-header.tsx`

**Purpose:** Reusable section title + description

**Props Interface:**
```tsx
interface SectionHeaderProps {
  title: string
  description?: string
  centered?: boolean
  className?: string
  titleClassName?: string
}
```

**Implementation:**
```tsx
"use client"

import { cn } from "@/lib/utils"
import { GradientText } from "./gradient-text"

interface SectionHeaderProps {
  title: string
  description?: string
  centered?: boolean
  className?: string
  titleClassName?: string
  highlightText?: string  // Text to highlight with gradient
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
```

**Usage:**
```tsx
<SectionHeader
  title="Chọn lộ trình phù hợp"
  description="Mỗi lộ trình..."
  centered
  highlightText="lộ trình"
/>
```

---

### 2. `components/learning/step-card.tsx`

**Purpose:** Individual step in "How it works" section

**Props Interface:**
```tsx
interface StepCardProps {
  number: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  isLast?: boolean
}
```

**Implementation:**
```tsx
"use client"

import { cn } from "@/lib/utils"

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
        <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-coral/30 to-transparent" />
      )}

      <div className="text-center">
        {/* Number badge with icon */}
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
```

**Features:**
- Icon with gradient background
- Connector line to next step (desktop only)
- Step number label
- Responsive design

---

### 3. `components/learning/testimonial-card.tsx`

**Purpose:** Student testimonial with avatar and quote

**Props Interface:**
```tsx
interface TestimonialCardProps {
  name: string
  role: string
  content: string
  avatar?: string
  rating?: number
}
```

**Implementation:**
```tsx
"use client"

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
    <div className="h-full p-6 bg-card border border-border rounded-xl hover:border-coral/30 transition-colors">
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
            <img
              src={avatar}
              alt={name}
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
```

**Features:**
- Avatar with fallback to initials
- Star rating display
- Quote styling
- Hover effect on card

---

### 4. `components/learning/stats-banner.tsx`

**Purpose:** Horizontal stats display with animated counters

**Props Interface:**
```tsx
interface Stat {
  value: string
  label: string
  suffix?: string
}

interface StatsBannerProps {
  stats: Stat[]
  className?: string
}
```

**Implementation:**
```tsx
"use client"

import { Container } from "@/components/custom/container"
import { AnimatedCounter } from "@/components/custom/animated-counter"
import { ScrollReveal } from "@/components/custom/scroll-reveal"
import { cn } from "@/lib/utils"

interface Stat {
  value: string
  label: string
}

interface StatsBannerProps {
  stats: Stat[]
  className?: string
}

export function StatsBanner({ stats, className }: StatsBannerProps) {
  return (
    <div className={cn("border-y border-border bg-card/50", className)}>
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
          {stats.map((stat, index) => (
            <ScrollReveal
              key={stat.label}
              delay={index * 100}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-coral mb-1">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </div>
  )
}
```

**Usage:**
```tsx
const stats = [
  { value: "5000", label: "Học viên" },
  { value: "3", label: "Lộ trình" },
  { value: "21", label: "Modules" },
  { value: "4.9", label: "Đánh giá" },
]

<StatsBanner stats={stats} />
```

---

## Implementation Steps

1. Create `components/custom/section-header.tsx`
2. Create `components/learning/step-card.tsx`
3. Create `components/learning/testimonial-card.tsx`
4. Create `components/learning/stats-banner.tsx`
5. Run lint to verify

## Success Criteria

- [ ] All 4 components created
- [ ] TypeScript interfaces defined
- [ ] Uses existing utilities (`cn`, `ScrollReveal`, `AnimatedCounter`)
- [ ] Responsive design
- [ ] No lint errors
- [ ] Follows existing component patterns

## Next Steps

After this phase: Refactor main page to use new components
