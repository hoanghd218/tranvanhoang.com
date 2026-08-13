"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { Mail, Facebook, Linkedin, Youtube } from "lucide-react"

import { cn } from "@/lib/utils"
import { Link } from "@/i18n/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

/** Shared motion contract — one curve, fast fades only. */
const MOTION = "transition-colors duration-[var(--duration-fast)] ease-[var(--ease-trajectory)]"
const LINK = cn("text-sm text-text-secondary hover:text-text-accent", MOTION)

const socialLinks = [
  { key: "Email", icon: Mail, href: "mailto:hoang@example.com" },
  { key: "Facebook", icon: Facebook, href: "https://www.facebook.com/hoanghd218/" },
  { key: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/hoanghd218/" },
  { key: "YouTube", icon: Youtube, href: "https://www.youtube.com/@tony-hoang-ai-automation" },
]

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      {/* Eyebrow label — one of the few places caps is allowed.
          Tracking drops to .14em under lang="vi" via the token. */}
      <h3 className="eyebrow text-text-primary">{title}</h3>
      {children}
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:")

  if (isExternal) {
    return (
      <a href={href} className={LINK} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  return (
    <Link href={href as "/about"} className={LINK}>
      {children}
    </Link>
  )
}

function NewsletterForm() {
  const t = useTranslations("footer")
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    // TODO: Implement newsletter signup
    setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 1000)
  }

  if (status === "success") {
    return <div className="text-sm text-status-positive">{t("subscribeSuccess")}</div>
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Input
        type="email"
        placeholder={t("emailPlaceholder")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="h-11 rounded-[var(--radius-sm)] border-hairline bg-surface-inset text-text-primary shadow-none placeholder:text-text-tertiary focus-visible:border-hairline-accent"
        disabled={status === "loading"}
        required
      />
      {/* Secondary action — the one primary button lives in the header. */}
      <Button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "h-11 rounded-[var(--radius-sm)] border border-hairline-strong bg-transparent",
          "text-sm font-medium text-text-primary shadow-none",
          "transition-all duration-[var(--duration-fast)] ease-[var(--ease-trajectory)]",
          "hover:border-hairline-accent hover:bg-surface-overlay",
          "active:scale-[var(--press-scale)]"
        )}
      >
        {status === "loading" ? t("subscribing") : t("subscribe")}
      </Button>
    </form>
  )
}

export function Footer() {
  const t = useTranslations("footer")
  const tNav = useTranslations("nav")
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { title: tNav("about"), href: "/about" },
    { title: tNav("learnAi"), href: "/learn-ai" },
    { title: tNav("courses"), href: "/courses" },
    { title: tNav("blog"), href: "/blog" },
    { title: tNav("resources"), href: "/tai-nguyen" },
  ]

  const resourceLinks = [
    { title: t("freeGift"), href: "/qua" },
    { title: t("life"), href: "/life" },
    { title: "Newsletter", href: "/newsletter" },
    { title: t("contact"), href: "/contact" },
  ]

  return (
    // Flat void black, one top hairline. No purple blocks down here.
    <footer className="mt-auto border-t border-hairline bg-surface">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <span className={cn("wordmark text-base text-text-primary hover:text-text-accent", MOTION)}>
                Tony Hoang
              </span>
            </Link>
            <p className="text-sm text-text-secondary">{t("tagline")}</p>
          </div>

          {/* Quick Links */}
          <FooterColumn title={t("quickLinks")}>
            {quickLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.title}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Resources */}
          <FooterColumn title={t("resources")}>
            {resourceLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.title}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Newsletter */}
          <FooterColumn title={t("newsletter")}>
            <p className="mb-2 text-sm text-text-secondary">{t("newsletterDesc")}</p>
            <NewsletterForm />
          </FooterColumn>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-hairline pt-6 md:flex-row">
          <p className="text-sm text-text-tertiary">{t("copyright", { year: currentYear })}</p>

          <div className="flex items-center gap-2">
            {socialLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className={cn(
                  "inline-flex items-center justify-center p-3",
                  "rounded-[var(--radius-pill)] border border-transparent text-text-secondary",
                  "hover:border-hairline hover:bg-surface-overlay hover:text-text-accent",
                  MOTION
                )}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.key}
              >
                <link.icon className="h-5 w-5" strokeWidth={1.75} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
