import { en } from "./en"
import { es } from "./es"

export type Locale = "en" | "es"

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? readonly Widen<U>[]
    : T extends object
      ? { -readonly [K in keyof T]: Widen<T[K]> }
      : T

export type Translations = Widen<typeof en>

export const locales: Locale[] = ["en", "es"]
export const defaultLocale: Locale = "es"

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
