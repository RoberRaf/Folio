import type { HeroData } from './types'

interface HeroSectionProps {
  hero: HeroData
  onCreateBook?: () => void
}

export function HeroSection({ hero, onCreateBook }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-stone-950">
      {/* Ambient glows */}
      <div className="absolute -top-24 -right-24 w-[680px] h-[680px] rounded-full bg-rose-600/10 blur-[150px] pointer-events-none" />
      <div className="absolute -bottom-12 left-1/3 w-[480px] h-[480px] rounded-full bg-pink-700/10 blur-[120px] pointer-events-none" />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.22) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-28 lg:py-36">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-pulse" />
              <span className="text-rose-300/90 text-xs font-medium tracking-[0.14em] uppercase font-mono">
                Photo Books, Beautifully Made
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl xl:text-[72px] font-bold text-white leading-[1.05] tracking-tight mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {hero.headline}
            </h1>

            <p className="text-xl text-stone-400 leading-relaxed mb-10 max-w-md mx-auto lg:mx-0">
              {hero.subheadline}
            </p>

            <button
              onClick={onCreateBook}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-rose-500 hover:bg-rose-400 active:scale-[0.98] text-white font-semibold text-base rounded-full transition-all duration-200 hover:shadow-[0_4px_32px_rgba(244,63,94,0.5)] hover:-translate-y-0.5"
            >
              {hero.ctaLabel}
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 group-hover:translate-x-0.5 transition-transform duration-200">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            <p className="mt-7 text-stone-600 text-sm font-mono tracking-wide">
              Premium printing · Worldwide delivery · Free previews
            </p>
          </div>

          {/* Book mockup */}
          {hero.imagePlaceholder && (
            <div className="flex-shrink-0">
              <div className="relative w-60 sm:w-72 lg:w-80">
                <div className="absolute inset-0 scale-75 bg-rose-500/20 blur-3xl rounded-full" />
                <div className="absolute inset-0 rounded-2xl bg-stone-800 border border-stone-700/50 rotate-[6deg] translate-x-3 translate-y-2 scale-[0.98]" />
                <div className="absolute inset-0 rounded-2xl bg-stone-800 border border-stone-700/40 rotate-[3deg] translate-x-1.5 translate-y-1 scale-[0.99]" />

                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-stone-900">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage:
                        'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
                      backgroundSize: '22px 22px',
                    }}
                  />
                  <div className="absolute -top-12 -right-12 w-52 h-52 rounded-full bg-rose-600/15 blur-3xl" />
                  <div className="absolute top-9 left-7 w-20 h-14 rounded-xl bg-rose-950/80 border border-rose-800/50 -rotate-6 shadow-xl" />
                  <div className="absolute top-20 right-5 w-14 h-10 rounded-lg bg-pink-950/70 border border-pink-800/40 rotate-[8deg] shadow-lg" />
                  <div className="absolute bottom-24 left-5 w-16 h-12 rounded-xl bg-stone-700/80 border border-stone-600/50 rotate-[5deg] shadow-lg" />
                  <div className="absolute bottom-16 right-7 w-11 h-8 rounded-lg bg-rose-950/60 border border-rose-700/40 -rotate-3 shadow-md" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-rose-500/15 border border-rose-400/25 flex items-center justify-center">
                      <svg className="w-7 h-7 text-rose-300/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black/40 to-transparent" />

                  <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-center text-white/30 text-[10px] tracking-[0.3em] uppercase font-mono">
                      Your Folio
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-stone-500 text-xs tracking-[0.2em] uppercase font-mono">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-stone-500 to-transparent" />
      </div>
    </section>
  )
}
