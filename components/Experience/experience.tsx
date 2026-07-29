"use client"

import { useTranslations } from "@/components/i18n-provider"

export function Experience() {
  const { t } = useTranslations()

  return (
    <section id="experiencia" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {t.experience.label}
          </p>
          <h2 className="mt-4 text-balance font-heading text-4xl leading-tight tracking-tight md:text-5xl">
            {t.experience.title}
          </h2>
          <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
            {t.experience.description}
          </p>
        </div>

        <div className="mt-16 flex flex-col">
          {t.experience.projects.map((project, index) => (
            <article
              key={project.client}
              className="group grid grid-cols-1 gap-6 border-t border-border py-10 md:grid-cols-12 md:gap-10 md:py-14"
            >
              <div className="flex items-baseline gap-4 md:col-span-3">
                <span className="font-mono text-sm text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  <p>{project.sector}</p>
                  <p className="mt-1">{project.year}</p>
                </div>
              </div>

              <div className="md:col-span-9">
                <h3 className="font-heading text-3xl tracking-tight md:text-4xl">
                  {project.client}
                </h3>
                <p className="mt-2 text-lg text-muted-foreground">
                  {project.title}
                </p>
                <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.href}
                  target={project.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    project.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-foreground transition-colors hover:text-accent"
                >
                  {t.experience.viewProject}
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
