# Rocket AI Design System — implementation brief

Source: Claude Design project "Rocket AI Design System". The token layer is **already
implemented** in `app/globals.css`. Your job is to restyle components to use it.

Brand idea: *human ambition should have no ceiling*. Visual constant: the **42° trajectory**.
Tagline: MAKE THE FUTURE POSSIBLE.

---

## Hard rules — do not violate

1. **Void black is the ground, not a theme.** Dark is `:root`. `.light` on `<html>` is the opt-in
   "stone" scope. Never write `dark:` variants that assume light-first. The `dark:` Tailwind variant
   is configured as "everywhere except inside `.light`".
2. **Colour ratio is fixed: 75–80% void black, 15–20% rocket purple / indigo, 5% everything else.**
   Purple appears as: a single accent word in a headline, the fill on the ONE primary button, a
   hairline on an active surface, and the bloom in the background. **Never as a large flat area of
   UI chrome.** No purple section backgrounds, no purple-filled cards, no purple headers.
3. **No raw hex, no raw px, no arbitrary colours.** Use tokens only. Prefer the Tailwind aliases
   below; fall back to `var(--token)` in an arbitrary value like `rounded-[var(--radius-lg)]`.
4. **Two faces only.** Space Grotesk (display/headings) + Inter (body). No serif, no monospace.
   `font-display` = Space Grotesk, `font-sans` = Inter. Headings already default to display.
5. **No emoji anywhere.** Meaning is carried by Lucide icons (already a dependency).
6. **Icons:** Lucide only, sizes 16/20/24 px only, `strokeWidth={1.75}`, always `currentColor`.
   One icon per row or label at most. Icons carry meaning, never decoration.
7. **Motion:** one curve — `var(--ease-trajectory)`. Fades and short translations only.
   No bounce, no overshoot, no spring, no parallax, no rotation on hover.
8. **Shadow vs glow are separate systems.** Shadows give depth (modals, floating panels).
   Purple glow gives emphasis (primary button hover, focus ring, active tab, the beam).
   **Never both on the same element at rest.**
9. **Blur (18px) appears in exactly three places:** the sticky site header, a bottom tab bar, and
   the dialog scrim. Everything else is opaque.
10. **Do NOT run `pnpm build` / `next build`.** The orchestrator builds once at the end.
    Keep the code compilable — that is what matters.

---

## Tailwind aliases available (defined in `app/globals.css`)

**Surfaces** — `bg-surface` (void black), `bg-surface-raised`, `bg-surface-card` (carbon `#14141A`),
`bg-surface-inset`, `bg-surface-overlay` (4% white), `bg-surface-inverse`

**Palette** — `bg-void` `text-stone` `text-silver` `bg-carbon` `bg-graphite` `bg-ash` `bg-charcoal`
`text-rocket` / `bg-rocket` (#8C25FF) `bg-rocket-hover` `bg-rocket-press` `text-brand-indigo`
`text-purple-100|300|500|600|700|900`

**Text** — `text-text-primary` (stone) `text-text-secondary` (silver) `text-text-tertiary`
`text-text-accent` (purple) `text-text-inverse`

**Borders** — `border-hairline` (8% white) `border-hairline-strong` (20%) `border-hairline-accent` (purple 40%)

**Status** — `text-status-positive` `text-status-warning` `text-status-critical` `text-status-info`

**Elevation** — `shadow-sm` `shadow-md` `shadow-lg` · glow: `shadow-glow-sm` `shadow-glow-md` `shadow-glow-lg`

**Legacy aliases still resolve** (`text-coral` → rocket purple, `bronze` → indigo, `bg-card`,
`border-border`, `bg-background`, `text-foreground`, `text-muted-foreground`, `life-*`).
They will not break, but **migrate the files you own to the real token names** — that is part of the job.

## CSS utility classes available

- `.rk-field` — the **42° Possibility Field**: one purple/indigo radial bloom + one 1px beam at 42°
  with a purple glow. **One per screen, never two.** Use on heroes, covers, section breaks.
- `.rk-field-soft` — add alongside `.rk-field` for a dimmer version under body copy.
- `.rk-card` — carbon fill, 16px radius, one 8% hairline, no shadow at rest.
- `.rk-card-interactive` — add alongside `.rk-card`: hover lifts 2px + purple hairline + small glow.
- `.rk-glass` — 4% white + 18px blur. **Only** for surfaces sitting on the field.
- `.rk-protect` — protection gradient under copy that crosses imagery.
- `.container-custom` (1200px max, 32px gutter) · `.section-spacing` (96px y)
- `.heading-xl` `.heading-lg` `.heading-md` — display face, tight tracking, clamped
- `.eyebrow` — 11px, uppercase, .18em tracking (.14em under `lang="vi"`), silver
- `.wordmark` — display face, .34em tracking, uppercase
- `.text-gradient` — stone → purple-300, for the one accent word in a headline
- `.body-serif` — body copy at 18px / 1.7 leading, 64ch max (name is legacy; it is Inter now)
- Animation: `.animate-fade-in` `.animate-fade-in-delay-1|2|3` `.animate-bloom` `.animate-float`
  `.card-tilt` `.icon-pop` `.shimmer-border` `.animate-glow-pulse` `.magnetic-button`

## Raw tokens (use via `var(--…)` in arbitrary values)

Radius: `--radius-xs` 4 (checkboxes) · `--radius-sm` 6 (buttons, inputs) · `--radius-md` 10 (list rows)
· `--radius-lg` 16 (cards) · `--radius-xl` 24 (large panels) · `--radius-pill` (chips, badges,
switches, marketing CTAs)

Spacing: `--space-1` 4 → `--space-11` 160. Section rhythm 96px, page gutter 32px, content max 1200px.

Motion: `--duration-instant` 90ms · `--duration-fast` 160ms · `--duration-base` 240ms ·
`--duration-slow` 420ms · `--duration-cinematic` 900ms · `--ease-trajectory`

Type sizes: `--size-display-xl` 76 · `--size-display-l` 56 · `--size-h1` 44 · `--size-h2` 32 ·
`--size-h3` 24 · `--size-h4` 20 · `--size-body-l` 18 · `--size-body` 16 · `--size-body-s` 14 ·
`--size-caption` 12 · `--size-eyebrow` 11

---

## Component recipes

**Button — primary** (there is only ONE primary per view):
`bg-rocket text-stone rounded-[var(--radius-sm)] px-[var(--space-5)] h-11 font-medium
transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)]
hover:bg-rocket-hover hover:shadow-glow-sm active:scale-[var(--press-scale)] active:bg-rocket-press`

**Button — secondary:** transparent fill, `border border-hairline-strong text-text-primary`,
hover `bg-surface-overlay border-hairline-accent`.

**Button — ghost:** no border, hover takes an 8% white wash (`hover:bg-surface-overlay`).

**Marketing CTA:** same as primary but `rounded-[var(--radius-pill)]`.

**Card:** `.rk-card` (+ `.rk-card-interactive` when clickable). Emphasis = purple hairline + small
glow. **Never** a coloured left border, never a gradient fill.

**Badge / Tag / chip:** pill radius, `bg-surface-overlay border border-hairline text-text-secondary`,
12px. Accent tone = `border-hairline-accent text-text-accent bg-[var(--purple-a12)]`.

**Input:** `bg-surface-inset border border-hairline rounded-[var(--radius-sm)] h-11
placeholder:text-text-tertiary focus:border-hairline-accent`. Focus ring is handled globally.

**Nav bar:** fixed and translucent — `.rk-glass` + `border-b border-hairline`. Nothing else is pinned.
Active item = purple underline hairline, not a filled pill.

**Dialog:** scrim is void black at 72% + 18px blur. Panel `bg-surface-raised rounded-[var(--radius-xl)]
border border-hairline shadow-lg`.

**States:** hover lifts a card 2px, brightens a fill one step, adds the small purple glow. Press
scales to `.98` and darkens the fill — never a colour change. Focus is a 2px purple ring at 2px
offset (global). Disabled is 40% opacity with no colour change. Selected is a purple tint plus
purple hairline, not a solid fill.

---

## Layout rules

- 32px page gutter (64px on large surfaces), 1200px content max, 96px between sections.
- Content is **left-aligned by default**; only closing/statement layouts centre.
- Grids are **3- or 4-up; never 5**.
- Backgrounds, in order of preference: flat void black (most screens) → the 42° field (heroes,
  covers, section breaks) → cool near-black photography. **One field per screen.**

## Copy rules (apply when you touch visible strings; keep meaning, keep Vietnamese)

- Voice: confident, clear, forward-looking. Short declaratives, often paired — *claim + consequence*.
- Sentence case with full stops, including on fragments. ALL CAPS only for: the wordmark, eyebrow
  labels, and poster display type.
- Buttons are sentence case, 1–3 words. Never caps.
- A hero is one line plus one supporting sentence. A card is a 1–3 word heading plus one sentence.
- Numbers abbreviated and unqualified when strong (`1.2M`, `92%`). Deltas only when real (`+18%`).
- Avoid: revolutionary, cutting-edge, seamless, unleash, game-changing, "powered by AI".
- **Never invent new claims, statistics, testimonials, or offers.** Restyle and tighten existing
  copy only. If a number exists, keep it.

## Vietnamese typography — this site is `lang="vi"`

Vietnamese stacks two marks on one vowel (ế ộ ữ ằ), so leading is auto-loosened under `[lang="vi"]`.
You get this for free from the token layer. Two things you must do manually:

- **Do not hard-code heights** on blocks holding Vietnamese copy — Vietnamese runs 10–20% longer than
  English. Use flex/grid and let content set the height.
- **Vietnamese display copy is sentence case, not ALL CAPS.** A caps headline with stacked marks
  reads as noise at display size. Eyebrow labels may stay caps (tracking auto-drops to .14em).

---

## Scope discipline

- Edit **only the files listed in your task**. Another agent owns every other file.
- Do not create new files unless your task says to. Update existing files directly.
- Do not touch `app/globals.css`, `app/layout.tsx`, or `components/custom/theme-provider.tsx` —
  the orchestrator owns those.
- Preserve all behaviour: props, links, i18n keys (`next-intl`), data flow, SEO schemas, analytics.
  This is a **restyle**, not a rewrite.
- Keep files under 200 lines where practical; extract sub-components if a file balloons.
