# Phase 5: Learning Pages

## Context
- **Plan**: /plans/260125-0954-ai-educator-website/plan.md
- **Dependencies**: Phase 4 (MDX system) partially complete
- **Docs**: Learning path UX patterns, educational content structure

## Overview
- **Duration**: 2 days
- **Priority**: P2 (Important for authority)
- **Status**: pending
- **Description**: Create structured learning paths for different audiences with clear progression

## Requirements

### Learning Paths
1. **/learn-ai** - Landing page with all paths
2. **/learn-ai/ai-for-beginners** - Complete beginners
3. **/learn-ai/ai-for-marketing** - Marketers & creators
4. **/learn-ai/ai-for-work** - Business productivity

### Content Structure
- Overview & objectives
- Module breakdown
- Prerequisites
- Time estimates
- Learning outcomes
- Next steps

## Architecture Decisions

### Content Organization
```
content/learn-ai/
├── index.mdx              # Learning hub
├── ai-for-beginners/
│   ├── index.mdx         # Path overview
│   ├── module-1.mdx      # Individual lessons
│   └── module-2.mdx
├── ai-for-marketing/
│   └── ...
└── ai-for-work/
    └── ...
```

### Progress Tracking
- Local storage for progress (no auth initially)
- Visual progress indicators
- Completion certificates (optional)

## Implementation Steps

### 1. Learning Hub Page (/learn-ai)
- [ ] Create attractive landing with 3 path cards
- [ ] Add filtering by:
  - Difficulty level
  - Time commitment
  - Industry/role
- [ ] Include testimonials/success stories
- [ ] Add "Quiz: Which path is right for you?"

### 2. Beginner Path Page
- [ ] Create comprehensive overview:
  - "AI là gì và không phải là gì"
  - Module list (5-7 modules)
  - Expected outcomes
- [ ] Design module cards:
  - Module title & description
  - Duration estimate
  - Key concepts covered
- [ ] Add prerequisite checker
- [ ] Include FAQ section

### 3. Marketing Path Page
- [ ] Focus on practical applications:
  - Content creation with AI
  - Social media automation
  - Email marketing enhancement
- [ ] Add real case studies
- [ ] Include tool recommendations
- [ ] Provide prompt templates

### 4. Work/Business Path Page
- [ ] Productivity-focused modules:
  - Document processing
  - Meeting summaries
  - Data analysis basics
- [ ] ROI calculator/examples
- [ ] Integration guides (Office, Google)
- [ ] Team adoption strategies

### 5. Module Template
- [ ] Create reusable module layout:
  - Learning objectives (top)
  - Content sections
  - Interactive examples
  - Practice exercises
  - Key takeaways
  - Next module CTA
- [ ] Add breadcrumb navigation
- [ ] Include progress bar

### 6. Interactive Elements
- [ ] Add code playgrounds for prompts
- [ ] Embed demo videos (YouTube/Loom)
- [ ] Create downloadable resources:
  - Cheat sheets
  - Prompt templates
  - Tool comparison tables
- [ ] Add "Try it yourself" sections

### 7. Progress System
- [ ] Implement localStorage progress tracking
- [ ] Show completion badges
- [ ] Add "Continue where you left off" feature
- [ ] Create shareable completion certificates

## Related Code Files
```
app/learn-ai/page.tsx                        # Learning hub
app/learn-ai/ai-for-beginners/page.tsx      # Beginner path
app/learn-ai/ai-for-marketing/page.tsx      # Marketing path
app/learn-ai/ai-for-work/page.tsx           # Work path
app/learn-ai/[path]/[module]/page.tsx       # Module pages
components/learning/path-card.tsx           # Path preview
components/learning/module-card.tsx         # Module card
components/learning/progress-bar.tsx        # Progress tracker
components/learning/quiz.tsx                # Interactive quiz
lib/learning-progress.ts                    # Progress utilities
content/learn-ai/*/                         # Learning content
```

## Todo List
```
Creating learning hub landing page
Building beginner path overview
Developing marketing path content structure
Setting up work/productivity path
Creating reusable module template
Adding progress tracking with localStorage
Implementing interactive code playgrounds
Creating downloadable resources
Adding breadcrumb navigation
Building quiz component
Setting up completion certificates
Testing with Vietnamese content
```

## Success Criteria
- [ ] Clear learning path progression
- [ ] Module completion tracking works
- [ ] Resources downloadable
- [ ] Mobile-friendly learning experience
- [ ] Vietnamese content readable
- [ ] Interactive elements functional

## Risk Assessment
- **Content depth**: Balancing simplicity vs comprehensiveness
- **User engagement**: Keeping beginners motivated
- **Technical complexity**: Interactive elements may slow page
- **Mitigation**: Start simple, gather feedback, iterate

## Security Considerations
- Validate quiz responses
- Sanitize user-generated progress data
- Secure downloadable resources (prevent hotlinking)
- Rate limit interactive element usage

## Next Steps
→ Phase 6: Email Capture & Lead Magnets (critical for business model)