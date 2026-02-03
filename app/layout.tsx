import type { Metadata, Viewport } from "next"
import { Inter, Merriweather } from "next/font/google"

import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { OrganizationSchema } from "@/components/seo/organization-schema"
import { WebsiteSchema } from "@/components/seo/website-schema"
import { EmailCapturePopupClient } from "@/components/email-capture/email-capture-popup-client"
import { Providers } from "@/components/providers"

// Inter font with Vietnamese support
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

// Merriweather for life page headings
const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["300", "400", "700", "900"],
})

export const metadata: Metadata = {
  title: {
    default: "Hoàng - AI Educator | Dạy AI cho ngườii mới bắt đầu",
    template: "%s | Hoàng",
  },
  description: "Hoàng chia sẻ cách dùng AI sao cho ngườii chưa biết gì cũng làm được. Không cần code. Không áp lực kỹ thuật.",
  keywords: ["AI", "artificial intelligence", "học AI", "AI cho ngườii mới", "marketing AI", "Vietnamese AI education"],
  authors: [{ name: "Hoàng" }],
  robots: "index, follow",
  openGraph: {
    title: "Hoàng - AI Educator",
    description: "Dạy AI cho ngườii mới. Đơn giản, dễ hiểu, thực tế.",
    locale: "vi_VN",
    type: "website",
    siteName: "Hoàng AI Educator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoàng - AI Educator",
    description: "Dạy AI cho ngườii mới bắt đầu",
  },
  alternates: {
    canonical: "https://tranvanhoang.com",
  },
}

export const viewport: Viewport = {
  themeColor: "#D97757",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${inter.variable} ${merriweather.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col">
        <Providers>
          {/* JSON-LD Structured Data */}
          <OrganizationSchema />
          <WebsiteSchema />

          {/* Skip to main content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-background focus:text-foreground"
          >
            Skip to main content
          </a>

          <Header />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />

          {/* Email capture popup (client-side only) */}
          <EmailCapturePopupClient />
        </Providers>
      </body>
    </html>
  )
}

