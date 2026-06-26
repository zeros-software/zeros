"use client"

import { useTranslations } from "@/components/i18n-provider"

export function Services() {
  const { t } = useTranslations()

  return (
    <section id="servicios" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.services.label}
            </p>
            <h2 className="mt-4 max-w-2xl text-balance font-heading text-4xl leading-tight tracking-tight md:text-5xl">
              {t.services.title}
            </h2>
          </div>
          <p className="max-w-sm text-pretty text-muted-foreground">
            {t.services.description}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {t.services.items.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col bg-card p-8 transition-colors hover:bg-secondary md:p-10"
            >
              <span className="font-mono text-sm text-muted-foreground">
                {service.id}
              </span>
              <h3 className="mt-6 font-heading text-2xl tracking-tight md:text-3xl">
                {service.title}
              </h3>
              {service.description && (
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
