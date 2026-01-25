# Phase 2: Core Layout & Navigation

## Context
- **Plan**: /plans/260125-0954-ai-educator-website/plan.md
- **Dependencies**: Phase 1 (Design System) complete
- **Docs**: Next.js 16 layouts, shadcn/ui Navigation Menu

## Overview
- **Duration**: 1-2 days
- **Priority**: P1 (Essential structure)
- **Status**: DONE (2026-01-25 11:15)
- **Description**: Build consistent header/footer, navigation menu, mobile-responsive layout

## Requirements

### Navigation Structure
```
Logo | Về tôi | Học AI | Blog | Tài nguyên | Cuộc sống | Newsletter | Liên hệ
                     ↓
            [AI cho người mới]
            [AI cho Marketing]
            [AI cho công việc]
```

### Layout Components
- Sticky header with glass morphism effect
- Mobile hamburger menu (Sheet component)
- Footer with social links, copyright
- Consistent container wrapper

## Architecture Decisions

### Layout Structure
```typescript
// app/layout.tsx
- RootLayout with header/footer
- Metadata configuration
- Font loading optimization

// components/layout/
- Header.tsx (desktop + mobile)
- Footer.tsx
- MobileMenu.tsx
- Navigation.tsx
```

### Routing Strategy
- Use Next.js 16 App Router
- Parallel routes for modal overlays (future)
- Loading.tsx for route transitions

## Implementation Steps

### 1. Create Header Component
- [x] Build desktop navigation with shadcn NavigationMenu
- [x] Add logo/brand section
- [x] Implement dropdown for "Học AI" section
- [x] Add CTA button "Nhận quà miễn phí"
- [x] Apply glass morphism on scroll

### 2. Mobile Navigation
- [x] Install shadcn Sheet component
- [x] Create hamburger menu trigger
- [x] Build mobile menu with accordion for dropdowns
- [x] Add smooth open/close animations
- [x] Ensure touch-friendly tap targets

### 3. Footer Component
- [x] Create three-column layout:
  - Quick links
  - Newsletter signup
  - Social/contact
- [x] Add copyright notice
- [x] Implement newsletter form (basic, enhance in Phase 6)

### 4. Update Root Layout
- [x] Integrate Header and Footer
- [x] Set up container consistency
- [x] Configure viewport meta
- [x] Add skip navigation link (a11y)

### 5. Navigation State Management
- [x] Highlight active page in nav
- [x] Close mobile menu on route change
- [x] Add loading indicators

### 6. Responsive Testing
- [x] Test all breakpoints (mobile, tablet, desktop)
- [x] Verify touch interactions
- [x] Check keyboard navigation
- [x] Test with Vietnamese text lengths

## Related Code Files
```
app/layout.tsx                    # Root layout update
components/layout/header.tsx      # Main header
components/layout/footer.tsx      # Main footer
components/layout/mobile-menu.tsx # Mobile navigation
components/layout/navigation.tsx  # Nav menu logic
lib/navigation.ts                 # Navigation config
```

## Todo List
```
Creating Header component with navigation
Implementing mobile menu with Sheet component
Building footer with newsletter signup
Adding glass morphism effect on scroll
Configuring active link highlighting
Testing responsive breakpoints
Adding loading states
Implementing keyboard navigation
Testing with Vietnamese content
Setting up skip navigation link
```

## Success Criteria
- [x] Navigation works on all devices
- [x] Mobile menu smooth and responsive
- [x] Active page highlighted correctly
- [x] Footer newsletter form captures emails
- [x] Keyboard navigation fully functional
- [x] Page transitions smooth

## Risk Assessment
- **Mobile performance**: Complex menus may lag on low-end devices
- **Vietnamese text overflow**: Longer text might break layouts
- **Mitigation**: Use CSS text-overflow, test on real devices

## Security Considerations
- Sanitize any user-generated navigation items (future CMS)
- Validate newsletter email input
- Rate limit form submissions

## Next Steps
-> Phase 3: Home Page Implementation (hero, sections, CTAs) - READY