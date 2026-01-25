# Phase 1: Foundation & Design System

## Context
- **Plan**: /plans/260125-0954-ai-educator-website/plan.md
- **Dependencies**: Fresh Next.js 16 project
- **Docs**: Tailwind v4 docs, shadcn/ui installation guide

## Overview
- **Duration**: 2-3 days
- **Priority**: P1 (Critical foundation)
- **Status**: DONE (2026-01-25 10:40)
- **Code Review**: [code-reviewer-260125-phase-01-foundation-report.md](./reports/code-reviewer-260125-phase-01-foundation-report.md)
- **Review Score**: 6/10 (Critical: container.tsx Tailwind classes broken)
- **Description**: Set up Tailwind v4 configuration with ClaudeKit-inspired design tokens, install shadcn/ui, configure typography and color system

## Key Insights from Research
- shadcn/ui v1.0+ fully compatible with Tailwind v4 and React 19
- Use HSL→OKLCH color conversion for modern color system
- Lucide React recommended for icon system
- Keep or replace Geist fonts based on Vietnamese support testing

## Requirements

### Design Tokens
- **Colors**: Dark charcoal (#0E0E0E), Coral (#D97757), Bronze (#D4A27F)
- **Typography**: Large display sizes, readable body font
- **Effects**: Gradient text (coral-to-bronze), subtle borders, smooth transitions
- **Spacing**: Generous padding (py-16), max-width containers (max-w-6xl)

### Component Library
- shadcn/ui base installation (20-30 components)
- Custom gradient text component
- Custom card with coral hover borders
- Button variants matching brand

## Architecture Decisions

### Tailwind v4 Configuration
```typescript
// tailwind.config.ts structure
- Use CSS variables for theme tokens
- OKLCH color space for better gradients
- Custom animation classes
- Vietnamese font stack consideration
```

### File Structure
```
/components
  /ui           # shadcn/ui components
  /custom       # Brand-specific components
  /layout       # Layout components
/lib
  /utils        # Helper functions
/styles
  globals.css   # Tailwind directives + custom CSS
```

## Implementation Steps

### 1. Configure Tailwind v4 Theme
- [ ] Update tailwind.config.ts with brand colors
- [ ] Define color palette using CSS variables
- [ ] Set up typography scale (heading sizes, line heights)
- [ ] Configure animation utilities (hover, transition)
- [ ] Add custom gradient utilities

### 2. Typography Setup
- [ ] Test Geist fonts with Vietnamese text
- [ ] If needed, add Vietnamese-optimized fallbacks (Inter, Source Sans)
- [ ] Configure font sizes for display, heading, body
- [ ] Set up line-height and letter-spacing

### 3. Install shadcn/ui
- [ ] Run shadcn/ui init command
- [ ] Configure components.json with style preferences
- [ ] Install core components batch:
  - Button, Card, Form, Input, Label
  - Navigation Menu, Sheet (mobile menu)
  - Dialog, Alert, Toast
  - Tabs, Accordion
  - Badge, Avatar

### 4. Create Custom Brand Components
- [ ] GradientText component (coral-to-bronze)
- [ ] BrandCard component (hover border effect)
- [ ] CTAButton component (coral background)
- [ ] Container component (max-w-6xl centering)

### 5. Set Up Base Styles
- [ ] Configure globals.css with CSS variables
- [ ] Add utility classes for common patterns
- [ ] Set up dark mode variables (if needed)
- [ ] Configure print styles

### 6. Component Documentation
- [ ] Create Storybook or simple demo page
- [ ] Document component usage patterns
- [ ] Create style guide reference

## Todo List
```
Setting up Tailwind v4 theme configuration
Configuring brand color palette with CSS variables
Testing Vietnamese font support with Geist
Installing shadcn/ui base components
Creating GradientText custom component
Creating BrandCard with coral hover effect
Creating CTAButton component
Setting up Container component
Configuring animation utilities
Testing component library setup
```

## Success Criteria
- [ ] All brand colors accessible via Tailwind classes
- [ ] shadcn/ui components installed and working
- [ ] Custom components match ClaudeKit aesthetic
- [ ] Vietnamese text renders correctly
- [ ] Component demo page functional
- [ ] Hot reload working smoothly

## Risk Assessment
- **Font compatibility**: Geist may need fallbacks for Vietnamese
- **Tailwind v4 bugs**: New version might have edge cases
- **Component conflicts**: Custom styles may clash with shadcn defaults
- **Mitigation**: Test early, have fallback options ready

## Security Considerations
- CSS injection via user content (sanitize any dynamic styles)
- Third-party font loading (use font-display: swap)
- Component library vulnerabilities (keep shadcn/ui updated)

## Code Review Blockers

### Critical (Must Fix Before Phase 2)
1. **container.tsx**: Dynamic Tailwind class names (`max-w-${size}`, `px-${padding}`) do NOT work in Tailwind v4. Must use explicit class mapping.

### High Priority
1. **brand-card.tsx**: Unused CSS variable `--hover-border` - either use it or remove the prop.
2. **cta-button.tsx**: Missing `aria-label` on loading spinner for accessibility.

### Low Priority
1. Consider extracting loading spinner to shared component.

## Next Steps
→ Phase 2: Core Layout & Navigation (header, footer, mobile menu)