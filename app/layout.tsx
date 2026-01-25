import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "sonner"

import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"

// Inter font with Vietnamese support
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: {
    default: "Hoàng - AI Educator | Dạy AI cho người mới bắt đầu",
    template: "%s | Hoàng",
  },
  description: "Hoàng chia sẻ cách dùng AI sao cho người chưa biết gì cũng làm được. Không cần code. Không áp lực kỹ thuật.",
  keywords: ["AI", "artificial intelligence", "học AI", "AI cho người mới", "marketing AI", "Vietnamese AI education"],
  authors: [{ name: "Hoàng" }],
  robots: "index, follow",
  openGraph: {
    title: "Hoàng - AI Educator",
    description: "Dạy AI cho người mới. Đơn giản, dễ hiểu, thực tế.",
    locale: "vi_VN",
    type: "website",
    siteName: "Hoàng AI Educator",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoàng - AI Educator",
    description: "Dạy AI cho người mới bắt đầu",
  },
  alternates: {
    canonical: "https://tranvanhoang.com",
  },
}

export const viewport: Viewport = {
  themeColor: "#0E0E0E",
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
    <html lang="vi" className={inter.variable}>
      <body className="antialiased min-h-screen flex flex-col">
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

        {/* Toast notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            className: "bg-card text-card-foreground border-border",
          }}
        />
      </body>
    </html>
  )
}
