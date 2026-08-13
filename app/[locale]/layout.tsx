import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Be_Vietnam_Pro, Space_Grotesk } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { hasLocale } from "next-intl"

import "../globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { OrganizationSchema } from "@/components/seo/organization-schema"
import { WebsiteSchema } from "@/components/seo/website-schema"
import { PersonSchema } from "@/components/seo/person-schema"
import { Providers } from "@/components/providers"
import { routing } from "@/i18n/routing"

// Be Vietnam Pro is purpose-built for Vietnamese body/UI copy. Space Grotesk
// stays as the display face so the brand keeps its geometric character.
const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  preload: false,
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: "variable",
})

// Applies the saved scope before first paint so the void-black ground never
// flashes stone (and vice versa for readers who chose the light scope).
const themeInitScript = `(function(){try{var t=localStorage.getItem("theme");if(t==="light"){document.documentElement.classList.add("light")}}catch(e){}})()`

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: "metadata" })

  return {
    title: {
      default: t("siteTitle"),
      template: "%s | Tony Hoang",
    },
    description: t("siteDescription"),
    keywords: ["AI", "artificial intelligence", "học AI", "AI cho người mới", "marketing AI", "Vietnamese AI education"],
    authors: [{ name: "Tony Hoang" }],
    robots: "index, follow",
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      locale: locale === "vi" ? "vi_VN" : "en_US",
      type: "website",
      siteName: "Tony Hoang",
      images: [
        {
          url: "https://tranvanhoang.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "Tony Hoang",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("twitterDescription"),
    },
    alternates: {
      canonical: locale === "vi" ? "https://tranvanhoang.com" : `https://tranvanhoang.com/${locale}`,
      languages: {
        vi: "https://tranvanhoang.com",
        en: "https://tranvanhoang.com/en",
        "x-default": "https://tranvanhoang.com",
      },
    },
  }
}

export const viewport: Viewport = {
  // Void black is the ground, not a theme.
  themeColor: "#0A0A0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: string }>
}>) {
  const { locale } = await params
  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }
  setRequestLocale(locale)

  const messages = await getMessages()
  const t = await getTranslations({ locale, namespace: "common" })

  return (
    <html
      lang={locale}
      className={`${beVietnamPro.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-96036PT8ZC"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-96036PT8ZC');
          `}
        </Script>
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        {/* First child of <body> on purpose: React reorders raw <script> tags
            placed in <head>, which desyncs the JSON-LD blocks on hydration. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <OrganizationSchema />
            <WebsiteSchema />
            <PersonSchema />

            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:rounded-[var(--radius-sm)] focus:bg-surface-raised focus:text-text-primary"
            >
              {t("skipToContent")}
            </a>

            <Header />

            <main id="main-content" className="flex-1">
              {children}
            </main>

            <Footer />

          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
