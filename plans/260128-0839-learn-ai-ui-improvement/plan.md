---
title: "Improve Learn AI Page UI & Component Breakdown"
description: "Redesign the learn-ai page with better UX, animations, and modular component architecture"
status: pending
priority: P2
effort: 6h
issue: null
branch: main
tags: [frontend, ui-ux, refactoring, components]
created: 2026-01-28
---

# Improve Learn AI Page UI & Component Breakdown

## Overview

Redesign `/app/learn-ai/page.tsx` with improved visual hierarchy, scroll animations, and break monolithic structure into smaller, reusable components following project patterns.

## Current State Analysis

**File:** `app/learn-ai/page.tsx` (130 lines)
- Mixes data + presentation
- Inline step/testimonial definitions
- No scroll animations
- Basic styling without visual polish
- Reuses `LearningPathCards` in CTA section (redundant)

**Existing Patterns to Follow:**
- `components/home/hero-section.tsx` - Hero with animations
- `components/home/trust-section.tsx` - Stats with `ScrollReveal`, `AnimatedCounter`
- `components/custom/scroll-reveal.tsx` - Scroll animation wrapper
- `components/custom/animated-counter.tsx` - Number animations

## Phases

| # | Phase | Status | Effort | Link |
|---|-------|--------|--------|------|
| 1 | Create Section Components | Pending | 2h | [phase-01](./phase-01-create-section-components.md) |
| 2 | Create Shared UI Components | Pending | 1.5h | [phase-02](./phase-02-create-shared-components.md) |
| 3 | Refactor Main Page | Pending | 1h | [phase-03](./phase-03-refactor-main-page.md) |
| 4 | Polish & Animations | Pending | 1.5h | [phase-04](./phase-04-polish-animations.md) |

## Component Architecture

```
app/learn-ai/
├── page.tsx                    # Main page (data + composition only)
├── layout.tsx                  # (if needed)
└── _components/                # Page-specific components
    ├── hero-section.tsx        # Hero with gradient text
    ├── learning-paths-section.tsx  # Path cards grid
    ├── how-it-works-section.tsx    # 4-step process
    ├── testimonials-section.tsx    # Student testimonials
    └── cta-section.tsx         # Final call-to-action

components/learning/
├── path-card.tsx               # (existing - enhance)
├── step-card.tsx               # NEW: How it works step
├── testimonial-card.tsx        # NEW: Testimonial card
└── stats-banner.tsx            # NEW: Stats row

components/custom/
├── scroll-reveal.tsx           # (existing)
├── animated-counter.tsx        # (existing)
└── section-header.tsx          # NEW: Reusable section title
```

## Key Improvements

1. **Visual Hierarchy**
   - Better spacing between sections
   - Consistent section headers with `SectionHeader` component
   - Gradient accents and hover effects

2. **Animations**
   - `ScrollReveal` on all sections
   - Staggered card animations
   - Counter animations for stats

3. **Component Modularity**
   - Each section = separate component
   - Reusable `StepCard`, `TestimonialCard`
   - Data extracted to constants

4. **UX Enhancements**
   - Better CTA (remove redundant cards, add proper button)
   - Stats banner for social proof
   - Visual step connectors in "How it works"

## Dependencies

- Existing: `scroll-reveal.tsx`, `animated-counter.tsx`, `gradient-text.tsx`
- New: `section-header.tsx`, `step-card.tsx`, `testimonial-card.tsx`

## Acceptance Criteria

- [ ] All sections extracted to separate components
- [ ] Scroll animations on all sections
- [ ] Main page < 50 lines (data + composition only)
- [ ] No inline component definitions
- [ ] Consistent styling with homepage
- [ ] Mobile responsive
