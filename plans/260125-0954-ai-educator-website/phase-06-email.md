# Phase 6: Email Capture & Lead Magnets

## Context
- **Plan**: /plans/260125-0954-ai-educator-website/plan.md
- **Dependencies**: Phase 1-3 (design, layout, homepage)
- **Docs**: Email solutions research, form validation patterns

## Overview
- **Duration**: 3-4 days
- **Priority**: P1 (Business-critical)
- **Status**: pending
- **Description**: Implement email capture system with lead magnets, automated delivery, and nurture sequences

## Key Insights from Research
- **MVP**: Start with EmailOctopus (free <2.5k subs)
- **Growth**: Migrate to Kit Creator ($33/mo) for better automation
- **Form Stack**: React Hook Form + Zod + Server Actions
- **Lead Magnet Options**: Ebook, prompt pack, mini video series

## Requirements

### Lead Magnets
1. **Ebook**: "AI cho người mới: 7 ngày làm quen với AI"
2. **Prompt Pack**: "30 prompt templates cho công việc"
3. **Video Series**: "5 video ngắn về AI cơ bản"

### Email Sequence (5-7 days)
1. Welcome + immediate delivery
2. Day 1: AI misconceptions
3. Day 3: First practical exercise
4. Day 5: Case study/success story
5. Day 7: Next steps + main offer

### Forms Needed
- Main lead capture (/free-gift)
- Footer newsletter signup
- Exit-intent popup (optional)
- Blog post inline forms

## Architecture Decisions

### Email Service Integration
```typescript
// Initial: EmailOctopus API
// Future: Kit/ConvertKit API migration path
// lib/email/
  - provider.ts (abstraction layer)
  - emailoctopus.ts
  - kit.ts (future)
```

### Form Validation
```typescript
// Zod schemas for validation
// Server Actions for submission
// React Hook Form for client UX
```

## Implementation Steps

### 1. Set Up Email Provider
- [ ] Create EmailOctopus account
- [ ] Set up API credentials in .env.local
- [ ] Create email list for subscribers
- [ ] Design welcome email template
- [ ] Configure automation sequence

### 2. Create Lead Magnet Page (/free-gift)
- [ ] Design compelling headline:
  - "🎁 Nhận ngay bộ tài liệu AI cho người mới"
  - Subheading with value props
- [ ] Build 3-column benefit showcase
- [ ] Add social proof (if available)
- [ ] Include urgency elements
- [ ] Create trust indicators

### 3. Build Email Capture Form
- [ ] Install React Hook Form + Zod
- [ ] Create form schema:
  ```typescript
  - email: required, valid format
  - name: optional
  - leadMagnet: choice selection
  ```
- [ ] Implement client validation
- [ ] Add loading states
- [ ] Create success confirmation

### 4. Server-Side Integration
- [ ] Create Server Actions:
  - subscribeToNewsletter()
  - downloadLeadMagnet()
- [ ] Implement email provider abstraction
- [ ] Add subscriber to EmailOctopus
- [ ] Trigger welcome automation
- [ ] Log conversions for analytics

### 5. Lead Magnet Delivery
- [ ] **Option A (Recommended)**: ESP-managed
  - Upload files to EmailOctopus
  - Auto-deliver via email
- [ ] **Option B**: Self-hosted
  - Store on Cloudflare R2
  - Generate signed URLs
  - Send via transactional email

### 6. Thank You Page
- [ ] Create /thank-you route
- [ ] Display confirmation message
- [ ] Show "Check your email" instructions
- [ ] Add social sharing buttons
- [ ] Include next action CTAs

### 7. Email Templates
- [ ] Design responsive email templates:
  - Welcome email
  - Lead magnet delivery
  - Nurture sequence (5-7 emails)
- [ ] Test across email clients
- [ ] Add UTM tracking to links

### 8. Spam Prevention
- [ ] Implement honeypot field
- [ ] Add rate limiting (1/min per IP)
- [ ] Optional: reCAPTCHA v3
- [ ] Server-side validation
- [ ] Monitor for abuse patterns

### 9. Analytics Integration
- [ ] Track form views (Fathom event)
- [ ] Track submissions (conversion)
- [ ] Monitor email open rates
- [ ] Track click-through rates
- [ ] Set up conversion goals

## Related Code Files
```
app/free-gift/page.tsx              # Lead magnet page
app/thank-you/page.tsx              # Confirmation page
app/api/subscribe/route.ts          # API endpoint (alternative)
lib/email/provider.ts               # Email abstraction
lib/email/emailoctopus.ts          # EmailOctopus integration
lib/validations/email.ts           # Zod schemas
components/forms/email-capture.tsx  # Form component
components/forms/newsletter.tsx     # Newsletter form
emails/welcome.html                 # Email template
emails/lead-magnet.html            # Delivery template
.env.local                         # API credentials
```

## Todo List
```
Setting up EmailOctopus account and API
Creating lead magnet landing page
Building email capture form with React Hook Form
Implementing Zod validation schemas
Creating Server Actions for form submission
Integrating EmailOctopus API
Designing email templates
Setting up automated email sequence
Creating thank you confirmation page
Implementing spam prevention measures
Adding analytics tracking
Testing email delivery flow
Creating lead magnet content
Testing with real email addresses
```

## Success Criteria
- [ ] Form captures emails successfully
- [ ] Lead magnets deliver within 1 minute
- [ ] Email sequence triggers automatically
- [ ] Conversion rate >5% on landing page
- [ ] Spam submissions <1%
- [ ] Analytics tracking accurate

## Risk Assessment
- **Deliverability**: Emails may hit spam folders
- **API limits**: Free tier restrictions on EmailOctopus
- **Lead magnet size**: Large files need self-hosting
- **Mitigation**: Warm up sender reputation, monitor deliverability

## Security Considerations
- Store API keys securely in env variables
- Validate all form inputs server-side
- Rate limit form submissions
- Implement CSRF protection
- Sanitize email content to prevent injection
- Use signed URLs for downloadable content

## Next Steps
→ Phase 7: About, Life, Resources Pages (supporting content)