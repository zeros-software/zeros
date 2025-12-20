import type React from "react"
import type { Metadata } from "next"
import { Unbounded } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { I18nProvider } from "@/components/i18n-provider"
import {
  type Locale,
  locales,
  isValidLocale,
  defaultLocale,
} from "@/lib/translations"
import "../globals.css"

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata: Metadata = {
  title: "Zeros - Software Factory in Buenos Aires",
  description:
    "Zeros is a software factory based in Buenos Aires, Argentina. We provide web development, mobile development, branding, and blockchain solutions.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
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
    <html lang={locale}>
      <body className={`${unbounded.variable} font-sans antialiased`}>
        <I18nProvider locale={locale}>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
