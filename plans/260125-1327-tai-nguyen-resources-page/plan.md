---
title: "Tài nguyên Page Design"
description: "Design resources page with card/grid view toggle, reusing blog categories"
status: pending
priority: P2
effort: 4h
branch: main
tags: [resources, page-design, components, ui]
created: 2026-01-25
---

# Tài nguyên Page Implementation Plan

## Overview
Create a "Tài nguyên" (Resources) page at `/tai-nguyen` that displays knowledge resources in a toggleable card/grid view. The page will reuse existing blog categories for organization and support multiple resource types (articles, downloads, videos).

## Phases

| Phase | Status | Description |
|-------|--------|-------------|
| [Phase 1: Data Layer](./phase-01-data-layer.md) | pending | Define resource types and data structure |
| [Phase 2: Resource Card Component](./phase-02-resource-card-component.md) | pending | Create reusable resource card with view variants |
| [Phase 3: View Toggle Component](./phase-03-view-toggle-component.md) | pending | Build view mode toggle (card/grid) |
| [Phase 4: Resources Page](./phase-04-resources-page.md) | pending | Implement main resources page |
| [Phase 5: Integration & Testing](./phase-05-integration-testing.md) | pending | Verify page works correctly |

## Key Decisions

- **Categories**: Reuse existing blog categories via `lib/mdx`
- **View Toggle**: Client-side state using React hooks
- **Card Design**: Support both card (large) and grid (compact) views
- **Resource Types**: Visual indicators for articles, downloads, videos

## Dependencies

- Existing `lib/mdx` functions for categories
- Existing `BrandCard` component patterns
- Existing design tokens (colors, spacing)
