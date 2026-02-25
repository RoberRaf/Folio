# Milestone 1: Shell

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** None

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

Copy the shell components from `product-plan/shell/components/` to your project:

- `AppShell.tsx` — Main layout wrapper with sticky header and content area
- `MainNav.tsx` — Navigation component with links and "New Book" CTA
- `UserMenu.tsx` — User menu dropdown with avatar, name, and logout

**Wire Up Navigation:**

| Nav Item | Route |
|----------|-------|
| Designer | `/designer` |
| My Books | `/profile` |
| New Book (CTA) | Create new book action |

**User Menu:**

The user menu expects:
- User name
- Avatar URL (optional, falls back to initials)
- Logout callback

**Shell Usage:**

Not all sections use the shell. Configure routing accordingly:

| Section | Shell |
|---------|-------|
| Landing | No (standalone) |
| Authentication | Yes |
| Book Designer | No (standalone) |
| Book Preview | No (standalone) |
| Profile & Drafts | Yes |
| Checkout | Yes |

**Dependencies:**

The shell components use these libraries:
- `lucide-react` — Icons
- `@radix-ui/react-dropdown-menu` or `shadcn/ui DropdownMenu` — User menu dropdown

## Files to Reference

- `product-plan/design-system/` — Design tokens
- `product-plan/shell/README.md` — Shell design intent
- `product-plan/shell/components/` — Shell React components

## Done When

- [ ] Design tokens are configured (colors, fonts)
- [ ] Google Fonts loaded (Playfair Display, DM Sans, IBM Plex Mono)
- [ ] Shell renders with sticky header (64px)
- [ ] Navigation links to correct routes
- [ ] "New Book" CTA button works
- [ ] User menu shows user info with avatar/initials fallback
- [ ] Logout action works
- [ ] Shell only wraps sections marked shell: true
- [ ] Responsive on mobile (hamburger menu or similar)
- [ ] Dark mode support
