# UI Data Shapes

These types define the shape of data that the UI components expect to receive as props. They represent the **frontend contract** — what the components need to render correctly.

How you model, store, and fetch this data on the backend is an implementation decision. You may combine, split, or extend these types to fit your architecture.

## Entities

- **HeroData** — Landing page hero content (used in: landing)
- **FeatureItem** — Individual feature card for landing page (used in: landing)
- **FooterData** — Footer content with email and social links (used in: landing)
- **AuthError** — Authentication error with code and message (used in: authentication)
- **AuthFormState** — Form state for the auth page (used in: authentication)
- **Photo** — An uploaded user photo with status and URL (used in: book-designer, book-preview)
- **Page** — A single page in a book with its photo slot (used in: book-designer, book-preview)
- **Book** — A photo book project with theme, status, and pages (used in: book-designer, book-preview, profile-drafts, checkout)
- **SuggestedImage** — A curated cover image option (used in: book-designer)
- **PreviewBook** — Book data shaped for the preview experience, with cover photo (used in: book-preview)
- **User** — A logged-in user with name, email, and avatar (used in: profile-drafts)
- **OrderSummary** — Price breakdown for an order (used in: checkout)
- **ShippingAddress** — Delivery address fields (used in: checkout)
- **PaymentMethod** — Card details for display (used in: checkout)
- **OrderConfirmation** — Confirmation details after successful order (used in: checkout)

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
