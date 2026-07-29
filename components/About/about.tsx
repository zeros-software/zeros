"use client"

import { useTranslations } from "@/components/i18n-provider"
import { motion } from "framer-motion"

const stats = [
  { value: "6+", key: "projects" as const },
  { value: "4+", key: "years" as const },
  { value: "8+", key: "clients" as const },
  { value: "5+", key: "team" as const },
]

export function About() {
  const { t } = useTranslations()

  return (
    <section id="about" className="border-t border-border/20">
      <div className="container mx-auto px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="font-mono text-sm text-muted-foreground mb-4 tracking-wide uppercase">
              {t.about.title}
            </p>
            <p className="text-2xl leading-relaxed font-medium lg:text-3xl">
              {t.about.description}{" "}
              <span className="text-[#74ACDF]">{t.about.argentina}</span>
              {t.about.descriptionEnd}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="text-4xl font-bold tracking-tight text-[#74ACDF] lg:text-5xl">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {t.about.stats[stat.key]}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
