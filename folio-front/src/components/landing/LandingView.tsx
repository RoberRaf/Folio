import type { LandingProps } from './types'
import { FeaturesSection } from './FeaturesSection'
import { FooterSection } from './FooterSection'
import { HeroSection } from './HeroSection'

export function LandingView({ hero, features, footer, onCreateBook }: LandingProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection hero={hero} onCreateBook={onCreateBook} />
      <FeaturesSection features={features} />
      <FooterSection footer={footer} />
    </div>
  )
}
