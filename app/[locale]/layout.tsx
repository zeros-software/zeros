import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { I18nProvider } from "@/components/i18n-provider"
import {
  type Locale,
  locales,
  isValidLocale,
  defaultLocale,
} from "@/lib/translations"
import {
  SITE_URL,
  getLanguageAlternates,
  getLocaleSeo,
  getLocaleUrl,
} from "@/lib/site-config"
import "../globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
})

const siteName = "Zeros"

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale: localeParam } = await params
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale
  const seo = getLocaleSeo(locale)

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: seo.title,
      template: `%s | ${siteName}`,
    },
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: getLocaleUrl(locale),
      languages: getLanguageAlternates(),
    },
    openGraph: {
      type: "website",
      url: getLocaleUrl(locale),
      siteName: siteName,
      locale: seo.ogLocale,
      title: seo.title,
      description: seo.description,
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: "Zeros — software factory en Buenos Aires",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [`${SITE_URL}/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
    },
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark",
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0a0b0d" },
    { media: "(prefers-color-scheme: light)", color: "#f5f7f5" },
  ],
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

interface LocaleLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <I18nProvider locale={locale}>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
