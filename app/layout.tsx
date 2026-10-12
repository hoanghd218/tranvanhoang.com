import type { Metadata, Viewport } from "next"
import { Be_Vietnam_Pro, Noto_Serif, Allura } from "next/font/google"
import "./globals.css"
import { getLocale } from "next-intl/server"

const inter = Be_Vietnam_Pro({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

const merriweather = Noto_Serif({
  variable: "--font-merriweather",
  subsets: ["latin", "vietnamese"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
})

const signature = Allura({ variable: "--font-signature", subsets: ["latin"], weight: "400", display: "swap" })

export const metadata: Metadata = {
  title: "Tony Hoang",
  icons: {
    icon: [{ url: "/images/brand/favicon-32.png", sizes: "32x32", type: "image/png" }, { url: "/images/brand/favicon-192.png", sizes: "192x192", type: "image/png" }],
    shortcut: ["/images/brand/favicon-32.png"],
    apple: [{ url: "/images/brand/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getLocale()
  return (
    <html lang={locale} className={`${inter.variable} ${merriweather.variable} ${signature.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  )
}
