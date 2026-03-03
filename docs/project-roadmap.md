# tranvanhoang.com - Project Roadmap

**Last Updated:** 2026-03-03
**Current Version:** 3.0.0
**Repository:** https://github.com/hoangtran/tranvanhoang.com

## Executive Summary

tranvanhoang.com is a modern personal website and content platform for an AI educator, featuring bilingual support (Vietnamese + English), blog system, learning paths, and course management. The project emphasizes accessibility, performance, and maintainable component architecture using Next.js 16 with Tailwind CSS and Radix UI.

---

## Phase Overview

### Phase 1: Foundation (COMPLETE)
**Status:** ✅ Complete | **Completion:** 2025-01-15
**Progress:** 100%

Established Next.js 16 application with design system, component library, and layout infrastructure.

**Key Achievements:**
- Next.js 16 (App Router) setup with TypeScript
- Tailwind CSS 4 with custom design tokens (coral, bronze)
- Radix UI primitives + shadcn-style components
- Custom brand components (GradientText, BrandCard, CTAButton)
- Navigation configuration and routing structure
- Responsive header and footer layouts
- Form handling with react-hook-form + Zod

---

### Phase 2: Core Layout & Navigation (COMPLETE)
**Status:** ✅ Complete | **Completion:** 2025-02-10
**Progress:** 100%

Implemented core layout infrastructure with responsive header/footer and navigation system.

**Key Achievements:**
- Responsive sticky header with desktop/mobile variants
- 4-column footer with newsletter signup integration
- Mobile sheet-based navigation menu
- Active route highlighting
- Skip-to-content accessibility link
- Semantic HTML structure
- Navigation configuration system

---

### Phase 3: Internationalization (COMPLETE)
**Status:** ✅ Complete | **Completion:** 2026-03-03
**Progress:** 100%

Full bilingual support (Vietnamese + English) using next-intl v4 with localized routing and UI translations.

**Key Achievements:**
- ✅ next-intl v4 integration with middleware routing
- ✅ Dual locale support: Vietnamese (default) + English
- ✅ Translated route slugs: `/tai-nguyen` (vi) ↔ `/resources` (en)
- ✅ Full UI translation: ~240 keys in messages/vi.json & messages/en.json
- ✅ Middleware-based locale detection (Accept-Language header support)
- ✅ LocaleSwitcher component with Globe icon
- ✅ All pages moved under `app/[locale]/` structure
- ✅ Locale-aware metadata generation with hreflang alternates
- ✅ `/courses/*` excluded from i18n (separate hand-rolled system)
- ✅ MDX blog content remains Vietnamese-only (culturally specific)
- ✅ TypeScript locale types for type-safe routing

**Architecture:**
- Locale routing: `localePrefix: "as-needed"` (vi has no prefix, en uses /en/*)
- Route mapping: Dynamic and static path aliases supported
- Translation organization: Structured by domain (common, nav, footer, home, blog, etc.)
- Locale switching: In-page toggle preserving URL structure

**Files & Directories:**
- `i18n/routing.ts` - Locale definitions and path mappings
- `i18n/request.ts` - Request locale detection
- `i18n/navigation.ts` - Locale-aware navigation utilities
- `middleware.ts` - Request routing and locale detection
- `messages/vi.json` - Vietnamese translations
- `messages/en.json` - English translations
- `components/layout/locale-switcher.tsx` - Language toggle UI

---

### Phase 4: Blog Translation & Content Localization (PLANNED)
**Status:** 📋 Planned | **Target Start:** Q2 2026
**Progress:** 0%

Extend blog content system to support English translations while maintaining Vietnamese as primary content.

**Planned Items:**
- MDX translation layer (babel plugin or custom loader)
- Content duplication strategy for blog posts
- Category translation in routing
- Search functionality for translated content
- Excerpt translation automation
- Related content linking across locales

---

### Phase 5: Performance & SEO Optimization (PLANNED)
**Status:** 📋 Planned | **Target Start:** Q3 2026
**Progress:** 0%

Enhanced performance metrics and SEO capabilities for multi-locale content.

**Planned Items:**
- Vercel Analytics integration
- Web Vitals monitoring per locale
- Image optimization and CDN strategy
- Sitemap generation (per locale)
- Open Graph meta tags per locale
- Structured data enhancement (BreadcrumbList, FAQPage)
- Core Web Vitals targets: LCP < 2.5s, FID < 100ms, CLS < 0.1

---

### Phase 6: Analytics & User Engagement (FUTURE)
**Status:** 📋 Future | **Target Start:** Q4 2026
**Progress:** 0%

User analytics, engagement tracking, and content performance insights.

**Planned Items:**
- Event tracking (course enrollments, resource downloads)
- Heatmap analysis for content discovery
- User preference tracking per locale
- Content recommendation engine
- Newsletter analytics and segmentation
- Conversion funnel tracking

---

## Current Development Focus

### 1. i18n Consolidation (Current Phase 3)
- ✅ next-intl v4 integration complete
- ✅ Locale switching UI implemented
- ✅ Message translations complete (~240 keys)
- 📋 Testing across different Accept-Language headers
- 📋 Performance metrics per locale

### 2. Content System Enhancements
- 📋 MDX blog translation support (Phase 4)
- 📋 Learning path localization
- 📋 Course content organization
- 📋 Timeline/Life story management

### 3. SEO & Performance
- 📋 Sitemap generation for all locales
- 📋 hreflang tag validation
- 📋 Image optimization pipeline
- 📋 Core Web Vitals monitoring

### 4. User Experience
- 📋 Locale preference persistence (cookie/localStorage)
- 📋 Content recommendation by locale
- 📋 Enhanced search functionality
- 📋 Accessibility audits (WCAG 2.1 AA)

---

## Milestone Tracking

### Q1 2026 Milestones (Current)
| Milestone | Status | Due Date | Progress |
|-----------|--------|----------|----------|
| Phase 1: Foundation | ✅ Complete | 2025-01-15 | 100% |
| Phase 2: Layout & Navigation | ✅ Complete | 2025-02-10 | 100% |
| Phase 3: Internationalization | ✅ Complete | 2026-03-03 | 100% |
| Documentation Updates | ✅ Complete | 2026-03-03 | 100% |

### Q2 2026 Milestones
| Milestone | Status | Due Date | Progress |
|-----------|--------|----------|----------|
| Phase 4: Blog Translation | 📋 Planned | 2026-06-30 | 0% |
| SEO Optimization Phase | 📋 Planned | 2026-06-30 | 0% |
| Performance Baseline Testing | 📋 Planned | 2026-06-15 | 0% |

### Q3 2026 Milestones
| Milestone | Status | Due Date | Progress |
|-----------|--------|----------|----------|
| Phase 5: Performance & SEO | 📋 Planned | 2026-09-30 | 0% |
| Analytics Integration | 📋 Planned | 2026-09-30 | 0% |

---

## Success Metrics

### User Engagement
- Bounce rate: < 35%
- Average session duration: > 2 minutes
- Pages per session: > 1.5
- Return visitor rate: > 25%

### Performance Targets (Core Web Vitals)
- Largest Contentful Paint (LCP): < 2.5s
- First Input Delay (FID): < 100ms
- Cumulative Layout Shift (CLS): < 0.1
- Time to First Byte (TTFB): < 600ms

### Content Metrics
- Blog post publication rate: 2-4 posts/month
- Newsletter subscriber growth: 10%+ monthly
- Course enrollment conversion: > 5%
- Resource download tracking: > 100/month

### Localization Metrics
- Vietnamese traffic: > 70%
- English traffic: > 15%
- Other locales: < 15%
- Locale-specific engagement: Tracked per region

### Quality Standards
- TypeScript coverage: 100%
- Component test coverage: > 80%
- Accessibility: WCAG 2.1 AA compliant
- SEO score: > 90 (Lighthouse)

---

## Feature Inventory

### Phase 1 Features (COMPLETE)
- ✅ Next.js 16 App Router setup
- ✅ Tailwind CSS 4 with custom design tokens
- ✅ Radix UI component library
- ✅ Brand-specific components (Gradient, Card, CTA, Container)
- ✅ TypeScript strict mode
- ✅ Form handling (react-hook-form + Zod)
- ✅ Icon library (Lucide React)
- ✅ Toast notifications (Sonner)
- ✅ Dark mode support (next-themes)

### Phase 2 Features (COMPLETE)
- ✅ Responsive sticky header
- ✅ 4-column footer with newsletter signup
- ✅ Mobile navigation (sheet-based menu)
- ✅ Active route highlighting
- ✅ Skip-to-content accessibility
- ✅ Navigation configuration system
- ✅ SEO metadata optimization

### Phase 3 Features (COMPLETE - 2026-03-03)
- ✅ next-intl v4 integration
- ✅ Dual locale support (vi + en)
- ✅ Translated route slugs (/tai-nguyen ↔ /resources)
- ✅ Full UI translation (~240 keys)
- ✅ Middleware-based locale routing
- ✅ LocaleSwitcher component
- ✅ Locale-aware metadata with hreflang
- ✅ Courses excluded from i18n system
- ✅ Blog content Vietnamese-only (intentional)

### Phase 4 Features (PLANNED)
- 📋 MDX blog translation support
- 📋 Content duplication strategy
- 📋 Category translation in routing
- 📋 Related content linking across locales

### Phase 5 Features (PLANNED)
- 📋 Vercel Analytics integration
- 📋 Web Vitals monitoring
- 📋 Image optimization
- 📋 Sitemap generation per locale
- 📋 Enhanced structured data

### Phase 6+ Features (FUTURE)
- 📋 Event tracking and analytics
- 📋 User preference persistence
- 📋 Content recommendation engine
- 📋 Heatmap analysis

---

## Technical Architecture

### Technology Stack
- **Framework:** Next.js 16.1.4 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **UI Library:** React 19.2.3
- **Components:** Radix UI + shadcn-style
- **i18n:** next-intl v4
- **Forms:** react-hook-form + Zod
- **State:** Built-in React hooks
- **Icons:** Lucide React
- **Notifications:** Sonner
- **Theme:** next-themes (dark/light)
- **Content:** MDX with gray-matter

### External Integrations
- Next.js Image Optimization
- Vercel Analytics (planned)
- Newsletter service (TBD)
- SEO tools: JSON-LD schemas
- Fonts: Google Fonts (Inter, Merriweather)

---

## Known Constraints & Limitations

### Technical
- Static export only (no dynamic rendering/SSR)
- MDX blog content not compiled at runtime (limitation noted)
- Locale detection relies on Accept-Language header or URL prefix
- Course system has separate locale handling (not integrated with next-intl)

### Content
- Blog posts are Vietnamese-only (cultural choice, not technical limitation)
- Learning paths must be manually translated if localized
- Timeline/Life stories require separate translation management

### Internationalization
- ~240 translation keys must be maintained across locales
- Path mappings limited to specific routes (only /tai-nguyen mapped)
- Fallback language behavior: English for missing Vietnamese keys (or vice versa)

### Browser Support
- Modern browsers only (ES2020+ support)
- Dark mode support via CSS custom properties
- Responsive design targets mobile-first (320px+)

---

## Risk Management

| Risk | Impact | Likelihood | Mitigation |
|------|--------|-----------|-----------|
| Translation Key Misses | Medium | Medium | Comprehensive key inventory, testing both locales, fallback strings |
| Locale Routing Conflicts | Medium | Low | URL prefix strategy, route mapping validation, middleware tests |
| Blog Translation Backlog | High | High | Phase 4 planning, consider machine translation as interim solution |
| Performance Regression | High | Medium | Core Web Vitals monitoring, Lighthouse CI, bundle analysis |
| Content Sync Issues | Medium | Medium | Single source of truth, version control, deployment validation |
| Mobile Responsiveness | High | Low | Mobile-first design, device testing, responsive unit tests |

---

## Dependencies & External Requirements

### Required
- Node.js >= 18.0.0
- Git version control
- npm or pnpm package manager
- next-intl v4
- react-hook-form + Zod
- Tailwind CSS 4

### Optional
- Vercel deployment (for native Analytics)
- Newsletter service provider (e.g., Substack, Convertkit)
- Analytics platform (Google Analytics, Plausible)
- CDN for static assets (Cloudflare, Netlify)
- SEO monitoring tools (Ahrefs, SEMrush)

### Development Tools
- TypeScript 5
- ESLint
- Tailwind CSS IntelliSense (IDE plugin)
- MDX extension (IDE support)

---

## Compliance & Standards

### Code Standards
- TypeScript strict mode enabled
- ESLint configuration enforcement
- Components < 200 LOC
- Pages < 150 LOC
- Utility functions < 100 LOC
- Comprehensive error handling
- No hardcoded strings (use i18n keys)

### i18n Standards
- All UI strings in message files
- Consistent key naming (camelCase)
- Organized by domain/namespace
- ~240+ keys per locale minimum
- Fallback strings for missing keys

### Accessibility Standards
- WCAG 2.1 AA compliance
- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Color contrast ratio >= 4.5:1

### Git Standards
- Conventional commits (feat, fix, docs, style, refactor, perf, test)
- Clean commit history
- No secrets in commits
- Professional PR descriptions
- Branch naming: feature/*, fix/*, docs/*

### SEO Standards
- JSON-LD schema markup
- hreflang tags per locale
- Meta descriptions and titles
- Open Graph tags
- Sitemap generation
- Canonical URLs

---

## Release History

### Version 3.0.0 (Current - 2026-03-03)
**Status**: Phase 3 Complete - Internationalization

#### Features
- ✅ Full i18n support via next-intl v4
- ✅ Bilingual routing (vi/en)
- ✅ ~240 UI translation keys
- ✅ Translated route slugs (/tai-nguyen ↔ /resources)
- ✅ LocaleSwitcher component
- ✅ Middleware-based locale detection

#### Documentation
- ✅ System architecture updated with i18n section
- ✅ Codebase summary updated for Phase 3
- ✅ Project roadmap restructured for tranvanhoang.com

---

### Version 2.0.0 (Previous - 2025-02-10)
**Status**: Phase 2 Complete - Core Layout & Navigation

#### Features
- ✅ Responsive sticky header
- ✅ 4-column footer
- ✅ Mobile navigation menu
- ✅ Navigation configuration system

---

### Version 1.0.0 (Initial - 2025-01-15)
**Status**: Phase 1 Complete - Foundation

#### Features
- ✅ Next.js 16 setup
- ✅ Tailwind CSS 4 design system
- ✅ Radix UI components
- ✅ Component library
- ✅ TypeScript configuration

---

## Changelog

### Version 2.2.0-beta.4 (Current - 2025-12-28)

#### Documentation Updates
- **Version Alignment**: Updated all docs to v2.2.0-beta.4
- **Command Inventory**: Updated from 50+ to 75+ slash commands
- **Skills Count**: Updated from 20+ to 38 skills
- **Agent Count**: Explicitly documented 17+ agents
- **Architecture**: Enhanced component descriptions

#### Key Metrics
- 75+ slash commands across 14 categories
- 38 skills (Phase 1 organized groups + individual skills)
- 17+ specialized agents
- 4 core hooks (session-init, dev-rules-reminder, subagent-init, scout-block)
- 5 MCP integrations (context7, memory, human-mcp, chrome-devtools, sequential-thinking)

---

## Document References

### Core Documentation
- [Project Overview & PDR](./project-overview-pdr.md) - Product requirements and vision
- [Code Standards](./code-standards.md) - Coding conventions and patterns
- [System Architecture](./system-architecture.md) - Technical architecture and i18n design
- [Codebase Summary](./codebase-summary.md) - Project structure and dependencies
- [Design Guidelines](./design-guidelines.md) - Component usage and patterns

### External Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod Documentation](https://zod.dev/)

---

## Unresolved Questions

1. **Blog Translation Strategy**: Should English blog posts be machine-generated first, then edited? Or handle manually?
2. **Analytics Platform**: Which analytics service (Vercel, Plausible, or self-hosted)?
3. **Newsletter Service**: Which provider integrates best with i18n? (Substack, Convertkit, etc.)
4. **Course Locale Sync**: Should /courses/* integrate with next-intl or maintain separate system?
5. **SEO Priority**: Which locale should be prioritized for search ranking (vi vs en)?

---

**Maintained By:** tranvanhoang.com Team
**Last Review:** 2026-03-03
**Next Review Target:** 2026-06-03
