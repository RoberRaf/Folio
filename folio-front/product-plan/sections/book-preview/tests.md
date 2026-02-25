# Test Specs: Book Preview

These test specs are **framework-agnostic**. Adapt them to your testing setup.

## Overview

Book Preview provides an immersive page-flipping simulation where users experience their completed photo book. Uses react-pageflip-enhanced for realistic page turn animations. Tests cover rendering, page navigation, and action buttons.

---

## User Flow Tests

### Flow 1: Browse Through Book

**Scenario:** User flips through all pages of their book.

#### Success Path

**Setup:**
- Book with cover, multiple interior pages, and back cover

**Steps:**
1. Preview opens showing the front cover
2. User clicks Next button or drags page corner
3. Page flips to reveal first interior page
4. User continues clicking Next through all pages
5. User reaches the back cover

**Expected Results:**
- [ ] Book starts on front cover showing title and cover photo
- [ ] Each page flip shows realistic animation
- [ ] Interior pages display placed photos at full quality
- [ ] Page numbers visible on interior pages
- [ ] Back cover shows Folio branding
- [ ] Next button disabled on last page (back cover)

---

### Flow 2: Navigate Backwards

**Scenario:** User navigates back to a previous page.

**Steps:**
1. User is on an interior page
2. User clicks Previous button

**Expected Results:**
- [ ] Page flips backward with animation
- [ ] Previous button disabled when on front cover

---

### Flow 3: Order the Book

**Scenario:** User decides to order after previewing.

**Steps:**
1. User clicks "Order This Book" button

**Expected Results:**
- [ ] `onOrderBook` callback is called
- [ ] User navigates to checkout

---

### Flow 4: Return to Designer

**Scenario:** User wants to make edits.

**Steps:**
1. User clicks "Back to Designer" button

**Expected Results:**
- [ ] `onBackToDesigner` callback is called
- [ ] User returns to Book Designer

---

### Flow 5: Save as Draft

**Scenario:** User saves progress without ordering.

**Steps:**
1. User clicks "Save Draft" button

**Expected Results:**
- [ ] `onSaveDraft` callback is called

---

## Empty State Tests

### Pages Without Photos

**Setup:** Book has some pages with no photo placed (photoId is null)

**Expected Results:**
- [ ] Empty pages show blank placeholder (not broken image)
- [ ] Empty pages are still flippable

### Single Page Book

**Setup:** Book with only a cover page

**Expected Results:**
- [ ] Cover renders correctly
- [ ] Both nav buttons disabled (no pages to flip to)

---

## Component Interaction Tests

### BookPreview

**Renders correctly:**
- [ ] Toolbar with action buttons visible
- [ ] Book centered in viewport
- [ ] Prev/Next navigation controls visible
- [ ] Page counter shows current position (e.g., "1 / 8")

**Navigation controls:**
- [ ] Previous button calls page flip backward
- [ ] Next button calls page flip forward
- [ ] Buttons have clear icons or labels

**Action buttons:**
- [ ] "Order This Book" button visible and calls onOrderBook
- [ ] "Back to Designer" button visible and calls onBackToDesigner
- [ ] "Save Draft" button visible and calls onSaveDraft

---

## Edge Cases

- [ ] Book with only cover and back cover (2 pages) — single flip
- [ ] Rapid clicking Next/Prev doesn't break animation
- [ ] Very large photos don't cause performance issues
- [ ] Book title with special characters renders correctly
- [ ] Callbacks not provided — buttons still render but are no-ops

---

## Responsive Tests

- [ ] Book scales proportionally on smaller screens
- [ ] Navigation buttons reposition for mobile
- [ ] Action buttons accessible on all screen sizes
- [ ] Touch gestures work for page flipping on mobile
- [ ] Mobile shows Save Draft button at bottom

---

## Accessibility Checks

- [ ] Navigation buttons have accessible labels ("Previous page", "Next page")
- [ ] Current page announced to screen readers
- [ ] Action buttons have descriptive accessible names
- [ ] Page flip animation respects prefers-reduced-motion

---

## Sample Test Data

```typescript
const mockPreviewBook = {
  id: "book-1",
  title: "Summer Memories",
  theme: "Classic",
  coverPhotoUrl: "/photos/cover.jpg",
  pages: [
    { id: "p1", type: "cover", photoUrl: "/photos/cover.jpg", pageNumber: 1 },
    { id: "p2", type: "interior", photoUrl: "/photos/beach.jpg", pageNumber: 2 },
    { id: "p3", type: "interior", photoUrl: null, pageNumber: 3 },
    { id: "p4", type: "interior", photoUrl: "/photos/sunset.jpg", pageNumber: 4 },
    { id: "p5", type: "back-cover", photoUrl: null, pageNumber: 5 }
  ]
};

const mockMinimalBook = {
  id: "book-2",
  title: "Quick Book",
  theme: "Modern",
  coverPhotoUrl: "/photos/cover.jpg",
  pages: [
    { id: "p1", type: "cover", photoUrl: "/photos/cover.jpg", pageNumber: 1 },
    { id: "p2", type: "back-cover", photoUrl: null, pageNumber: 2 }
  ]
};
```
