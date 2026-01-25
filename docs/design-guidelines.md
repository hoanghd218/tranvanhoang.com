# Design Guidelines

**Project**: AI Educator Website
**Phase**: 2 - Core Layout & Navigation
**Last Updated**: 2025-01-25

## Overview

This document provides guidelines for using the design system components and maintaining visual consistency across the AI Educator Website. The design system is built on a coral-bronze color palette with a dark theme foundation.

## Brand Identity

### Core Values

- **Professional yet approachable** - Clean design with warm accent colors
- **Performance-first** - Minimal JavaScript, optimized assets
- **Accessibility** - WCAG 2.1 AA compliant
- **Consistency** - Unified component language

### Color System

#### Primary Colors

| Token | Hex | Usage |
|-------|-----|-------|
| `--coral` | `#D97757` | Primary actions, links, highlights |
| `--bronze` | `#D4A27C` | Secondary accents, gradients |

#### Dark Theme

| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#0E0E0E` | Page backgrounds |
| `--foreground` | `#EDEDED` | Primary text |
| `--card` | `#18181B` | Card backgrounds |
| `--border` | `#27272A` | Borders, dividers |
| `--muted` | `#52525B` | Secondary text |
| `--muted-foreground` | `#A1A1AA` | Muted text |

#### Interaction States

| State | Color | Token |
|-------|-------|-------|
| Hover (primary) | `#C45F3F` | `--coral-dark` |
| Hover (secondary) | `#B8895F` | `--bronze-dark` |
| Focus ring | `#D97757` | `--coral` |

## Typography

### Font Family

```css
--font-sans: var(--font-inter), system-ui, sans-serif;
--font-heading: var(--font-inter), system-ui, sans-serif;
```

### Heading Scale

| Element | Size | Weight |
|---------|------|--------|
| `h1` / `.heading-xl` | 3.75rem | 700 |
| `h2` / `.heading-lg` | 3rem | 700 |
| `h3` / `.heading-md` | 2.25rem | 700 |
| Body | 1rem / 16px | 400 |

### Text Gradient

Use the `.text-gradient` class for coral-bronze gradient text:

```tsx
<span className="text-gradient">Gradient Text</span>
```

Or use the `GradientText` component for more control.

## Component Usage

### Custom Components

Custom components are located in `components/custom/` and use the brand design tokens directly.

#### GradientText

Gradient text with coral-bronze gradient.

```tsx
import { GradientText } from "@/components/custom/gradient-text"

// Default: coral to bronze gradient
<GradientText>Featured Content</GradientText>

// Custom gradient colors
<GradientText from="#FF6B6B" to="#4ECDC4">Custom Colors</GradientText>

// Hover effect disabled
<GradientText hover={false}>Static Text</GradientText>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `direction` | number | `135` | Gradient angle in degrees |
| `from` | string | `var(--coral)` | Start color |
| `to` | string | `var(--bronze)` | End color |
| `hover` | boolean | `true` | Enable hover brightness effect |

---

#### BrandCard

Card component with optional coral hover border.

```tsx
import { BrandCard } from "@/components/custom/brand-card"

<BrandCard>
  <h3>Card Title</h3>
  <p>Card content here</p>
</BrandCard>

// No hover border
<BrandCard hoverBorder={false}>
  Static card
</BrandCard>

// Custom padding
<BrandCard padding="lg">
  More padding
</BrandCard>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hoverBorder` | boolean | `true` | Show coral border on hover |
| `padding` | `"sm" \| "md" \| "lg" \| "none"` | `"md"` | Card padding size |

**CSS Classes:** `bg-card`, `rounded-xl`, `border`, `border-border`

---

#### CTAButton

Primary call-to-action button with variants.

```tsx
import { CTAButton } from "@/components/custom/cta-button"

// Primary button
<CTAButton>Get Started</CTAButton>

// Secondary variant
<CTAButton variant="secondary">Learn More</CTAButton>

// Outline variant
<CTAButton variant="outline">View Details</CTAButton>

// Ghost variant
<CTAButton variant="ghost">Cancel</CTAButton>

// Sizes
<CTAButton size="sm">Small</CTAButton>
<CTAButton size="lg">Large</CTAButton>

// Loading state
<CTAButton loading>Processing...</CTAButton>

// As link (using Slot)
<CTAButton asChild>
  <Link href="/signup">Sign Up</Link>
</CTAButton>
```

**Variants:**

| Variant | Purpose |
|---------|---------|
| `default` | Primary actions (coral background) |
| `secondary` | Secondary actions (bronze background) |
| `outline` | Tertiary actions (border only) |
| `ghost` | Low-emphasis actions |

**Sizes:**

| Size | Height | Padding |
|------|--------|---------|
| `sm` | 2rem | px-4, text-xs |
| `default` | 2.5rem | px-5 |
| `lg` | 3rem | px-8 |
| `icon` | 2.5rem | square |

**CSS Classes:** `rounded-lg`, `font-semibold`, `transition-all`, `focus-visible:ring-coral`

---

#### Container & Section

Layout components for consistent spacing.

```tsx
import { Container, Section } from "@/components/custom/container"

// Default container (max-w-6xl, centered)
<Container>
  <Section>
    <h2>Section Title</h2>
    <p>Section content</p>
  </Section>
</Container>

// Small container
<Container size="md">
  <Section padding="12">
    <p>Content</p>
  </Section>
</Container>

// No center alignment
<Container center={false}>
  Full-width content
</Container>
```

**Container Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `"sm"` to `"7xl"` \| `"full"` | `"6xl"` | Max-width |
| `padding` | Tailwind px scale | `"6"` | Horizontal padding |
| `center` | boolean | `true` | Center container |

**Section Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `padding` | `"0"` to `"24"` | `"16"` | Vertical padding (py-) |

---

### UI Components

UI components are located in `components/ui/` and wrap Radix UI primitives with consistent styling.

#### Tabs

```tsx
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">Tab 1</TabsTrigger>
    <TabsTrigger value="tab2">Tab 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">Content 1</TabsContent>
  <TabsContent value="tab2">Content 2</TabsContent>
</Tabs>
```

---

#### Accordion

```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content for section 1</AccordionContent>
  </AccordionItem>
</Accordion>
```

---

#### Avatar

```tsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

<Avatar>
  <AvatarImage src="/avatar.jpg" alt="User" />
  <AvatarFallback>TVH</AvatarFallback>
</Avatar>
```

---

#### Sonner (Toasts)

```tsx
import { Toaster } from "@/components/ui/sonner"

// In layout
<Toaster />

// In component
import { toast } from "sonner"

toast.success("Operation successful")
toast.error("Something went wrong")
```

---

#### Form

Forms use React Hook Form with Zod validation.

```tsx
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

// Define schema
const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Minimum 8 characters"),
})

function MyForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { email: "", password: "" },
  })

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="email@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
```

---

## Navigation Patterns

### Navigation Configuration (`lib/navigation.ts`)

Centralized navigation structure for consistent routing across header and footer.

```typescript
import { mainNavItems, ctaItem, footerNavItems } from "@/lib/navigation"
```

**Types:**

```typescript
type NavItem = {
  title: string
  href: string
  description?: string      // Dropdown description
  children?: NavItem[]      // Nested navigation items
}
```

**Main Navigation Items:**

| Route | Path | Children |
|-------|------|----------|
| Về tôi | `/about` | - |
| Học AI | `/learn` | AI cho người mới, AI cho Marketing, AI cho công việc |
| Blog | `/blog` | - |
| Tài nguyên | `/resources` | - |
| Cuộc sống | `/life` | - |

**Footer Columns:**

| Column | Items |
|--------|-------|
| Brand | Logo, tagline |
| Quick Links | Về tôi, Học AI, Blog, Tài nguyên |
| Resources | Free Gift, Cuộc sống, Newsletter, Liên hệ |
| Connect | Email, Facebook, YouTube |

### Header Component (`components/layout/header.tsx`)

Responsive navigation header with desktop and mobile layouts.

```tsx
import { Header } from "@/components/layout/header"

// In layout.tsx
<Header />
```

**Features:**

| Feature | Desktop | Mobile |
|---------|---------|--------|
| Navigation | Horizontal `nav` | Sheet drawer |
| Logo | GradientText | GradientText |
| CTA Button | Full text | Icon only |
| Menu Toggle | N/A | Hamburger icon |

**Behavior:**
- Sticky header with `backdrop-blur-md` on scroll
- Active route highlighted in coral color
- Hover state transitions to coral
- Mobile menu closes on navigation

**Accessibility:**
- Skip-to-content link (see `app/layout.tsx`)
- `aria-label` on menu toggle button
- `sr-only` text for icon-only elements
- Focus-visible outlines in coral

### Footer Component (`components/layout/footer.tsx`)

4-column footer with newsletter signup and social links.

```tsx
import { Footer } from "@/components/layout/footer"

// In layout.tsx
<Footer />
```

**Layout:**

```
Mobile: 1 column          Tablet: 2 columns          Desktop: 4 columns
┌─────────────────┐       ┌─────────────────┐       ┌────┬────┬────┬────┐
│ Brand           │       │ Brand           │       │ Brand | QL | Res | News│
│ Quick Links     │   →   │ Quick Links     │   →   └────┴────┴────┴────┘
│ Resources       │       │ Resources       │
│ Newsletter      │       │ Newsletter      │
└─────────────────┘       └─────────────────┘
```

**Newsletter Form:**
- Email input with validation
- Loading state during submission
- Success message in Vietnamese
- Styled with `bg-muted/50`

**External Links:**
- `target="_blank"` for new tab
- `rel="noopener noreferrer"` for security
- `aria-label` for screen readers

### Responsive Breakpoints

| Breakpoint | Header | Footer |
|------------|--------|--------|
| `< md` | Sheet menu | 1 column |
| `md - lg` | Sheet menu | 2 columns |
| `>= lg` | Desktop nav | 4 columns |

### Accessibility Guidelines

#### Skip Link

Required in `app/layout.tsx`:

```tsx
<a href="#main-content" className="sr-only focus:not-sr-only ...">
  Skip to main content
</a>
```

#### ARIA Labels

| Element | Label |
|---------|-------|
| Mobile menu toggle | "Toggle menu" |
| Mobile menu close | "Close menu" |
| External social links | Social platform name |
| Newsletter submit | "Đăng ký" context |

#### Focus Management

- Skip link appears on focus
- Focus-visible ring: `2px solid var(--coral)`
- Mobile menu traps focus within sheet
- Dialog/Sheet uses Radix UI focus trap

### File Organization

```
components/
└── layout/                 # Layout components
    ├── header.tsx         # Responsive header
    └── footer.tsx         # 4-column footer
```

---

## Spacing System

### Container Layout

```tsx
<Container size="6xl" padding="6">
  {/* max-w-6xl, px-6, mx-auto */}
  <Section padding="16">
    {/* py-16 */}
    Content
  </Section>
</Container>
```

### Section Spacing Scale

| Token | Padding | Usage |
|-------|---------|-------|
| `0` | py-0 | No spacing |
| `4` | py-4 | Tight sections |
| `8` | py-8 | Compact sections |
| `12` | py-12 | Standard sections |
| `16` | py-16 | Default sections |
| `20` | py-20 | Large sections |
| `24` | py-24 | Hero sections |

## Responsive Design

### Breakpoints

Tailwind 4 default breakpoints apply:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Container Widths

| Size | Max-Width | Use Case |
|------|-----------|----------|
| `sm` | 24rem | Cards, forms |
| `md` | 28rem | Narrow content |
| `lg` | 32rem | Text columns |
| `xl` | 36rem | Wide forms |
| `2xl` | 42rem | Standard content |
| `4xl` | 56rem | Wide layouts |
| `6xl` | 72rem | Full content |
| `7xl` | 80rem | Maximum width |
| `full` | 100vw | Full-width sections |

## Accessibility

### Focus States

All interactive elements have visible focus states:

```css
*:focus-visible {
  outline: 2px solid var(--coral);
  outline-offset: 2px;
}
```

### Color Contrast

- `--coral` on dark: 4.5:1+ (AA compliant)
- `--foreground` on `--background`: 15:1+ (AAA compliant)
- `--muted-foreground` on `--card`: 4.5:1+ (AA compliant)

### Semantic HTML

- Use `<section>` for major content areas
- Use `<header>`, `<nav>`, `<main>`, `<footer>` landmarks
- Use `<button>` for actions, `<a>` for navigation
- Use ARIA labels for icon-only buttons

## Best Practices

### Do

- Use `Container` and `Section` for consistent layout
- Use `CTAButton` for all call-to-action elements
- Use `BrandCard` for card-based content
- Apply coral/bronze colors via design tokens
- Use semantic HTML elements

### Don't

- Hardcode color values (use CSS variables)
- Use inline styles for layout
- Mix custom and shadcn/ui patterns inconsistently
- Create new components without checking existing ones

### Adding New Components

1. Identify if component is brand-specific (`custom/`) or generic (`ui/`)
2. Use design tokens for colors, spacing
3. Follow existing component patterns
4. Add JSDoc comments for props
5. Export from component index if applicable
6. Document in this file

## File Organization

```
components/
├── custom/                 # Brand-specific components
│   ├── index.ts           # Barrel export
│   ├── gradient-text.tsx
│   ├── brand-card.tsx
│   ├── cta-button.tsx
│   └── container.tsx
├── layout/                 # Layout components (Phase 2)
│   ├── header.tsx         # Responsive header
│   └── footer.tsx         # 4-column footer
└── ui/                    # Generic UI components
    ├── index.ts           # Barrel export
    ├── tabs.tsx
    ├── accordion.tsx
    ├── avatar.tsx
    ├── sonner.tsx
    ├── form.tsx
    └── ...               # Other primitives
```

## Related Documentation

- [Codebase Summary](./codebase-summary.md)
- [Code Standards](./code-standards.md)
- [System Architecture](./system-architecture.md)
- [Project Roadmap](./project-roadmap.md)
