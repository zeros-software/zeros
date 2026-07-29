import type { Locale } from "@/lib/translations"

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://zeros.com.ar"
).replace(/\/$/, "")

export const siteConfig = {
  name: "Zeros",
  legalName: "Zeros Software",
  email: "hello@zeros.com.ar",
  location: "Buenos Aires, Argentina",
  locale: "es_AR",
  defaultPath: "/es",
} as const

const seoByLocale = {
  es: {
    title: "Software factory en Buenos Aires | Desarrollo web, mobile e IA",
    description:
      "Zeros es una software factory en Buenos Aires. Diseñamos y desarrollamos productos digitales a medida: web apps, apps mobile, IA y automatización para empresas que quieren escalar.",
    keywords: [
      "software factory Buenos Aires",
      "desarrollo de software Argentina",
      "desarrollo web a medida",
      "desarrollo de aplicaciones mobile",
      "automatización con IA",
      "automatización de WhatsApp",
      "partner tecnológico para startups",
    ],
    ogLocale: "es_AR",
  },
  en: {
    title: "Software development company in Buenos Aires | Web, mobile & AI",
    description:
      "Zeros is a software development company in Buenos Aires. We design and build custom web apps, mobile products, AI systems and automation for teams ready to scale.",
    keywords: [
      "software development company Buenos Aires",
      "software factory Argentina",
      "custom web development",
      "mobile app development Argentina",
      "AI automation agency",
      "technology partner for startups",
    ],
    ogLocale: "en_US",
  },
} satisfies Record<Locale, {
  title: string
  description: string
  keywords: string[]
  ogLocale: string
}>

export function getLocaleSeo(locale: Locale) {
  return seoByLocale[locale]
}

export function getLocaleUrl(locale: Locale, pathname = "") {
  return `${SITE_URL}/${locale}${pathname}`
}

export function getLanguageAlternates(pathname = "") {
  return {
    es: getLocaleUrl("es", pathname),
    en: getLocaleUrl("en", pathname),
    "x-default": getLocaleUrl("es", pathname),
  }
}
