import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

export function Signature() { return <span className="signature">Tony Hoang</span> }
export function ThemeLink({ href, children, variant = "text" }: { href?: string; children: ReactNode; variant?: "primary" | "secondary" | "text" }) {
  const className = `theme-link theme-link--${variant}`
  const content = <>{children}<ArrowUpRight size={17} aria-hidden="true" /></>
  if (!href) return <button className={className} disabled>{content}</button>
  if (href.startsWith("/")) return <Link className={className} href={href}>{content}</Link>
  return <a className={className} href={href}>{content}</a>
}
export function SectionHeading({ children, label }: { children: ReactNode; label?: string }) {
  return <div className="section-heading"><div>{label && <p className="eyebrow">{label}</p>}<h2>{children}</h2></div></div>
}
export function Artwork({ variant = "orbital", className = "" }: { variant?: string; className?: string }) {
  return <div className={`editorial-art editorial-art--${variant} ${className}`} role="img" aria-label="Điêu khắc kính emerald và quỹ đạo vàng trong kiến trúc ivory" />
}
export function Divider() { return <hr className="editorial-divider" /> }
export function Tag({ children }: { children: ReactNode }) { return <span className="editorial-tag">{children}</span> }
