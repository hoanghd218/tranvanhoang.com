# Phase 7: About, Life, Resources Pages

## Context
- **Plan**: /plans/260125-0954-ai-educator-website/plan.md
- **Dependencies**: Phase 4 (MDX system) for Life journal
- **Docs**: Storytelling patterns, resource library UX

## Overview
- **Duration**: 2 days
- **Priority**: P2 (Supporting content)
- **Status**: pending
- **Description**: Create personal brand pages showcasing expertise, personality, and value resources

## Requirements

### Pages to Build
1. **/about** - Personal story and credentials
2. **/life** - Personal journal/blog (non-AI topics)
3. **/resources** - Curated tools, templates, guides

### Content Tone
- About: Professional yet personable, storytelling approach
- Life: Casual, authentic, behind-the-scenes
- Resources: Practical, organized, valuable

## Architecture Decisions

### Life Journal
- Use same MDX system as blog
- Separate content folder for organization
- Different styling/layout from main blog
- No aggressive CTAs (personal space)

### Resources Organization
- Category-based filtering
- Downloadable templates
- External tool links
- Regular updates needed

## Implementation Steps

### 1. About Page (/about)
- [ ] Create hero section with professional photo
- [ ] Write compelling personal story:
  - Journey into AI education
  - Why helping Vietnamese audience
  - Mission and values
- [ ] Add credentials section:
  - Experience highlights
  - Notable achievements
  - Companies worked with
- [ ] Include "My Approach" section:
  - Teaching philosophy
  - What makes different
- [ ] Add personal interests (humanize)
- [ ] Include contact CTA

### 2. Life Journal System (/life)
- [ ] Set up content structure:
  ```
  content/life/
  ├── 2026-01-travel-diary.mdx
  ├── 2026-02-book-reviews.mdx
  └── ...
  ```
- [ ] Create journal listing page:
  - Chronological order
  - Casual card design
  - Date-based navigation
- [ ] Design journal post template:
  - Simpler than blog posts
  - Photo galleries support
  - Personal tone styling
- [ ] Add RSS feed for life posts

### 3. Resources Library (/resources)
- [ ] Create resource categories:
  - **Templates**: Prompt templates, workflows
  - **Tools**: Recommended AI tools
  - **Guides**: Step-by-step tutorials
  - **Books**: Reading recommendations
- [ ] Build filtering system:
  - Category selector
  - Difficulty level
  - Free vs paid
- [ ] Design resource cards:
  - Title & description
  - Category badge
  - Download/visit button
  - Usage instructions
- [ ] Add search functionality

### 4. Resource Management
- [ ] Create admin-friendly structure:
  ```typescript
  // data/resources.ts
  export const resources = [
    {
      title: "ChatGPT Prompt Templates",
      category: "templates",
      type: "free",
      downloadUrl: "/downloads/prompts.pdf"
    }
  ]
  ```
- [ ] Implement download tracking
- [ ] Add "New" badges for recent additions
- [ ] Create update notification system

### 5. About Page Enhancements
- [ ] Add timeline component for journey
- [ ] Include testimonials/quotes
- [ ] Add FAQ section
- [ ] Link to press mentions (if any)
- [ ] Include speaking/workshop info

### 6. Life Journal Features
- [ ] Add comment system (Giscus)
- [ ] Create photo gallery component
- [ ] Add reading time estimates
- [ ] Include share buttons
- [ ] Build archive/year navigation

## Related Code Files
```
app/about/page.tsx                  # About page
app/life/page.tsx                    # Life journal listing
app/life/[slug]/page.tsx            # Journal post
app/resources/page.tsx              # Resources library
components/about/timeline.tsx       # Journey timeline
components/life/journal-card.tsx    # Journal preview
components/resources/resource-card.tsx # Resource item
components/resources/filter.tsx     # Category filter
data/resources.ts                   # Resources data
content/life/                       # Journal content
public/downloads/                   # Downloadable files
```

## Todo List
```
Writing About page content
Creating professional photo section
Building personal timeline component
Setting up Life journal structure
Creating journal listing page
Designing journal post template
Building resources library layout
Creating resource categorization
Implementing resource filtering
Adding download functionality
Creating resource cards
Setting up content management
Adding search to resources
Testing download tracking
```

## Success Criteria
- [ ] About page builds trust/connection
- [ ] Life journal feels personal/authentic
- [ ] Resources provide real value
- [ ] Downloads work smoothly
- [ ] Mobile-responsive design
- [ ] Fast page loads

## Risk Assessment
- **Content maintenance**: Resources need regular updates
- **Storage costs**: Downloadable files may accumulate
- **Personal exposure**: Life journal reveals personal info
- **Mitigation**: Quarterly resource review, CDN for files, careful content curation

## Security Considerations
- Protect downloadable resources from hotlinking
- Validate resource URLs (prevent XSS)
- Monitor download abuse (rate limiting)
- Secure any personal information in Life posts

## Next Steps
→ Phase 8: Newsletter & Contact (communication channels)