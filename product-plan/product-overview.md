# Folio — Product Overview

## Summary

Folio is a personalized photo book creation app that transforms your favorite memories into beautifully printed physical keepsakes. Through an immersive, intuitive design experience — culminating in an interactive page-turning preview that mirrors the real product — users go from photo selection to doorstep delivery with delight at every step.

## Planned Sections

1. **Landing** — Marketing entry point that communicates Folio's value proposition and invites users to start creating their first book.
2. **Authentication** — Sign up and sign in flows for creating and accessing a Folio account.
3. **Book Designer** — The core creation experience — upload photos, arrange page layouts, and customize the cover and theme.
4. **Book Preview** — Interactive page-turning simulation where users experience their designed book before committing to an order.
5. **Profile Drafts** — The user's personal space to manage saved draft books and view previously ordered books.
6. **Checkout** — Order review, payment, and confirmation flow to place and track a physical book order.

## Product Entities

- **User** — A registered account holder. Stores identity, authentication credentials, and personal preferences.
- **Book** — A photo book project — either in draft or submitted for printing. Holds the overall design configuration including the selected theme, cover details, and ordered page structure.
- **Page** — A single page within a Book. Defines its order, the layout style and the photos placed on it.
- **Photo** — An image uploaded by the User to their personal library. Can be placed on one or more Pages across a Book.
- **Order** — A confirmed purchase of a Book. Tracks payment status, delivery address, and shipping progress.

## Design System

**Colors:**
- Primary: rose
- Secondary: pink
- Neutral: stone

**Typography:**
- Heading: Playfair Display
- Body: DM Sans
- Mono: IBM Plex Mono

## Implementation Sequence

Build this product in milestones:

1. **Shell** — Set up design tokens and application shell
2. **Landing** — Marketing entry point and value proposition
3. **Authentication** — Sign up and sign in flows
4. **Book Designer** — Core photo book creation workspace
5. **Book Preview** — Interactive page-turning book simulation
6. **Profile Drafts** — User dashboard for managing book projects
7. **Checkout** — Order review, payment, and confirmation

Each milestone has a dedicated instruction document in `product-plan/instructions/`.
