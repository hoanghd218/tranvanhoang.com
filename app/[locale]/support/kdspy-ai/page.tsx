import type { Metadata } from "next"
import Link from "next/link"
import { setRequestLocale } from "next-intl/server"
import { kdspySupportContact, kdspyLocalizedPath as localizedPath } from "@/lib/kdspy-ai-support"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: "KDSPY AI Support",
    description: "Get help with KDSPY AI sign-in, Amazon book research, account access and privacy requests.",
    alternates: { canonical: `https://tranvanhoang.com${localizedPath("/support/kdspy-ai", locale)}` },
  }
}

export default async function SupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  setRequestLocale(locale)
  return <article lang="en" className="mx-auto w-full max-w-3xl px-6 py-16 space-y-8 leading-relaxed">
    <header className="space-y-4"><p className="eyebrow">Tony Hoang · KDSPY AI</p><h1 className="text-4xl font-semibold">Support</h1><p>Help with Amazon book research, Google sign-in and your Free or Pro account.</p><a className="theme-link theme-link--primary" href={kdspySupportContact}>Email hoanghd218@gmail.com ↗</a></header>
    <section className="space-y-3"><h2 className="text-2xl font-semibold">Before contacting support</h2><ul className="list-disc pl-6 space-y-2"><li>Include your extension version, Chrome version, operating system and the steps that caused the issue.</li><li>For an analysis issue, include the Amazon marketplace and a public book or search URL.</li><li>For account or purchase issues, describe the error and provide an order reference only if requested privately.</li><li>Remove personal information from screenshots. Never send your password, Google token, extension session token or bank credentials.</li></ul></section>
    <section className="space-y-3"><h2 className="text-2xl font-semibold">Google sign-in</h2><p>Sign in with Google before using KDSPY AI. If sign-in fails, update the extension, retry and send support the displayed error text. Do not copy the authentication redirect URL or its token parameters into a message.</p></section>
    <section className="space-y-3"><h2 className="text-2xl font-semibold">Amazon analysis</h2><p>Open an Amazon book search, Best Sellers list or individual book page, then click the extension. If Amazon displays a CAPTCHA, complete it yourself on Amazon and retry. Some pages and formats may not expose all book data.</p><p>Sales and revenue figures are estimates derived from BSR, not verified Amazon sales. Regional prices depend on the marketplace and your Deliver to settings.</p></section>
    <section className="space-y-3"><h2 className="text-2xl font-semibold">Free and Pro access</h2><p>The Free plan includes the first 20 books per analysis. Paid Pro provides deeper results, up to 100 books, and MCP integration. Current prices, duration and account status appear in the extension. Purchases are handled through the external checkout, not the Chrome Web Store.</p><p>Version 1.0.4 is available through December 31, 2026. An updated release will be required after that date.</p></section>
    <section className="space-y-3"><h2 className="text-2xl font-semibold">Privacy and account deletion</h2><p>Use the contact link above to request access, correction or deletion of your KDSPY AI account data. State the type of request; we may ask you to verify account ownership. Uninstalling removes local extension data but does not by itself close the account.</p><p>Read the <Link className="underline" href={localizedPath("/privacy/kdspy-ai", locale)}>KDSPY AI Privacy Policy</Link> for information about account services, local research data and optional integrations.</p></section>
    <nav aria-label="KDSPY AI links" className="flex flex-wrap gap-6"><Link className="underline" href={localizedPath("/privacy/kdspy-ai", locale)}>Privacy Policy</Link><Link className="underline" href={localizedPath("", locale) || "/"}>Tony Hoang website</Link></nav>
  </article>
}
