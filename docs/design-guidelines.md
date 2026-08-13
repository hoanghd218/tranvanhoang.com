# Design Guidelines — Rocket AI Design System

**Project**: AI Educator Website
**System**: Rocket AI (Dark-first, void-black ground)
**Last Updated**: 2026-08-13

## Brand Foundation

**Brand idea**: Human ambition should have no ceiling. **Visual constant**: the 42° trajectory.

**Tagline**: MAKE THE FUTURE POSSIBLE.

**Core principle**: Void black is the ground, not a theme. Dark is `:root`. `.light` on `<html>` is the opt-in "stone" scope.

**Product positioning**: Tony Hoang helps Vietnamese professionals turn AI into practical workflows for work, marketing, and digital products. Communication leads with a concrete job and outcome; courses and current content establish context before lead capture.

**Homepage hierarchy**: Positioning → three job-based entry points → featured free course → latest articles → Tony's approach → free resources. The primary CTA is learning; the gift CTA belongs at the end of the journey.

---

## Hard Rules

1. **Colour ratio is fixed: 75–80% void black, 15–20% rocket purple / indigo, 5% everything else.** Purple appears only as: a single accent word in a headline, the fill on the ONE primary button per view, a hairline on an active surface, and the bloom in the background. Never as a large flat UI area, no purple section backgrounds, no purple-filled cards.

2. **No raw hex, no raw px, no arbitrary colours.** Use tokens only. Prefer Tailwind aliases; fall back to `var(--token)` in arbitrary values like `rounded-[var(--radius-lg)]`.

3. **Two faces only.** Space Grotesk (display/headings) + Be Vietnam Pro (body/UI). No serif, no monospace. `font-display` = Space Grotesk; `font-sans` = Be Vietnam Pro.

4. **No emoji anywhere.** Meaning carried by Lucide icons only (sizes 16/20/24px, `strokeWidth={1.75}`, `currentColor`). One icon per row or label at most.

5. **Motion: one curve.** `var(--ease-trajectory)` — fades and short translations only. No bounce, no overshoot, no spring, no parallax, no rotation on hover.

6. **Shadow vs glow are separate.** Shadows give depth (modals, floating panels). Purple glow gives emphasis (primary button hover, focus ring, active tab). Never both on the same element at rest.

7. **Blur (18px) in exactly three places:** the sticky site header, a bottom tab bar, and the dialog scrim. Everything else is opaque.

8. **Vietnamese typography**: Leading auto-loosens under `[lang="vi"]` for stacked tone marks. Do not hard-code heights on blocks holding Vietnamese copy — use flex/grid and let content set height.

---

## Colour System

### Core Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--void-black` | `#0A0A0D` | Ground (`:root`) |
| `--stone` | `#F5F6F7` | Primary text on dark, bg on light |
| `--rocket-purple` | `#8C25FF` | Accent word, primary button, active state |
| `--indigo` | `#332BFF` | Complementary gradient, status |
| `--silver` | `#A7A7B3` | Secondary text |

### Semantic Surfaces

Use these in order of precedence:

| Token | Dark Value | Light Value | Purpose |
|-------|-----------|-------------|---------|
| `--surface-base` | `#0A0A0D` | `#F5F6F7` | Page background |
| `--surface-raised` | `#111318` | `#FFFFFF` | Modals, popovers |
| `--surface-card` | `#14141A` | `#FFFFFF` | Cards, items |
| `--surface-inset` | `#1C1C24` | `#E6E6E8` | Input, form fill |
| `--surface-overlay` | 4% white | 3% black | Hover fill, subtle wash |

### Borders

| Token | Opacity | Usage |
|-------|---------|-------|
| `--border-subtle` | 8% white (dark) | Default hairline |
| `--border-strong` | 20% white (dark) | Divider emphasis |
| `--border-accent` | 40% purple | Active state, focus |

### Tailwind Aliases (in app/globals.css)

```css
text-text-primary       /* Stone on dark, void black on light */
text-text-secondary     /* Silver / subdued */
text-text-tertiary      /* Muted, lowest priority */
text-text-accent        /* Purple */
text-rocket / bg-rocket /* Primary action */
bg-rocket-hover / bg-rocket-press
bg-surface / bg-surface-raised / bg-surface-card
border-hairline / border-hairline-strong / border-hairline-accent
```

**Legacy aliases still resolve** (text-coral, bg-card, etc.) but migrate new code to the real names.

---

## Typography

### Font Faces

- **Display**: Space Grotesk (headings, wordmark)
- **Body**: Be Vietnam Pro (paragraphs, buttons, labels)
- Both carry full Vietnamese subset (no fallback substitution)
- No serif, no monospace

### Type Scale

| Element | Token | Size | Weight | Usage |
|---------|-------|------|--------|-------|
| Display XL | `.heading-xl` | clamp(2.5rem, 6vw, 76px) | 700 | Hero titles |
| Display L | `.heading-lg` | clamp(2rem, 5vw, 56px) | 700 | Section titles |
| Display M | `.heading-md` | clamp(1.75rem, 4vw, 44px) | 700 | Subsection titles |
| Heading 1 | `h1` | 44px | 700 | `--size-h1` |
| Heading 2 | `h2` | 32px | 700 | `--size-h2` |
| Heading 3 | `h3` | 24px | 700 | `--size-h3` |
| Heading 4 | `h4` | 20px | 700 | `--size-h4` |
| Body Large | `--size-body-l` | 18px | 400 | Long-form text |
| Body | Base | 16px | 400 | Standard text |
| Body Small | `--size-body-s` | 14px | 400 | Secondary text |
| Eyebrow | `.eyebrow` | 11px | 600 | Labels, ALL CAPS |
| Caption | `--size-caption` | 12px | 400 | Fine print |

### Leading (Line Height)

Vietnamese auto-loosens to prevent stacked tone mark collision:

| Scope | Tight | Snug | Normal | Loose |
|-------|-------|------|--------|-------|
| English | 1.04 | 1.18 | 1.5 | 1.7 |
| Vietnamese `[lang="vi"]` | 1.16 | 1.3 | 1.65 | 1.78 |

### Text Gradient

For the **single accent word** in a headline:

```tsx
<span className="text-gradient">featured</span>
```

Gradient: stone → purple-300 (dark); void black → purple-600 (light).

### Wordmark & Eyebrow

```css
.wordmark
  font-family: var(--font-display)
  text-transform: uppercase
  letter-spacing: .34em

.eyebrow
  font-size: 11px
  font-weight: 600
  letter-spacing: .18em /* .10em under [lang="vi"] */
  text-transform: uppercase
  color: var(--text-secondary)
```

---

## Component Recipes

### Primary Button

**Occurs once per view. Never two primary buttons on the same screen.**

```tsx
<button
  className="
    bg-rocket text-stone rounded-[var(--radius-sm)]
    px-[var(--space-5)] h-11 font-medium
    transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)]
    hover:bg-rocket-hover hover:shadow-glow-sm
    active:scale-[var(--press-scale)] active:bg-rocket-press
  "
>
  Button text
</button>
```

**States:**
- Rest: Rocket purple bg, stone text
- Hover: Lighter purple bg + small purple glow (no shadow)
- Press: Scale 0.98 + darker purple bg
- Focus: 2px purple ring at 2px offset (global)
- Disabled: 40% opacity (no colour change)

### Secondary Button

Transparent fill, hairline border.

```tsx
<button
  className="
    border border-hairline-strong text-text-primary
    hover:bg-surface-overlay hover:border-hairline-accent
  "
>
  Secondary action
</button>
```

### Ghost Button

No border, hover takes 8% white wash.

```tsx
<button className="hover:bg-surface-overlay">
  Ghost action
</button>
```

### Card

`.rk-card` — carbon fill, 16px radius, 1px hairline, no shadow at rest.

```tsx
<div className="rk-card">
  Card content
</div>
```

**Interactive variant**: Add `.rk-card-interactive` for hover effects (lift 2px + purple hairline + small glow).

```tsx
<div className="rk-card rk-card-interactive">
  Clickable card
</div>
```

### Badge / Chip / Tag

Pill radius, subtle background, hairline border.

```tsx
<div className="
  inline-flex items-center px-3 h-7
  bg-surface-overlay border border-hairline rounded-[var(--radius-pill)]
  text-text-secondary text-sm
">
  Tag
</div>

/* Accent variant */
<div className="
  border-hairline-accent text-text-accent bg-[var(--purple-a12)]
">
  Accent tag
</div>
```

### Input Field

```tsx
<input
  className="
    bg-surface-inset border border-hairline
    rounded-[var(--radius-sm)] h-11
    placeholder:text-text-tertiary
    focus:border-hairline-accent focus-visible:ring-2 ring-[var(--focus-ring)]
  "
  placeholder="Placeholder text"
/>
```

### Dialog / Modal

**Scrim**: Void black at 72% + 18px blur. **Panel**: `bg-surface-raised`, 24px radius, hairline border, large shadow.

```tsx
<div className="fixed inset-0 bg-black/72 backdrop-blur-[18px]">
  <div className="
    bg-surface-raised border border-hairline
    rounded-[var(--radius-xl)] shadow-lg
  ">
    Modal content
  </div>
</div>
```

### Navigation Bar

Fixed, translucent (`.rk-glass` + hairline border). Active item uses purple underline hairline, not filled pill.

```tsx
<nav className="fixed top-0 left-0 right-0 rk-glass border-b border-hairline">
  <a
    href="/"
    className="
      hover:text-rocket
      border-b-[2px] border-transparent
      data-active:border-hairline-accent data-active:text-text-accent
    "
  >
    Active item
  </a>
</nav>
```

---

## The 42° Possibility Field

`.rk-field` — one per screen maximum. Signature background for heroes, covers, section breaks.

```tsx
<section className="rk-field">
  <div className="relative z-10">
    <h1 className="text-gradient">Hero Title</h1>
    <p>Supporting text</p>
  </div>
</section>
```

**Anatomy:**
1. Radial bloom: Purple + indigo gradient, centre-biased, 62% opacity
2. Beam: 1px line at 42° angle with purple glow (medium), 40% opacity
3. Subtle variant: `.rk-field-soft` dims bloom to 55% + beam glow to small

**Content inside must be `relative z-10`** to sit above the pseudo-elements.

### Glass Surface (`.rk-glass`)

4% white + 18px blur. Used **only** in:
- Sticky site header
- Bottom tab bar (if present)
- Dialog scrim

```tsx
<header className="rk-glass border-b border-hairline">
  Header content
</header>
```

### Protection Gradient (`.rk-protect`)

Fade from transparent to void black (dark) or stone (light). Use under copy that crosses photography.

```tsx
<div className="relative">
  <img src="hero.jpg" alt="" />
  <div className="absolute inset-0 rk-protect" />
  <div className="relative z-10 text-stone">
    <h1>Text over image</h1>
  </div>
</div>
```

---

## Layout & Spacing

### Container

1200px max width, 32px gutter, centered.

```tsx
<div className="container-custom">
  {/* max-w-[1200px] mx-auto px-[var(--gutter-page)] */}
  Content
</div>
```

### Sections

96px vertical spacing between sections (96px top + bottom on mobile reduced to 48px).

```tsx
<section className="section-spacing">
  {/* py-[var(--section-y)] = py-24 (96px) */}
  Content
</section>
```

### Spacing Tokens

| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 24px |
| `--space-6` | 32px |
| `--space-7` | 48px |
| `--space-8` | 64px |
| `--space-9` | 96px (section y) |
| `--space-10` | 128px |
| `--space-11` | 160px |

---

## Motion & Animation

### Animations Available

| Class | Effect | Duration |
|-------|--------|----------|
| `.animate-fade-in` | Fade + up 16px | slow (420ms) |
| `.animate-fade-in-delay-{1\|2\|3}` | Staggered fade-in | slow + delay |
| `.animate-bloom` | Field glow settling | cinematic (900ms) |
| `.animate-float` | Subtle up/down bob | 5s (looped) |
| `.animate-glow-pulse` | Glow pulse | 2.4s |
| `.shimmer-border` | Beam sweep on card edge | 1.5s on hover |
| `.animate-draw-line` | Trajectory line draw | slow |

### Easing

Only one curve:

```css
--ease-trajectory: cubic-bezier(.2, .8, .2, 1);
```

Used for all transitions (buttons, cards, fades). Feels confident, forward-looking.

### Transition Durations

```css
--duration-instant: 90ms      /* Micro-interactions */
--duration-fast: 160ms        /* Hover states */
--duration-base: 240ms        /* Card transitions */
--duration-slow: 420ms        /* Page fades, stagger delays */
--duration-cinematic: 900ms   /* Hero blooms, settling */
```

---

## Accessibility

### Focus Rings

Global, automatic (in `@layer base`):

```css
*:focus-visible {
  outline: 2px solid var(--rocket-purple);
  outline-offset: 2px;
}
```

### Colour Contrast

All text meets or exceeds WCAG AA (4.5:1):
- Stone on void black: 14:1 (AAA)
- Stone on purple (button): 5:1 (AA)
- Silver on void black: 5.5:1 (AA)
- Stone on light: 13:1 (AAA)

### Semantic HTML

- Use `<button>` for actions, `<a>` for navigation
- Use `<section>`, `<header>`, `<nav>`, `<main>`, `<footer>` landmarks
- Use ARIA labels on icon-only buttons

```tsx
<button aria-label="Close dialog" onClick={onClose}>
  <X className="w-5 h-5" />
</button>
```

### Skip Link

Include in every layout:

```tsx
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

---

## Icon Usage

**Lucide React only.** Sizes: 16px (dense), 20px (standard), 24px (prominent).

Always use `strokeWidth={1.75}` and `currentColor`.

```tsx
import { ArrowRight } from 'lucide-react'

<button className="text-rocket">
  <ArrowRight className="w-5 h-5" strokeWidth={1.75} />
  Action
</button>
```

**Placement**: One icon per row/label at most. Icons carry meaning, never decoration.

---

## Responsive Breakpoints

Tailwind 4 defaults:

| Breakpoint | Width | Use Case |
|------------|-------|----------|
| `sm` | 640px | Mobile |
| `md` | 768px | Tablet |
| `lg` | 1024px | Desktop |
| `xl` | 1280px | Wide desktop |
| `2xl` | 1536px | Ultra-wide |

**Container**: 32px gutter below `md`, 64px on larger screens.

---

## Copy Rules

When you touch visible strings:

- **Voice**: Confident, clear, forward-looking. Short declaratives, often paired — *claim + consequence*.
- **Case**: Sentence case with full stops, including fragments. ALL CAPS only for: wordmark, eyebrow labels, poster display type.
- **Buttons**: Sentence case, 1–3 words. Never caps.
- **Numbers**: Abbreviated and unqualified when strong (`1.2M`, `92%`). Deltas only when real (`+18%`).
- **Vietnamese**: Display copy is sentence case, not ALL CAPS (stacked marks read as noise at size).
- **Claims need evidence**: publish statistics, testimonials, experience, ratings, or performance claims only with a verifiable source. Prefer neutral descriptions when evidence is unavailable.

---

## Best Practices

### Do

- Use `.rk-field` for hero backgrounds (one per page)
- Use `.rk-card` + `.rk-card-interactive` for clickable content
- Use `.rk-glass` only for sticky header, tab bar, dialog scrim
- Apply motion via `--ease-trajectory` + duration tokens only
- Use semantic HTML + ARIA labels
- Test in light scope (add `.light` class to `<html>`)
- Keep primary button to one per view
- Left-align content by default; centre only for closing/statement layouts

### Don't

- Hardcode colour values; use CSS variables
- Use inline styles for layout or motion
- Create two primary buttons per view
- Put large purple areas or coloured section backgrounds
- Use emoji; use Lucide icons instead
- Use multiple easing curves or custom animations
- Combine shadow + glow on the same element at rest
- Hard-code heights on blocks with Vietnamese text
- Use monospace or serif fonts

---

## File Organization

```
components/
├── custom/              # Brand components
│   ├── theme-provider.tsx
│   ├── container.tsx
│   └── ...
├── layout/              # Header, footer
├── ui/                  # Radix/shadcn primitives
└── seo/                 # JSON-LD schemas

app/
├── globals.css          # Token layer (do not edit)
├── layout.tsx           # Root (pass-through)
└── [locale]/
    └── layout.tsx       # Document root (owns <html>, <body>)
```

---

## Related Documentation

- [Codebase Summary](./codebase-summary.md) — Project structure & components
- [System Architecture](./system-architecture.md) — Technical layers & data flow
- [Code Standards](./code-standards.md) — Coding conventions
- [Project Roadmap](./project-roadmap.md) — Timeline & phases
- [Design System Brief](../plans/260813-1127-rocket-ai-design-system-rollout/design-system-brief.md) — Full specification
