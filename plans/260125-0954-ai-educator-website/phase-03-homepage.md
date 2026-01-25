# Phase 3: Home Page Implementation

## Context
- **Plan**: /plans/260125-0954-ai-educator-website/plan.md
- **Dependencies**: Phase 2 (Layout) complete
- **Docs**: Hero section patterns, conversion optimization

## Overview
- **Duration**: 2 days
- **Priority**: P1 (First impression critical)
- **Status**: pending
- **Description**: Build compelling homepage with hero, audience sections, trust signals, and strong CTAs

## Requirements

### Page Sections
1. **Hero**: Headline, subheadline, dual CTAs
2. **Who You Help**: 3 audience cards
3. **What You Teach**: 3 learning paths
4. **Why Trust You**: Credibility indicators
5. **CTA Section**: Final push to free gift

### Content (Vietnamese)
- Headline: "Hoàng chia sẻ cách dùng AI sao cho người chưa biết gì cũng làm được"
- Sub: "Không cần code. Không áp lực kỹ thuật. Chỉ giải thích từ bản chất."
- CTAs: "🎁 Nhận bộ AI cho người mới" + "🔍 Xem lộ trình học AI"

## Architecture Decisions

### Component Structure
```typescript
// app/page.tsx - Homepage
// components/home/
  - HeroSection.tsx
  - AudienceSection.tsx
  - TeachingSection.tsx
  - TrustSection.tsx
  - CTASection.tsx
```

### Animation Strategy
- Use Framer Motion for scroll animations
- CSS transitions for hover states
- Intersection Observer for lazy loading

## Implementation Steps

### 1. Hero Section
- [ ] Create two-column layout (text + visual/illustration)
- [ ] Implement gradient text for headline
- [ ] Add dual CTA buttons with different styles
- [ ] Apply subtle background pattern/gradient
- [ ] Add entrance animation

### 2. Audience Section ("Tôi giúp ai?")
- [ ] Create 3-card grid layout
- [ ] Card 1: "Người chưa biết gì về AI"
  - Icon: Brain or Lightbulb
  - Pain points: Sợ công nghệ, ngại thuật ngữ
- [ ] Card 2: "Marketer & Content Creator"
  - Icon: Megaphone or Pencil
  - Benefits: Làm nhanh hơn, ví dụ thực tế
- [ ] Card 3: "Chủ doanh nghiệp nhỏ"
  - Icon: Store or Briefcase
  - Focus: Hiệu quả, ROI
- [ ] Add hover effects (coral border highlight)

### 3. Teaching Section ("Tôi dạy gì?")
- [ ] Create learning path cards
- [ ] Path 1: "AI cho người mới bắt đầu"
  - Modules preview
  - Time estimate
- [ ] Path 2: "AI cho Marketing"
  - Real examples
  - Quick wins
- [ ] Path 3: "AI cho công việc"
  - Productivity focus
  - Tool recommendations
- [ ] Link each to /learn-ai/* pages

### 4. Trust Section ("Tại sao tin tôi?")
- [ ] Add credibility indicators:
  - Years of experience
  - Students taught
  - Real testimonials (if available)
  - Company logos (if applicable)
- [ ] Use statistics with animated counters
- [ ] Add social proof elements

### 5. Final CTA Section
- [ ] Create compelling value proposition
- [ ] Large CTA button to /free-gift
- [ ] Add urgency/scarcity if appropriate
- [ ] Include trust badges

### 6. Performance Optimization
- [ ] Optimize images (Next Image component)
- [ ] Lazy load below-fold sections
- [ ] Minimize JavaScript bundle
- [ ] Test Core Web Vitals

## Related Code Files
```
app/page.tsx                        # Homepage route
components/home/hero-section.tsx    # Hero component
components/home/audience-section.tsx # Audience cards
components/home/teaching-section.tsx # Learning paths
components/home/trust-section.tsx   # Credibility
components/home/cta-section.tsx     # Final CTA
lib/animations.ts                   # Animation configs
```

## Todo List
```
Building hero section with gradient headline
Creating audience cards with hover effects
Implementing teaching path components
Adding trust indicators and stats
Building final CTA section
Adding scroll animations with Framer Motion
Optimizing images with Next Image
Testing Core Web Vitals performance
Adding Vietnamese content
Implementing responsive design
```

## Success Criteria
- [ ] Hero converts >5% to CTA clicks
- [ ] Page loads <3s on 3G
- [ ] All sections mobile-responsive
- [ ] Animations smooth (60fps)
- [ ] Vietnamese text displays correctly
- [ ] CTAs prominently visible

## Risk Assessment
- **Animation performance**: Too many animations may hurt performance
- **Content clarity**: Vietnamese copy must resonate with beginners
- **Mitigation**: A/B test copy, use CSS animations where possible

## Security Considerations
- Sanitize any dynamic content
- Validate form inputs if adding inline forms
- Rate limit API calls for statistics

## Next Steps
→ Phase 4: MDX Blog System (content management, categories, search)