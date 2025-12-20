"use client"

import { createContext, useContext, type ReactNode } from "react"
import {
  type Locale,
  type Translations,
  getTranslations,
  defaultLocale,
} from "@/lib/translations"

interface I18nContextType {
  locale: Locale
  t: Translations
}

const I18nContext = createContext<I18nContextType>({
  locale: defaultLocale,
  t: getTranslations(defaultLocale),
})

interface I18nProviderProps {
  children: ReactNode
  locale: Locale
}

export function I18nProvider({ children, locale }: I18nProviderProps) {
  const t = getTranslations(locale)

  return (
    <I18nContext.Provider value={{ locale, t }}>{children}</I18nContext.Provider>
  )
}

export function useTranslations() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useTranslations must be used within an I18nProvider")
  }
  return context
}
