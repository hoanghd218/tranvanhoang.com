# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 16** personal website/blog for an AI educator. It's a content-focused site with:
- Static blog posts written in MDX (located in `content/blog/`)
- Learning paths for AI courses (`app/learn-ai/`)
- A "Life" page with personal timeline stories (`app/life/`)
- Resources page (`app/tai-nguyen/`)
- Vietnamese language support with SEO optimization

## Common Commands

```bash
# Development
npm run dev          # Start dev server on localhost:3000
npm run build        # Production build
npm run lint         # Run ESLint

# No test runner configured yet
```

## Architecture

### Tech Stack
- **Framework**: Next.js 16 (App Router, static export)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with custom CSS variables
- **UI Components**: Radix UI primitives + custom shadcn-style components
- **Content**: MDX with gray-matter for frontmatter parsing
- **Fonts**: Inter (primary) + Merriweather (serif for Life page)

### Key Directories

```
app/                    # Next.js App Router pages
├── blog/               # Blog listing and post pages
├── learn-ai/           # AI learning paths and modules
├── life/               # Personal timeline/stories
├── tai-nguyen/         # Resources page
├── layout.tsx          # Root layout with fonts + SEO
└── globals.css         # Global styles + CSS variables

components/
├── ui/                 # Base UI components (Button, Card, Dialog, etc.)
├── custom/             # Custom components (GradientText, CTAButton, etc.)
├── layout/             # Header, Footer
├── home/               # Homepage sections
├── blog/               # Blog-specific components
├── learning/           # Learning path components
├── life/               # Life page components
└── seo/                # JSON-LD schema components

lib/
├── utils.ts            # cn() helper for Tailwind class merging
└── mdx.ts              # MDX parsing utilities + content queries

content/
└── blog/               # MDX blog posts organized by category
    ├── ai-co-ban/      # AI basics category
    ├── ai-marketing/   # AI for marketing
    ├── tool-prompt/    # Tools & prompts
    └── goc-trai-nghiem/ # Personal experiences
```

### Content System

Blog posts are MDX files in `content/blog/{category}/{slug}.mdx` with frontmatter:
```yaml
---
title: "Post Title"
description: "Brief description"
date: "2025-01-15"
category: "ai-co-ban"
tags: ["AI", "beginner"]
featuredImage: "/images/post.jpg"
draft: false
---
```

Content is fetched via functions in `lib/mdx.ts`:
- `getAllPosts()` - All published posts sorted by date
- `getPostsByCategory()` - Filter by category
- `getPostBySlug()` - Single post lookup
- `searchPosts()` - Basic search implementation

### Styling Conventions

**Color System** (defined in `globals.css`):
- Primary brand: `--coral` (#D97757) and `--bronze` (#D4A27F)
- Life page theme: `--life-sage`, `--life-sand`, `--life-lavender`
- Dark theme only (no light mode)

**Typography**:
- Sans-serif: Inter with Vietnamese subset
- Serif: Merriweather for Life page headings

**Utilities**:
- `.text-gradient` - Coral-to-bronze gradient text
- `.text-life-gradient` - Sage-to-sand gradient for Life page
- `.container-custom` - Max-width 72rem centered container
- `.section-spacing` - Consistent py-16 padding

### Component Patterns

**UI Components** (`components/ui/`):
- Use `class-variance-authority` for variant management
- Import `cn()` from `@/lib/utils` for class merging
- Follow shadcn/ui patterns with `data-slot` attributes

**Custom Components**:
- Use kebab-case file names (e.g., `gradient-text.tsx`)
- Keep files under 200 lines; split when exceeded
- Use descriptive names that explain purpose

## Workflows

- Primary workflow: `./.claude/rules/primary-workflow.md`
- Development rules: `./.claude/rules/development-rules.md`
- Orchestration protocols: `./.claude/rules/orchestration-protocol.md`
- Documentation management: `./.claude/rules/documentation-management.md`
- And other workflows: `./.claude/rules/*`

**IMPORTANT:** Analyze the skills catalog and activate the skills that are needed for the task during the process.
**IMPORTANT:** You must follow strictly the development rules in `./.claude/rules/development-rules.md` file.
**IMPORTANT:** Before you plan or proceed any implementation, always read the `./README.md` file first to get context.
**IMPORTANT:** Sacrifice grammar for the sake of concision when writing reports.
**IMPORTANT:** In reports, list any unresolved questions at the end, if any.

## Hook Response Protocol

### Privacy Block Hook (`@@PRIVACY_PROMPT@@`)

When a tool call is blocked by the privacy-block hook, the output contains a JSON marker between `@@PRIVACY_PROMPT_START@@` and `@@PRIVACY_PROMPT_END@@`. **You MUST use the `AskUserQuestion` tool** to get proper user approval.

**Required Flow:**

1. Parse the JSON from the hook output
2. Use `AskUserQuestion` with the question data from the JSON
3. Based on user's selection:
   - **"Yes, approve access"** → Use `bash cat "filepath"` to read the file (bash is auto-approved)
   - **"No, skip this file"** → Continue without accessing the file

**Example AskUserQuestion call:**
```json
{
  "questions": [{
    "question": "I need to read \".env\" which may contain sensitive data. Do you approve?",
    "header": "File Access",
    "options": [
      { "label": "Yes, approve access", "description": "Allow reading .env this time" },
      { "label": "No, skip this file", "description": "Continue without accessing this file" }
    ],
    "multiSelect": false
  }]
}
```

**IMPORTANT:** Always ask the user via `AskUserQuestion` first. Never try to work around the privacy block without explicit user approval.

## Python Scripts (Skills)

When running Python scripts from `.claude/skills/`, use the venv Python interpreter:
- **Linux/macOS:** `.claude/skills/.venv/bin/python3 scripts/xxx.py`
- **Windows:** `.claude\skills\.venv\Scripts\python.exe scripts\xxx.py`

This ensures packages installed by `install.sh` (google-genai, pypdf, etc.) are available.

**IMPORTANT:** When scripts of skills failed, don't stop, try to fix them directly.

## [IMPORTANT] Consider Modularization
- If a code file exceeds 200 lines of code, consider modularizing it
- Check existing modules before creating new
- Analyze logical separation boundaries (functions, classes, concerns)
- Use kebab-case naming with long descriptive names, it's fine if the file name is long because this ensures file names are self-documenting for LLM tools (Grep, Glob, Search)
- Write descriptive code comments
- After modularization, continue with main task
- When not to modularize: Markdown files, plain text files, bash scripts, configuration files, environment variables files, etc.

## Documentation Management

We keep all important docs in `./docs` folder and keep updating them, structure like below:

```
./docs
├── project-overview-pdr.md
├── code-standards.md
├── codebase-summary.md
├── design-guidelines.md
├── deployment-guide.md
├── system-architecture.md
└── project-roadmap.md
```

**IMPORTANT:** *MUST READ* and *MUST COMPLY* all *INSTRUCTIONS* in project `./CLAUDE.md`, especially *WORKFLOWS* section is *CRITICALLY IMPORTANT*, this rule is *MANDATORY. NON-NEGOTIABLE. NO EXCEPTIONS. MUST REMEMBER AT ALL TIMES!!!*