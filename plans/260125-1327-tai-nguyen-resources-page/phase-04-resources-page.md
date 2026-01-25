---
title: "Resources Page Implementation"
description: "Implement main tai-nguyen page with filtering and grid"
status: pending
priority: P2
effort: 1h
branch: main
created: 2026-01-25
review_status: not reviewed
---

## Context

**Parent Plan**: [plan.md](./plan.md)
**Dependencies**: [Phase 2: Resource Card Component](./phase-02-resource-card-component.md), [Phase 3: View Toggle Component](./phase-03-view-toggle-component.md)
**Related Docs**: `app/blog/page.tsx`, `docs/code-standards.md`

## Overview

| Field | Value |
|-------|-------|
| **Date** | 2026-01-25 |
| **Description** | Implement main /tai-nguyen page with category filter and view toggle |
| **Priority** | P2 - Medium priority |
| **Implementation Status** | pending |
| **Review Status** | Not reviewed |

## Key Insights

- Follow blog page structure for consistency
- Reuse category filter pattern from blog
- Combine resource list with view toggle
- Include hero section with page title
- Add newsletter CTA section

## Requirements

### Functional Requirements

1. **Hero Section**
   - Page title: "Tài nguyên"
   - Subtitle explaining the page purpose
   - Gradient text for emphasis

2. **Category Filter**
   - "Tất cả" (All) option
   - Category pills matching blog categories
   - Active state styling (coral background)
   - Filter resources by category

3. **View Toggle**
   - Placed in filter bar
   - Persistent user preference

4. **Resource Grid**
   - Responsive grid layout
   - Adjusts columns based on view mode:
     - Card view: 1 col mobile, 2 col tablet, 3 col desktop
     - Grid view: 1 col mobile, 2 col tablet, 4 col desktop

5. **Empty State**
   - Show when no resources match filter

### Design Requirements

- Follow blog page layout pattern
- Use existing `Section` and `Container` components
- Maintain brand colors (coral, bronze)
- Responsive design (mobile-first)

## Architecture

### Page Structure

```
app/tai-nguyen/
└── page.tsx           # Main page component

components/resources/
└── resources-page.tsx # Page content (for clarity)
```

### Page Layout

```
┌─────────────────────────────────────┐
│ Hero Section                        │
│ - Title: "Tài nguyên"               │
│ - Subtitle                          │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ Category Filter                     │
│ - All • AI • Marketing • ...        │
│ - View Toggle [card] [grid]         │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ Resource Grid                       │
│ - Cards with toggle state           │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ Newsletter CTA                      │
└─────────────────────────────────────┘
```

## Related Code Files

| File | Purpose | Action |
|------|---------|--------|
| `app/blog/page.tsx` | Reference layout pattern | Read |
| `components/custom/container.tsx` | Section/Container | Use |
| `components/custom/gradient-text.tsx` | Gradient text | Use |
| `components/resources/` | Resource components | Use |

## Implementation Steps

1. Create `app/tai-nguyen/page.tsx`
2. Create `components/resources-page.tsx` (optional, for complex page)
3. Implement:
   - Hero section
   - Category filter state and UI
   - View toggle state
   - Filtered resource list
   - Empty state
   - Newsletter CTA (reuse from blog)
4. Add metadata for SEO
5. Test page functionality

## Todo List

- [ ] Create `app/tai-nguyen/page.tsx`
- [ ] Implement hero section
- [ ] Implement category filter
- [ ] Implement resource list with view toggle
- [ ] Add empty state
- [ ] Add newsletter CTA
- [ ] Add page metadata

## Success Criteria

- [ ] Page renders at /tai-nguyen
- [ ] Category filter works correctly
- [ ] View toggle switches between card/grid
- [ ] Responsive layout on all screen sizes
- [ ] Follows blog page design patterns
- [ ] SEO metadata is correct

## Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Complex state management | Low | Medium | Use simple React hooks |
| Performance with many resources | Low | Low | Pagination if needed later |

## Security Considerations

- No security concerns (client-side rendering)

## Next Steps

Proceed to [Phase 5: Integration & Testing](./phase-05-integration-testing.md) after this phase is complete.
