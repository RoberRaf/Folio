# Test Specs: Landing Page

These test specs are **framework-agnostic**. Adapt them to your testing setup (Jest, Vitest, Playwright, Cypress, React Testing Library, etc.).

## Overview

The Landing Page is a public marketing page with three sections: hero, features, and footer. Tests verify visual rendering, CTA interactions, and responsive behavior.

---

## User Flow Tests

### Flow 1: Visitor Converts via Hero CTA

**Scenario:** A new visitor reads the hero and clicks the main CTA to start creating a book.

#### Success Path

**Setup:**
- Landing page renders with hero, features, and footer data
- `onCreateBook` callback is provided

**Steps:**
1. User navigates to the landing page
2. User sees the hero headline and subheadline
3. User clicks the "Create Your Book" button

**Expected Results:**
- [ ] Hero section is visible with headline text
- [ ] Subheadline text renders below headline
- [ ] "Create Your Book" button is visible and clickable
- [ ] Clicking "Create Your Book" calls `onCreateBook` callback

---

### Flow 2: Visitor Explores Features

**Scenario:** Visitor scrolls to learn about the product's three-step workflow.

**Steps:**
1. User scrolls past the hero section
2. User sees the features section with three feature cards

**Expected Results:**
- [ ] Features section heading is visible
- [ ] Three feature cards render with step numbers (1, 2, 3)
- [ ] Each card shows an icon, title, and description
- [ ] Cards display in a 3-column grid on desktop

---

### Flow 3: Visitor Uses Footer Links

**Scenario:** Visitor scrolls to footer to find contact info and social links.

**Steps:**
1. User scrolls to the footer section
2. User sees the brand mark, email, and social links

**Expected Results:**
- [ ] Footer renders brand name or logo
- [ ] Email address is displayed and clickable (mailto link)
- [ ] Social media icons are visible
- [ ] Social links open in a new tab (`target="_blank"`)
- [ ] Copyright text includes current year

---

## Component Interaction Tests

### HeroSection

**Renders correctly:**
- [ ] Displays hero headline from `hero.headline`
- [ ] Displays subheadline from `hero.subheadline`
- [ ] Renders decorative book mockup image
- [ ] CTA button shows correct text from `hero.ctaText`

**User interactions:**
- [ ] CTA button calls `onCreateBook` on click

### FeaturesSection

**Renders correctly:**
- [ ] Shows section heading
- [ ] Renders exactly 3 feature cards from `features` array
- [ ] Each card shows `stepNumber`, `title`, and `description`

### FooterSection

**Renders correctly:**
- [ ] Displays brand mark
- [ ] Shows contact email as mailto link
- [ ] Renders social media icons with links
- [ ] Shows copyright with year

---

## Edge Cases

- [ ] Landing page renders correctly with minimal data (empty features array shows no cards)
- [ ] Very long headline text wraps properly without overflow
- [ ] Very long feature descriptions truncate or wrap gracefully
- [ ] Missing book mockup image shows fallback or placeholder
- [ ] Page renders without onCreateBook callback (button still visible but no-op)

---

## Responsive Tests

- [ ] Hero text centers on mobile (below md), left-aligns on desktop
- [ ] Feature cards stack to single column on mobile
- [ ] Feature cards show in 3-column grid on desktop (lg+)
- [ ] Footer stacks vertically on mobile
- [ ] Book mockup scales proportionally on smaller screens
- [ ] No horizontal scroll at any breakpoint

---

## Accessibility Checks

- [ ] CTA button is keyboard accessible (focusable and activatable with Enter/Space)
- [ ] Social links have accessible labels (aria-label or visible text)
- [ ] Images have alt text
- [ ] Heading hierarchy is correct (h1 for hero, h2 for features section)
- [ ] Color contrast meets WCAG AA for all text

---

## Sample Test Data

```typescript
const mockHero = {
  headline: "Create Beautiful Photo Books",
  subheadline: "Turn your memories into stunning keepsakes",
  ctaText: "Create Your Book",
  bookMockupUrl: "/mockup.png"
};

const mockFeatures = [
  { stepNumber: 1, icon: "upload", title: "Upload Photos", description: "Add your favorite photos" },
  { stepNumber: 2, icon: "arrange", title: "Arrange Pages", description: "Design your perfect layout" },
  { stepNumber: 3, icon: "order", title: "Order", description: "Get it delivered to your door" }
];

const mockFooter = {
  brandName: "Folio",
  email: "hello@folio.com",
  socialLinks: [
    { platform: "twitter", url: "https://twitter.com/folio" },
    { platform: "instagram", url: "https://instagram.com/folio" }
  ],
  copyright: "© 2025 Folio. All rights reserved."
};

const mockEmptyFeatures: FeatureItem[] = [];
```
