# Milestone 5: Book Preview

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestones 1-4 complete (especially Book Designer)

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

Implement the Book Preview — an immersive page-flipping experience where users view their completed photo book before ordering.

## Overview

The Book Preview provides a standalone, fullscreen-like experience where users flip through their completed photo book with realistic page-turn animations. After reviewing, they can order, go back to edit, or save as a draft. This is a standalone page — no shell.

**Key Functionality:**
- Realistic page-flip animation via react-pageflip-enhanced
- Sequential navigation (Previous/Next buttons)
- Front cover with title and photo, back cover with branding
- Interior pages showing placed photos
- Action buttons: Order, Back to Designer, Save Draft

## Components Provided

Copy from `product-plan/sections/book-preview/components/`:

- `BookPreview` — Fullscreen preview with toolbar, flip book, and navigation controls

## Dependencies

- `react-pageflip-enhanced` — Page flip animation library (install separately)

## Props Reference

**Data props:**

```typescript
interface PreviewBook {
  id: string
  title: string
  theme: string
  coverPhotoUrl: string | null
  pages: PreviewPage[]
}

interface PreviewPage {
  id: string
  type: 'cover' | 'back-cover' | 'interior'
  photoUrl: string | null
  pageNumber: number
}
```

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onOrderBook` | User clicks "Order This Book" |
| `onBackToDesigner` | User clicks "Back to Designer" |
| `onSaveDraft` | User clicks "Save Draft" |

## Expected User Flows

### Flow 1: Browse the Book

1. Preview opens showing the front cover
2. User clicks Next or drags page corner to flip
3. User progresses through interior pages
4. User reaches back cover
5. **Outcome:** User has reviewed all pages

### Flow 2: Order the Book

1. User clicks "Order This Book"
2. **Outcome:** Navigation to Checkout page

### Flow 3: Return to Edit

1. User clicks "Back to Designer"
2. **Outcome:** Navigation back to Book Designer

### Flow 4: Save as Draft

1. User clicks "Save Draft"
2. **Outcome:** Book saved, user navigated to Profile

## Empty States

- **Pages without photos:** Show blank placeholder (not broken image)
- **Minimal book (cover + back only):** Nav buttons disabled, still renders

## Testing

See `product-plan/sections/book-preview/tests.md` for test specs.

## Files to Reference

- `product-plan/sections/book-preview/README.md` — Feature overview
- `product-plan/sections/book-preview/tests.md` — UI behavior test specs
- `product-plan/sections/book-preview/components/` — React components
- `product-plan/sections/book-preview/types.ts` — TypeScript interfaces
- `product-plan/sections/book-preview/sample-data.json` — Test data

## Done When

- [ ] Preview renders as standalone page (no shell)
- [ ] Page-flip animation works (react-pageflip-enhanced)
- [ ] Front cover shows book title and cover photo
- [ ] Interior pages show placed photos
- [ ] Empty pages show blank placeholders
- [ ] Back cover shows Folio branding
- [ ] Previous/Next navigation works
- [ ] "Order This Book" navigates to Checkout
- [ ] "Back to Designer" returns to editor
- [ ] "Save Draft" saves and navigates to Profile
- [ ] Responsive on mobile
- [ ] Dark mode support
