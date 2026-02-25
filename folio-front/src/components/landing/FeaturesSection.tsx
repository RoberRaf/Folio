import type { FeatureItem } from './types'

const STEP_NUMBERS = ['01', '02', '03'] as const

const STEP_GRADIENTS = [
  'from-rose-950 via-stone-900 to-stone-950',
  'from-pink-950 via-stone-900 to-stone-950',
  'from-stone-800 via-stone-900 to-stone-950',
] as const

const STEP_ICON_RING = [
  'bg-rose-500/20 border-rose-400/30 text-rose-400',
  'bg-pink-500/20 border-pink-400/30 text-pink-400',
  'bg-rose-400/15 border-rose-300/25 text-rose-300',
] as const

function UploadIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
    </svg>
  )
}

function ArrangeIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM14 4a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1V4zM14 10a1 1 0 011-1h4a1 1 0 011 1v9a1 1 0 01-1 1h-4a1 1 0 01-1-1v-9z" />
    </svg>
  )
}

function OrderIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  )
}

const STEP_ICONS = [<UploadIcon key="upload" />, <ArrangeIcon key="arrange" />, <OrderIcon key="order" />]

interface FeaturesSectionProps {
  features: FeatureItem[]
}

export function FeaturesSection({ features }: FeaturesSectionProps) {
  return (
    <section className="bg-stone-50 dark:bg-stone-950 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-16 sm:mb-20 text-center">
          <p className="text-rose-500 dark:text-rose-400 text-sm font-medium tracking-[0.14em] uppercase font-mono mb-4">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-stone-900 dark:text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Three Simple Steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => {
            const stepNum = STEP_NUMBERS[index] ?? `0${index + 1}`
            const gradient = STEP_GRADIENTS[index] ?? STEP_GRADIENTS[0]
            const iconRing = STEP_ICON_RING[index] ?? STEP_ICON_RING[0]
            const icon = STEP_ICONS[index]

            return (
              <div key={feature.id} className="group flex flex-col bg-white dark:bg-stone-900 rounded-3xl border border-stone-100 dark:border-stone-800 overflow-hidden hover:border-rose-200/70 dark:hover:border-stone-700 transition-colors duration-300 hover:shadow-lg hover:shadow-rose-500/5">
                {feature.imagePlaceholder && (
                  <div className={`relative h-52 bg-gradient-to-br ${gradient} overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                    <span className="absolute -bottom-4 -right-1 text-[96px] font-bold text-white/5 leading-none select-none pointer-events-none" style={{ fontFamily: "'Playfair Display', serif" }}>{stepNum}</span>
                    <div className="absolute top-5 left-5 w-2 h-2 rounded-full bg-white/15" />
                    <div className="absolute top-5 left-10 w-1.5 h-1.5 rounded-full bg-white/10" />
                    <div className="absolute bottom-5 right-10 w-2 h-2 rounded-full bg-white/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center ${iconRing}`}>{icon}</div>
                    </div>
                  </div>
                )}
                <div className="flex-1 p-6 sm:p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-rose-400 tracking-[0.15em] font-mono">{stepNum}</span>
                    <div className="h-px flex-1 bg-stone-100 dark:bg-stone-800" />
                  </div>
                  <h3 className="text-xl font-bold text-stone-900 dark:text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{feature.title}</h3>
                  <p className="text-stone-500 dark:text-stone-400 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
