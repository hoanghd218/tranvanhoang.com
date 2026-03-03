# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vietnamese-language personal website/blog for an AI educator (tranvanhoang.com). Content-focused, statically generated Next.js site.

## Common Commands

```bash
npm run dev          # Dev server on localhost:3000
npm run build        # Production build (static export) — use to verify changes compile
npm run lint         # ESLint
# No test runner configured
```

## Architecture

**Stack**: Next.js 16 (App Router) · TypeScript 5 · Tailwind CSS 4 · Radix UI + shadcn-style · MDX via gray-matter

### Key Directories

```
app/                    # App Router pages
├── blog/               # Blog listing + dynamic [category]/[slug] posts
├── learn-ai/           # AI learning paths with dynamic [path]/[module]
├── life/               # Timeline stories with dynamic [slug]
├── about/, free-gift/, tai-nguyen/  # Static pages
├── layout.tsx          # Root layout (fonts, SEO schemas, Providers wrapper)
└── globals.css         # All CSS variables + custom animation utilities

components/
├── ui/                 # shadcn-style base components (cva variants, data-slot)
├── custom/             # App-specific: GradientText, ThemeProvider, Container, CTAButton
├── layout/             # Header, Footer
├── home/, blog/, learning/, life/  # Page-section components
├── seo/                # JSON-LD structured data (Organization, Website, Person schemas)
└── email-capture/      # Email popup with gift selector

lib/
├── utils.ts            # cn() — Tailwind class merging (clsx + tailwind-merge)
└── mdx.ts              # All content queries: getAllPosts, getPostBySlug, searchPosts, etc.

content/                # MDX blog posts (NOT content/blog/ — the content dir IS the root)
├── ai-co-ban/          # Category dirs containing .mdx files
├── ai-marketing/
├── tool-prompt/
└── goc-trai-nghiem/
```

### Content System

Blog posts: `content/{category}/{slug}.mdx` with required frontmatter fields: `title`, `date`, `category`. Optional: `description`, `tags`, `featuredImage`, `draft`, `author`.

`lib/mdx.ts` reads content directory recursively. Posts with `draft: true` are filtered out. Reading time calculated at 200 words/minute. Categories are hardcoded in `categoryMap` inside `mdx.ts` — add new categories there.

**Known limitation**: Blog post page renders raw MDX content in a `<pre>` tag (not compiled MDX). Full MDX rendering not yet implemented.

### Theming

Custom `ThemeProvider` in `components/custom/theme-provider.tsx` — NOT using `next-themes` (though it's installed as a dependency). Supports light + dark via `.dark` class on `<html>`. `ThemeToggle` component exported from same file. Default theme: light, persisted in localStorage, respects `prefers-color-scheme`.

**Color System** (in `globals.css`):
- Brand: `--coral` (#D97757), `--bronze` (#D4A27F)
- Life page: `--life-sage`, `--life-sand`, `--life-lavender`
- CSS utility classes: `.text-gradient`, `.text-life-gradient`, `.container-custom`, `.section-spacing`

**Typography**: Inter (sans, Vietnamese subset) + Merriweather (serif, Life page headings)

### Component Patterns

- UI components use `class-variance-authority` for variants, `cn()` from `@/lib/utils`
- Custom components use kebab-case filenames
- `Container` and `Section` wrapper components in `components/custom/container.tsx`
- Path alias: `@/*` maps to project root

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