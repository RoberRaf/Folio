import data from '@/../product/sections/landing/data.json'
import { LandingPage } from './components/LandingPage'

export default function LandingPagePreview() {
  return (
    <LandingPage
      hero={data.hero}
      features={data.features}
      footer={data.footer}
      onCreateBook={() => console.log('Create book clicked')}
    />
  )
}
