"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { Menu, X, Gift } from "lucide-react"

import { cn } from "@/lib/utils"
import { Link, usePathname } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { GradientText } from "@/components/custom/gradient-text"
import { ThemeToggle } from "@/components/custom/theme-provider"
import { LocaleSwitcher } from "@/components/layout/locale-switcher"

type NavItem = {
  title: string
  href: string
  children?: { title: string; href: string }[]
}

function useNavItems(): { mainNav: NavItem[]; cta: NavItem } {
  const t = useTranslations("nav")
  return {
    mainNav: [
      { title: t("about"), href: "/about" },
      {
        title: t("learnAi"),
        href: "/learn-ai",
        children: [
          { title: t("aiForBeginners"), href: "/learn-ai/ai-for-beginners" },
          { title: t("aiForMarketing"), href: "/learn-ai/ai-for-marketing" },
          { title: t("aiForWork"), href: "/learn-ai/ai-for-work" },
        ],
      },
      { title: t("blog"), href: "/blog" },
      { title: t("resources"), href: "/tai-nguyen" },
      { title: t("life"), href: "/life" },
    ],
    cta: { title: t("freeGift"), href: "/qua" },
  }
}

function DesktopNav() {
  const pathname = usePathname()
  const { mainNav, cta } = useNavItems()

  return (
    <nav className="hidden md:flex items-center gap-6">
      {mainNav.map((item) => (
        <Link
          key={item.href}
          href={item.href as "/about"}
          className={cn(
            "text-sm font-medium transition-colors hover:text-coral",
            pathname === item.href ? "text-coral" : "text-muted-foreground"
          )}
        >
          {item.title}
        </Link>
      ))}
      <LocaleSwitcher />
      <ThemeToggle />
      <Link
        href={cta.href as "/qua"}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-10 px-4 bg-coral text-white hover:bg-coral-dark active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="hidden sm:inline">{cta.title}</span>
        <Gift className="w-4 h-4 sm:hidden" />
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
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
              <GradientText className="text-xl font-bold">Tony Hoang</GradientText>
            </Link>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Close menu">
                <X className="h-5 w-5" />
              </Button>
            </SheetTrigger>
          </div>

          <nav className="flex flex-col gap-4">
            {mainNav.map((item) => (
              <div key={item.href} className="flex flex-col gap-2">
                <Link
                  href={item.href as "/about"}
                  className={cn(
                    "text-base font-medium",
                    pathname === item.href ? "text-coral" : "text-foreground"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.title}
                </Link>
                {item.children && (
                  <div className="pl-4 flex flex-col gap-2 border-l-2 border-border ml-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href as "/learn-ai/ai-for-beginners"}
                        className="text-sm text-muted-foreground hover:text-coral"
                        onClick={() => setOpen(false)}
                      >
                        {child.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="mt-auto pt-4 border-t">
            <Link
              href={cta.href as "/qua"}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold transition-all rounded-md bg-coral text-white hover:bg-coral-dark active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
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
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container-custom h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <GradientText className="text-xl font-bold">Tony Hoang</GradientText>
        </Link>
        <DesktopNav />
        <MobileNav />
      </div>
    </header>
  )
}
