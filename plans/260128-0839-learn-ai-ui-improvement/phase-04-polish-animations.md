# Phase 4: Polish & Animations

## Overview

Add final polish: scroll animations, hover effects, and visual enhancements. Ensure consistency with homepage design.

**Priority:** P2
**Status:** Pending
**Effort:** 1.5h
**Blocked By:** Phase 3

## Enhancements

### 1. Path Card Enhancements

**File:** `components/learning/path-card.tsx`

**Add to `PathCard`:**
- Staggered animation on mount
- Enhanced hover effect (lift + shadow)
- Icon animation on hover

```tsx
// Add to PathCard component
import { motion } from "framer-motion" // or use existing ScrollReveal

// Staggered reveal wrapper
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  })
}
```

**Alternative:** Use existing `ScrollReveal` with delay prop.

### 2. Step Connector Animation

**File:** `components/learning/step-card.tsx`

**Enhancement:** Animate connector line drawing

```tsx
// Add animated connector
<div className="hidden md:block absolute top-6 left-full w-full h-0.5 overflow-hidden">
  <div className="h-full bg-gradient-to-r from-coral/50 to-coral/20 animate-draw-line" />
</div>

// CSS animation
@keyframes draw-line {
  from { transform: scaleX(0) }
  to { transform: scaleX(1) }
}
```

### 3. Testimonial Card Hover

**File:** `components/learning/testimonial-card.tsx`

**Enhancement:** Subtle lift on hover

```tsx
<div className="h-full p-6 bg-card border border-border rounded-xl
  hover:border-coral/30 hover:shadow-lg hover:-translate-y-1
  transition-all duration-300">
```

### 4. CTA Section Enhancement

**File:** `app/learn-ai/_components/cta-section.tsx`

**Enhancement:** Add floating particles or gradient animation

```tsx
// Background gradient animation
<div className="... bg-gradient-to-br from-coral/10 via-bronze/10 to-coral/10
  animate-gradient-shift">

// CSS
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50% }
  50% { background-position: 100% 50% }
}
```

### 5. Stats Counter Animation

**File:** `components/learning/stats-banner.tsx` (already uses `AnimatedCounter`)

**Enhancement:** Ensure counters animate when scrolled into view

Already handled by `ScrollReveal` wrapper + `AnimatedCounter`.

### 6. Section Reveal Animations

**All section files:**

Ensure each section uses `ScrollReveal`:

```tsx
<ScrollReveal delay={0} direction="up">
  <SectionContent />
</ScrollReveal>
```

**Stagger pattern for grids:**
```tsx
<div className="grid ...">
  {items.map((item, i) => (
    <ScrollReveal key={item.id} delay={i * 150}>
      <Card {...item} />
    </ScrollReveal>
  ))}
</div>
```

## Animation Specifications

| Element | Animation | Duration | Easing |
|---------|-----------|----------|--------|
| Section reveal | Fade up | 0.6s | ease-out |
| Card stagger | Delay cascade | 0.1s each | - |
| Card hover | Lift + shadow | 0.3s | ease |
| Counter | Number count | 2s | ease-out |
| Connector line | Draw | 0.8s | ease-out |
| Button hover | Scale + color | 0.2s | ease |

## CSS Animations to Add

Add to `app/globals.css` or component CSS modules:

```css
/* Gradient background animation */
@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient-shift {
  background-size: 200% 200%;
  animation: gradient-shift 8s ease infinite;
}

/* Line draw animation */
@keyframes draw-line {
  from { transform: scaleX(0); transform-origin: left; }
  to { transform: scaleX(1); transform-origin: left; }
}

.animate-draw-line {
  animation: draw-line 0.8s ease-out forwards;
}

/* Float animation for CTA */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}
```

## Visual Polish Checklist

### Spacing & Layout
- [ ] Consistent section padding (py-16 or py-24)
- [ ] Consistent container max-width
- [ ] Proper gap between grid items

### Colors & Gradients
- [ ] Coral (#D97757) for accents
- [ ] Bronze (#D4A27F) for secondary
- [ ] Consistent gradient directions

### Typography
- [ ] heading-xl for hero
- [ ] heading-md for section titles
- [ ] text-muted-foreground for descriptions

### Interactions
- [ ] Hover states on all cards
- [ ] Focus states on buttons
- [ ] Active states on links

### Mobile
- [ ] Grid collapses to single column
- [ ] Touch-friendly tap targets (min 44px)
- [ ] Readable font sizes

## Implementation Steps

1. Review all components for `ScrollReveal` usage
2. Add hover effects to cards
3. Add CSS animations to globals.css
4. Test animations on scroll
5. Verify mobile performance
6. Run build to check for errors

## Success Criteria

- [ ] All sections animate on scroll
- [ ] Cards have hover effects
- [ ] CTA has visual interest
- [ ] Animations are smooth (60fps)
- [ ] Mobile animations perform well
- [ ] No layout shift during animations
- [ ] Reduced motion respected (optional)

## Performance Considerations

- Use `transform` and `opacity` only for animations
- Add `will-change` sparingly
- Consider `prefers-reduced-motion` media query
- Lazy load below-fold sections

## Final Review

Compare with homepage (`app/page.tsx` sections):
- Consistent animation timing
- Consistent spacing scale
- Consistent color usage
- Consistent component patterns
