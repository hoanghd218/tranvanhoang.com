# Phase 4: MDX Blog System

## Context
- **Plan**: /plans/260125-0954-ai-educator-website/plan.md
- **Dependencies**: Phase 1-2 complete (design system, layout)
- **Docs**: Next.js MDX docs, content organization patterns

## Overview
- **Duration**: 3-4 days
- **Priority**: P1 (Core content system)
- **Status**: pending
- **Description**: Implement MDX blog with categories, tags, search, Vietnamese slug handling

## Key Insights from Research
- Use native `@next/mdx` (no Contentlayer due to maintenance concerns)
- Manual frontmatter parsing required
- Category structure: ai-co-ban, ai-marketing, tool-prompt, goc-trai-nghiem
- Use `slugify` library for Vietnamese URL generation

## Requirements

### Content Structure
```
content/
├── blog/
│   ├── ai-co-ban/          # AI basics
│   ├── ai-marketing/       # Marketing AI
│   ├── tool-prompt/        # Tools & prompts
│   └── goc-trai-nghiem/    # Personal experiences
├── learn-ai/               # Learning resources
└── life/                   # Personal journal
```

### Features
- MDX support with custom components
- Frontmatter metadata (title, date, tags, category)
- Vietnamese slug generation
- Category/tag filtering
- Search functionality
- RSS feed generation
- Related posts suggestion

## Architecture Decisions

### MDX Setup
```typescript
// next.config.ts
- Configure @next/mdx
- Add remark/rehype plugins
- Enable frontmatter parsing

// lib/mdx.ts
- Content loading utilities
- Frontmatter parsing
- Slug generation
```

### Blog Routes
```
/blog                    # All posts
/blog/[category]        # Category archive
/blog/[category]/[slug] # Individual post
/blog/tags/[tag]        # Tag archive
```

## Implementation Steps

### 1. Install & Configure MDX
- [ ] Install @next/mdx and dependencies
- [ ] Configure next.config.ts for MDX
- [ ] Install remark/rehype plugins:
  - remark-frontmatter
  - remark-gfm (tables, strikethrough)
  - rehype-highlight (code syntax)
  - rehype-slug (heading IDs)
- [ ] Create mdx-components.tsx

### 2. Content Utilities
- [ ] Create content loading functions:
  - getAllPosts()
  - getPostBySlug()
  - getPostsByCategory()
  - getPostsByTag()
- [ ] Implement frontmatter parsing with gray-matter
- [ ] Add Vietnamese slug generation with slugify
- [ ] Create content validation with Zod

### 3. Blog List Pages
- [ ] Create /blog page with all posts
- [ ] Implement pagination (12 posts/page)
- [ ] Add category filter UI
- [ ] Add tag cloud component
- [ ] Create search bar (client-side with Fuse.js)

### 4. Category Pages
- [ ] Create dynamic [category] route
- [ ] Build category-specific layouts:
  - ai-co-ban: Beginner-friendly design
  - ai-marketing: Business-focused
  - tool-prompt: Practical tutorials
  - goc-trai-nghiem: Personal stories
- [ ] Add category descriptions

### 5. Blog Post Template
- [ ] Create [category]/[slug] dynamic route
- [ ] Build post layout:
  - Hero with title, date, reading time
  - Table of contents (floating sidebar)
  - Content area with MDX
  - Author bio section
  - Related posts
  - Comments (optional, Giscus?)
- [ ] Add social sharing buttons

### 6. Search Implementation
- [ ] Install Fuse.js for client-side search
- [ ] Create search index from posts
- [ ] Build search UI with instant results
- [ ] Add keyboard shortcuts (Cmd+K)
- [ ] Implement search filters (category, date)

### 7. RSS Feed
- [ ] Create RSS generation script
- [ ] Add feed.xml route
- [ ] Include Vietnamese metadata
- [ ] Test with feed readers

### 8. SEO Optimization
- [ ] Generate meta tags for each post
- [ ] Add Open Graph images
- [ ] Create JSON-LD structured data
- [ ] Implement canonical URLs

## Related Code Files
```
next.config.ts                      # MDX configuration
mdx-components.tsx                  # Custom MDX components
app/blog/page.tsx                   # Blog listing
app/blog/[category]/page.tsx        # Category archive
app/blog/[category]/[slug]/page.tsx # Blog post
app/blog/tags/[tag]/page.tsx        # Tag archive
lib/mdx.ts                          # Content utilities
lib/search.ts                       # Search implementation
components/blog/post-card.tsx       # Post preview card
components/blog/search-bar.tsx      # Search interface
components/blog/toc.tsx             # Table of contents
content/blog/*/                     # Blog content files
```

## Todo List
```
Installing @next/mdx and plugins
Configuring MDX in next.config.ts
Creating content loading utilities
Implementing frontmatter parsing
Setting up Vietnamese slug generation
Building blog listing page with pagination
Creating category archive pages
Developing blog post template
Adding table of contents component
Implementing client-side search with Fuse.js
Creating RSS feed generation
Adding social sharing buttons
Setting up SEO meta tags
Testing with Vietnamese content
```

## Success Criteria
- [ ] MDX posts render correctly
- [ ] Vietnamese slugs work properly
- [ ] Search returns relevant results
- [ ] Categories and tags filter correctly
- [ ] RSS feed validates
- [ ] Page loads <2s
- [ ] SEO scores >90 (Lighthouse)

## Risk Assessment
- **Content organization**: May need restructuring as content grows
- **Search performance**: Client-side search may lag with 100+ posts
- **Vietnamese SEO**: Special characters in URLs may affect SEO
- **Mitigation**: Plan for server-side search migration, test URL encoding

## Security Considerations
- Sanitize MDX content to prevent XSS
- Validate frontmatter schema
- Rate limit search requests
- Escape user input in search queries

## Next Steps
→ Phase 5: Learning Pages (AI learning paths and resources)