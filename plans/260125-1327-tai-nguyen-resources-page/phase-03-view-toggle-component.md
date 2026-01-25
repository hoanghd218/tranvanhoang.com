---
title: "View Toggle Component"
description: "Build view mode toggle (card/grid) with persistence"
status: pending
priority: P2
effort: 0.5h
branch: main
created: 2026-01-25
review_status: not reviewed
---

## Context

**Parent Plan**: [plan.md](./plan.md)
**Dependencies**: [Phase 2: Resource Card Component](./phase-02-resource-card-component.md)
**Related Docs**: `docs/code-standards.md`, `components/ui/button.tsx`

## Overview

| Field | Value |
|-------|-------|
| **Date** | 2026-01-25 |
| **Description** | Create view mode toggle component with localStorage persistence |
| **Priority** | P2 - Medium priority |
| **Implementation Status** | pending |
| **Review Status** | Not reviewed |

## Key Insights

- Simple toggle between two states: "card" and "grid"
- Use Lucide React icons for visual representation
- Persist user preference in localStorage
- Provide smooth transition animation
- Accessible button with proper ARIA attributes

## Requirements

### Functional Requirements

1. **Toggle Functionality**
   - Click to switch between card/grid views
   - Visual indicator of current selection
   - Keyboard accessible (Tab, Enter, Space)

2. **Persistence**
   - Save preference to localStorage key `resources-view-mode`
   - Default to "card" view if no saved preference

3. **Visual Design**
   - Two icons: `Grid3X3` (grid view), `List` (card view)
   - Active state: coral background/border
   - Inactive state: muted, hover effect

### Design Requirements

- Use existing button styles
- Follow brand colors for active state
- Small form factor (fit in filter bar)
- Touch-friendly target size (44x44px min)

## Architecture

### Component Structure

```
components/
└── resources/
    ├── view-toggle.tsx    # Toggle component
    └── resource-list.tsx  # List wrapper with toggle
```

### Props Interface

```typescript
// components/resources/view-toggle.tsx

interface ViewToggleProps {
  value: "card" | "grid"
  onChange: (value: "card" | "grid") => void
  className?: string
}
```

### Component Layout

```
┌─────────────────────────────────┐
│  ┌─────┐    ┌─────┐            │
│  │grid │    │ list │            │
│  └─────┘    └─────┘            │
└─────────────────────────────────┘
   Active: coral border/bg
```

## Related Code Files

| File | Purpose | Action |
|------|---------|--------|
| `components/ui/button.tsx` | Button variants | Reference |
| `lib/utils.ts` | cn() utility | Use |
| `components/ui/tabs.tsx` | Alternative approach | Reference (not use) |

## Implementation Steps

1. Create `components/resources/view-toggle.tsx`
2. Implement toggle with Lucide icons
3. Add localStorage persistence logic
4. Create `components/resources/resource-list.tsx` (wrapper component)
5. Export from `components/resources/index.ts`

## Todo List

- [ ] Create `view-toggle.tsx` component
- [ ] Add localStorage persistence
- [ ] Create `resource-list.tsx` wrapper
- [ ] Export from index file

## Success Criteria

- [ ] Toggle switches between views correctly
- [ ] Preference persists across page reloads
- [ ] Keyboard accessible
- [ ] Follows existing button styling patterns
- [ ] Smooth transition animation

## Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| SSR hydration mismatch | Medium | Medium | Use `useEffect` for localStorage |
| Icons not available | Low | Low | Use Lucide icons (already in deps) |

## Security Considerations

- No security concerns (client-side only)

## Next Steps

Proceed to [Phase 4: Resources Page](./phase-04-resources-page.md) after this phase is complete.
