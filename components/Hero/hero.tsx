"use client"

import Noise from '@/components/Noise/Noise'
import { Logo } from '@/components/Logo/Logo'
import { LogoNoise } from '@/components/Logo/LogoNoise'
import { motion } from 'framer-motion'

export function Hero() {
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
            Built for scale.
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
