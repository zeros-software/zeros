import Noise from '@/components/Noise/Noise'

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
      <div className="h-screen w-full px-6 lg:px-8 flex items-center">
        <div className="mx-auto max-w-5xl text-center">
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
