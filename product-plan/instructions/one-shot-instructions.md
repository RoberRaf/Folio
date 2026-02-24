# Folio — Complete Implementation Instructions

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

## Testing

Each section includes a `tests.md` file with UI behavior test specs. These are **framework-agnostic** — adapt them to your testing setup.

**For each section:**
1. Read `product-plan/sections/[section-id]/tests.md`
2. Write tests for key user flows (success and failure paths)
3. Implement the feature to make tests pass
4. Refactor while keeping tests green

---

## Product Overview

Folio is a personalized photo book creation app that lets users upload photos, arrange them into professionally designed books, preview with realistic page-flipping, and order physical copies delivered to their door.

### Planned Sections

1. **Landing** — Public-facing marketing page with hero, features, and footer
2. **Authentication** — Sign in / sign up with email or Google OAuth
3. **Book Designer** — Core creation workspace with three-panel layout
4. **Book Preview** — Immersive page-flipping simulation
5. **Profile & Drafts** — Personal dashboard for managing book projects
6. **Checkout** — Single-page order flow with confirmation

### Product Entities

- **User** — Registered account with profile info
- **Book** — A photo book project with pages, theme, and status
- **Page** — Individual page in a book with optional photo
- **Photo** — Uploaded image in user's library
- **Order** — Purchase record with shipping and payment details

### Design System

**Colors:**
- Primary: `rose` — Buttons, links, key accents
- Secondary: `pink` — Tags, highlights, secondary elements
- Neutral: `stone` — Backgrounds, text, borders

**Typography:**
- Heading: Playfair Display (serif)
- Body: DM Sans (sans-serif)
- Mono: IBM Plex Mono (monospace)

### Implementation Sequence

Build this product in milestones:

1. **Shell** — Design tokens and application shell
2. **Landing** — Public marketing page
3. **Authentication** — Sign in and sign up
4. **Book Designer** — Core creation workspace
5. **Book Preview** — Page-flipping preview
6. **Profile & Drafts** — User dashboard
7. **Checkout** — Order flow and confirmation

---

# Milestone 1: Shell

> **Prerequisites:** None

## Goal

Set up the design tokens and application shell — the persistent chrome that wraps all sections.

## What to Implement

### 1. Design Tokens

Configure your styling system with these tokens:

- See `product-plan/design-system/tokens.css` for CSS custom properties
- See `product-plan/design-system/tailwind-colors.md` for Tailwind configuration
- See `product-plan/design-system/fonts.md` for Google Fonts setup

**Colors:**
- **Primary:** `rose` — Buttons, links, key accents
- **Secondary:** `pink` — Tags, highlights, secondary elements
- **Neutral:** `stone` — Backgrounds, text, borders

**Typography:**
- **Headings:** Playfair Display (serif)
- **Body:** DM Sans (sans-serif)
- **Mono:** IBM Plex Mono (monospace)

### 2. Application Shell

Copy the shell components from `product-plan/shell/components/`:

- `AppShell.tsx` — Main layout wrapper with sticky header and content area
- `MainNav.tsx` — Navigation with links and "New Book" CTA
- `UserMenu.tsx` — User menu dropdown with avatar, name, logout

**Navigation:**

| Nav Item | Route |
|----------|-------|
| Designer | `/designer` |
| My Books | `/profile` |
| New Book (CTA) | Create new book action |

**Shell Usage:**

| Section | Shell |
|---------|-------|
| Landing | No (standalone) |
| Authentication | Yes |
| Book Designer | No (standalone) |
| Book Preview | No (standalone) |
| Profile & Drafts | Yes |
| Checkout | Yes |

**Dependencies:** `lucide-react`, `shadcn/ui DropdownMenu` (or equivalent)

## Files to Reference

- `product-plan/design-system/` — Design tokens
- `product-plan/shell/README.md` — Shell design intent
- `product-plan/shell/components/` — Shell React components

## Done When

- [ ] Design tokens configured (colors, fonts)
- [ ] Google Fonts loaded
- [ ] Shell renders with sticky header (64px)
- [ ] Navigation links to correct routes
- [ ] User menu with avatar/initials fallback and logout
- [ ] Shell only wraps sections marked shell: true
- [ ] Responsive on mobile, dark mode support

---

# Milestone 2: Landing Page

> **Prerequisites:** Milestone 1 (Shell) complete

## Goal

Implement the Landing Page — public-facing marketing page that converts visitors.

## Overview

Visually rich marketing page with hero section (headline, CTA), three-step feature showcase (Upload → Arrange → Order), and footer. Standalone page — no shell.

**Key Functionality:**
- Full-width hero with "Create Your Book" CTA
- Three-step feature showcase with icons
- Footer with brand, contact, social links

## Components Provided

- `LandingPage` — Root wrapper
- `HeroSection` — Full-width dark hero with CTA and book mockup
- `FeaturesSection` — Three-column step cards
- `FooterSection` — Dark footer with brand, email, social links

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onCreateBook` | User clicks "Create Your Book" CTA |

## User Flows

1. **Hero CTA**: Visitor clicks "Create Your Book" → navigates to auth/signup
2. **Browse Features**: Visitor scrolls to learn the three-step workflow
3. **Footer Links**: Social links open in new tab, email opens mail client

## Testing

See `product-plan/sections/landing/tests.md`

## Files to Reference

- `product-plan/sections/landing/` — README, tests, components, types, sample data

## Done When

- [ ] Landing page renders at root route (no shell)
- [ ] Hero with headline, subheadline, CTA
- [ ] Feature cards in responsive grid
- [ ] Footer with brand, email, social links
- [ ] Responsive and dark mode support

---

# Milestone 3: Authentication

> **Prerequisites:** Milestone 1 (Shell) complete

## Goal

Implement Authentication — sign in / sign up with email and Google OAuth.

## Overview

Split-panel auth page: brand panel (left, desktop only) + auth form (right). Toggle between Sign In and Sign Up modes. Google OAuth available on both.

**Key Functionality:**
- Toggle Sign In / Sign Up modes
- Email/password authentication
- Google OAuth
- Inline validation and error messages
- Loading state on submit

## Components Provided

- `AuthPage` — Split-panel layout with brand panel and auth form

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onSignIn` | Sign in form submitted (email, password) |
| `onSignUp` | Sign up form submitted (email, password, name) |
| `onGoogleAuth` | "Continue with Google" clicked |
| `onToggleMode` | Mode switch toggled |

## User Flows

1. **Sign In**: Enter email + password → authenticate → redirect to profile
2. **Sign Up**: Toggle to sign up → add display name → create account
3. **Google OAuth**: Click "Continue with Google" → OAuth flow
4. **Error Handling**: Invalid credentials → inline error, form preserved

## Testing

See `product-plan/sections/authentication/tests.md`

## Files to Reference

- `product-plan/sections/authentication/` — README, tests, components, types, sample data

## Done When

- [ ] Auth page renders within app shell
- [ ] Sign In / Sign Up mode toggle works
- [ ] Email/password and Google OAuth functional
- [ ] Loading and error states handled
- [ ] Brand panel hidden on mobile
- [ ] Dark mode support

---

# Milestone 4: Book Designer

> **Prerequisites:** Milestones 1-3 complete

## Goal

Implement the Book Designer — the core creation workspace.

## Overview

Three-panel creation workspace: page thumbnails (left), page preview (center), image library (right). Users build photo books page by page. Standalone — no shell.

**Key Functionality:**
- Place and remove photos on pages
- Navigate, reorder, add, and remove pages
- Change book theme
- Upload photos with progress
- Preview finished book

## Components Provided

- `BookDesigner` — Root workspace with header and 3-panel layout
- `PagePreview` — Full-detail page view with theme picker
- `PageThumbnailStrip` — Scrollable thumbnails with reorder controls
- `ImageLibrary` — Tabbed panel: "My Photos" and "Suggested"

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onPlacePhoto` | Photo placed on page (pageId, photoId) |
| `onRemovePhoto` | Photo removed from page (pageId) |
| `onUploadPhotos` | Files uploaded (files) |
| `onAddPage` | New page added |
| `onRemovePage` | Page removed (pageId) |
| `onReorderPage` | Page reordered (pageId, direction) |
| `onChangeTheme` | Theme changed (theme) |
| `onSelectPage` | Page selected (pageId) |
| `onPreviewBook` | "Preview Book" clicked |

## User Flows

1. **Place Photo**: Select page → click photo in library → placed on page
2. **Manage Pages**: Add/remove/reorder pages via thumbnail controls
3. **Upload Photos**: Click upload → select files → progress shown → photos in library
4. **Preview**: Click "Preview Book" → navigate to Book Preview

## Testing

See `product-plan/sections/book-designer/tests.md`

## Files to Reference

- `product-plan/sections/book-designer/` — README, tests, components, types, sample data

## Done When

- [ ] Three-panel layout renders (standalone, no shell)
- [ ] Photo placement and removal works
- [ ] Page management (add, remove, reorder)
- [ ] Theme picker functional
- [ ] Photo upload with progress
- [ ] "Preview Book" navigates correctly
- [ ] Empty states render properly
- [ ] Responsive and dark mode support

---

# Milestone 5: Book Preview

> **Prerequisites:** Milestones 1-4 complete

## Goal

Implement the Book Preview — immersive page-flipping experience.

## Overview

Fullscreen-like standalone page with realistic page-turn animations (react-pageflip-enhanced). Users review their completed book before ordering.

**Key Functionality:**
- Page-flip animation with drag/click
- Sequential navigation (Previous/Next)
- Cover and back cover rendering
- Action buttons: Order, Back to Designer, Save Draft

## Components Provided

- `BookPreview` — Fullscreen preview with toolbar and flip book

## Dependencies

- `react-pageflip-enhanced` — Install separately

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onOrderBook` | "Order This Book" clicked |
| `onBackToDesigner` | "Back to Designer" clicked |
| `onSaveDraft` | "Save Draft" clicked |

## User Flows

1. **Browse Book**: Flip through cover → interior pages → back cover
2. **Order**: Click "Order This Book" → navigate to Checkout
3. **Edit**: Click "Back to Designer" → return to Book Designer
4. **Save**: Click "Save Draft" → save and go to Profile

## Testing

See `product-plan/sections/book-preview/tests.md`

## Files to Reference

- `product-plan/sections/book-preview/` — README, tests, components, types, sample data

## Done When

- [ ] Standalone page renders with page-flip animation
- [ ] Cover shows title and photo, back cover shows branding
- [ ] Navigation controls work (Prev/Next)
- [ ] All action buttons trigger callbacks
- [ ] Empty pages show placeholders
- [ ] Responsive and dark mode support

---

# Milestone 6: Profile & Drafts

> **Prerequisites:** Milestones 1-4 complete

## Goal

Implement the Profile & Drafts dashboard — personal book management.

## Overview

User dashboard within the shell showing profile info and a responsive grid of book projects with status badges. Supports editing, removing (with confirmation), and creating books.

**Key Functionality:**
- Profile header with avatar (initials fallback), name, email
- Book grid with cover thumbnails and status badges
- Draft (amber) and Ordered (rose) status indicators
- Remove with confirmation dialog
- Empty state with "Create your first book" CTA

## Components Provided

- `ProfileDraftsPage` — Full page with profile header and grid
- `BookCard` — Book card with status badge and remove button
- `ConfirmDialog` — Modal dialog for delete confirmation

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onEditBook` | Book card clicked (bookId) |
| `onRemoveBook` | Deletion confirmed (bookId) |
| `onCreateBook` | "Create" CTA clicked |

## User Flows

1. **View Books**: See all books in grid with status badges
2. **Edit**: Click book card → navigate to Book Designer
3. **Remove**: Click remove → confirm dialog → book deleted
4. **Empty State**: No books → CTA to create first book

## Testing

See `product-plan/sections/profile-drafts/tests.md`

## Files to Reference

- `product-plan/sections/profile-drafts/` — README, tests, components, types, sample data

## Done When

- [ ] Renders within app shell
- [ ] Profile header with avatar/initials, name, email
- [ ] Book grid with status badges (amber draft, rose ordered)
- [ ] Click book → navigate to designer
- [ ] Remove with confirmation dialog
- [ ] Empty state with CTA
- [ ] Responsive grid and dark mode support

---

# Milestone 7: Checkout

> **Prerequisites:** All prior milestones complete

## Goal

Implement Checkout — single-page order flow with confirmation.

## Overview

Complete purchasing experience within the shell: order summary, shipping address, payment form, and celebratory confirmation with confetti. Features quantity adjustment, card auto-formatting, brand detection, and inline error handling.

**Key Functionality:**
- Order summary with quantity adjustment and price breakdown
- Shipping address form
- Payment form with auto-formatting and brand detection
- Sticky bottom bar with total and "Place Order"
- Confirmation screen with confetti, order number, delivery date
- Inline payment error handling

## Components Provided

- `CheckoutPage` — Main checkout with sections and sticky submit
- `OrderSummaryCard` — Book info, quantity, pricing
- `ShippingAddressForm` — Standard address fields
- `PaymentForm` — Card number, expiry, CVC with brand detection
- `OrderConfirmation` — Success screen with confetti and details

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onQuantityChange` | Quantity +/- clicked (quantity) |
| `onShippingAddressChange` | Address fields updated (address) |
| `onPlaceOrder` | "Place Order" clicked (payment data) |
| `onViewMyBooks` | "View My Books" on confirmation clicked |

## User Flows

1. **Complete Purchase**: Review order → fill address → enter payment → place order → confetti confirmation
2. **Payment Error**: Place order → declined → inline error, form preserved → retry
3. **Return to Profile**: Confirmation → "View My Books" → Profile page

## Testing

See `product-plan/sections/checkout/tests.md`

## Files to Reference

- `product-plan/sections/checkout/` — README, tests, components, types, sample data

## Done When

- [ ] Renders within app shell
- [ ] Order summary with quantity adjustment and pricing
- [ ] Shipping address form with validation
- [ ] Card auto-formatting and brand detection
- [ ] "Place Order" with loading and error states
- [ ] Confirmation with confetti, order number, delivery date
- [ ] "View My Books" navigates to Profile
- [ ] Sticky bottom bar, responsive, dark mode
