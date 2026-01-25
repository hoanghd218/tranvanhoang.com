# SEO Optimization Plan

## Objective
Improve website SEO for tranvanhoang.com to increase organic visibility and search rankings.

## Current State Analysis

| Item | Status | Notes |
|------|--------|-------|
| Page metadata | ✅ Complete | All 10 pages have title + description |
| Root layout metadata | ✅ Complete | Base metadata configured |
| robots.txt | ❌ Missing | Need to create |
| sitemap.xml | ❌ Missing | Need to create |
| JSON-LD Schema | ⚠️ Partial | Only 1 page has basic schema |
| Open Graph | ⚠️ Partial | Need verification on all pages |
| Canonical URLs | ⚠️ Partial | Need verification on all pages |
| robots meta tags | ⚠️ Partial | Need verification on all pages |

## Pages
1. `/` - Home
2. `/about` - About page
3. `/learn-ai` - Learn AI main
4. `/learn-ai/ai-for-beginners` - AI for beginners
5. `/learn-ai/ai-for-marketing` - AI for marketing
6. `/learn-ai/ai-for-work` - AI for work
7. `/blog` - Blog listing
8. `/tai-nguyen` - Resources
9. `/free-gift` - Free gift
10. `/life` - Life stories

## Phases

### Phase 1: Core SEO Files
Create foundational SEO files.

- [ ] Create `public/robots.txt` with crawl rules
- [ ] Create `app/sitemap.ts` for dynamic sitemap generation
- [ ] Add sitemap.xml route handler

### Phase 2: JSON-LD Structured Data
Add schema markup for search engines.

- [ ] Create `components/seo/json-ld.tsx` - Reusable JSON-LD component
- [ ] Add Organization schema to root layout
- [ ] Add Person schema to About page
- [ ] Add Article schema to blog posts (when content exists)
- [ ] Add WebSite schema with searchAction

### Phase 3: Metadata Enhancement
Audit and enhance all page metadata.

- [ ] Verify all pages have Open Graph tags (og:title, og:description, og:image)
- [ ] Add twitter:card tags to all pages
- [ ] Add canonical URLs to all pages
- [ ] Add robots metadata (index, follow) to all pages
- [ ] Add category keywords to learn-ai subpages

### Phase 4: Technical SEO
Additional SEO optimizations.

- [ ] Add `next-sitemap.config.js` for indexing (optional)
- [ ] Add favicon and apple-touch-icon
- [ ] Add language attributes
- [ ] Create 404 page with proper meta tags

## Files to Create/Modify

```
public/
  robots.txt

app/
  sitemap.ts (NEW)
  sitemap.xml/route.ts (NEW)
  not-found.tsx (NEW)

components/
  seo/
    json-ld.tsx (NEW)
    organization-schema.tsx (NEW)
    person-schema.tsx (NEW)
    website-schema.tsx (NEW)

app/layout.tsx (MODIFY) - Add JSON-LD
app/about/page.tsx (MODIFY) - Add Person schema
```

## Success Criteria
- [ ] robots.txt accessible at /robots.txt
- [ ] sitemap.xml accessible at /sitemap.xml
- [ ] All pages have complete metadata
- [ ] JSON-LD schemas validate in Google Rich Results Test
- [ ] No SEO errors in Lighthouse audit
