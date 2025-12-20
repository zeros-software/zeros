"use client"

import Noise from '@/components/Noise/Noise'
import { Logo } from '@/components/Logo/Logo'
import { LogoNoise } from '@/components/Logo/LogoNoise'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const words = ["Scale", "Growth", "Speed", "You"]

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex >= words.length - 1) return
    const timeout = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 2500)
    return () => clearTimeout(timeout)
  }, [currentIndex])
  return (
    <div className="relative w-full overflow-hidden">
      <Noise
        patternSize={250}
        patternScaleX={1}
        patternScaleY={1}
        patternRefreshInterval={2}
        patternAlpha={25}
      />

      {/* Background logo with pulsating noise */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="relative w-[60vw] h-[60vw] max-w-[600px] max-h-[600px]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.03, 0.03, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.4, 0.6, 1],
          }}
        >
          <Logo className="absolute inset-0 w-full h-full text-white" />
          <LogoNoise className="absolute inset-0 w-full h-full" />
        </motion.div>
      </div>

      <div className="h-screen w-full px-6 lg:px-8 flex items-center">
        <div className="mx-auto max-w-5xl text-center relative z-10">
          <h1 className="font-heading text-balance text-6xl font-bold tracking-tight leading-[1.1] sm:text-7xl lg:text-8xl">
            Built for{" "}
            <span className="inline-block relative">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[currentIndex]}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="inline-block"
                >
                  {words[currentIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            .
          </h1>
          <p className="mt-8 text-balance text-xl leading-relaxed text-muted-foreground lg:text-2xl mx-auto max-w-3xl">
            Zeros delivers production-ready software for companies building at scale. Web, mobile, and blockchain solutions
            that work.
          </p>
        </div>
      </div>
    </div>
  )
}
