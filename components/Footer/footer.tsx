"use client"

import { useTranslations } from "@/components/i18n-provider"

export function Footer() {
  const { t } = useTranslations()

  return (
    <footer className="border-t border-border/20">
      <div className="container mx-auto px-6 py-12 lg:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>
          <div className="flex gap-8">
            <a
              href="https://www.linkedin.com/company/zeros-software"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/zeros-software"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
