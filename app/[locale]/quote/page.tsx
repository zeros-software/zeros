"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslations } from "@/components/i18n-provider"
import Link from "next/link"

type FormStatus = "idle" | "sending" | "success" | "error"

export default function QuotePage() {
  const { t, locale } = useTranslations()
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<FormStatus>("idle")
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    company: "",
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) throw new Error("Failed to send")

      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  const canContinue = formData.message.trim().length > 0
  const canSubmit = formData.name.trim() && formData.email.trim()

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50 border-b border-border/20 bg-background/70 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 md:h-20">
            <Link
              href={`/${locale}`}
              className="flex items-center gap-3"
            >
              <img src="/icon.svg" alt="Zeros" className="size-9" />
              <span className="text-2xl font-semibold tracking-tight">Zeros</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-24 md:pt-32 pb-16 px-6">
        <div className="mx-auto max-w-2xl">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-16"
              >
                <div className="inline-flex items-center justify-center size-16 rounded-full bg-green-500/10 mb-6">
                  <Check className="size-8 text-green-500" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                  {t.quote.success.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {t.quote.success.description}
                </p>
                <Button asChild size="lg" className="cursor-pointer">
                  <Link href={`/${locale}`}>{t.quote.success.backHome}</Link>
                </Button>
              </motion.div>
            ) : status === "error" ? (
              <motion.div
                key="error"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center py-16"
              >
                <div className="inline-flex items-center justify-center size-16 rounded-full bg-red-500/10 mb-6">
                  <AlertCircle className="size-8 text-red-500" />
                </div>
                <h1 className="text-4xl font-bold tracking-tight mb-4">
                  {t.quote.error.title}
                </h1>
                <p className="text-lg text-muted-foreground mb-8">
                  {t.quote.error.description}
                </p>
                <Button
                  size="lg"
                  onClick={() => setStatus("idle")}
                  className="cursor-pointer"
                >
                  {t.quote.error.retry}
                </Button>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                {/* Title */}
                <div className="mb-12">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                    {t.quote.title}
                  </h1>
                  <p className="text-xl text-muted-foreground">
                    {t.quote.subtitle}
                  </p>
                </div>

                {/* Progress indicator */}
                <div className="flex gap-2 mb-8">
                  <div
                    className={`h-1 flex-1 rounded-full transition-colors ${step >= 1 ? "bg-white" : "bg-white/20"
                      }`}
                  />
                  <div
                    className={`h-1 flex-1 rounded-full transition-colors ${step >= 2 ? "bg-white" : "bg-white/20"
                      }`}
                  />
                </div>

                <form onSubmit={handleSubmit}>
                  <AnimatePresence mode="wait">
                    {step === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <label className="block text-lg font-medium mb-4">
                          {t.quote.form.message}
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t.quote.form.messagePlaceholder}
                          rows={6}
                          className="w-full bg-transparent border border-border/40 rounded-lg p-4 text-lg resize-none focus:outline-none focus:border-white/60 transition-colors placeholder:text-muted-foreground"
                        />
                        <div className="mt-6 flex justify-end">
                          <Button
                            type="button"
                            size="lg"
                            onClick={() => setStep(2)}
                            disabled={!canContinue}
                            className="gap-2 cursor-pointer"
                          >
                            {t.quote.form.continue}
                            <ArrowRight className="size-4" />
                          </Button>
                        </div>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-sm font-medium mb-2 text-muted-foreground">
                            {t.quote.form.name}
                          </label>
                          <input
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t.quote.form.namePlaceholder}
                            required
                            className="w-full bg-transparent border border-border/40 rounded-lg p-4 text-lg focus:outline-none focus:border-white/60 transition-colors placeholder:text-muted-foreground"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-muted-foreground">
                            {t.quote.form.email}
                          </label>
                          <input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t.quote.form.emailPlaceholder}
                            required
                            className="w-full bg-transparent border border-border/40 rounded-lg p-4 text-lg focus:outline-none focus:border-white/60 transition-colors placeholder:text-muted-foreground"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2 text-muted-foreground">
                            {t.quote.form.company}
                          </label>
                          <input
                            name="company"
                            type="text"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder={t.quote.form.companyPlaceholder}
                            className="w-full bg-transparent border border-border/40 rounded-lg p-4 text-lg focus:outline-none focus:border-white/60 transition-colors placeholder:text-muted-foreground"
                          />
                        </div>

                        <div className="pt-4 flex justify-between">
                          <Button
                            type="button"
                            variant="ghost"
                            size="lg"
                            onClick={() => setStep(1)}
                            className="gap-2 cursor-pointer"
                          >
                            <ArrowLeft className="size-4" />
                            {t.quote.form.back}
                          </Button>
                          <Button
                            type="submit"
                            size="lg"
                            disabled={!canSubmit || status === "sending"}
                            className="cursor-pointer"
                          >
                            {status === "sending"
                              ? t.quote.form.sending
                              : t.quote.form.send}
                          </Button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  )
}
