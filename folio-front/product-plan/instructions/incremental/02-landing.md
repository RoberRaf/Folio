# Milestone 2: Landing Page

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Shell) complete

---

## About This Handoff

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Product requirements and user flow specifications
- Design system tokens (colors, typography)
- Sample data showing the shape of data components expect
- Test specs focused on user-facing behavior

**Your job:**
- Integrate these components into your application
- Wire up callback props to your routing and business logic
- Replace sample data with real data from your backend
- Implement loading, error, and empty states

The components are props-based — they accept data and fire callbacks. How you architect the backend, data layer, and business logic is up to you.

---

## Goal

Implement the Landing Page — the public-facing marketing page that communicates Folio's value proposition and converts visitors to sign up.

## Overview

The landing page is the first thing visitors see. It communicates Folio's value proposition through a visually rich hero section, a features showcase explaining the three-step workflow (Upload → Arrange → Order), and a footer with contact/social info. This is a standalone page — no shell.

**Key Functionality:**
- Full-width hero with headline, subheadline, and "Create Your Book" CTA
- Three-step feature showcase with icons describing the workflow
- Footer with brand identity, contact email, and social links
- Engaging visual design with decorative book mockup

## Components Provided

Copy the section components from `product-plan/sections/landing/components/`:

- `LandingPage` — Root wrapper composing all three sections
- `HeroSection` — Full-width dark hero with headline, subheadline, CTA, and book mockup
- `FeaturesSection` — Three-column grid of step cards with icons
- `FooterSection` — Dark footer with brand mark, email, social links, copyright

## Props Reference

**Data props:**

```typescript
interface HeroData {
  headline: string
  subheadline: string
  ctaText: string
}

interface FeatureItem {
  icon: string
  title: string
  description: string
}

interface FooterData {
  brandName: string
  tagline: string
  email: string
  socialLinks: { platform: string; url: string }[]
  copyright: string
}
```

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onCreateBook` | User clicks "Create Your Book" CTA |

## Expected User Flows

### Flow 1: Visitor Converts via Hero CTA

1. Visitor lands on the page and sees the hero headline
2. Visitor reads the subheadline about creating photo books
3. Visitor clicks "Create Your Book" button
4. **Outcome:** User navigates to sign up / authentication

### Flow 2: Visitor Browses Features

1. Visitor scrolls past the hero
2. Visitor reads the three-step feature cards
3. **Outcome:** Visitor understands the product workflow

### Flow 3: Visitor Uses Footer Links

1. Visitor scrolls to the footer
2. Visitor clicks social link or email
3. **Outcome:** Social link opens in new tab; email opens mail client

## Empty States

No empty states — the landing page content is static/provided by props.

## Testing

See `product-plan/sections/landing/tests.md` for UI behavior test specs covering:
- Hero rendering and CTA interaction
- Feature cards grid layout
- Footer links and accessibility
- Responsive behavior

## Files to Reference

- `product-plan/sections/landing/README.md` — Feature overview and design intent
- `product-plan/sections/landing/tests.md` — UI behavior test specs
- `product-plan/sections/landing/components/` — React components
- `product-plan/sections/landing/types.ts` — TypeScript interfaces
- `product-plan/sections/landing/sample-data.json` — Test data

## Done When

- [ ] Landing page renders at root route (no shell)
- [ ] Hero section fills viewport with headline, subheadline, CTA
- [ ] "Create Your Book" CTA navigates to authentication/signup
- [ ] Features section shows three step cards in grid
- [ ] Footer shows brand, email, social links
- [ ] Social links open in new tabs
- [ ] Responsive on mobile (grid stacks, text centers)
- [ ] Dark mode support
