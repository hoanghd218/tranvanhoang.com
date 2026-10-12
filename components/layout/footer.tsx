import Link from "next/link"
import { getLocale } from "next-intl/server"
import { editorialContent, localizedPath } from "@/lib/editorial-content"
import { Signature, ThemeLink, Divider } from "@/components/editorial/primitives"

export async function Footer() {
  const locale = await getLocale()
  const content = editorialContent.footer
  return <footer className="editorial-footer" id="contact">
    <div className="editorial-container">
      <div className="footer-top">
        <div><p className="eyebrow">{content.eyebrow}</p><h2>{content.title}</h2><p>{content.description}</p></div>
        <ThemeLink href={editorialContent.contactHref} variant="primary">{content.cta}</ThemeLink>
      </div>
      <Divider />
      <div className="footer-links"><nav aria-label="Liên kết cuối trang">{editorialContent.navigation.map(item => <Link key={item.href} href={localizedPath(item.href, locale)}>{item.label}</Link>)}</nav><nav aria-label="Mạng xã hội">{editorialContent.socialLinks.map(item => <a key={item.href} href={item.href}>{item.label} ↗</a>)}</nav></div>
      <nav aria-label="KDSPY AI support" className="footer-links"><Link href={localizedPath("/privacy/kdspy-ai", locale)}>KDSPY AI Privacy Policy</Link><Link href={localizedPath("/support/kdspy-ai", locale)}>KDSPY AI Support</Link></nav>
      <div className="footer-bottom"><Link href={localizedPath("/", locale)} aria-label="Tony Hoang — Trang chủ"><Signature /></Link><span className="eyebrow">© {new Date().getFullYear()} Tony Hoang</span><a className="back-top" href="#main-content">Về đầu trang ↑</a></div>
    </div>
  </footer>
}
