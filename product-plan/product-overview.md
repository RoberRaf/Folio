# Folio — Product Overview

## Summary

Folio is a personalized photo book creation app that transforms your favorite memories into beautifully printed physical keepsakes. Through an immersive, intuitive design experience — culminating in an interactive page-turning preview that mirrors the real product — users go from photo selection to doorstep delivery with delight at every step.

**Problems Solved:**
- Existing tools feel clunky and overwhelming — Folio delivers a smooth, visually immersive design flow that makes creating a photo book feel like a joy, not a task.
- No way to visualize the final product before ordering — Folio's interactive page-turning simulation gives users a near-real preview of the physical book, building confidence and excitement before they place their order.
- Generic, impersonal results — Folio lets users apply custom cover designs and choose from curated themes and styles, ensuring every book feels uniquely personal.

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
- **Page** — A single page within a Book. Defines its order, the layout style (full-page, partial, custom) and the photos placed on it.
- **Photo** — An image uploaded by the User to their personal library. Can be placed on one or more Pages across a Book.
- **Order** — A confirmed purchase of a Book. Tracks payment status, delivery address, and shipping progress.

**Key Relationships:**
- User has many Books and Photos
- Book has many Pages (each Page has one Photo slot)
- Order belongs to User and has one Book

## Design System

**Colors:**
- Primary: `rose` — Buttons, links, key accents, brand color
- Secondary: `pink` — Tags, highlights, secondary elements
- Neutral: `stone` — Backgrounds, text, borders

**Typography:**
- Heading: Playfair Display (elegant serif for brand identity)
- Body: DM Sans (clean, readable sans-serif)
- Mono: IBM Plex Mono (code and technical text)

## Key Features

- Photo upload and personal image library management
- Page arrangement with flexible layout compositions (full-page, partial, custom)
- Custom cover design with title and photo selection
- Theme and style selection (color palettes, fonts, decorative elements)
- Interactive page-turning book preview simulation
- Draft saving and seamless resume from profile
- Smooth checkout with order confirmation and delivery tracking

## Shell Behavior

Pages **with** the app shell (persistent header nav): Authentication, Profile Drafts, Checkout

Pages **without** the app shell (standalone, fullscreen): Landing, Book Designer, Book Preview

## Implementation Sequence

Build this product in milestones:

1. **Shell** — Set up design tokens and application shell
2. **Landing** — Public marketing page
3. **Authentication** — Sign in / sign up
4. **Book Designer** — Core creation workspace
5. **Book Preview** — Interactive page-flip simulation
6. **Profile Drafts** — User's book library
7. **Checkout** — Order and payment flow

Each milestone has a dedicated instruction document in `product-plan/instructions/`.
