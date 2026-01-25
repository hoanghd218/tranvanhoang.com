# Phase 9: SEO & Performance

## Context
- **Plan**: /plans/260125-0954-ai-educator-website/plan.md
- **Dependencies**: Most site features complete
- **Docs**: Next.js SEO guide, Core Web Vitals optimization

## Overview
- **Duration**: 1-2 days
- **Priority**: P2 (Essential for growth)
- **Status**: pending
- **Description**: Optimize for search engines, improve performance, ensure Core Web Vitals pass

## Requirements

### SEO Goals
- Vietnamese keyword optimization
- Rich snippets for blog posts
- Local SEO for Vietnam market
- Social sharing optimization

### Performance Targets
- LCP (Largest Contentful Paint): <2.5s
- FID (First Input Delay): <100ms
- CLS (Cumulative Layout Shift): <0.1
- Page load: <3s on 3G

## Architecture Decisions

### SEO Strategy
- Static generation for all content pages
- Dynamic meta tags per page
- Structured data (JSON-LD)
- Vietnamese-specific optimization

### Performance Strategy
- Image optimization with next/image
- Font optimization
- Code splitting
- Edge caching with Vercel

## Implementation Steps

### 1. Meta Tag System
- [ ] Create SEO component:
  ```typescript
  interface SEOProps {
    title: string
    description: string
    image?: string
    article?: boolean
    lang: 'vi' | 'en'
  }
  ```
- [ ] Implement dynamic meta tags:
  - Title (60 chars max)
  - Description (160 chars max)
  - Open Graph tags
  - Twitter Card tags
- [ ] Add Vietnamese lang attributes
- [ ] Set canonical URLs

### 2. Structured Data
- [ ] Add JSON-LD schemas:
  - Organization (about page)
  - Article (blog posts)
  - Course (learning paths)
  - Person (author info)
  - BreadcrumbList (navigation)
- [ ] Validate with Google Schema Tool
- [ ] Test rich snippets

### 3. Sitemap Generation
- [ ] Create sitemap generator:
  ```typescript
  // scripts/generate-sitemap.ts
  - Scan all routes
  - Include blog posts
  - Add lastmod dates
  - Set priorities
  ```
- [ ] Generate sitemap.xml
- [ ] Add to robots.txt
- [ ] Submit to Google Search Console

### 4. Image Optimization
- [ ] Convert images to WebP/AVIF
- [ ] Implement responsive images:
  ```jsx
  <Image
    src={...}
    sizes="(max-width: 640px) 100vw,
           (max-width: 1024px) 50vw,
           33vw"
    priority={aboveFold}
  />
  ```
- [ ] Add blur placeholders
- [ ] Lazy load below-fold images

### 5. Font Optimization
- [ ] Optimize font loading:
  ```css
  font-display: swap;
  ```
- [ ] Subset fonts for Vietnamese
- [ ] Preload critical fonts
- [ ] Remove unused font weights

### 6. Bundle Optimization
- [ ] Analyze bundle with @next/bundle-analyzer
- [ ] Code split by route
- [ ] Dynamic imports for heavy components:
  ```typescript
  const HeavyComponent = dynamic(() =>
    import('../components/HeavyComponent'),
    { ssr: false }
  )
  ```
- [ ] Tree shake unused code
- [ ] Minimize JavaScript sent to client

### 7. Core Web Vitals
- [ ] Fix layout shifts:
  - Set explicit dimensions
  - Reserve space for ads/embeds
  - Avoid inserting content above fold
- [ ] Optimize LCP:
  - Preload hero images
  - Optimize server response time
  - Remove render-blocking resources
- [ ] Improve interactivity:
  - Split long tasks
  - Use web workers if needed
  - Optimize third-party scripts

### 8. Vietnamese SEO
- [ ] Research Vietnamese keywords:
  - "học ai cơ bản"
  - "ai cho người mới"
  - "chat gpt tiếng việt"
- [ ] Optimize URLs with slugify
- [ ] Add hreflang tags (if multilingual)
- [ ] Local schema markup for Vietnam

### 9. Performance Monitoring
- [ ] Set up Vercel Analytics
- [ ] Configure Web Vitals reporting
- [ ] Add performance budgets:
  ```json
  {
    "budgets": [{
      "type": "page",
      "maximumSize": "300kb"
    }]
  }
  ```
- [ ] Create monitoring dashboard

### 10. Edge Optimization
- [ ] Configure Vercel Edge:
  - Cache static assets
  - Set proper cache headers
  - Enable compression
- [ ] Implement ISR for blog posts:
  ```typescript
  export const revalidate = 3600 // 1 hour
  ```

## Related Code Files
```
app/layout.tsx                      # Root meta tags
components/seo/seo.tsx              # SEO component
scripts/generate-sitemap.ts         # Sitemap generator
public/robots.txt                   # Robots file
public/sitemap.xml                  # Generated sitemap
next.config.ts                      # Performance config
lib/structured-data.ts              # JSON-LD schemas
components/image-optimized.tsx      # Optimized image wrapper
```

## Todo List
```
Creating SEO component with meta tags
Implementing structured data schemas
Building sitemap generation script
Optimizing all images with next/image
Configuring font optimization
Analyzing and reducing bundle size
Fixing Core Web Vitals issues
Researching Vietnamese keywords
Setting up performance monitoring
Configuring edge caching
Testing with PageSpeed Insights
Validating structured data
Submitting sitemap to Google
Testing social sharing cards
```

## Success Criteria
- [ ] PageSpeed score >90
- [ ] All Core Web Vitals green
- [ ] Rich snippets working
- [ ] Sitemap validated
- [ ] Meta tags properly set
- [ ] Bundle size <200KB initial
- [ ] Images optimized with lazy loading

## Risk Assessment
- **Over-optimization**: May hurt development speed
- **Vietnamese SEO**: Limited keyword data available
- **Third-party scripts**: May hurt performance
- **Mitigation**: Gradual optimization, monitor metrics, async loading

## Security Considerations
- Validate any user-generated content in meta tags
- Escape special characters in structured data
- Secure sitemap generation process
- Monitor for SEO spam attempts

## Next Steps
→ Phase 10: Analytics & Testing (measurement and validation)