"use client"

import { useState, useEffect } from "react"
import { useTranslations } from "@/components/i18n-provider"
import { useQuoteModal } from "@/components/quote-modal-context"

function useTypewriter(words: string[], typingSpeed = 80, deleteSpeed = 40, pauseTime = 1800) {
  const [displayed, setDisplayed] = useState("")
  const [wordIndex, setWordIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[wordIndex]

    if (!deleting && charIndex < currentWord.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + currentWord[charIndex])
        setCharIndex((prev) => prev + 1)
      }, typingSpeed)
      return () => clearTimeout(timer)
    }

    if (!deleting && charIndex === currentWord.length) {
      const timer = setTimeout(() => {
        setDeleting(true)
      }, pauseTime)
      return () => clearTimeout(timer)
    }

    if (deleting && charIndex > 0) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev.slice(0, -1))
        setCharIndex((prev) => prev - 1)
      }, deleteSpeed)
      return () => clearTimeout(timer)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setWordIndex((prev) => (prev + 1) % words.length)
    }
  }, [charIndex, deleting, wordIndex, words, typingSpeed, deleteSpeed, pauseTime])

  return displayed
}

export function Hero() {
  const { t } = useTranslations()
  const { setOpen } = useQuoteModal()
  const typedWord = useTypewriter(t.hero.rotatingWords)

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-accent" />
          {t.hero.badge}
        </div>

        <h1 className="mt-8 max-w-4xl text-balance font-heading text-5xl leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
          {t.hero.line1}{" "}
          <span className="relative inline-flex items-baseline">
            <span className="italic text-muted-foreground">
              {typedWord}
            </span>
            <span className="ml-0.5 inline-block w-[0.06em] h-[0.7em] bg-accent animate-pulse" />
          </span>
          {" "}
          {t.hero.line3}
        </h1>

        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {t.hero.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <button
            onClick={() => setOpen(true)}
            className="inline-flex h-12 items-center rounded-full bg-foreground px-7 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {t.hero.cta}
          </button>
          <a
            href="#experiencia"
            className="inline-flex h-12 items-center rounded-full border border-border px-7 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            {t.hero.secondary}
          </a>
        </div>
      </div>
    </section>
  )
}
