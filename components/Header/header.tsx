"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useTranslations } from "@/components/i18n-provider"
import { LanguageSelector } from "@/components/LanguageSelector/language-selector"
import Link from "next/link"

export function Header() {
  const { t, locale } = useTranslations()

  const navItems = [
    { href: "#services", label: t.nav.services },
    { href: "#contact", label: t.nav.contact },
  ]
  const [compact, setCompact] = useState(false)
  const { scrollY } = useScroll()
  const scrollProgress = useTransform(scrollY, [0, 64], [0, 1], { clamp: true })
  const logoScale = useTransform(scrollProgress, [0, 1], [1, 0.92])
  const titleScale = useTransform(scrollProgress, [0, 1], [1, 0.96])
  const actionsOpacity = useTransform(scrollProgress, [0, 1], [0, 1])


  useEffect(() => {
    const onScroll = () => {
      // Toggle compact header once the user scrolls a bit
      setCompact(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/20 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.nav
          layout
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`grid items-center ${compact ? "h-16 md:h-20" : "h-24 md:h-28"} grid-cols-3`}
        >
          {/* Brand */}
          <motion.a
            href={`/${locale}`}
            className={`${compact ? "col-start-1 justify-self-start" : "col-start-2 justify-self-center"} group flex items-center gap-3`}
            aria-label={t.nav.home}
            layout
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.img
              src="/icon.svg"
              alt="Zeros logo"
              className="size-9"
              style={{ scale: logoScale }}
            />
            <motion.span
              className={`text-2xl md:text-3xl font-semibold tracking-tight`}
              style={{ scale: titleScale }}
            >
              Zeros
            </motion.span>
          </motion.a>

          {/* Desktop Navigation */}
          <motion.div
            className="col-start-3 justify-self-end flex items-center gap-6"
            style={{ opacity: actionsOpacity }}
            transition={{ duration: 0.25 }}
          >
            <ul className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <Button size="lg" className="hidden md:inline-flex" asChild>
              <Link href={`/${locale}/quote`}>{t.nav.getQuote}</Link>
            </Button>
            <LanguageSelector />
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden" aria-label={t.nav.openMenu}>
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="p-0">
                <SheetTitle className="sr-only">{t.nav.openMenu}</SheetTitle>
                <div className="p-6">
                  <a href={`/${locale}`} className="group flex items-center gap-3" aria-label={t.nav.home}>
                    <img src="/icon.svg" alt="Zeros logo" className="size-9" />
                    <span className="text-xl font-semibold tracking-tight">Zeros</span>
                  </a>
                  <div className="mt-6 space-y-4">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        className="block text-base font-medium text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  <div className="mt-8 space-y-4">
                    <Button size="lg" className="w-full" asChild>
                      <Link href={`/${locale}/quote`}>{t.nav.getQuote}</Link>
                    </Button>
                    <div className="flex justify-center">
                      <LanguageSelector />
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </motion.div>
        </motion.nav>
      </div>
    </header>
  )
}
