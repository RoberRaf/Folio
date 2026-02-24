# Landing Page

## Overview
Public-facing marketing page that communicates Folio's value proposition to new visitors. Composed of three sections: a full-width hero with headline and CTA, a feature showcase highlighting the three core steps (Upload, Arrange, Order), and a footer with contact and legal info. No navigation shell — this is a standalone page.

## Shell
This section does NOT use the application shell (standalone page).

## Components

| Component | Description |
|-----------|-------------|
| `LandingPage` | Root wrapper composing Hero, Features, and Footer |
| `HeroSection` | Full-width dark hero with headline, subheadline, CTA button, and decorative book mockup |
| `FeaturesSection` | Three-column grid of feature cards with step numbers and icons |
| `FooterSection` | Dark footer with brand mark, email, social links, and copyright |

## Props Interface

```typescript
interface LandingProps {
  hero: HeroData
  features: FeatureItem[]
  footer: FooterData
  onCreateBook?: () => void
}
```

## User Flows

1. Visitor lands on the page and reads the hero headline and subheadline
2. Visitor clicks "Create Your Book" CTA → navigates to sign up
3. Visitor scrolls to features section to understand how Folio works
4. Visitor finds contact/social links in footer

## Tests

### Visual
- [ ] Hero section fills viewport height on load
- [ ] Book mockup renders with decorative elements
- [ ] Feature cards display in 3-column grid on desktop, stack on mobile
- [ ] Footer renders brand mark, email, social icons, and copyright

### Interaction
- [ ] "Create Your Book" CTA calls `onCreateBook` callback
- [ ] Social links open in new tab
- [ ] Email link opens mail client

### Responsive
- [ ] Hero text centers on mobile, left-aligns on desktop
- [ ] Feature grid stacks to single column below md breakpoint
- [ ] Book mockup scales proportionally on smaller screens
