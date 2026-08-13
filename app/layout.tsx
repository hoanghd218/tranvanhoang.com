import type { Metadata, Viewport } from "next"

/**
 * Pass-through root layout.
 *
 * `app/[locale]/layout.tsx` owns the real document — <html>, <body>, fonts,
 * providers and globals.css. A root layout that rendered its own <html>/<body>
 * would nest a second document inside that one, which React 19 reports as a
 * hydration error and which breaks node removal on client navigation.
 * This is the documented next-intl layout shape for a `[locale]` segment.
 */

export const metadata: Metadata = {
  title: "Tony Hoang - AI thực chiến cho công việc và kinh doanh",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/icon.svg"],
    apple: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
}

export const viewport: Viewport = {
  // Void black is the ground, not a theme.
  themeColor: "#0A0A0D",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return children
}
