import type { Metadata, Viewport } from "next"
import { Inter, Merriweather } from "next/font/google"
import { NextIntlClientProvider } from "next-intl"
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server"
import { notFound } from "next/navigation"
import { hasLocale } from "next-intl"

import "../globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { OrganizationSchema } from "@/components/seo/organization-schema"
import { WebsiteSchema } from "@/components/seo/website-schema"
import { EmailCapturePopupClient } from "@/components/email-capture/email-capture-popup-client"
import { Providers } from "@/components/providers"
import { routing } from "@/i18n/routing"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
})

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
      siteName: "Tony Hoang AI Educator",
      images: [
        {
          url: "https://tranvanhoang.com/og-image.png",
          width: 1200,
          height: 630,
          alt: "Tony Hoang - AI Educator",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t("ogTitle"),
      description: t("twitterDescription"),
    },
    alternates: {
      canonical: "https://tranvanhoang.com",
    },
  }
}

export const viewport: Viewport = {
  themeColor: "#D97757",
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
    <html lang={locale} className={`${inter.variable} ${merriweather.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <OrganizationSchema />
            <WebsiteSchema />

            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
            >
              {t("skipToContent")}
            </a>

            <Header />

            <main id="main-content" className="flex-1">
              {children}
            </main>

            <Footer />

            <EmailCapturePopupClient />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
