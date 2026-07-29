"use client"

import { ZerosLogo } from "@/components/zeros-logo"
import { useTranslations } from "@/components/i18n-provider"

export function Footer() {
  const { t, locale } = useTranslations()

  const footerLinks = [
    { label: t.nav.services, href: `/${locale}#servicios` },
    { label: t.nav.automation, href: `/${locale}/automation` },
    { label: t.nav.work, href: `/${locale}#experiencia` },
  ]

  return (
    <footer id="contacto" className="bg-background">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {t.footer.label}
        </p>
        <h2 className="mt-6 max-w-4xl text-balance font-heading text-5xl leading-[1.02] tracking-tight md:text-7xl">
          {t.footer.title}
        </h2>
        <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {t.footer.description}
        </p>

        <a
          href="mailto:hello@zeros.com.ar"
          className="group mt-10 inline-flex items-center gap-3 font-heading text-2xl tracking-tight text-foreground transition-colors hover:text-accent md:text-3xl"
        >
          hello@zeros.com.ar
          <span
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 px-6 py-10 md:flex-row md:items-center">
          <ZerosLogo />

          <nav aria-label={t.footer.navLabel}>
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
              {footerLinks.map((link) => (
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
          </nav>

          <p className="font-mono text-xs text-muted-foreground">
            {t.footer.copyright} · © {new Date().getFullYear()} Zeros
          </p>
        </div>
      </div>
    </footer>
  )
}
