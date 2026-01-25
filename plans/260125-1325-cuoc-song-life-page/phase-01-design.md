---
title: "Phase 01: Design - Cuộc sống Page"
description: "Define color palette, typography, component designs, and visual specifications for the Life page"
status: pending
priority: P2
effort: 2h
tags: [design, life-page, color-system, typography, components]
created: 2026-01-25
related-files:
  - "plan.md"
  - "app/life/page.tsx"
  - "app/life/[slug]/page.tsx"
  - "components/life/timeline.tsx"
  - "components/life/quote-highlight.tsx"
  - "lib/mdx.ts"
---

## Overview

| Field | Value |
|-------|-------|
| **Date** | 2026-01-25 |
| **Description** | Design phase for Cuộc sống page with calming color palette, timeline components, and typography specifications |
| **Priority** | P2 - Medium priority, not blocking critical path |
| **Implementation Status** | pending |
| **Review Status** | pending |

## Key Insights

1. **Color Differentiation Critical**: The blog uses coral/bronze warm palette; Life page requires distinct calming palette (sage greens, warm earth tones) to establish visual identity separation
2. **Typography Hierarchy**: Long-form content requires relaxed line-height (1.7+) and narrower measure (65-75 chars) for optimal readability
3. **Component Reuse Strategy**: Reuse Container, Section, and base UI components; create new Life-specific components (Timeline, QuoteHighlight, StoryCard)
4. **MDX Schema Extension**: Extend existing MDX system with life-specific metadata (timelineDate, quote, storyType)
5. **Mobile-First Timeline**: Timeline scrolling must work smoothly on mobile - horizontal scroll with sticky year labels

## Requirements

### Functional Requirements

1. **Timeline View**
   - Chronological display of life stories/milestones
   - Year/month navigation and filtering
   - Expandable/collapsible timeline entries
   - Smooth scroll to specific entries

2. **Story Cards**
   - Excerpt preview (100-150 chars)
   - Read more expand/collapse
   - Date and category display
   - Thumbnail support

3. **Quote Highlights**
   - Prominent display of personal mottos
   - Author attribution
   - Decorative quote marks
   - Background accent treatment

4. **Hero Section**
   - Personal introduction
   - Profile photo area
   - Life philosophy tagline
   - Social links

### Non-Functional Requirements

1. **Performance**
   - Page load < 2s
   - Timeline smooth scroll 60fps
   - Lazy load story images

2. **Accessibility**
   - WCAG 2.1 AA compliance
   - Keyboard navigation for timeline
   - Proper ARIA labels

3. **Responsive**
   - Mobile: Vertical timeline with horizontal scroll
   - Tablet: Side-by-side layout
   - Desktop: Full timeline with sidebar filters

## Architecture

### Component Structure

```
app/life/
├── page.tsx                    # Main life page
├── [slug]/page.tsx            # Individual story page
└── layout.tsx                 # Life page layout

components/life/
├── timeline/
│   ├── index.tsx              # Timeline container
│   ├── timeline-item.tsx      # Individual entry
│   ├── timeline-nav.tsx       # Year/month filter
│   └── timeline-line.tsx      # Visual connecting line
├── story/
│   ├── story-card.tsx         # Preview card
│   └── story-expand.tsx       # Expand/collapse logic
├── quote/
│   ├── quote-highlight.tsx    # Quote component
│   └── quote-decorative.tsx   # Decorative elements
└── life-hero.tsx              # Hero section
```

### Color System Extension

```css
/* Add to app/globals.css */

:root {
  /* Life Page Color Palette - Calming, Nature-Inspired */

  /* Primary - Sage Green (replaces coral) */
  --sage: #7C9A92;
  --sage-light: #9BB5AD;
  --sage-dark: #5C7A72;

  /* Secondary - Warm Sand (replaces bronze) */
  --sand: #D4B996;
  --sand-light: #E5D4BC;
  --sand-dark: #B89B75;

  /* Accent - Soft Lavender */
  --lavender: #9B8AA8;
  --lavender-light: #B8A9C8;

  /* Backgrounds */
  --life-background: #0F0F0F;
  --life-card: #1A1A1E;
  --life-card-hover: #222226;

  /* Text */
  --life-foreground: #F0EDE9;
  --life-muted: #8A8A8A;
  --life-muted-foreground: #B0B0B0;

  /* Timeline */
  --timeline-line: #3A3A3E;
  --timeline-active: var(--sage);
  --timeline-year-bg: var(--life-card);
}

/* Life Page Theme Class */
.theme-life {
  --primary: var(--sage);
  --primary-foreground: #FFFFFF;
  --secondary: var(--sand);
  --secondary-foreground: #1A1A1E;
  --accent: var(--lavender);
  --background: var(--life-background);
  --foreground: var(--life-foreground);
  --card: var(--life-card);
  --card-foreground: var(--life-foreground);
  --border: #2A2A2E;
  --muted: #2A2A2E;
  --muted-foreground: var(--life-muted-foreground);
}
```

### Typography System

```css
/* Typography Extensions for Life Page */

/* Serif headings for warmth */
--font-serif: var(--font-merriweather), Georgia, serif;

/* Relaxed body for readability */
.life-prose {
  font-size: 1.125rem; /* 18px */
  line-height: 1.75;
  max-width: 65ch;
  color: var(--life-muted-foreground);
}

.life-prose p {
  margin-bottom: 1.5em;
}

.life-prose h2 {
  font-family: var(--font-serif);
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--life-foreground);
  margin-top: 2em;
  margin-bottom: 0.75em;
}

.life-prose h3 {
  font-family: var(--font-serif);
  font-size: 1.25rem;
  font-weight: 600;
  color: var(--life-foreground);
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}

.life-prose blockquote {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--sage-light);
  border-left: 3px solid var(--sage);
  padding-left: 1.5em;
  margin: 2em 0;
}
```

### MDX Schema Extension

```typescript
// lib/mdx.ts - Add Life-specific types

export type LifeStoryMetadata = {
  title: string;
  description: string;
  date: string;           // Original publication date
  timelineDate: string;   // Date displayed on timeline (can differ)
  tags: string[];
  storyType: "milestone" | "reflection" | "update" | "memory";
  quote?: string;         // Featured quote from this story
  quoteAuthor?: string;
  featuredImage?: string;
  draft?: boolean;
};

export type LifeStory = {
  slug: string;
  metadata: LifeStoryMetadata;
  content: string;
  readingTime?: string;
};

// Extend categoryMap for life categories
const lifeCategoryMap: Record<string, { name: string; description: string }> = {
  "lan-manh": {
    name: "Lan Manh",
    description: "Những cột mốc quan trọng trong cuộc đời",
  },
  "suy-ngam": {
    name: "Suy Ngẫm",
    description: "Những suy tư và chiêm nghiệm",
  },
  "cuoc-song": {
    name: "Cuộc Sống",
    description: "Chia sẻ về cuộc sống hàng ngày",
  },
};
```

## Related Code Files

| File | Purpose |
|------|---------|
| `app/globals.css` | Add life color palette and typography |
| `lib/mdx.ts` | Extend with life story types and categories |
| `lib/navigation.ts` | Already has /life navigation entry |
| `components/custom/container.tsx` | Reuse existing |
| `components/custom/gradient-text.tsx` | Adapt for life theme |

## Implementation Steps

### Step 1: Color & Typography CSS

1. Add life color palette variables to `app/globals.css`
2. Add typography extensions for life-prose class
3. Add theme-life CSS class
4. Create animation keyframes for timeline

### Step 2: Core Components

1. Create `components/life/timeline/index.tsx`
2. Create `components/life/timeline/timeline-item.tsx`
3. Create `components/life/timeline/timeline-nav.tsx`
4. Create `components/life/quote/quote-highlight.tsx`
5. Create `components/life/story/story-card.tsx`
6. Create `components/life/life-hero.tsx`

### Step 3: Page Implementation

1. Create `app/life/page.tsx`
2. Create `app/life/[slug]/page.tsx`
3. Add page metadata

### Step 4: Content Integration

1. Create `content/lance/` directory
2. Add sample life stories
3. Update lib/mdx.ts for life content

## Todo List

- [ ] Add life color palette to globals.css
- [ ] Add typography extensions for long-form content
- [ ] Create timeline container component
- [ ] Create timeline item component with expand/collapse
- [ ] Create timeline navigation/filter component
- [ ] Create quote highlight component
- [ ] Create story card component
- [ ] Create life hero component
- [ ] Create main life page (app/life/page.tsx)
- [ ] Create individual story page (app/life/[slug]/page.tsx)
- [ ] Extend MDX system for life content
- [ ] Create sample life story MDX files
- [ ] Test mobile responsiveness
- [ ] Verify accessibility compliance

## Success Criteria

1. **Visual Differentiation**: Life page clearly distinct from blog (sage/sand vs coral/bronze)
2. **Readability**: Long-form content comfortable to read (1.75 line-height, 65ch max-width)
3. **Timeline Functionality**: Users can navigate by year, scroll smoothly to entries
4. **Responsive Design**: Timeline works on mobile (horizontal scroll), desktop (full view)
5. **Performance**: Page loads in < 2s, smooth scrolling 60fps
6. **Accessibility**: Keyboard navigation works, proper ARIA labels

## Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Color contrast issues | Medium | Low | Test with contrast checker, adjust as needed |
| Timeline mobile UX | High | Medium | Implement horizontal scroll with sticky headers |
| MDX complexity increase | Low | Low | Reuse existing patterns, add types only |
| Font loading | Low | Medium | Use font display swap, preload serif font |

## Security Considerations

1. **No user-generated content** - All content is static MDX
2. **No external dependencies** - All assets self-hosted
3. **XSS prevention** - MDX parsing handles content sanitization
4. **No sensitive data** - Personal stories only, no PII exposure

## Next Steps

1. **Approve design specs** - Confirm color palette and typography choices
2. **Begin implementation** - Start with CSS variables and core components
3. **Content preparation** - Gather life stories for initial content

---

## Unresolved Questions

1. **Should we use a serif font?** Need to decide between system fonts (Georgia) or Google Fonts (Merriweather, Lora)
2. **Timeline granularity** - Year-only or year-month? Initial scope?
3. **Hero image approach** - Use existing photo or placeholder for now?
4. **Quote association** - Standalone quotes vs. embedded in stories? Scope?
