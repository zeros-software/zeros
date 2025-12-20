import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { locales, defaultLocale, isValidLocale } from "@/lib/translations"

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the pathname already has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) {
    return NextResponse.next()
  }

  // Skip for static files and API routes
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".") // Static files like .svg, .png, etc.
  ) {
    return NextResponse.next()
  }

  // Detect locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language")
  let detectedLocale = defaultLocale

  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim().substring(0, 2))
      .find((lang) => isValidLocale(lang))

    if (preferredLocale && isValidLocale(preferredLocale)) {
      detectedLocale = preferredLocale
    }
  }

  // Redirect to the locale-prefixed path
  const url = request.nextUrl.clone()
  url.pathname = `/${detectedLocale}${pathname}`

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
}
