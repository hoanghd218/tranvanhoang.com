# Phase 10: Analytics & Testing

## Context
- **Plan**: /plans/260125-0954-ai-educator-website/plan.md
- **Dependencies**: Site features complete
- **Docs**: Fathom Analytics docs, testing best practices

## Overview
- **Duration**: 1 day
- **Priority**: P3 (Important for iteration)
- **Status**: pending
- **Description**: Set up analytics tracking, implement testing suite, validate accessibility

## Key Insights from Research
- Fathom Analytics recommended ($14/mo, privacy-first)
- 100k pageviews included
- Cookieless tracking (GDPR compliant)
- Event tracking for conversions

## Requirements

### Analytics Goals
- Track user behavior
- Measure conversion rates
- Monitor content performance
- Identify improvement areas

### Testing Coverage
- Cross-browser compatibility
- Mobile responsiveness
- Accessibility (WCAG 2.1 AA)
- Performance validation
- Form functionality

## Implementation Steps

### 1. Fathom Analytics Setup
- [ ] Create Fathom account
- [ ] Add site to dashboard
- [ ] Install tracking script:
  ```tsx
  // app/layout.tsx
  <Script
    src="https://cdn.usefathom.com/script.js"
    data-site="YOUR_SITE_ID"
    defer
  />
  ```
- [ ] Configure custom domain (optional)
- [ ] Set up goals/events

### 2. Event Tracking
- [ ] Track key conversions:
  ```typescript
  // lib/analytics.ts
  export const trackEvent = (name: string) => {
    if (window.fathom) {
      window.fathom.trackGoal('EVENT_ID', 0)
    }
  }
  ```
- [ ] Implement events for:
  - Email signups
  - Lead magnet downloads
  - Contact form submissions
  - Learning path starts
  - Resource downloads
  - Newsletter subscriptions

### 3. Conversion Funnel
- [ ] Map user journeys:
  - Homepage → Free Gift → Email → Download
  - Blog → Newsletter → Engaged subscriber
  - Learning → Resources → Contact
- [ ] Set up funnel tracking
- [ ] Create conversion dashboards

### 4. Cross-Browser Testing
- [ ] Test on major browsers:
  - Chrome (latest 2 versions)
  - Safari (desktop + iOS)
  - Firefox
  - Edge
- [ ] Verify functionality:
  - Forms work correctly
  - Animations smooth
  - Layouts consistent
  - Vietnamese text renders

### 5. Mobile Testing
- [ ] Test on devices:
  - iPhone (Safari)
  - Android (Chrome)
  - iPad (landscape/portrait)
- [ ] Check:
  - Touch interactions
  - Menu functionality
  - Form usability
  - Reading experience
  - Performance on 3G/4G

### 6. Accessibility Audit
- [ ] Run automated tests:
  - Lighthouse accessibility
  - axe DevTools
  - WAVE evaluation
- [ ] Manual testing:
  - Keyboard navigation
  - Screen reader (NVDA/JAWS)
  - Color contrast
  - Focus indicators
  - Alt text for images
  - ARIA labels

### 7. Performance Testing
- [ ] Run performance audits:
  - Lighthouse performance
  - WebPageTest.org
  - Core Web Vitals
- [ ] Test under conditions:
  - Slow 3G
  - Fast 3G
  - Cable
- [ ] Verify targets:
  - LCP <2.5s
  - FID <100ms
  - CLS <0.1

### 8. Form Testing
- [ ] Test all forms:
  - Email capture
  - Contact form
  - Newsletter signup
- [ ] Verify:
  - Validation works
  - Success messages show
  - Emails deliver
  - Spam prevention active
  - Error handling graceful

### 9. Content Testing
- [ ] Validate MDX rendering:
  - Blog posts display
  - Code highlighting works
  - Images load
  - Links work
- [ ] Check Vietnamese content:
  - Proper encoding
  - Search works
  - Slugs generate correctly

### 10. Analytics Validation
- [ ] Verify tracking:
  - Pageviews recorded
  - Events fire correctly
  - No duplicate tracking
  - Goals track conversions
- [ ] Check data accuracy:
  - Test with real users
  - Compare with server logs
  - Validate UTM parameters

## Testing Checklist
```
Setting up Fathom Analytics account
Installing tracking script
Configuring conversion events
Testing cross-browser compatibility
Validating mobile responsiveness
Running accessibility audit
Testing all forms end-to-end
Checking Vietnamese content display
Verifying Core Web Vitals
Setting up performance monitoring
Creating analytics dashboards
Testing email delivery
Validating SEO implementation
Checking social sharing
Testing 404 and error pages
```

## Related Code Files
```
app/layout.tsx                      # Analytics script
lib/analytics.ts                    # Event tracking helpers
types/fathom.d.ts                  # TypeScript definitions
tests/accessibility.test.ts         # A11y tests
tests/forms.test.ts                # Form validation tests
tests/performance.test.ts          # Performance tests
cypress/e2e/user-journey.cy.ts     # E2E tests
.github/workflows/test.yml         # CI testing
```

## Success Criteria
- [ ] Analytics tracking >95% accurate
- [ ] All forms functional
- [ ] WCAG 2.1 AA compliant
- [ ] Works on top 5 browsers
- [ ] Mobile experience smooth
- [ ] Core Web Vitals passing
- [ ] No critical bugs found

## Risk Assessment
- **Privacy concerns**: Users may block analytics
- **Testing coverage**: Can't test every device
- **Performance regression**: New features may slow site
- **Mitigation**: Server-side analytics fallback, focus on popular devices

## Security Considerations
- Don't track PII in analytics
- Sanitize event parameters
- Use SRI for third-party scripts
- Monitor for tracking abuse

## Next Steps
→ Phase 11: Content Population & Launch (go live!)