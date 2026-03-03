# Documentation Review: AI Automation BIM i18n Implementation

**Date**: 2026-03-03
**Change Scope**: Dictionary-based i18n for AI Automation BIM course page
**Files Analyzed**: `./docs/codebase-summary.md`, `./docs/system-architecture.md`, `./docs/code-standards.md`, `./docs/project-overview-pdr.md`

---

## Summary

The documentation requires **targeted updates** to reflect i18n implementation in the course system. The codebase-summary.md is significantly outdated and misrepresents the actual project. Immediate updates needed to maintain doc-code sync.

---

## Documentation Audit Results

### 1. Project Identity Issue (CRITICAL)

**Finding**: Current `./docs/` describes "ClaudeKit Engineer" (an AI orchestration framework), not "tranvanhoang.com" (personal AI educator website).

**Evidence**:
- `project-overview-pdr.md` line 1: "ClaudeKit Engineer"
- `system-architecture.md` line 1: "ClaudeKit Engineer"
- `code-standards.md` line 5: "Applies To: All code within ClaudeKit Engineer project"
- Actual project: Vietnamese personal website/blog for AI educator

**Impact**: Docs are fundamentally misleading about project nature and architecture.

**Action Required**: Complete rewrite of core documentation files to reflect actual project.

---

### 2. Codebase Structure Outdated (MAJOR)

**Current in codebase-summary.md**:
```
app/
├── blog/               # Blog listing
├── learn-ai/           # AI learning paths
├── life/              # Timeline stories
├── about/, free-gift/, tai-nguyen/
└── [Missing: courses/]
```

**Actual in codebase**:
```
app/
├── about/
├── blog/
├── courses/            # ← MISSING (added later)
│   └── ai-automation-bim/
│       ├── i18n/      # ← NEW: i18n system
│       │   ├── index.ts
│       │   ├── vi.ts
│       │   └── en.ts
│       ├── [[...locale]]/page.tsx
│       ├── language-switcher.tsx
│       └── registration-form.tsx
├── free-gift/
├── learn-ai/
├── life/
└── tai-nguyen/
```

**Missing in docs**: Entire courses directory structure, i18n pattern, locale routing.

---

### 3. Missing i18n Documentation

**What's new but not documented**:
- Dictionary-based i18n system (scoped to course)
- Optional catch-all route pattern: `[[...locale]]/page.tsx`
- Locale detection & switching mechanism
- Vietnamese (vi) and English (en) support
- SEO considerations (hreflang, x-default)

**Where to document**: Need new section in codebase-summary.md.

---

### 4. Technology Stack Mismatch

**Issue**: Docs describe dependencies for ClaudeKit, not tranvanhoang.com.

**Current incorrect list**: next-themes, better-auth, semantic-release, repomix, etc.

**Actual dependencies** (from CLAUDE.md):
- Next.js 16, React 19, TypeScript 5, Tailwind CSS 4
- Radix UI + shadcn-style components
- MDX via gray-matter (for blog content)
- No i18n library (dictionary-based only)

---

## Recommendations

### Priority 1: MUST FIX (Accuracy Critical)
1. **Rewrite `codebase-summary.md`**
   - Correct project name to "tranvanhoang.com" or "AI Educator Website"
   - Add missing `courses/` directory structure
   - Document i18n system (dictionary-based, locale routing, Vietnamese/English)
   - Update technology section to match actual dependencies
   - Update component/feature descriptions

2. **Replace `project-overview-pdr.md`**
   - Describe actual project: Vietnamese AI education personal site
   - Not a boilerplate template; actual product
   - Update tech stack, features, architecture

### Priority 2: SHOULD FIX (Completeness)
3. **Add i18n Architecture Section** (in codebase-summary.md or new doc)
   - How dictionary-based i18n works
   - File structure: `i18n/{locale}.ts`
   - How `[[...locale]]/page.tsx` pattern works
   - SEO setup (hreflang, x-default)

4. **Update `system-architecture.md`**
   - Remove ClaudeKit references
   - Document actual Next.js App Router architecture
   - Note: This doc should probably be removed or heavily simplified for this project type

### Priority 3: NICE TO HAVE
5. **Remove/Replace irrelevant docs**
   - `system-architecture.md` (too complex for personal website)
   - `code-standards.md` can stay but remove ClaudeKit references
   - `project-roadmap.md` should exist but with actual website roadmap

---

## Updated Codebase Structure (Proposed)

**File**: `docs/codebase-summary.md` (Updated)

```markdown
# Codebase Summary

**Project**: tranvanhoang.com - AI Educator Website
**Version**: Current
**Last Updated**: 2026-03-03

## Project Structure

app/
├── about/                      # About page
├── blog/                       # Blog posts & categories
├── courses/                    # Course landing pages
│   └── ai-automation-bim/     # BIM course with i18n
│       ├── i18n/              # Dictionary-based translations
│       │   ├── index.ts       # Types & locale helpers
│       │   ├── vi.ts          # Vietnamese dictionary
│       │   └── en.ts          # English dictionary
│       ├── [[...locale]]/     # Locale-aware routes
│       │   └── page.tsx       # Course page
│       ├── language-switcher.tsx  # VI/EN toggle
│       └── registration-form.tsx  # Course registration
├── free-gift/                 # Free gift page
├── learn-ai/                  # AI learning paths
├── life/                      # Life/timeline section
├── tai-nguyen/                # Resources page
├── globals.css               # Global styles & design tokens
└── layout.tsx                # Root layout
```

---

## Conclusion

**Update Status**: `REQUIRED`

The documentation set is fundamentally misaligned with the actual codebase. This appears to be a copy-paste from a different project. **Immediate action required** to:

1. Rewrite core docs for actual project identity
2. Add i18n/courses documentation
3. Ensure docs reflect current technology stack
4. Maintain doc-code sync going forward

**Estimated Effort**: 2-3 hours to update all docs properly.

---

## Unresolved Questions

1. Should courses be documented as a separate module or integrated into main codebase docs?
2. Is there a design guidelines doc that covers course component patterns?
3. Should i18n be expanded beyond courses in future?
4. What's the actual technology roadmap for this project?
