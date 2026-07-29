"use client"

import { motion } from "framer-motion"
import { Header } from "@/components/Header/header"
import { Footer } from "@/components/Footer/footer"
import { QuoteModal } from "@/components/QuoteModal/quote-modal"
import { QuoteModalProvider } from "@/components/quote-modal-context"
import { useTranslations } from "@/components/i18n-provider"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle, Bot, Clock, TrendingUp, Utensils, Building2, ShoppingBag, Briefcase } from "lucide-react"

export default function AutomationPage() {
  const { t, locale } = useTranslations()
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "")
  const contactHref = whatsappNumber
    ? `https://wa.me/${whatsappNumber}`
    : `mailto:hello@zeros.com.ar?subject=${encodeURIComponent("Automatización con IA")}`
  const hasWhatsApp = Boolean(whatsappNumber)

  const features = [
    {
      icon: Bot,
      title: t.automation.features.ai.title,
      description: t.automation.features.ai.description,
    },
    {
      icon: Clock,
      title: t.automation.features.availability.title,
      description: t.automation.features.availability.description,
    },
    {
      icon: TrendingUp,
      title: t.automation.features.sales.title,
      description: t.automation.features.sales.description,
    },
    {
      icon: MessageCircle,
      title: t.automation.features.whatsapp.title,
      description: t.automation.features.whatsapp.description,
    },
  ]

  const industries = [
    {
      icon: Utensils,
      title: t.automation.industries.restaurants.title,
      description: t.automation.industries.restaurants.description,
    },
    {
      icon: Building2,
      title: t.automation.industries.realestate.title,
      description: t.automation.industries.realestate.description,
    },
    {
      icon: ShoppingBag,
      title: t.automation.industries.retail.title,
      description: t.automation.industries.retail.description,
    },
    {
      icon: Briefcase,
      title: t.automation.industries.services.title,
      description: t.automation.industries.services.description,
    },
  ]

  return (
    <QuoteModalProvider>
      <main className="min-h-screen bg-background">
        <Header />
      
      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="min-h-screen w-full px-6 lg:px-8 flex items-center pt-24">
          <div className="mx-auto max-w-6xl text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-8"
            >
              <MessageCircle className="size-4 text-green-500" />
              <span className="text-sm font-medium text-green-500">
                {t.automation.badge}
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-heading text-balance text-4xl font-bold tracking-tight leading-[1.1] sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {t.automation.title}{" "}
              <span className="text-green-500">{t.automation.titleHighlight}</span>{" "}
              {t.automation.titleEnd}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 text-xl leading-relaxed text-muted-foreground lg:text-2xl mx-auto max-w-4xl"
            >
              {t.automation.description}
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
                <a
                  href={contactHref}
                  target={hasWhatsApp ? "_blank" : undefined}
                  rel={hasWhatsApp ? "noopener noreferrer" : undefined}
                >
                  <MessageCircle className="size-5 mr-2" />
                  {hasWhatsApp ? t.automation.cta.whatsapp : t.automation.cta.email}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={`/${locale}#contacto`}>
                  {t.automation.cta.quote}
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="border-t border-border/20">
        <div className="container mx-auto px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4 lg:text-4xl">
              {t.automation.featuresTitle}
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
              {t.automation.featuresSubtitle}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group p-6 rounded-lg border border-border/20 hover:border-green-500/50 transition-colors bg-card/50"
              >
                <div className="size-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-4 group-hover:bg-green-500/20 transition-colors">
                  <feature.icon className="size-6 text-green-500" />
                </div>
                <h3 className="text-xl font-semibold tracking-tight mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="border-t border-border/20 bg-card/30">
        <div className="container mx-auto px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4 lg:text-4xl">
              {t.automation.industriesTitle}
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
              {t.automation.industriesSubtitle}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6 p-6 rounded-lg border border-border/20 hover:border-green-500/50 transition-colors"
              >
                <div className="size-14 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                  <industry.icon className="size-7 text-green-500" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold tracking-tight mb-2">{industry.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{industry.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="border-t border-border/20">
        <div className="container mx-auto px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight mb-4 lg:text-4xl">
              {t.automation.howItWorksTitle}
            </h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-3xl">
              {t.automation.howItWorksSubtitle}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {[
              {
                step: "01",
                title: t.automation.steps.analyze.title,
                description: t.automation.steps.analyze.description,
              },
              {
                step: "02",
                title: t.automation.steps.configure.title,
                description: t.automation.steps.configure.description,
              },
              {
                step: "03",
                title: t.automation.steps.launch.title,
                description: t.automation.steps.launch.description,
              },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <div className="text-4xl font-mono font-bold text-green-500">{item.step}</div>
                <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing/CTA Section */}
      <section className="border-t border-border/20 bg-gradient-to-b from-green-500/5 to-transparent">
        <div className="container mx-auto px-6 py-24 lg:px-8 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold tracking-tight mb-6 lg:text-5xl">
              {t.automation.pricingTitle}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t.automation.pricingDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white" asChild>
                <a
                  href={contactHref}
                  target={hasWhatsApp ? "_blank" : undefined}
                  rel={hasWhatsApp ? "noopener noreferrer" : undefined}
                >
                  <MessageCircle className="size-5 mr-2" />
                  {hasWhatsApp ? t.automation.finalCta.whatsapp : t.automation.cta.email}
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="mailto:hello@zeros.com.ar">
                  {t.automation.finalCta.email}
                </a>
              </Button>
            </div>
            
            <p className="mt-8 text-sm text-muted-foreground">
              {t.automation.pricing.note}
            </p>
          </motion.div>
        </div>
      </section>

        <Footer />
      </main>
      <QuoteModal />
    </QuoteModalProvider>
  )
}
