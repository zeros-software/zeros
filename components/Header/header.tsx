"use client"

import { useEffect, useState } from "react"
import { ZerosLogo } from "@/components/zeros-logo"
import { cn } from "@/lib/utils"
import { useTranslations } from "@/components/i18n-provider"
import { LanguageSelector } from "@/components/LanguageSelector/language-selector"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useQuoteModal } from "@/components/quote-modal-context"

export function Header() {
  const { t } = useTranslations()
  const [scrolled, setScrolled] = useState(false)
  const { setOpen } = useQuoteModal()

  const links = [
    { label: t.nav.services, href: "#servicios" },
    { label: t.nav.work, href: "#experiencia" },
    { label: t.nav.contact, href: "#contacto" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-b border-border bg-background/80 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" aria-label={t.nav.home}>
          <ZerosLogo />
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <LanguageSelector />
          <button
            onClick={() => setOpen(true)}
            className="hidden md:inline-flex h-9 items-center rounded-full bg-foreground px-4 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t.nav.getQuote}
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label={t.nav.openMenu}>
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0">
              <SheetTitle className="sr-only">{t.nav.openMenu}</SheetTitle>
              <div className="p-6">
                <ZerosLogo />
                <div className="mt-6 space-y-4">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="block text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="mt-8 space-y-4">
                  <button
                    onClick={() => setOpen(true)}
                    className="inline-flex h-9 w-full items-center justify-center rounded-full bg-foreground text-sm font-medium text-background"
                  >
                    {t.nav.getQuote}
                  </button>
                  <div className="flex justify-center">
                    <LanguageSelector />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  )
}
