# Code review — Vietnamese typography refresh

## Re-review result

No remaining findings in the two requested fixes.

### Resolved — Font preload configuration

- `app/[locale]/layout.tsx:21-34`
- Removed unnecessary `latin-ext`; Space Grotesk now uses one variable weight and Be Vietnam Pro disables eager preload.
- Production output now emits 2 font preload links instead of 15. Vietnamese and Latin subsets remain available through `next/font`.

### Resolved — MDX code font family

- `mdx-components.tsx:62-70`
- Both `code` and `pre` now declare `font-sans`, which overrides Tailwind preflight's monospace family and resolves to Be Vietnam Pro through `--font-text`.
- Implementation now matches the two-face typography rule and inline documentation.

## Unresolved questions

- None.
