"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { Menu, X, Gift } from "lucide-react"

import { cn } from "@/lib/utils"
import { Link, usePathname } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { ThemeToggle } from "@/components/custom/theme-provider"
import { LocaleSwitcher } from "@/components/layout/locale-switcher"

type NavItem = {
  title: string
  href: string
  children?: { title: string; href: string }[]
}

/** Shared motion contract — one curve, fast fades only. */
const MOTION = "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)]"

function useNavItems(): { mainNav: NavItem[]; cta: NavItem } {
  const t = useTranslations("nav")
  return {
    mainNav: [
      { title: t("courses"), href: "/courses" },
      { title: t("blog"), href: "/blog" },
      {
        title: t("learnAi"),
        href: "/learn-ai",
        children: [
          { title: t("aiForBeginners"), href: "/learn-ai/ai-for-beginners" },
          { title: t("aiForMarketing"), href: "/learn-ai/ai-for-marketing" },
          { title: t("aiForWork"), href: "/learn-ai/ai-for-work" },
        ],
      },
      { title: t("resources"), href: "/tai-nguyen" },
      { title: t("about"), href: "/about" },
      { title: t("life"), href: "/life" },
    ],
    cta: { title: t("freeGift"), href: "/courses" },
  }
}

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`)
}

/** Wordmark: display face, .34em tracking, uppercase. Brand name unchanged. */
function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("wordmark text-text-primary", MOTION, className)}>
      Tony Hoang
    </span>
  )
}

function DesktopNav() {
  const pathname = usePathname()
  const { mainNav, cta } = useNavItems()

  return (
    <nav className="hidden lg:flex items-center gap-6">
      {mainNav.map((item) => {
        const active = isActivePath(pathname, item.href)
        return (
          <Link
            key={item.href}
            href={item.href as "/about"}
            aria-current={active ? "page" : undefined}
            className={cn(
              "relative py-1 text-sm font-medium hover:text-text-primary",
              MOTION,
              active ? "text-text-primary" : "text-text-secondary"
            )}
          >
            {item.title}
            {/* Active state is a purple hairline underline — never a filled pill. */}
            {active && (
              <span
                aria-hidden="true"
                className="absolute inset-x-0 -bottom-0.5 h-px bg-rocket"
              />
            )}
          </Link>
        )
      })}

      <span aria-hidden="true" className="h-5 w-px bg-hairline" />

      <LocaleSwitcher />
      <ThemeToggle />

      {/* The single primary action in the header. Marketing CTA = pill radius. */}
      <Link
        href={cta.href as "/qua"}
        className={cn(
          "inline-flex h-11 items-center justify-center gap-2 whitespace-nowrap px-[var(--space-5)]",
          "rounded-[var(--radius-pill)] bg-rocket text-stone text-sm font-medium",
          "transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)]",
          "hover:bg-rocket-hover hover:shadow-glow-sm",
          "active:scale-[var(--press-scale)] active:bg-rocket-press"
        )}
      >
        <span className="hidden sm:inline">{cta.title}</span>
        <Gift className="w-4 h-4 sm:hidden" strokeWidth={1.75} />
      </Link>
    </nav>
  )
}

function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)
  const { mainNav, cta } = useNavItems()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          className={cn("text-text-secondary hover:bg-surface-overlay hover:text-text-primary", MOTION)}
        >
          <Menu className="h-5 w-5" strokeWidth={1.75} />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      {/* Opaque panel — blur is reserved for the sticky header, tab bar and dialog scrim. */}
      <SheetContent
        side="right"
        showCloseButton={false}
        className="w-[300px] sm:w-[400px] bg-surface-raised border-hairline px-6"
      >
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <div className="flex flex-col gap-6 py-4 h-full">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <Wordmark className="text-base" />
            </Link>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Close menu"
                className={cn("text-text-secondary hover:bg-surface-overlay hover:text-text-primary", MOTION)}
              >
                <X className="h-5 w-5" strokeWidth={1.75} />
              </Button>
            </SheetTrigger>
          </div>

          <nav className="flex flex-col gap-4">
            {mainNav.map((item) => {
              const active = isActivePath(pathname, item.href)
              return (
                <div key={item.href} className="flex flex-col gap-2">
                  <Link
                    href={item.href as "/about"}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "text-base font-medium hover:text-text-primary",
                      MOTION,
                      active ? "text-text-accent" : "text-text-primary"
                    )}
                    onClick={() => setOpen(false)}
                  >
                    {item.title}
                  </Link>
                  {item.children && (
                    <div className="ml-1 flex flex-col gap-2 border-l border-hairline pl-4">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href as "/learn-ai/ai-for-beginners"}
                          className={cn("text-sm text-text-secondary hover:text-text-primary", MOTION)}
                          onClick={() => setOpen(false)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          <div className="mt-auto border-t border-hairline pt-4">
            <Link
              href={cta.href as "/qua"}
              onClick={() => setOpen(false)}
              className={cn(
                "inline-flex h-11 w-full items-center justify-center px-[var(--space-5)]",
                "rounded-[var(--radius-pill)] bg-rocket text-stone text-sm font-medium",
                "transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)]",
                "hover:bg-rocket-hover hover:shadow-glow-sm",
                "active:scale-[var(--press-scale)] active:bg-rocket-press"
              )}
            >
              {cta.title}
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    // The sticky header is one of only three surfaces allowed to blur.
    // .rk-glass ships a 4-side hairline; the bar keeps only the bottom one.
    <header
      className={cn(
        "sticky top-0 z-50 w-full rk-glass border-x-0 border-t-0 border-b border-hairline",
        "transition-shadow duration-[var(--duration-base)] ease-[var(--ease-trajectory)]",
        isScrolled && "shadow-md"
      )}
    >
      <div className="container-custom h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Wordmark className="text-sm sm:text-base hover:text-text-accent" />
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  )
}
