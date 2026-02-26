import { useNavigate } from 'react-router-dom'
import { LandingView } from '@/components/landing'
import type { FeatureItem, FooterData, HeroData } from '@/components/landing'

const hero: HeroData = {
  headline: 'Turn Your Photos Into Beautiful Books',
  subheadline: 'Design, preview, and print stunning photo books — delivered to your door.',
  ctaLabel: 'Create Your Book',
  ctaHref: '/auth/signup',
  imagePlaceholder: true,
}

const features: FeatureItem[] = [
  {
    id: 'upload',
    title: 'Upload Your Photos',
    description:
      'Bring your favourite memories together. Upload from your phone, computer, or cloud storage in seconds.',
    imagePlaceholder: true,
  },
  {
    id: 'arrange',
    title: 'Arrange Your Layouts',
    description: 'Choose from beautiful templates and drag photos into place. Every page, your way.',
    imagePlaceholder: true,
  },
  {
    id: 'order',
    title: 'Order a Printed Copy',
    description:
      "When you're happy with your design, order your book. Premium printing, delivered worldwide.",
    imagePlaceholder: true,
  },
]

const footer: FooterData = {
  email: 'hello@folio.com',
  socialLinks: [
    { platform: 'Instagram', href: 'https://instagram.com/foliobooks' },
    { platform: 'Twitter', href: 'https://twitter.com/foliobooks' },
  ],
  copyright: '© 2026 Folio. All rights reserved.',
}

export function LandingPage() {
  const navigate = useNavigate()

  return (
    <LandingView
      hero={hero}
      features={features}
      footer={footer}
      onCreateBook={() => navigate('/auth/signup', { state: { from: '/designer' } })}
    />
  )
}
