import createMiddleware from "next-intl/middleware"
import { NextRequest, NextResponse } from "next/server"
import { routing } from "./i18n/routing"

const handleI18nRouting = createMiddleware(routing)

export default function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const defaultPrefix = `/${routing.defaultLocale}`
  const isDefaultLocalePath = pathname === defaultPrefix || pathname.startsWith(`${defaultPrefix}/`)
  const hasLocalePrefix = routing.locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  )

  if (isDefaultLocalePath) {
    const url = request.nextUrl.clone()
    url.pathname = pathname.slice(defaultPrefix.length) || "/"
    return NextResponse.redirect(url)
  }

  // Next.js 16 can re-run proxy after next-intl's default-locale rewrite and
  // merge its canonical redirect, producing a self-redirect. Rewrite the
  // unprefixed Vietnamese route directly and provide the locale explicitly.
  if (!hasLocalePrefix) {
    const url = request.nextUrl.clone()
    url.pathname = `/${routing.defaultLocale}${pathname === "/" ? "" : pathname}`
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set("x-next-intl-locale", routing.defaultLocale)
    return NextResponse.rewrite(url, { request: { headers: requestHeaders } })
  }

  return handleI18nRouting(request)
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
}
