"use client"

import * as React from "react"
import { useTranslations } from "next-intl"
import { Mail, Facebook, Linkedin, Youtube } from "lucide-react"

import { Link } from "@/i18n/navigation"
import { GradientText } from "@/components/custom/gradient-text"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const socialLinks = [
  { key: "Email", icon: Mail, href: "mailto:hoang@example.com" },
  { key: "Facebook", icon: Facebook, href: "https://www.facebook.com/hoanghd218/" },
  { key: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/hoanghd218/" },
  { key: "YouTube", icon: Youtube, href: "https://www.youtube.com/@tony-hoang-ai-automation" },
]

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-foreground">{title}</h3>
      {children}
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:")

  if (isExternal) {
    return (
      <a
        href={href}
        className="text-sm text-muted-foreground hover:text-coral transition-colors"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    )
  }

  return (
    <Link
      href={href as "/about"}
      className="text-sm text-muted-foreground hover:text-coral transition-colors"
    >
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
    return (
      <div className="text-sm text-green-500">
        {t("subscribeSuccess")}
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Input
        type="email"
        placeholder={t("emailPlaceholder")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-muted/50"
        disabled={status === "loading"}
        required
      />
      <Button type="submit" size="sm" disabled={status === "loading"}>
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
    <footer className="bg-card border-t mt-auto">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <GradientText className="text-2xl font-bold">Tony Hoang</GradientText>
            </Link>
            <p className="text-sm text-muted-foreground">
              {t("tagline")}
            </p>
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
            <p className="text-sm text-muted-foreground mb-2">
              {t("newsletterDesc")}
            </p>
            <NewsletterForm />
          </FooterColumn>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t("copyright", { year: currentYear })}
          </p>

          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:text-coral hover:bg-muted transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.key}
              >
                <link.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
