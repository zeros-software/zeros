"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowLeft, ArrowRight, Check, AlertCircle, X } from "lucide-react"
import { useTranslations } from "@/components/i18n-provider"
import { useQuoteModal } from "@/components/quote-modal-context"

type FormStatus = "idle" | "sending" | "success" | "error"

export function QuoteModal() {
  const { t } = useTranslations()
  const { open, setOpen } = useQuoteModal()
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState<FormStatus>("idle")
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    email: "",
    company: "",
  })

  const reset = useCallback(() => {
    setStep(1)
    setStatus("idle")
    setFormData({ message: "", name: "", email: "", company: "" })
  }, [])

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && status !== "sending") setOpen(false)
    }
    window.addEventListener("keydown", onEsc)
    return () => window.removeEventListener("keydown", onEsc)
  }, [setOpen, status])

  useEffect(() => {
    if (!open) {
      setTimeout(reset, 300)
    }
  }, [open, reset])

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
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={() => status !== "sending" && setOpen(false)}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 mx-4 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 sm:p-8"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 size-8 inline-flex items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-colors"
              aria-label="Cerrar"
            >
              <X className="size-4" />
            </button>

            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center size-14 rounded-full bg-accent/10 mb-5">
                    <Check className="size-7 text-accent" />
                  </div>
                  <h2 className="font-heading text-2xl tracking-tight mb-2">
                    {t.quote.success.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {t.quote.success.description}
                  </p>
                  <button
                    onClick={() => setOpen(false)}
                    className="inline-flex h-10 items-center rounded-full border border-border px-5 text-sm font-medium transition-colors hover:bg-secondary"
                  >
                    {t.quote.success.backHome}
                  </button>
                </motion.div>
              ) : status === "error" ? (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center size-14 rounded-full bg-destructive/10 mb-5">
                    <AlertCircle className="size-7 text-destructive" />
                  </div>
                  <h2 className="font-heading text-2xl tracking-tight mb-2">
                    {t.quote.error.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {t.quote.error.description}
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90"
                  >
                    {t.quote.error.retry}
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                >
                  <div className="mb-8">
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                      {t.quote.title}
                    </p>
                    <h2 className="mt-3 font-heading text-2xl tracking-tight">
                      {t.quote.subtitle}
                    </h2>
                  </div>

                  <div className="flex gap-2 mb-8">
                    <div
                      className={`h-1 flex-1 rounded-full transition-colors ${step >= 1 ? "bg-foreground" : "bg-border"}`}
                    />
                    <div
                      className={`h-1 flex-1 rounded-full transition-colors ${step >= 2 ? "bg-foreground" : "bg-border"}`}
                    />
                  </div>

                  <form onSubmit={handleSubmit}>
                    <AnimatePresence mode="wait">
                      {step === 1 && (
                        <motion.div
                          key="step1"
                          initial={{ opacity: 0, x: -16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: 16 }}
                          transition={{ duration: 0.15 }}
                        >
                          <label className="block text-sm font-medium mb-3 text-muted-foreground">
                            {t.quote.form.message}
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t.quote.form.messagePlaceholder}
                            rows={5}
                            className="w-full bg-transparent border border-border rounded-xl p-4 text-base resize-none focus:outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground"
                            autoFocus
                          />
                          <div className="mt-6 flex justify-end">
                            <button
                              type="button"
                              onClick={() => setStep(2)}
                              disabled={!canContinue}
                              className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              {t.quote.form.continue}
                              <ArrowRight className="size-4" />
                            </button>
                          </div>
                        </motion.div>
                      )}

                      {step === 2 && (
                        <motion.div
                          key="step2"
                          initial={{ opacity: 0, x: 16 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -16 }}
                          transition={{ duration: 0.15 }}
                          className="space-y-5"
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
                              autoFocus
                              className="w-full bg-transparent border border-border rounded-xl p-3 text-base focus:outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground"
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
                              className="w-full bg-transparent border border-border rounded-xl p-3 text-base focus:outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground"
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
                              className="w-full bg-transparent border border-border rounded-xl p-3 text-base focus:outline-none focus:border-foreground/40 transition-colors placeholder:text-muted-foreground"
                            />
                          </div>

                          <div className="pt-2 flex justify-between">
                            <button
                              type="button"
                              onClick={() => setStep(1)}
                              className="inline-flex h-10 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium transition-colors hover:bg-secondary"
                            >
                              <ArrowLeft className="size-4" />
                              {t.quote.form.back}
                            </button>
                            <button
                              type="submit"
                              disabled={!canSubmit || status === "sending"}
                              className="inline-flex h-10 items-center rounded-full bg-foreground px-5 text-sm font-medium text-background transition-opacity hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
                            >
                              {status === "sending"
                                ? t.quote.form.sending
                                : t.quote.form.send}
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
