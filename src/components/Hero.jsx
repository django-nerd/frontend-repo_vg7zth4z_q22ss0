import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative h-[70vh] min-h-[520px] w-full overflow-hidden">
      {/* Spline cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays for readability (don't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/20 to-slate-950/70" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
              Build apps by chatting
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-blue-100/90">
              Describe what you want. Watch it come to life with an interactive, minimalist experience.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="#get-started"
                className="rounded-full bg-white text-slate-900 hover:bg-blue-50 px-5 py-3 font-semibold transition-colors"
              >
                Start building
              </a>
              <a
                href="/test"
                className="rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-semibold backdrop-blur-sm transition-colors"
              >
                System test
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
