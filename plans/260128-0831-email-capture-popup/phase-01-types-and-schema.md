---
phase: 1
title: Types and Validation Schema
---

# Phase 1: Types and Validation Schema

## Context Links
- Parent Plan: [plan.md](./plan.md)
- Next Phase: [phase-02-popup-component](./phase-02-popup-component.md)
- Code Standards: [../../docs/code-standards.md](../../docs/code-standards.md)

## Overview

Create TypeScript types and Zod validation schema for the email capture popup feature.

**Priority**: P2
**Status**: pending
**Estimated Effort**: 1h

## Key Insights

- Project uses Zod for validation (seen in `components/ui/form.tsx`)
- React Hook Form is already configured with `@hookform/resolvers`
- Gift options should be an enum for type safety
- Email validation should follow RFC 5322 standard

## Requirements

### Functional Requirements
- Define `GiftOption` enum with three options
- Create `EmailPopupFormData` interface
- Create Zod schema with email validation
- Add proper error messages in Vietnamese

### Non-Functional Requirements
- Types must be reusable across components
- Validation errors should be user-friendly

## Architecture

### Type Definitions

```typescript
// types/email-popup.ts
export enum GiftOption {
  AI_AGENTS_MARKETING = 'ai-agents-marketing',
  REVIT_API_TEMPLATE = 'revit-api-template',
  VIBE_CODING_TEMPLATE = 'vibe-coding-template'
}

export interface EmailPopupFormData {
  name: string;
  email: string;
  giftSelection: GiftOption;
}

export interface PopupState {
  hasSeenPopup: boolean;
  hasSubmitted: boolean;
  dismissedAt?: string;
}
```

### Validation Schema

```typescript
// lib/validations/email-popup.ts
import { z } from 'zod';
import { GiftOption } from '@/types/email-popup';

export const emailPopupSchema = z.object({
  name: z.string().min(1, 'Vui lòng nhập tên của bạn'),
  email: z.string().email('Email không hợp lệ'),
  giftSelection: z.nativeEnum(GiftOption, {
    required_error: 'Vui lòng chọn một món quà'
  })
});

export type EmailPopupSchema = z.infer<typeof emailPopupSchema>;
```

## Related Code Files

### Files to Create
- `types/email-popup.ts` - Type definitions
- `lib/validations/email-popup.ts` - Zod schema

### Dependencies
- `zod` (already installed)
- `@hookform/resolvers` (already installed)

## Implementation Steps

1. Create `types/email-popup.ts` with enum and interfaces
2. Create `lib/validations/email-popup.ts` with Zod schema
3. Export types from appropriate index files if needed

## Todo List

- [ ] Create `types/email-popup.ts`
- [ ] Create `lib/validations/email-popup.ts`
- [ ] Test types compile correctly

## Success Criteria

- Types compile without errors
- Schema validates email format correctly
- Error messages are in Vietnamese
- Gift options are type-safe

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| Type conflicts | Low | Follow existing patterns |

## Security Considerations

- No sensitive data in types
- Validation happens client-side only (supplement with server if needed later)

## Next Steps

Proceed to [Phase 2: Popup Component](./phase-02-popup-component.md) after types are created.
