"use client"

import { useTranslations } from "@/components/i18n-provider"

export function Approach() {
  const { t } = useTranslations()

  return (
    <section id="enfoque" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {t.approach.label}
            </p>
            <h2 className="mt-4 text-balance font-heading text-4xl leading-tight tracking-tight md:text-5xl">
              {t.approach.title}
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              {t.approach.para1}
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {t.approach.para2}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {t.approach.expertise.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-secondary px-3 py-1 font-mono text-xs text-secondary-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>

            <a
              href="https://lucasgrasso.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
            >
              {t.approach.portfolioLink}
              <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="flex flex-col justify-center">
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
              {t.approach.stats.map((stat) => (
                <div key={stat.value} className="bg-card p-6">
                  <dt className="font-heading text-3xl tracking-tight text-foreground">
                    {stat.value}
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
