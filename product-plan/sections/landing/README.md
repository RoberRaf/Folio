# Landing

## Overview

Public-facing marketing page that communicates Folio's value proposition to new visitors. Composed of three sections: a full-width hero with headline and CTA, a feature showcase highlighting the three core steps (Upload, Arrange, Order), and a footer with contact and legal info. No navigation shell — this is a standalone page.

## User Flows

- Visitor lands on the page and reads the hero headline and subheadline
- Visitor clicks "Create Your Book" and is taken to sign up
- Visitor scrolls to the features section to understand how Folio works
- Visitor finds contact info or social links in the footer

## Design Decisions

- Dark, dramatic hero section (stone-950 background) with ambient rose glow effects and a decorative book mockup — communicates premium quality immediately
- A dot-grid texture and subtle parallax depth create a visually immersive first impression
- Features section switches to a light/dark mode aware background for contrast
- "Three Simple Steps" framing makes the product immediately approachable
- Footer is minimal and dark, matching the hero tone

## Data Shapes

**Entities:** HeroData, FeatureItem[], FooterData

## Visual Reference

See `screenshot.png` for the target UI design.

## Components Provided

- `LandingPage` — Root component, composes Hero + Features + Footer
- `HeroSection` — Full-width dark hero with headline, subheadline, CTA, and book mockup
- `FeaturesSection` — 3-column feature grid with step numbers and icons
- `FooterSection` — Footer with brand mark, email, social links, and copyright

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onCreateBook` | User clicks the hero "Create Your Book" CTA |
