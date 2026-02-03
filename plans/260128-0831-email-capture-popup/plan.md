---
title: "Email Capture Popup with Gift Selection"
description: "Implement a modal popup for first-time visitors to capture email and name in exchange for a free gift selection"
status: pending
priority: P2
effort: 6h
branch: main
tags: [feature, ui, conversion, popup]
created: 2025-01-28
---

# Email Capture Popup with Gift Selection

## Overview

Implement a modal popup that appears for first-time website visitors, asking them to provide their email and name to receive a free gift. Users can select from three gift options, and the popup tracks user interactions using localStorage.

## Features

- **First-time detection**: Uses localStorage to show popup only to new visitors
- **Gift selection**: Three options - AI agents for marketing, Revit API template, Vibe coding template
- **Form validation**: Email format validation and required field checks
- **Success flow**: Shows confirmation and delivers selected gift
- **Dismissible**: Close button and "maybe later" option with preference memory
- **Brand-matched design**: Uses existing coral/bronze color scheme

## Implementation Phases

| Phase | Description | Status | File |
|-------|-------------|--------|------|
| 1 | Create types and validation schema | pending | [phase-01-types-and-schema](./phase-01-types-and-schema.md) |
| 2 | Build popup component with form | pending | [phase-02-popup-component](./phase-02-popup-component.md) |
| 3 | Implement localStorage hook | pending | [phase-03-localstorage-hook](./phase-03-localstorage-hook.md) |
| 4 | Add to layout and test | pending | [phase-04-integration-and-test](./phase-04-integration-and-test.md) |

## Key Decisions

- **Storage key**: `email-popup-state` for tracking user interactions
- **Animation**: Use existing Radix UI dialog animations
- **Form library**: React Hook Form + Zod (already in project)
- **Gift delivery**: Download links displayed after form submission

## Success Criteria

- [ ] Popup shows only on first visit
- [ ] Form validates email format correctly
- [ ] All three gift options selectable
- [ ] Success message displays after submission
- [ ] "Maybe later" remembers preference
- [ ] Design matches existing dark theme
- [ ] Mobile responsive
