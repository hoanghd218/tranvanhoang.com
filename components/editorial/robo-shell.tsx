import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { localizedPath, editorialContent } from "@/lib/editorial-content"
import { homeContent } from "@/lib/home-content"
import { RoboMotion } from "./robo-motion"
import { RoboNavigation } from "./robo-navigation"
import { RoboLanguageSwitch } from "./robo-language-switch"

export function RoboHeader({ locale, home = false }: { locale: string; home?: boolean }) {
  const copy = homeContent[locale === "en" ? "en" : "vi"]
  const path = (href: string) => localizedPath(href, locale)
  return <header className="rl-header">
      <Link className="rl-brand" href={path("/")} aria-label="Tony Hoang — Home"><Image src="/images/brand/tony-hoang-mark.png" width={32} height={32} alt="" className="rl-brand-mark" />Tony Hoang<span className="rl-brand-dot">.</span></Link>
      <RoboNavigation locale={locale} home={home} />
      <RoboLanguageSwitch locale={locale} />
      <a className="rl-button rl-header-contact" href={editorialContent.contactHref}>{copy.contact}<ArrowUpRight size={16} aria-hidden="true" /></a>
    </header>
}

export function RoboFooter({ locale }: { locale: string }) {
  const copy = homeContent[locale === "en" ? "en" : "vi"]
  const path = (href: string) => localizedPath(href, locale)
  return <footer className="rl-footer rl-container">
      <div className="rl-footer-glow" aria-hidden="true" />
      <Image src="/images/brand/tony-hoang-mark.png" width={64} height={64} alt="" className="rl-footer-star" />
      <h2>{copy.cta}<br /><span>{copy.ctaAccent}</span></h2><p>{copy.ctaText}</p>
      <a className="rl-button" href={editorialContent.contactHref}>{copy.ctaLink}<ArrowUpRight size={18} aria-hidden="true" /></a>
      <div className="rl-footer-bottom"><Link className="rl-brand" href={path("/")}>Tony Hoang.</Link><nav aria-label="Footer"><Link href={path("/about")}>{copy.about}</Link><Link href={path("/blog")}>{copy.blog}</Link>{editorialContent.socialLinks.map(item => <a key={item.label} href={item.href}>{item.label}</a>)}<Link href={locale === "en" ? "/vi" : "/"}>{locale === "en" ? "Tiếng Việt" : "English"}</Link></nav><small>© {new Date().getFullYear()} Tony Hoang. {copy.copyright}</small></div>
    </footer>
}

export function RoboShell({ locale, children }: { locale: string; children: React.ReactNode }) {
  return <div className="robolabs-home rl-product-site"><RoboHeader locale={locale} />{children}<RoboFooter locale={locale} /><RoboMotion locale={locale} /></div>
}
