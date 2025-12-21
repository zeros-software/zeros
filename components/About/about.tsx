"use client"

import { useTranslations } from "@/components/i18n-provider"

export function About() {
  const { t } = useTranslations()

  return (
    <section id="about" className="">
      <div className="container mx-auto px-6 py-24 lg:px-8 lg:py-32">
        <h2 className="text-3xl font-bold text-white mb-8 lg:text-4xl">{t.about.title}</h2>
        <p className="text-xl leading-relaxed text-white/90 max-w-4xl lg:text-2xl">
          {t.about.description} <span className="text-[#74ACDF]">{t.about.argentina}</span>{t.about.descriptionEnd}
        </p>
      </div>
    </section>
  )
}
