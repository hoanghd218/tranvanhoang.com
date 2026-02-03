---
phase: 2
title: Popup Component with Form
---

# Phase 2: Popup Component with Form

## Context Links
- Parent Plan: [plan.md](./plan.md)
- Previous Phase: [phase-01-types-and-schema](./phase-01-types-and-schema.md)
- Next Phase: [phase-03-localstorage-hook](./phase-03-localstorage-hook.md)
- Code Standards: [../../docs/code-standards.md](../../docs/code-standards.md)

## Overview

Build the email capture popup modal component with form inputs and gift selection UI.

**Priority**: P2
**Status**: pending
**Estimated Effort**: 2.5h

## Key Insights

- Project uses Radix UI Dialog (`components/ui/dialog.tsx`)
- Form components use React Hook Form pattern
- Design uses coral (#D97757) and bronze (#D4A27C) accents
- Dark theme only (no light mode)
- Components should be under 200 lines

## Requirements

### Functional Requirements
- Modal dialog with overlay
- Name input field (required)
- Email input field with validation
- Gift selection cards (3 options)
- Submit button
- Close button
- Success state view
- Form validation with error messages

### Non-Functional Requirements
- Accessible (ARIA labels, keyboard navigation)
- Responsive design
- Smooth animations (using existing Radix animations)
- Match existing design system

## Architecture

### Component Structure

```
EmailCapturePopup/
├── email-capture-popup.tsx    # Main container component
├── gift-selector.tsx          # Gift selection cards
└── success-view.tsx           # Post-submission view
```

### Gift Options Data

```typescript
const giftOptions = [
  {
    id: GiftOption.AI_AGENTS_MARKETING,
    title: 'Danh sách AI Agents Marketing',
    description: '20+ AI agents giúp bạn tự động hóa marketing',
    icon: Bot
  },
  {
    id: GiftOption.REVIT_API_TEMPLATE,
    title: 'Template Revit API',
    description: 'Code mẫu để bắt đầu với Revit API',
    icon: Code
  },
  {
    id: GiftOption.VIBE_CODING_TEMPLATE,
    title: 'Template Vibe Coding',
    description: 'Prompts và workflow cho vibe coding',
    icon: Sparkles
  }
];
```

### Design Specifications

**Dialog:**
- Max width: 500px
- Background: `--card` (#18181B)
- Border: `--border` (#27272A)
- Border radius: `radius-lg` (0.75rem)
- Padding: 1.5rem

**Form Inputs:**
- Use existing `components/ui/input.tsx`
- Focus ring: coral color
- Error state: red border

**Gift Cards:**
- Grid layout: 3 columns on desktop, 1 on mobile
- Selected state: coral border
- Hover: subtle background change

**Buttons:**
- Primary: coral background, white text
- Secondary: transparent with border

## Related Code Files

### Files to Create
- `components/email-capture/email-capture-popup.tsx`
- `components/email-capture/gift-selector.tsx`
- `components/email-capture/success-view.tsx`

### Files to Reference
- `components/ui/dialog.tsx` - Dialog pattern
- `components/ui/form.tsx` - Form components
- `components/ui/input.tsx` - Input styling
- `components/ui/button.tsx` - Button variants

### Dependencies
- `lucide-react` (already installed)
- `@radix-ui/react-dialog` (already installed)
- `react-hook-form` (already installed)

## Implementation Steps

1. Create `gift-selector.tsx` with selectable cards
2. Create `success-view.tsx` for post-submission state
3. Create main `email-capture-popup.tsx` with form logic
4. Wire up form validation with React Hook Form
5. Test component renders correctly

## Todo List

- [ ] Create `components/email-capture/` directory
- [ ] Create `gift-selector.tsx` component
- [ ] Create `success-view.tsx` component
- [ ] Create `email-capture-popup.tsx` main component
- [ ] Add form validation
- [ ] Test responsive layout

## Success Criteria

- Component renders without errors
- Form validation works correctly
- Gift selection is interactive
- Success view displays after submission
- Design matches existing theme
- Component is under 200 lines (split if needed)

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| Component too large | Medium | Split into sub-components |
| Accessibility issues | Medium | Test with keyboard navigation |

## Security Considerations

- No sensitive data hardcoded
- Form data handled client-side only

## Next Steps

Proceed to [Phase 3: localStorage Hook](./phase-03-localstorage-hook.md) after component is complete.
