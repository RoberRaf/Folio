# Milestone 6: Profile & Drafts

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestones 1-4 complete (Shell, Landing, Auth, Book Designer)

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

Implement the Profile & Drafts dashboard — a personal space where users manage their photo book projects.

## Overview

Profile & Drafts serves as the user's personal dashboard. It shows their profile information (avatar, name, email) and a grid of all their photo book projects with status indicators. Users can click books to edit, remove books with confirmation, and create new books from the empty state.

**Key Functionality:**
- Profile header with avatar (initials fallback), name, and email
- Responsive book grid with cover thumbnails and status badges
- Status indicators: Draft (amber) and Ordered (rose)
- Remove book with confirmation dialog
- Empty state with decorative visual and "Create your first book" CTA

## Components Provided

Copy from `product-plan/sections/profile-drafts/components/`:

- `ProfileDraftsPage` — Full page with profile header and book grid
- `BookCard` — Book thumbnail card with status badge and remove button
- `ConfirmDialog` — Modal dialog for delete confirmation

## Props Reference

**Data props:**

```typescript
interface User {
  id: string
  name: string
  email: string
  avatarUrl: string | null
}

interface ProfileBook {
  id: string
  title: string
  status: 'draft' | 'ordered'
  coverUrl: string | null
  pageCount: number
  updatedAt: string
}
```

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onEditBook` | User clicks a book card (bookId) |
| `onRemoveBook` | User confirms book deletion (bookId) |
| `onCreateBook` | User clicks "Create" CTA (empty state or header) |

## Expected User Flows

### Flow 1: View Books

1. User navigates to Profile page (within shell)
2. Profile header shows avatar, name, email
3. Book grid shows all books with status badges
4. **Outcome:** User sees all their projects at a glance

### Flow 2: Edit a Book

1. User clicks on a book card
2. **Outcome:** Navigates to Book Designer for that book

### Flow 3: Remove a Book

1. User hovers over a book card, remove button appears
2. User clicks remove button
3. Confirmation dialog appears with book title
4. User clicks "Confirm"
5. **Outcome:** Book removed from grid

### Flow 4: First-Time Experience

1. User with no books sees empty state
2. Decorative book icon and "Create your first book" message
3. User clicks CTA
4. **Outcome:** New book creation initiated

## Empty States

- **No books:** Full empty state with icon, text, and CTA
- **No avatar:** Initials fallback from user name

## Testing

See `product-plan/sections/profile-drafts/tests.md` for test specs.

## Files to Reference

- `product-plan/sections/profile-drafts/README.md` — Feature overview
- `product-plan/sections/profile-drafts/tests.md` — UI behavior test specs
- `product-plan/sections/profile-drafts/components/` — React components
- `product-plan/sections/profile-drafts/types.ts` — TypeScript interfaces
- `product-plan/sections/profile-drafts/sample-data.json` — Test data

## Done When

- [ ] Profile page renders within app shell
- [ ] Profile header shows avatar (or initials fallback), name, email
- [ ] Book grid displays with cover thumbnails and status badges
- [ ] Draft badge: amber dot, Ordered badge: rose dot
- [ ] Click book card → navigates to Book Designer
- [ ] Remove button visible on hover (desktop) / always (mobile)
- [ ] Confirmation dialog before deletion
- [ ] Empty state with icon and "Create your first book" CTA
- [ ] Responsive grid: 2 cols (mobile), 3 (sm), 4 (md), 5 (lg)
- [ ] Dark mode support
