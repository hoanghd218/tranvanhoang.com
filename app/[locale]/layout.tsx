import type { Metadata, Viewport } from "next"
import Script from "next/script"
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
    keywords: ["Tony Hoang", "kiến trúc sư hệ thống", "systems architect", "thiết kế hệ thống", "AI agents", "công nghệ"],
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
          url: "https://tranvanhoang.com/images/editorial/hero-bridge.webp",
          width: 1536,
          height: 1024,
          alt: "Tony Hoang — Kiến trúc sư thiết kế hệ thống",
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
  themeColor: "#F5F3E9",
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
    <>
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

        <NextIntlClientProvider messages={messages}>
          <Providers>
            <OrganizationSchema />
            <WebsiteSchema />
            <PersonSchema />

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

          </Providers>
        </NextIntlClientProvider>

    </>
  )
}
