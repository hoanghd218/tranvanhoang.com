---
title: "Resource Card Component"
description: "Create reusable resource card with card/grid view variants"
status: pending
priority: P2
effort: 1.5h
branch: main
created: 2026-01-25
review_status: not reviewed
---

## Context

**Parent Plan**: [plan.md](./plan.md)
**Dependencies**: [Phase 1: Data Layer](./phase-01-data-layer.md)
**Related Docs**: `docs/code-standards.md`, `components/blog/post-card.tsx`

## Overview

| Field | Value |
|-------|-------|
| **Date** | 2026-01-25 |
| **Description** | Create reusable resource card component with card and grid view variants |
| **Priority** | P2 - Medium priority |
| **Implementation Status** | pending |
| **Review Status** | Not reviewed |

## Key Insights

- Reuse patterns from `PostCard` component for consistency
- Support two view modes: `card` (large, featured) and `grid` (compact)
- Visual indicators for resource type (article, download, video)
- Grid view should show essential info only (title, type, category)
- Card view should show full metadata (description, tags, date)

## Requirements

### Functional Requirements

1. **View Mode Support**
   - `card` view: Large card with full metadata, hover effects
   - `grid` view: Compact row/card, minimal info

2. **Resource Type Icons**
   - Article: 📝 icon
   - Download: 📥 icon
   - Video: 🎬 icon

3. **Card View Features**
   - Thumbnail area with gradient placeholder
   - Category badge
   - Title with gradient text on hover
   - Description (truncated)
   - Date and meta info
   - Tags (up to 3)
   - Download button for downloads
   - Watch button for videos

4. **Grid View Features**
   - Compact card
   - Type icon badge
   - Title (truncated)
   - Category label
   - Date

### Design Requirements

- Follow existing brand colors (coral, bronze)
- Use `BrandCard` component patterns
- Maintain accessibility (keyboard nav, ARIA labels)
- Responsive design (mobile-first)

## Architecture

### Component Structure

```
components/
└── resources/
    ├── resource-card.tsx    # Main component with view variants
    └── resource-icon.tsx    # Icon component for resource types
```

### Props Interface

```typescript
// components/resources/resource-card.tsx

interface ResourceCardProps {
  resource: Resource
  viewMode: "card" | "grid"
  className?: string
}
```

### Card View Layout

```
┌─────────────────────────────┐
│ ┌─────────────────────────┐ │
│ │      Thumbnail          │ │
│ │    (gradient bg)        │ │
│ │    ┌───────────┐        │ │
│ │    │  Category │        │ │
│ │    └───────────┘        │ │
│ └─────────────────────────┘ │
│ ┌─────────────────────────┐ │
│ │ Title                   │ │
│ │ Description (2 lines)   │ │
│ │ Meta info               │ │
│ │ Tags                    │ │
│ └─────────────────────────┘ │
└─────────────────────────────┘
```

### Grid View Layout

```
┌─────────────────────────────┐
│ ┌───┐ Title                 │
│ │icon│ Category • Date      │
│ └───┘                       │
└─────────────────────────────┘
```

## Related Code Files

| File | Purpose | Action |
|------|---------|--------|
| `components/blog/post-card.tsx` | Reference pattern | Read |
| `components/custom/brand-card.tsx` | Base card component | Reference |
| `components/custom/gradient-text.tsx` | Gradient text effect | Reference |
| `components/ui/badge.tsx` | Category badges | Use |
| `lib/utils.ts` | cn() utility | Use |

## Implementation Steps

1. Create `components/resources/` directory
2. Create `components/resources/resource-icon.tsx` with type-specific icons
3. Create `components/resources/resource-card.tsx` with:
   - Card view layout (based on PostCard)
   - Grid view layout (compact)
   - Type-specific actions (download, watch)
4. Export components from `components/resources/index.ts`
5. Test component with sample data

## Todo List

- [ ] Create `components/resources/` directory
- [ ] Create `resource-icon.tsx` for type badges
- [ ] Create `resource-card.tsx` with both view modes
- [ ] Export from `components/resources/index.ts`
- [ ] Test with sample resource data

## Success Criteria

- [ ] Component renders correctly in both view modes
- [ ] Resource types are visually distinguishable
- [ ] Hover effects work as expected
- [ ] Accessible (keyboard navigation, ARIA labels)
- [ ] Follows existing component patterns

## Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Inconsistent design | Medium | Low | Follow PostCard patterns |
| Complex conditional logic | Low | Medium | Extract view-specific sub-components if needed |

## Security Considerations

- External links need security attributes (`rel="noopener noreferrer"`)
- No XSS in resource titles/descriptions (React escapes by default)

## Next Steps

Proceed to [Phase 3: View Toggle Component](./phase-03-view-toggle-component.md) after this phase is complete.
