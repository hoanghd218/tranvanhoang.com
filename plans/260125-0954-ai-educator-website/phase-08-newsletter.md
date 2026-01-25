# Phase 8: Newsletter & Contact

## Context
- **Plan**: /plans/260125-0954-ai-educator-website/plan.md
- **Dependencies**: Phase 6 (Email system) complete
- **Docs**: Newsletter UX patterns, Calendly integration docs

## Overview
- **Duration**: 1-2 days
- **Priority**: P2 (Communication channels)
- **Status**: pending
- **Description**: Build dedicated newsletter page and contact system with Calendly integration

## Requirements

### Newsletter Page
- Value proposition for subscribers
- Sample newsletter preview
- Subscription form
- Archive of past issues (optional)
- Frequency and topics clarity

### Contact Options
- Contact form for general inquiries
- Calendly integration for consultations
- Social media links
- Clear response expectations

## Architecture Decisions

### Newsletter Strategy
- Weekly or bi-weekly frequency
- Curated AI news + personal insights
- Exclusive content for subscribers
- Archive publicly accessible (SEO benefit)

### Contact Routing
- General inquiries → Contact form → Email
- Consultations → Calendly booking
- Quick questions → Social media

## Implementation Steps

### 1. Newsletter Landing Page (/newsletter)
- [ ] Create compelling header:
  - "📧 Nhận tin AI hàng tuần"
  - Value proposition
- [ ] Add benefits section:
  - Exclusive insights
  - Early access to content
  - Special resources
  - Community updates
- [ ] Show sample newsletter preview:
  - Screenshot or embedded view
  - Topics covered
  - Typical structure
- [ ] Include social proof:
  - Subscriber count
  - Testimonials
  - Sample feedback

### 2. Newsletter Subscription Form
- [ ] Reuse email capture component
- [ ] Add preference options:
  - Frequency preference
  - Topic interests (checkboxes)
  - Language preference (future)
- [ ] Implement double opt-in flow:
  - Initial signup
  - Confirmation email
  - Welcome message
- [ ] Create success messaging

### 3. Newsletter Archive (Optional)
- [ ] Create archive listing:
  ```
  /newsletter/archive
  /newsletter/archive/[issue-number]
  ```
- [ ] Display past issues:
  - Title & date
  - Brief preview
  - Read online link
- [ ] Add search/filter
- [ ] Include subscribe CTAs

### 4. Contact Page (/contact)
- [ ] Design two-column layout:
  - Left: Contact form
  - Right: Other contact methods
- [ ] Add contact reasons dropdown:
  - General inquiry
  - Consultation request
  - Partnership opportunity
  - Speaking engagement
  - Technical support

### 5. Contact Form Implementation
- [ ] Create form with fields:
  - Name (required)
  - Email (required)
  - Subject (required)
  - Message (required)
  - Reason (dropdown)
- [ ] Add validation (Zod)
- [ ] Implement Server Action
- [ ] Send email notification
- [ ] Add auto-response

### 6. Calendly Integration
- [ ] Embed Calendly widget:
  ```html
  <!-- Calendly inline widget -->
  <div class="calendly-inline-widget"
       data-url="https://calendly.com/hoang-ai"
       style="min-width:320px;height:630px;">
  </div>
  ```
- [ ] Create booking types:
  - 30-min consultation
  - 60-min workshop planning
  - 15-min quick call
- [ ] Add booking instructions
- [ ] Include preparation checklist

### 7. Response Automation
- [ ] Set up auto-responses:
  - Contact form confirmation
  - Expected response time
  - Alternative contact methods
- [ ] Create email templates:
  - Thank you for contacting
  - Consultation confirmed
  - Follow-up templates

### 8. Social Media Links
- [ ] Add social profiles:
  - LinkedIn (professional)
  - Facebook (community)
  - YouTube (tutorials)
  - Email (direct)
- [ ] Use icon buttons
- [ ] Add hover effects

## Related Code Files
```
app/newsletter/page.tsx             # Newsletter landing
app/newsletter/archive/page.tsx     # Archive listing
app/newsletter/archive/[id]/page.tsx # Issue view
app/contact/page.tsx                # Contact page
components/forms/newsletter-preferences.tsx # Preferences
components/forms/contact-form.tsx   # Contact form
components/contact/calendly.tsx     # Calendly widget
lib/email/contact.ts                # Contact email logic
lib/calendly.ts                     # Calendly helpers
emails/contact-confirmation.html    # Auto-response
emails/newsletter-welcome.html      # Welcome email
```

## Todo List
```
Creating newsletter landing page
Building newsletter preference form
Setting up double opt-in flow
Creating newsletter archive structure
Designing contact page layout
Building contact form with validation
Integrating Calendly widget
Setting up email notifications
Creating auto-response templates
Adding social media links
Testing form submissions
Configuring Calendly event types
Setting up response automation
Testing email delivery
```

## Success Criteria
- [ ] Newsletter signup works smoothly
- [ ] Contact form delivers messages
- [ ] Calendly booking functional
- [ ] Auto-responses sent promptly
- [ ] Mobile-friendly forms
- [ ] Clear communication expectations

## Risk Assessment
- **Spam submissions**: Both forms vulnerable
- **Calendly availability**: May get overbooked
- **Email deliverability**: Auto-responses may hit spam
- **Mitigation**: Strong validation, booking limits, email warming

## Security Considerations
- Implement CAPTCHA for forms
- Rate limit submissions (1/minute)
- Validate and sanitize all inputs
- Secure email credentials
- Monitor for abuse patterns

## Next Steps
→ Phase 9: SEO & Performance (optimization and visibility)