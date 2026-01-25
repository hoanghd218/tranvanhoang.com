# Code Review Report: Phase 1 Foundation & Design System

**Date**: 2026-01-25
**Reviewer**: code-reviewer agent
**Plan**: /plans/260125-0954-ai-educator-website/plan.md
**Phase**: phase-01-foundation.md

---

## Scope
- Files reviewed: 9 components (5 custom + 4 shadcn/ui)
- Lines of code analyzed: ~450
- Review focus: Phase 1 changes for AI Educator Website

---

## Overall Assessment

**Score: 6/10**

Phase 1 implementation is mostly solid with standard shadcn/ui components and well-designed custom brand components. However, there is **one critical issue** in `container.tsx` that will cause Tailwind classes to not be generated, breaking the component functionality.

---

## Critical Issues

### 1. `container.tsx` - Dynamic Tailwind Classes NOT Working

**File**: `/Users/hoangtran/Documents/Github/tranvanhoang.com/components/custom/container.tsx`

**Problem**: Using template literals for Tailwind class names will NOT work in Tailwind v4. Tailwind processes only static class names at build time.

```typescript
// BROKEN - Tailwind will NOT generate these classes
`max-w-${size}`,     // e.g., "max-w-6xl" - won't work!
`px-${padding}`,     // e.g., "px-6" - won't work!
`py-${padding}`,     // e.g., "py-16" - won't work!
```

**Impact**: The `Container` and `Section` components will have no max-width or padding applied at runtime.

**Fix**: Use explicit class mapping instead:

```typescript
const sizeClasses = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
  "3xl": "max-w-3xl",
  "4xl": "max-w-4xl",
  "5xl": "max-w-5xl",
  "6xl": "max-w-6xl",
  "7xl": "max-w-7xl",
  full: "max-w-full",
}

const paddingClasses = {
  "4": "px-4",
  "6": "px-6",
  "8": "px-8",
  // etc.
}

function Container({ ..., size = "6xl", padding = "6", ... }) {
  return (
    <div className={cn(sizeClasses[size], `${paddingClasses[padding]}`, center && "mx-auto", className)}>
      {children}
    </div>
  )
}
```

---

## High Priority Findings

### 1. `brand-card.tsx` - Unused CSS Variable

**File**: `/Users/hoangtran/Documents/Github/tranvanhoang.com/components/custom/brand-card.tsx`

**Problem**: CSS variable `--hover-border` is defined but never actually used in styles:

```typescript
style={hoverBorder ? { "--hover-border": hoverColor } as React.CSSProperties : undefined}
```

The hover effect relies on hardcoded `hover:border-opacity-80` which doesn't reference the variable.

**Fix**: Either use the variable in styles or remove the `hoverColor` prop if not needed:

```typescript
// Option 1: Use the variable
className={cn(
  "bg-card rounded-xl border border-border transition-all duration-300",
  hoverBorder && "hover:border-[color:var(--hover-border)]",
  paddingClasses[padding],
  className
)}
```

---

## Medium Priority Improvements

### 1. TypeScript - `HTMLElement` vs `HTMLDivElement`

**File**: `/Users/hoangtran/Documents/Github/tranvanhoang.com/components/custom/container.tsx`

**Line 21**: `interface SectionProps extends React.HTMLAttributes<HTMLElement>`

Should be `HTMLDivElement` or `HTMLSectionElement` since it's a `<section>` element, not generic HTML element.

### 2. Accessibility - Missing `aria-label` on Icon Button

**File**: `/Users/hoangtran/Documents/Github/tranvanhoang.com/components/custom/cta-button.tsx`

**Line 45-54**: The `loading` state shows a spinner SVG without `aria-label` or `aria-hidden`.

```typescript
{loading && (
  <svg className="animate-spin h-4 w-4" ...>
```

Should add `role="status"` and `aria-label="Loading"` for screen readers.

---

## Low Priority Suggestions

### 1. DRY - Loading Spinner Component

**File**: `/Users/hoangtran/Documents/Github/tranvanhoang.com/components/custom/cta-button.tsx`

The loading spinner SVG is duplicated inline. Consider creating a `LoadingSpinner` component or using lucide-react's `Loader2` icon (already imported in `sonner.tsx`).

### 2. Component Organization

All custom components (`gradient-text.tsx`, `brand-card.tsx`, `cta-button.tsx`, `container.tsx`) are well-organized and follow project patterns. No issues found.

---

## Positive Observations

1. **Clean TypeScript typing** - All components have proper TypeScript interfaces with JSDoc comments
2. **Good use of `cn()` utility** - Components properly use the `twMerge` + `clsx` pattern
3. **Consistent prop patterns** - Default values, proper destructuring
4. **shadcn/ui components** - Standard installation, properly integrated
5. **Tailwind v4 theme** - Well-structured CSS variables in globals.css
6. **No XSS vulnerabilities** - Components use controlled props, no dangerous `innerHTML` usage
7. **Vietnamese support** - Proper font configuration with `subsets: ["latin", "vietnamese"]`

---

## Recommended Actions

1. **IMMEDIATE**: Fix `container.tsx` - replace dynamic class names with explicit mapping
2. **HIGH**: Fix `brand-card.tsx` - either use the CSS variable or remove unused `hoverColor` prop
3. **MEDIUM**: Add accessibility labels to `cta-button.tsx` loading state
4. **LOW**: Consider extracting loading spinner to shared component

---

## Unresolved Questions

1. Is `next-themes` package installed? (`sonner.tsx` imports `useTheme` from it)
2. Are the CSS animation classes `animate-accordion-up/down` defined? (`accordion.tsx` references them)
3. Should `Container` and `Section` be merged into a single layout component file?

---

## Compliance Checklist

| Rule | Status |
|------|--------|
| YAGNI (no over-engineering) | PASS |
| KISS (simple, readable) | PASS |
| DRY (no duplication) | PASS |
| TypeScript strict typing | PASS |
| Security (no XSS) | PASS |
| Accessibility (basic) | NEEDS FIX |
| Tailwind v4 compatible | NEEDS FIX |
| File naming conventions | PASS |
| Component organization | PASS |
