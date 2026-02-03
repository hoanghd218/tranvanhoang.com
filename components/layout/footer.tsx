"use client"

import * as React from "react"
import Link from "next/link"
import { Mail, Facebook, Linkedin, Youtube } from "lucide-react"

import { footerNavItems } from "@/lib/navigation"
import { GradientText } from "@/components/custom/gradient-text"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Email: Mail,
  Facebook: Facebook,
  LinkedIn: Linkedin,
  YouTube: Youtube,
}

function FooterColumn({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-semibold text-foreground">{title}</h3>
      {children}
    </div>
  )
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:")

  return (
    <Link
      href={href}
      className="text-sm text-muted-foreground hover:text-coral transition-colors"
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  )
}

function NewsletterForm() {
  const [email, setEmail] = React.useState("")
  const [status, setStatus] = React.useState<"idle" | "loading" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    // TODO: Implement newsletter signup (Phase 6)
    setTimeout(() => {
      setStatus("success")
      setEmail("")
    }, 1000)
  }

  if (status === "success") {
    return (
      <div className="text-sm text-green-500">
        Cảm ơn bạn! Đã đăng ký thành công.
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <Input
        type="email"
        placeholder="Nhập email của bạn"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-muted/50"
        disabled={status === "loading"}
        required
      />
      <Button type="submit" size="sm" disabled={status === "loading"}>
        {status === "loading" ? "Đang gửi..." : "Đăng ký"}
      </Button>
    </form>
  )
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <GradientText className="text-2xl font-bold">Hoàng</GradientText>
            </Link>
            <p className="text-sm text-muted-foreground">
              Dạy AI cho người mới bắt đầu. Không cần code. Không áp lực kỹ thuật.
            </p>
          </div>

          {/* Quick Links */}
          <FooterColumn title="Liên kết nhanh">
            {footerNavItems.quickLinks.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.title}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Resources */}
          <FooterColumn title="Tài nguyên">
            {footerNavItems.resources.map((link) => (
              <FooterLink key={link.href} href={link.href}>
                {link.title}
              </FooterLink>
            ))}
          </FooterColumn>

          {/* Newsletter */}
          <FooterColumn title="Nhận bài viết mới">
            <p className="text-sm text-muted-foreground mb-2">
              Đăng ký nhận bài viết mới qua email.
            </p>
            <NewsletterForm />
          </FooterColumn>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Hoàng. Tất cả các quyền được bảo lưu.
          </p>

          <div className="flex items-center gap-3">
            {footerNavItems.connect.map((link) => {
              const Icon = socialIcons[link.title]
              return (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-2 rounded-full bg-muted/50 text-muted-foreground hover:text-coral hover:bg-muted transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.title}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}
