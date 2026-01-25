"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { cn } from "@/lib/utils"
import { mainNavItems, ctaItem, type NavItem } from "@/lib/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { GradientText } from "@/components/custom/gradient-text"

const NavLink = React.memo(function NavLink({ item, isActive }: { item: NavItem; isActive: boolean }) {
  if (item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          "text-sm font-medium transition-colors hover:text-coral",
          isActive ? "text-coral" : "text-muted-foreground"
        )}
      >
        {item.title}
      </Link>
    )
  }

  return (
    <Link
      href={item.href}
      className={cn(
        "text-sm font-medium transition-colors hover:text-coral",
        isActive ? "text-coral" : "text-muted-foreground"
      )}
    >
      {item.title}
    </Link>
  )
})

function DesktopNav() {
  const pathname = usePathname()

  return (
    <nav className="hidden md:flex items-center gap-6">
      {mainNavItems.map((item) => (
        <NavLink key={item.href} item={item} isActive={pathname === item.href} />
      ))}
      <Link
        href={ctaItem.href}
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all h-8 px-3 bg-coral text-white hover:bg-coral-dark active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <span className="hidden sm:inline">{ctaItem.title}</span>
        <span className="sm:hidden">🎁</span>
      </Link>
    </nav>
  )
}

function MobileNav() {
  const pathname = usePathname()
  const [open, setOpen] = React.useState(false)

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
              <GradientText className="text-xl font-bold">Hoàng</GradientText>
            </Link>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Close menu">
                <X className="h-5 w-5" />
              </Button>
            </SheetTrigger>
          </div>

          <nav className="flex flex-col gap-4">
            {mainNavItems.map((item) => (
              <div key={item.href} className="flex flex-col gap-2">
                <Link
                  href={item.href}
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
                        href={child.href}
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
              href={ctaItem.href}
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold transition-all rounded-md bg-coral text-white hover:bg-coral-dark active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              {ctaItem.title}
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
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <GradientText className="text-xl font-bold">Hoàng</GradientText>
        </Link>

        {/* Desktop Navigation */}
        <DesktopNav />

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  )
}
