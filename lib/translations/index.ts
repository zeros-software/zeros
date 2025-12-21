import { en } from "./en"
import { es } from "./es"

export type Locale = "en" | "es"
export type Translations = typeof en

export const locales: Locale[] = ["en", "es"]
export const defaultLocale: Locale = "en"

export const translations: Record<Locale, Translations> = {
  en,
  es,
}

export function getTranslations(locale: Locale): Translations {
  return translations[locale] ?? translations[defaultLocale]
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale)
}
