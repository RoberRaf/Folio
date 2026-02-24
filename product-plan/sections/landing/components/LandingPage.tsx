import type { LandingProps } from '../types'
import { HeroSection } from './HeroSection'
import { FeaturesSection } from './FeaturesSection'
import { FooterSection } from './FooterSection'

export function LandingPage({ hero, features, footer, onCreateBook }: LandingProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection hero={hero} onCreateBook={onCreateBook} />
      <FeaturesSection features={features} />
      <FooterSection footer={footer} />
    </div>
  )
}
