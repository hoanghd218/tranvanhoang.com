---
title: "Cuộc sống (Life) Page Implementation"
description: "Create a personal life page with chronological timeline view, story sections, and quote highlights using calming colors and readable typography"
status: pending
priority: P2
effort: 12h
branch: main
tags: [life-page, personal-site, timeline, mdx, frontend]
created: 2026-01-25
---

## Overview

This plan outlines the implementation of the "Cuộc sống" (Life) page for tranvanhoang.com - a personal, reflective page showcasing life stories, milestones, and personal mottos in a chronological timeline format.

## Context

- **Working directory**: `/Users/hoangtran/Documents/Github/tranvanhoang.com`
- **Plan directory**: `plans/260125-1325-cuoc-song-life-page`
- **Reference pages**: Blog (`app/blog/page.tsx`, `app/blog/[category]/[slug]/page.tsx`)
- **Navigation entry**: Already exists in `lib/navigation.ts` pointing to `/life`

## Requirements Summary

1. **Content Type**: Hybrid - mix of personal stories and life updates
2. **Organization**: Chronological timeline view
3. **Features**:
   - Timeline view with dates
   - Long-form story sections
   - Quote sections for personal mottos/thoughts
4. **Design Style**: Personal, warm, reflective - different from AI/course sections
5. **Technical Requirements**:
   - Calming colors (soft greens, warm earth tones - NOT coral/bronze)
   - Readable typography for longer content
   - Integration with existing design system
   - Hero section with personal intro
   - Timeline navigation/filtering
   - Story cards with excerpt + read more
   - Quote highlights between sections
   - Mobile responsive for timeline scrolling

## Design Decisions

### Color Palette Differentiation

| Purpose | Current (Blog) | Life Page (New) |
|---------|---------------|-----------------|
| Primary | Coral (#D97757) | Sage Green (#7C9A92) |
| Secondary | Bronze (#D4A27F) | Warm Sand (#D4B996) |
| Background | Dark (#0E0E0E) | Slightly warmer dark |
| Card | Card (#18181b) | Softer card (#1a1a1e) |
| Accent | Gradient | Nature-inspired gradient |

### Typography

- **Body**: Same as blog (Inter/Source Sans)
- **Headings**: Merriweather (Google Fonts) for warmth
- **Line height**: Relaxed (1.7+) for long-form readability
- **Max width**: 65-75 characters for optimal readability

### User Preferences (Confirmed)

- **Font**: Merriweather (Google Fonts)
- **Timeline**: Year-only granularity
- **Hero**: Text-only intro (no photo)

## Phases

| Phase | Name | Effort | Status |
|-------|------|--------|--------|
| 1 | Design Phase | 2h | in_progress |
| 2 | Components Development | 4h | pending |
| 3 | Page Implementation | 4h | pending |
| 4 | Content Integration | 2h | pending |

## Dependencies

- `lib/mdx.ts` - MDX content system (reuse)
- `components/ui/*` - shadcn/ui components
- `components/custom/*` - Container, Section, GradientText
- `content/` - Directory for MDX files

## Deliverables

1. `plan.md` - This overview
2. `phase-01-design.md` - Design specifications
3. `app/life/page.tsx` - Main life page
4. `app/life/[slug]/page.tsx` - Individual story page
5. `components/life/*` - Life page components
6. `content/life/*.mdx` - Life content files

## Unresolved Questions

**Resolved:**
1. Font: Merriweather (Google Fonts) ✓
2. Timeline: Year-only granularity ✓
3. Hero: Text-only intro ✓
4. Quotes: Standalone sections ✓

**Pending (decide during implementation):**
- How many years of content to include initially?
- Should life stories share the same MDX system as blog posts?
