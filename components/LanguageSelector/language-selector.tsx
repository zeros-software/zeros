"use client"

import { usePathname } from "next/navigation"
import { useTranslations } from "@/components/i18n-provider"
import { type Locale, locales } from "@/lib/translations"
import { Globe, Check } from "lucide-react"
import { useState, useRef, useEffect } from "react"

export function LanguageSelector() {
  const { locale, t } = useTranslations()
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const switchLocale = (newLocale: Locale) => {
    const segments = pathname.split("/")
    segments[1] = newLocale
    window.location.href = segments.join("/")
  }

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [])

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        aria-label={t.language.label}
      >
        <Globe className="size-4" />
        <span className="uppercase">{locale}</span>
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1 min-w-[8rem] rounded-md border border-border bg-popover p-1 shadow-md">
          {locales.map((loc) => (
            <button
              key={loc}
              onClick={() => switchLocale(loc)}
              className="flex w-full items-center gap-2 rounded-sm px-2 py-1.5 text-sm hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              <span>{t.language[loc]}</span>
              {locale === loc && <Check className="size-4 ml-auto text-accent" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
