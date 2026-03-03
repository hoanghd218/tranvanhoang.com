# Code Review: i18n Implementation — AI Automation BIM Course Page

## Scope
- Files: 6 reviewed (`i18n/index.ts`, `i18n/vi.ts`, `i18n/en.ts`, `[[...locale]]/page.tsx`, `registration-form.tsx`, `language-switcher.tsx`)
- LOC: ~700 (all new/rewritten)
- Focus: i18n correctness, type safety, SEO, routing edge cases, hardcoded strings
- Scout findings: `/vi` duplicate URL, deep catch-all non-404, hardcoded UI labels

---

## Overall Assessment

Well-structured, KISS-compliant dictionary approach. Type system correctly enforces parity between `vi.ts` and `en.ts` via `CourseDictionary`. Build and lint pass. Two routing edge cases need fixes; hardcoded social button labels are a minor omission.

---

## Critical Issues

None.

---

## High Priority

### 1. `/courses/ai-automation-bim/vi` renders duplicate content (SEO risk)

**Problem:** The locale validation only calls `notFound()` for unknown locales. But `"vi"` is a valid locale, so `localeParts = ["vi"]` passes the guard and renders the Vietnamese page at both `/` and `/vi`. This creates duplicate content not covered by hreflang.

**Location:** `[[...locale]]/page.tsx` lines 109–111

```tsx
// Current — does NOT 404 for /vi
if (localeParts && localeParts.length > 0 && !locales.includes(localeParts[0] as ...)) {
  notFound();
}
```

**Fix:** Restrict catch-all to non-default locales only, or redirect `/vi` to canonical:

```tsx
// Option A — strict: only allow non-default locales in catch-all segments
if (localeParts && localeParts.length > 0) {
  const seg = localeParts[0] as Locale;
  if (!locales.includes(seg) || seg === defaultLocale) {
    notFound();
  }
}
```

```tsx
// Option B — redirect /vi → /courses/ai-automation-bim
import { redirect } from "next/navigation";
if (localeParts?.[0] === defaultLocale) {
  redirect("/courses/ai-automation-bim");
}
```

Option B is better for SEO (301-like behavior with Next.js static export).

---

### 2. Deep catch-all paths silently render instead of 404

**Problem:** `/courses/ai-automation-bim/en/foo` produces `localeParts = ["en", "foo"]`. The guard checks only `localeParts[0]`, which is `"en"` (valid), so no 404 is triggered. The page renders as EN with a canonical URL pointing to `/en`, creating orphan pages.

**Location:** `[[...locale]]/page.tsx` lines 109–111 (same guard)

**Fix:** Add length check — only accept exactly 0 or 1 segment:

```tsx
if (localeParts && (
  localeParts.length > 1 ||
  (localeParts.length === 1 && !locales.includes(localeParts[0] as Locale))
)) {
  notFound();
}
```

---

## Medium Priority

### 3. Hardcoded "Chat Zalo" and "Facebook" labels not translated

**Problem:** `registration-form.tsx` lines 129 and 140 have hardcoded English labels for social links. For a Vietnamese-default site these are fine visually, but they break translation completeness if the form is ever extracted or reused.

**Location:** `registration-form.tsx` lines 129, 140

```tsx
Chat Zalo    // line 129 — hardcoded
Facebook     // line 140 — hardcoded
```

**Fix:** Add to `FormTexts` type and both dictionaries:

```ts
// i18n/index.ts FormTexts
chatZalo: string;
facebook: string;
```

Low impact given these are proper nouns, but consistent with the existing `contactDirect` translation pattern.

---

### 4. Email placeholder hardcoded, not locale-aware

**Problem:** `registration-form.tsx` line 69 uses `placeholder="email@example.com"` directly instead of `texts.emailPlaceholder`. All other form fields use translated placeholders.

**Location:** `registration-form.tsx` line 69

```tsx
<input
  placeholder="email@example.com"  // hardcoded
```

**Fix:** Add `emailPlaceholder` to `FormTexts`:

```ts
emailPlaceholder: string;  // "email@example.com" (vi) / "email@example.com" (en — same is fine)
```

Low visual impact but inconsistent with existing pattern.

---

### 5. Missing `x-default` hreflang

**Problem:** The `alternates.languages` object in `generateMetadata` has `vi` and `en` but no `x-default`. Google recommends `x-default` to indicate the fallback page for unmatched locales.

**Location:** `[[...locale]]/page.tsx` lines 71–74

```tsx
languages: {
  vi: "https://tranvanhoang.com/courses/ai-automation-bim",
  en: "https://tranvanhoang.com/courses/ai-automation-bim/en",
  // missing: "x-default"
},
```

**Fix:**

```tsx
languages: {
  "x-default": "https://tranvanhoang.com/courses/ai-automation-bim",
  vi: "https://tranvanhoang.com/courses/ai-automation-bim",
  en: "https://tranvanhoang.com/courses/ai-automation-bim/en",
},
```

---

## Low Priority

### 6. `t.schedule.items[0]` / `[1]` direct index access is fragile

**Problem:** `page.tsx` lines 397–406 access schedule items by index. If `schedule.items` ever has fewer than 2 entries (content error, future refactor), it renders `undefined.title` silently.

**Fix:** Use `t.schedule.items.map()` with icons array, or add a type-level `readonly [ScheduleItem, ScheduleItem]` tuple constraint. For now the type and dictionaries both have 2 items, so it's fine but brittle.

---

### 7. Form submission is a stub

**Problem:** `handleSubmit` uses `setTimeout(1000)` + sets submitted state. No actual API call, no error handling.

```tsx
// Simulate form submission — replace with actual API call
await new Promise((resolve) => setTimeout(resolve, 1000));
```

This is presumably intentional/in-progress, but there is no error state UI if the real API call fails. When implemented, add `try/catch` and an error display.

---

### 8. React key uses content string for topics (`key={topic}`)

**Problem:** Topics within a module part use the topic string as key. If two parts in the same render share a topic text (e.g., "Best practices" appears in multiple parts), React keys would conflict within the same list scope. Currently not a problem given the data, but fragile.

The part-level key `key={idx}` (index) is acceptable here since parts are static ordered content.

**Fix (optional):** `key={`${mod.number}-${idx}-${topicIdx}`}` using index for topics within a part.

---

## Edge Cases Found by Scout

| Scenario | Outcome | Expected |
|---|---|---|
| `/courses/ai-automation-bim/vi` | Renders VI (no 404) | Should 404 or redirect to `/` |
| `/courses/ai-automation-bim/en/anything` | Renders EN (no 404) | Should 404 |
| `/courses/ai-automation-bim/fr` | 404 via notFound() | Correct |
| `localeParts = undefined` | Returns defaultLocale via `getLocaleFromParams` | Correct |
| `getDictionary` fallback | Returns `dictionaries[defaultLocale]` if key missing | Correct (defensive) |

---

## Positive Observations

- Type-enforced parity between `vi.ts` and `en.ts` via `CourseDictionary` — any missing field is a compile error. Excellent.
- `getLocaleFromParams` safely handles `undefined`, `[]`, invalid strings — clean helper.
- `getDictionary` has `?? dictionaries[defaultLocale]` fallback — defensive.
- `dangerouslySetInnerHTML` limited to `solution.description` only, sourced from trusted static dictionaries, not user input. Justified and documented.
- `generateStaticParams` correctly pre-renders both locales for SSG.
- hreflang alternates correctly differentiate VI and EN canonical URLs.
- `CourseSchema` `language` prop is correctly set dynamically per locale.
- `LanguageSwitcher` uses Next.js `<Link>` for correct prefetch behavior.
- No i18n library dependency — KISS principle well-applied for a single-page scope.
- All numeric values (`sessions`, `totalLessons`) confirmed identical between `vi.ts` and `en.ts`.

---

## Recommended Actions (Prioritized)

1. **[High]** Fix `/vi` rendering as duplicate: add `seg === defaultLocale → notFound()` or redirect
2. **[High]** Fix deep catch-all: add `localeParts.length > 1 → notFound()`
3. **[Medium]** Add `x-default` to hreflang `languages` object
4. **[Low]** Translate `Chat Zalo` / `Facebook` labels via `FormTexts` or accept as proper nouns
5. **[Low]** Move email placeholder to `FormTexts.emailPlaceholder`
6. **[Low]** Add error state to form `handleSubmit` when real API is wired up

---

## Metrics

- Type Coverage: ~100% (all props typed, `CourseDictionary` enforces both locales)
- Test Coverage: 0% (no tests configured per CLAUDE.md)
- Linting Issues: 0 (confirmed passing)
- Build Issues: 0 (confirmed passing)

---

## Unresolved Questions

1. Is `/courses/ai-automation-bim/vi` expected to be a valid URL? If yes, it needs a canonical self-pointing hreflang entry; if no, it should 404 or redirect.
2. Will the form submission API be implemented in a follow-up task? If so, confirm error/loading state requirements.
3. Is `output: 'export'` planned for this project? (CLAUDE.md says "static export" but `next.config.ts` does not have it.) This affects whether unmatched dynamic routes are truly unreachable or not.
