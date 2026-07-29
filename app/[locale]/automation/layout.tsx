import type React from "react"
import type { Metadata } from "next"
import {
  type Locale,
  defaultLocale,
  isValidLocale,
} from "@/lib/translations"
import {
  SITE_URL,
  getLanguageAlternates,
  getLocaleUrl,
} from "@/lib/site-config"

interface AutomationLayoutProps {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({
  params,
}: AutomationLayoutProps): Promise<Metadata> {
  const { locale: localeParam } = await params
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale
  const isSpanish = locale === "es"
  const title = isSpanish
    ? "Automatización con IA y WhatsApp para negocios"
    : "AI and WhatsApp automation for growing businesses"
  const description = isSpanish
    ? "Automatizá la atención de tu restaurante, comercio o empresa con un asistente de IA conectado a WhatsApp. Respondé consultas, tomá pedidos y convertí más oportunidades."
    : "Automate customer support for your restaurant, retail business or service company with an AI assistant connected to WhatsApp. Answer questions, capture orders and convert more leads."
  const keywords = isSpanish
    ? [
        "automatización con IA",
        "automatización de WhatsApp",
        "chatbot para restaurantes",
        "asistente virtual para negocios",
        "WhatsApp para ventas",
      ]
    : [
        "AI automation agency",
        "WhatsApp automation for business",
        "restaurant chatbot",
        "virtual assistant for business",
        "WhatsApp sales automation",
      ]

  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    keywords,
    alternates: {
      canonical: getLocaleUrl(locale, "/automation"),
      languages: getLanguageAlternates("/automation"),
    },
    openGraph: {
      type: "website",
      url: getLocaleUrl(locale, "/automation"),
      title,
      description,
      siteName: "Zeros",
      locale: isSpanish ? "es_AR" : "en_US",
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/opengraph-image`],
    },
  }
}

export default async function AutomationLayout({
  children,
  params,
}: AutomationLayoutProps) {
  const { locale: localeParam } = await params
  const locale: Locale = isValidLocale(localeParam) ? localeParam : defaultLocale
  const isSpanish = locale === "es"
  const serviceUrl = getLocaleUrl(locale, "/automation")

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${SITE_URL}/#whatsapp-automation`,
            name: isSpanish
              ? "Automatización con IA y WhatsApp"
              : "AI and WhatsApp automation",
            description: isSpanish
              ? "Asistentes de IA conectados a WhatsApp para atención, ventas y operaciones."
              : "AI assistants connected to WhatsApp for customer support, sales and operations.",
            provider: {
              "@type": "Organization",
              name: "Zeros",
              url: SITE_URL,
            },
            areaServed: ["Argentina", "Mexico", "United States"],
            serviceType: isSpanish
              ? "Automatización de atención al cliente con IA"
              : "AI customer service automation",
            url: serviceUrl,
          }),
        }}
      />
      {children}
    </>
  )
}
