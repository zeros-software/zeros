"use client"

import { useTranslations } from "@/components/i18n-provider"

export function Services() {
  const { t } = useTranslations()

  return (
    <section id="services" className="border-t border-border/20">
      <div className="container mx-auto px-6 py-24 lg:px-8 lg:py-32">
        <h2 className="text-mono text-3xl font-bold tracking-tight mb-16 lg:text-4xl">{t.services.title}</h2>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24">
          {t.services.items.map((service) => (
            <div key={service.number} className="space-y-4">
              <div className="text-sm font-mono text-muted-foreground">{service.number}</div>
              <h3 className="text-2xl font-semibold tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
