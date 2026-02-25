export interface HeroData {
  headline: string
  subheadline: string
  ctaLabel: string
  ctaHref: string
  imagePlaceholder: boolean
}

export interface FeatureItem {
  id: string
  title: string
  description: string
  imagePlaceholder: boolean
}

export interface SocialLink {
  platform: string
  href: string
}

export interface FooterData {
  email: string
  socialLinks: SocialLink[]
  copyright: string
}

export interface LandingProps {
  hero: HeroData
  features: FeatureItem[]
  footer: FooterData
  /** Called when the hero CTA button is clicked */
  onCreateBook?: () => void
}
