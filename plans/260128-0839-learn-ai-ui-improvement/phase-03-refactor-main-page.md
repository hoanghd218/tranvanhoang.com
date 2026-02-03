# Phase 3: Refactor Main Page

## Overview

Refactor `app/learn-ai/page.tsx` to use new section components. Main page should only contain data and component composition.

**Priority:** P2
**Status:** Pending
**Effort:** 1h
**Blocked By:** Phase 1, Phase 2

## Target Structure

**Before:** 130 lines with inline sections, data, and components

**After:** ~40 lines, clean composition

```tsx
import { Metadata } from "next"
import { HeroSection } from "./_components/hero-section"
import { StatsBanner } from "./_components/stats-banner"
import { LearningPathsSection } from "./_components/learning-paths-section"
import { HowItWorksSection } from "./_components/how-it-works-section"
import { TestimonialsSection } from "./_components/testimonials-section"
import { CTASection } from "./_components/cta-section"

export const metadata: Metadata = {
  title: "Học AI | Hoàng - AI Educator",
  description: "Các lộ trình học AI được thiết kế cho ngườii mới...",
}

export default function LearnAIPage() {
  return (
    <>
      <HeroSection />
      <StatsBanner />
      <LearningPathsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
```

## Changes Required

### 1. Update Imports

**Remove:**
- `LearningPathCards` import (moved to section)
- `Container`, `Section` imports (used in sections)
- `GradientText` import (used in sections)

**Add:**
- Section component imports from `./_components/`

### 2. Remove Inline Data

Move to respective section components:
- `steps` array → `how-it-works-section.tsx`
- `testimonials` array → `testimonials-section.tsx`

### 3. Remove Inline Sections

Delete inline JSX for:
- Hero section
- Learning paths section
- How it works section
- Testimonials section
- CTA section

### 4. Add Stats Banner (Optional)

Insert `<StatsBanner />` between Hero and Learning Paths for social proof.

## Implementation Steps

1. Backup current `page.tsx`
2. Update imports section
3. Remove all inline data constants
4. Replace JSX with section components
5. Verify metadata unchanged
6. Test page renders correctly

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `app/learn-ai/page.tsx` | Modify | Refactor to use section components |

## Code Diff Preview

```diff
  import { Metadata } from "next"
- import { LearningPathCards } from "@/components/learning/path-card"
- import { Container, Section } from "@/components/custom/container"
- import { GradientText } from "@/components/custom/gradient-text"
+ import { HeroSection } from "./_components/hero-section"
+ import { StatsBanner } from "./_components/stats-banner"
+ import { LearningPathsSection } from "./_components/learning-paths-section"
+ import { HowItWorksSection } from "./_components/how-it-works-section"
+ import { TestimonialsSection } from "./_components/testimonials-section"
+ import { CTASection } from "./_components/cta-section"

  export const metadata: Metadata = {
    title: "Học AI | Hoàng - AI Educator",
    description: "...",
  }

  export default function LearnAIPage() {
    return (
      <>
-       {/* Hero */}
-       <Section className="py-16 md:py-24">...</Section>
-
-       {/* Learning Paths */}
-       <Section className="py-12">...</Section>
-
-       {/* How it works */}
-       <Section className="py-16 bg-card/30">...</Section>
-
-       {/* Testimonials */}
-       <Section className="py-16">...</Section>
-
-       {/* CTA */}
-       <Section className="py-16">...</Section>
+       <HeroSection />
+       <StatsBanner />
+       <LearningPathsSection />
+       <HowItWorksSection />
+       <TestimonialsSection />
+       <CTASection />
      </>
    )
  }
-
- const steps = [...]
- const testimonials = [...]
```

## Success Criteria

- [ ] Main page < 50 lines
- [ ] No inline data or components
- [ ] All sections render correctly
- [ ] Metadata preserved
- [ ] No TypeScript errors
- [ ] No lint errors

## Next Steps

After this phase: Add polish and animations
