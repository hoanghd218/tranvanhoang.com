---
phase: 4
title: Integration and Testing
---

# Phase 4: Integration and Test

## Context Links
- Parent Plan: [plan.md](./plan.md)
- Previous Phase: [phase-03-localstorage-hook](./phase-03-localstorage-hook.md)
- Code Standards: [../../docs/code-standards.md](../../docs/code-standards.md)

## Overview

Integrate the email capture popup into the root layout and verify all functionality works correctly.

**Priority**: P2
**Status**: pending
**Estimated Effort**: 1h

## Key Insights

- Popup should be added to `app/layout.tsx`
- Must use dynamic import with `ssr: false` for client-only component
- Should only render after hydration to avoid SSR issues
- Test on both desktop and mobile viewports

## Requirements

### Functional Requirements
- Add popup to root layout
- Show only on first visit
- Handle form submission
- Deliver gift after submission
- Allow dismissal with "maybe later"

### Non-Functional Requirements
- No SSR errors
- Smooth animations
- Mobile responsive
- Accessible

## Architecture

### Layout Integration

```typescript
// app/layout.tsx
import dynamic from 'next/dynamic';

const EmailCapturePopup = dynamic(
  () => import('@/components/email-capture/email-capture-popup'),
  { ssr: false }
);

// In component:
<EmailCapturePopup />
```

### Gift Delivery

After form submission, show:
- AI Agents: Link to download page or display list
- Revit Template: Download link
- Vibe Coding: Download link or display prompts

## Related Code Files

### Files to Modify
- `app/layout.tsx` - Add popup component

### Files to Reference
- `components/email-capture/email-capture-popup.tsx`
- `hooks/use-email-popup.ts`

## Implementation Steps

1. Update `app/layout.tsx` to import popup dynamically
2. Add popup component inside body
3. Test first-time visit flow
4. Test "maybe later" flow
5. Test form submission
6. Test mobile responsiveness
7. Run lint to check for errors

## Todo List

- [ ] Update `app/layout.tsx` with dynamic import
- [ ] Add popup to layout
- [ ] Test first visit flow
- [ ] Test "maybe later" flow
- [ ] Test form submission
- [ ] Test mobile view
- [ ] Run lint
- [ ] Clear localStorage and retest

## Success Criteria

- Popup shows on first visit
- Form validates correctly
- Gift selection works
- Success message displays
- "Maybe later" remembers preference
- No console errors
- Mobile responsive
- Lint passes

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| SSR errors | High | Use dynamic import with ssr: false |
| Flash of popup | Medium | Add isLoaded check |

## Testing Checklist

- [ ] Clear localStorage, refresh - popup should show
- [ ] Close popup, refresh - popup should not show
- [ ] Click "maybe later", refresh - popup should not show
- [ ] Wait 7 days (or modify date), refresh - popup should show
- [ ] Submit form - success view should show
- [ ] Refresh after submit - popup should not show
- [ ] Test on mobile viewport
- [ ] Test keyboard navigation

## Security Considerations

- No sensitive data in localStorage
- Form submission is client-side only

## Next Steps

After testing is complete:
1. Run code review
2. Update documentation if needed
3. Commit changes
