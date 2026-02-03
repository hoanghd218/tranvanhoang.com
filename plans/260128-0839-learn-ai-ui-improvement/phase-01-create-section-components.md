# Phase 1: Create Section Components

## Overview

Create page-specific section components in `app/learn-ai/_components/`. Each section is a self-contained component with its own data and styling.

**Priority:** P2
**Status:** Pending
**Effort:** 2h
**Blocked By:** None

## Context

Current page has 4 sections inline:
1. Hero - title + description
2. Learning Paths - uses `LearningPathCards`
3. How It Works - 4 steps inline
4. Testimonials - 3 cards inline
5. CTA - redundant cards

## Files to Create

### 1. `app/learn-ai/_components/hero-section.tsx`

**Purpose:** Hero section with title, description, and optional visual

**Structure:**
```tsx
"use client"

import { GradientText } from "@/components/custom/gradient-text"
import { Container, Section } from "@/components/custom/container"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

export function HeroSection() {
  return (
    <Section className="py-16 md:py-24">
      <Container>
        <ScrollReveal className="max-w-3xl mx-auto text-center">
          <h1 className="heading-xl mb-6">
            Lộ trình <GradientText>học AI</GradientText> cho mọi ngườii
          </h1>
          <p className="text-lg text-muted-foreground">
            Dù bạn ở đâu, mức độ nào, tôi đều có lộ trình phù hợp...
          </p>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
```

**Key Features:**
- Uses `ScrollReveal` for fade-in animation
- Centered layout with max-width
- Gradient text on "học AI"

---

### 2. `app/learn-ai/_components/learning-paths-section.tsx`

**Purpose:** Display learning path cards with section header

**Structure:**
```tsx
"use client"

import { LearningPathCards } from "@/components/learning/path-card"
import { Container, Section } from "@/components/custom/container"
import { SectionHeader } from "@/components/custom/section-header"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

export function LearningPathsSection() {
  return (
    <Section className="py-12">
      <Container>
        <ScrollReveal>
          <SectionHeader
            title="Chọn lộ trình phù hợp"
            description="Mỗi lộ trình được thiết kế cho mục tiêu và trình độ khác nhau"
            centered
          />
        </ScrollReveal>
        <div className="mt-12">
          <LearningPathCards />
        </div>
      </Container>
    </Section>
  )
}
```

**Key Features:**
- `SectionHeader` for consistent titles
- Staggered animation on cards (handled in `LearningPathCards`)

---

### 3. `app/learn-ai/_components/how-it-works-section.tsx`

**Purpose:** 4-step process with visual connectors

**Structure:**
```tsx
"use client"

import { Container, Section } from "@/components/custom/container"
import { SectionHeader } from "@/components/custom/section-header"
import { StepCard } from "@/components/learning/step-card"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

const steps = [
  { number: 1, title: "Chọn lộ trình", description: "...", icon: MapIcon },
  { number: 2, title: "Học theo module", description: "...", icon: BookIcon },
  { number: 3, title: "Thực hành", description: "...", icon: PracticeIcon },
  { number: 4, title: "Nhận certificate", description: "...", icon: CertificateIcon },
]

export function HowItWorksSection() {
  return (
    <Section className="py-16 bg-card/30">
      <Container>
        <SectionHeader
          title="Cách thức học"
          description="Quy trình đơn giản, hiệu quả"
          centered
        />
        <div className="grid md:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 150}>
              <StepCard
                number={step.number}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isLast={index === steps.length - 1}
              />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
```

**Key Features:**
- Visual connector between steps (on desktop)
- Staggered reveal animation
- Icons for each step

---

### 4. `app/learn-ai/_components/testimonials-section.tsx`

**Purpose:** Student testimonials grid

**Structure:**
```tsx
"use client"

import { Container, Section } from "@/components/custom/container"
import { SectionHeader } from "@/components/custom/section-header"
import { TestimonialCard } from "@/components/learning/testimonial-card"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

const testimonials = [
  { name: "Nguyễn Minh", role: "Marketing Manager", content: "...", avatar: "/avatars/minh.jpg" },
  { name: "Trần Thị Hà", role: "Founder SME", content: "...", avatar: "/avatars/ha.jpg" },
  { name: "Lê Đức", role: "Nhân viên văn phòng", content: "...", avatar: "/avatars/duc.jpg" },
]

export function TestimonialsSection() {
  return (
    <Section className="py-16">
      <Container>
        <SectionHeader
          title="Học viên nói gì?"
          description="Những chia sẻ từ ngườii đã tham gia"
          centered
        />
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {testimonials.map((t, index) => (
            <ScrollReveal key={t.name} delay={index * 150}>
              <TestimonialCard {...t} />
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </Section>
  )
}
```

**Key Features:**
- Avatar support (fallback to initials)
- Quote styling with quotation marks
- Star rating (optional)

---

### 5. `app/learn-ai/_components/cta-section.tsx`

**Purpose:** Final call-to-action with proper button

**Structure:**
```tsx
"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container, Section } from "@/components/custom/container"
import { GradientText } from "@/components/custom/gradient-text"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

export function CTASection() {
  return (
    <Section className="py-16">
      <Container>
        <ScrollReveal>
          <div className="max-w-2xl mx-auto text-center p-8 rounded-2xl bg-gradient-to-br from-coral/10 to-bronze/10 border border-border">
            <h2 className="text-2xl font-semibold mb-4">
              Sẵn sàng <GradientText>bắt đầu?</GradientText>
            </h2>
            <p className="text-muted-foreground mb-6">
              Chọn lộ trình phù hợp và bắt đầu hành trình AI ngay hôm nay.
            </p>
            <Link
              href="#learning-paths"
              className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white rounded-lg font-medium hover:bg-coral-dark transition-colors"
            >
              Xem lộ trình
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </Section>
  )
}
```

**Key Features:**
- Single CTA button (not redundant cards)
- Gradient background
- Smooth scroll to paths section

---

### 6. `app/learn-ai/_components/stats-banner.tsx` (Optional)

**Purpose:** Stats row for social proof

**Structure:**
```tsx
"use client"

import { Container } from "@/components/custom/container"
import { AnimatedCounter } from "@/components/custom/animated-counter"
import { ScrollReveal } from "@/components/custom/scroll-reveal"

const stats = [
  { value: "5,000+", label: "Học viên" },
  { value: "3", label: "Lộ trình" },
  { value: "21", label: "Modules" },
  { value: "4.9", label: "Đánh giá" },
]

export function StatsBanner() {
  return (
    <div className="border-y border-border bg-card/50">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100} className="text-center">
              <div className="text-3xl font-bold text-coral">
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

## Implementation Steps

1. Create `app/learn-ai/_components/` directory
2. Create each section component file
3. Copy data from current page.tsx
4. Add proper imports and types
5. Test each component renders correctly

## Success Criteria

- [ ] All 5-6 section components created
- [ ] Each component is self-contained
- [ ] Uses existing patterns (ScrollReveal, Container, Section)
- [ ] TypeScript types defined
- [ ] No lint errors

## Next Steps

After this phase: Create shared UI components (`section-header.tsx`, `step-card.tsx`, `testimonial-card.tsx`)
