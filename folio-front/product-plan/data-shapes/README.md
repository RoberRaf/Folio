# UI Data Shapes

These types define the shape of data that the UI components expect to receive as props. They represent the **frontend contract** — what the components need to render correctly.

How you model, store, and fetch this data on the backend is an implementation decision. You may combine, split, or extend these types to fit your architecture.

## Entities

- **HeroData** — Landing page hero section content (used in: landing)
- **FeatureItem** — Feature highlight card for the landing page (used in: landing)
- **FooterData** — Footer contact and social links (used in: landing)
- **AuthFormState** — Authentication form state with mode, fields, and errors (used in: authentication)
- **AuthError** — Named auth error with user-facing message (used in: authentication)
- **Photo** — An image in the user's library (used in: book-designer, book-preview)
- **Page** — A single page within a book (used in: book-designer, book-preview)
- **Book** — A photo book project (used in: book-designer, profile-drafts, checkout)
- **SuggestedImage** — Curated cover image option (used in: book-designer)
- **PreviewBook** — Book with cover details for preview (used in: book-preview)
- **User** — Authenticated account holder (used in: profile-drafts)
- **OrderSummary** — Price breakdown for an order (used in: checkout)
- **ShippingAddress** — Delivery address (used in: checkout)
- **PaymentMethod** — Card payment details (used in: checkout)
- **OrderConfirmation** — Post-purchase confirmation details (used in: checkout)

## Per-Section Types

Each section includes its own `types.ts` with the full interface definitions:

- `sections/landing/types.ts`
- `sections/authentication/types.ts`
- `sections/book-designer/types.ts`
- `sections/book-preview/types.ts`
- `sections/profile-drafts/types.ts`
- `sections/checkout/types.ts`

## Combined Reference

See `overview.ts` for all entity types aggregated in one file.
