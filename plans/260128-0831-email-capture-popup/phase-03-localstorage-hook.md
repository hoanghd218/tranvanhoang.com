---
phase: 3
title: localStorage Hook for Popup State
---

# Phase 3: localStorage Hook for Popup State

## Context Links
- Parent Plan: [plan.md](./plan.md)
- Previous Phase: [phase-02-popup-component](./phase-02-popup-component.md)
- Next Phase: [phase-04-integration-and-test](./phase-04-integration-and-test.md)
- Code Standards: [../../docs/code-standards.md](../../docs/code-standards.md)

## Overview

Create a custom React hook to manage popup visibility state using localStorage.

**Priority**: P2
**Status**: pending
**Estimated Effort**: 1.5h

## Key Insights

- localStorage is only available in browser (client-side)
- Need to handle SSR safely
- State should persist across sessions
- "Maybe later" should delay popup for a period (e.g., 7 days)

## Requirements

### Functional Requirements
- Track if user has seen the popup
- Track if user has submitted the form
- Track when user dismissed with "maybe later"
- Calculate if popup should show based on state
- Safely handle SSR (no localStorage on server)

### Non-Functional Requirements
- Hook must be reusable
- Handle localStorage errors gracefully
- Sync state across tabs (optional)

## Architecture

### Hook Interface

```typescript
// hooks/use-email-popup.ts
interface UseEmailPopupReturn {
  shouldShowPopup: boolean;
  hasSubmitted: boolean;
  markAsSeen: () => void;
  markAsSubmitted: () => void;
  dismissForLater: () => void;
  isLoaded: boolean; // For SSR safety
}

export function useEmailPopup(): UseEmailPopupReturn;
```

### localStorage Schema

```typescript
interface PopupStorageState {
  hasSeenPopup: boolean;
  hasSubmitted: boolean;
  dismissedAt?: string; // ISO date string
}

const STORAGE_KEY = 'email-popup-state';
const DISMISS_DURATION_DAYS = 7;
```

### Logic Flow

```
shouldShowPopup =
  !hasSubmitted &&
  (!hasSeenPopup ||
   (dismissedAt && isAfter7Days(dismissedAt)))
```

## Related Code Files

### Files to Create
- `hooks/use-email-popup.ts` - Main hook

### Files to Reference
- `types/email-popup.ts` - Types from Phase 1

### Dependencies
- None (uses React built-ins)

## Implementation Steps

1. Create `hooks/` directory if not exists
2. Create `use-email-popup.ts` hook
3. Implement SSR-safe localStorage access
4. Add date calculation for "maybe later"
5. Export hook for use in layout

## Todo List

- [ ] Create `hooks/use-email-popup.ts`
- [ ] Implement localStorage read/write
- [ ] Add SSR safety checks
- [ ] Implement "maybe later" logic
- [ ] Test hook behavior

## Success Criteria

- Hook works without SSR errors
- State persists in localStorage
- "Maybe later" delays popup correctly
- Returns correct `shouldShowPopup` value

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| localStorage not available | Low | Check typeof window |
| Date parsing errors | Low | Use ISO strings |

## Security Considerations

- No sensitive data stored
- localStorage is client-side only

## Next Steps

Proceed to [Phase 4: Integration and Test](./phase-04-integration-and-test.md) after hook is complete.
