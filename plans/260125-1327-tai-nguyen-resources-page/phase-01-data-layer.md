---
title: "Data Layer - Resource Types & Structure"
description: "Define TypeScript interfaces and data structure for resources"
status: pending
priority: P2
effort: 1h
branch: main
created: 2026-01-25
review_status: not reviewed
---

## Context

**Parent Plan**: [plan.md](./plan.md)
**Dependencies**: None (foundational phase)
**Related Docs**: `docs/codebase-summary.md`, `docs/code-standards.md`

## Overview

| Field | Value |
|-------|-------|
| **Date** | 2026-01-25 |
| **Description** | Define TypeScript interfaces and data structure for resources |
| **Priority** | P2 - Medium priority |
| **Implementation Status** | pending |
| **Review Status** | Not reviewed |

## Key Insights

- Reuse existing blog category structure to maintain consistency
- Support three resource types: article, download, video
- Each resource needs metadata similar to blog posts (title, description, tags)
- Downloads need file-specific fields (size, format, download URL)
- Videos need duration field
- Enable filtering by category (reusing blog categories)

## Requirements

### Functional Requirements

1. **Resource Type Support**
   - `article`: Blog-style content with reading time
   - `download`: Files with size, format, download URL
   - `video`: Video content with duration

2. **Metadata Fields**
   - Common: title, description, category, tags, date, thumbnail
   - Article: readingTime
   - Download: fileSize, fileFormat, downloadUrl
   - Video: duration (formatted string)

3. **Category Integration**
   - Reuse existing blog categories (AI, Marketing, etc.)
   - Maintain backward compatibility with MDX system

### Non-Functional Requirements

- TypeScript strict typing
- Follow existing code standards (YAGNI, KISS, DRY)
- Maximum 500 lines per file

## Architecture

### Data Structure

```typescript
// types/resource.ts (NEW)

type ResourceType = "article" | "download" | "video"

interface ResourceMetadata {
  title: string
  description: string
  category: string
  tags: string[]
  date: string
  thumbnail?: string
}

interface ArticleResource extends ResourceMetadata {
  type: "article"
  readingTime: string
  url: string
}

interface DownloadResource extends ResourceMetadata {
  type: "download"
  fileSize: string
  fileFormat: string
  downloadUrl: string
}

interface VideoResource extends ResourceMetadata {
  type: "video"
  duration: string
  videoUrl: string
  thumbnail?: string
}

type Resource = ArticleResource | DownloadResource | VideoResource
```

### File Location

```
types/
└── resource.ts          # Resource type definitions

lib/
├── resources.ts         # Resource data and helper functions
└── navigation.ts        # Update with tai-nguyen link (existing)
```

## Related Code Files

| File | Purpose | Action |
|------|---------|--------|
| `types/` | TypeScript types directory | Create `resource.ts` |
| `lib/mdx.ts` | MDX utilities for blog | Reference pattern |
| `lib/navigation.ts` | Navigation config | Update href |
| `docs/code-standards.md` | Code conventions | Reference |

## Implementation Steps

1. Create `types/resource.ts` with TypeScript interfaces
2. Create `lib/resources.ts` with:
   - Mock/sample resource data for each type
   - `getAllResources()` function
   - `getResourcesByCategory()` function
   - `getResourceCategories()` function
3. Export new types from existing type exports
4. Update navigation to include `/tai-nguyen` link

## Todo List

- [ ] Create `types/resource.ts` with interfaces
- [ ] Create `lib/resources.ts` with data and helpers
- [ ] Export types from type index
- [ ] Update `lib/navigation.ts` with tai-nguyen link
- [ ] Add sample resource data (5-10 items total)

## Success Criteria

- [ ] TypeScript compiles without errors
- [ ] All type definitions are exported
- [ ] Helper functions return correct data
- [ ] Categories match existing blog categories
- [ ] Code follows YAGNI, KISS, DRY principles

## Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Category mismatch | Medium | Low | Reuse existing `lib/mdx.ts` category functions |
| Type complexity | Low | Low | Keep interfaces simple, add types as needed |

## Security Considerations

- No sensitive data in resource definitions
- Download URLs should be validated in implementation phase
- External links need `rel="noopener noreferrer"`

## Next Steps

Proceed to [Phase 2: Resource Card Component](./phase-02-resource-card-component.md) after this phase is complete.
