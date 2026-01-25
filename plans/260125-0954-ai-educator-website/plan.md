---
title: "AI Educator Website - Hoàng's Personal Site"
description: "Building a modern personal website for Vietnamese AI educator with email capture and content system"
status: pending
priority: P1
effort: 21-25 days
branch: main
tags: [website, ai-educator, vietnamese, email-marketing, mdx, next16]
created: 2026-01-25
---

# AI Educator Website Implementation Plan

## Project Overview

Building a professional website for Hoàng, Vietnamese AI educator targeting beginners and business owners. Primary goals: build trust, explain AI simply, capture email leads through valuable free content.

**Stack**: Next.js 16.1.4 + React 19 + TypeScript + Tailwind CSS v4
**Design**: ClaudeKit-inspired (dark charcoal + coral accents)
**Key Features**: Email capture, MDX blog, learning paths, newsletter system

## Phase Implementation

| Phase | Description | Duration | Status | Priority |
|-------|------------|----------|---------|----------|
| [Phase 1](./phase-01-foundation.md) | Foundation & Design System | 2-3 days | DONE | P1 |
| [Phase 2](./phase-02-layout.md) | Core Layout & Navigation | 1-2 days | DONE (2026-01-25 11:15) | P1 |
| [Phase 3](./phase-03-homepage.md) | Home Page Implementation | 2 days | pending | P1 |
| [Phase 4](./phase-04-mdx-blog.md) | MDX Blog System | 3-4 days | pending | P1 |
| [Phase 5](./phase-05-learning.md) | Learning Pages | 2 days | pending | P2 |
| [Phase 6](./phase-06-email.md) | Email Capture & Lead Magnets | 3-4 days | pending | P1 |
| [Phase 7](./phase-07-content.md) | About, Life, Resources Pages | 2 days | pending | P2 |
| [Phase 8](./phase-08-newsletter.md) | Newsletter & Contact | 1-2 days | pending | P2 |
| [Phase 9](./phase-09-seo.md) | SEO & Performance | 1-2 days | pending | P2 |
| [Phase 10](./phase-10-analytics.md) | Analytics & Testing | 1 day | pending | P3 |
| [Phase 11](./phase-11-launch.md) | Content & Launch | ongoing | pending | P3 |

## Key Technical Decisions

### Email Service Provider
**Decision**: EmailOctopus (MVP) → Kit Creator (growth)
- Start with EmailOctopus free tier (<2.5k subscribers)
- Migrate to Kit ($33/mo) when automation needs increase
- Form stack: React Hook Form + Zod + Server Actions

### Content Management
**Decision**: Native Next.js MDX with manual frontmatter
- Use `@next/mdx` for blog system
- Category-based structure: ai-co-ban, ai-marketing, tool-prompt, goc-trai-nghiem
- Vietnamese slug handling via `slugify` library

### UI Component Library
**Decision**: shadcn/ui v1.0+ (Tailwind v4 compatible)
- Install 20-30 core components
- Custom components: gradient text, coral hover cards
- Icons: Lucide React

### Analytics
**Decision**: Fathom Analytics ($14/mo)
- Cookieless, GDPR-compliant
- 100k pageviews/month included
- Event tracking for conversions

## Validation Summary

**Validated**: 2026-01-25
**Questions Asked**: 6

### Confirmed Decisions

1. **Font Strategy**: Replace Geist with Vietnamese-optimized fonts (Inter or Source Sans)
   - Rationale: Proven Vietnamese character support from day 1, widely used in Vietnamese sites

2. **Lead Magnet Delivery**: ESP-Managed (EmailOctopus/Kit handles file hosting)
   - Rationale: Zero technical setup, auto-delivery via email, easiest path for MVP

3. **Email Service Path**: Start with EmailOctopus free tier → Migrate to Kit Creator at scale
   - Rationale: Free up to 2,500 subscribers, basic automation sufficient for 5-7 day sequence

4. **Blog Search**: Client-side with Fuse.js (<50 posts expected in first 6 months)
   - Rationale: Instant results, zero backend complexity, perfect for MVP content volume

5. **Vietnamese URL Slugs**: Transliterate to English (e.g., /cach-dung-ai)
   - Rationale: Universal compatibility, no encoding issues, better for international sharing

6. **Exit-Intent Popup**: Skip completely
   - Rationale: Aligns with "trấn an" (reassuring) brand tone, focus on inline forms and /free-gift page

### Action Items

- [x] Update Phase 1: Change from Geist to Inter/Source Sans fonts
- [x] Update Phase 4: Configure slugify for full transliteration (remove accent preservation)
- [x] Update Phase 6: Remove exit-intent popup from optional features list
- [x] Confirm all phases align with validated decisions

## Progress Tracking

- [x] Design system setup (2026-01-25 10:40)
- [x] Core layout components (2026-01-25 11:15)
- [ ] Homepage complete
- [ ] Blog system functional
- [ ] Email capture working
- [ ] Learning pages ready
- [ ] SEO optimized
- [ ] Analytics integrated
- [ ] Content populated
- [ ] Production deployed

## Success Metrics

- Page load <3s on 3G
- WCAG 2.1 AA accessibility
- Email capture conversion >5%
- Core Web Vitals passing
- Mobile-first responsive