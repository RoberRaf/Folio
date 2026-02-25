# Test Specs: Profile & Drafts

These test specs are **framework-agnostic**. Adapt them to your testing setup.

## Overview

Profile & Drafts is a personal dashboard where users view account info and manage their photo book projects. Features a book grid with status badges, edit/delete actions, and empty state CTA.

---

## User Flow Tests

### Flow 1: View Profile and Books

**Scenario:** User visits their profile page and sees their books.

#### Success Path

**Setup:**
- User data with name, email, avatar
- Array of books with mixed statuses (draft, ordered)

**Steps:**
1. User navigates to profile page
2. User sees profile header with avatar, name, and email
3. User sees grid of book cards below

**Expected Results:**
- [ ] Profile header shows user avatar (or initials fallback)
- [ ] User name displayed prominently
- [ ] User email shown below name
- [ ] Book cards render in responsive grid
- [ ] Each card shows cover thumbnail, title, and status badge

---

### Flow 2: Edit a Book

**Scenario:** User clicks on a book to resume editing.

**Steps:**
1. User sees their book grid
2. User clicks on a book card

**Expected Results:**
- [ ] `onEditBook` is called with the book's ID
- [ ] User navigates to Book Designer for that book

---

### Flow 3: Remove a Book

**Scenario:** User deletes a book with confirmation.

#### Success Path

**Steps:**
1. User hovers over a book card (desktop) or taps (mobile)
2. Remove button becomes visible
3. User clicks remove button
4. Confirmation dialog appears: "Are you sure you want to remove this book?"
5. User clicks "Confirm" / "Delete"

**Expected Results:**
- [ ] ConfirmDialog appears with warning message
- [ ] Dialog shows book title for clarity
- [ ] Clicking Confirm calls `onRemoveBook` with book ID
- [ ] Book removed from grid

#### Failure Path: User Cancels Deletion

**Steps:**
1. User clicks remove button
2. Confirmation dialog appears
3. User clicks "Cancel"

**Expected Results:**
- [ ] Dialog closes
- [ ] Book remains in grid unchanged
- [ ] `onRemoveBook` is NOT called

---

### Flow 4: Create First Book (Empty State)

**Scenario:** User with no books sees empty state.

**Steps:**
1. User navigates to profile page
2. No books exist

**Expected Results:**
- [ ] Empty state message visible: "Create your first book" or similar
- [ ] Decorative book stack icon shown
- [ ] CTA button "Create Your First Book" is visible
- [ ] Clicking CTA calls `onCreateBook`

---

## Empty State Tests

### No Books

**Setup:** `books` array is empty (`[]`)

**Expected Results:**
- [ ] Profile header still renders with user info
- [ ] Book grid replaced with empty state component
- [ ] Empty state has decorative visual (book stack icon)
- [ ] Empty state has descriptive text and CTA
- [ ] CTA calls `onCreateBook` on click

### User Without Avatar

**Setup:** User has no `avatarUrl`

**Expected Results:**
- [ ] Avatar fallback shows user initials (from name)
- [ ] Initials use first letter of first and last name

---

## Component Interaction Tests

### ProfileDraftsPage

**Renders correctly:**
- [ ] Profile header at top with avatar, name, email
- [ ] Section title like "My Books" above grid
- [ ] Book grid below profile header
- [ ] "Create New Book" button somewhere accessible

### BookCard

**Renders correctly:**
- [ ] Cover image thumbnail (or placeholder if no cover)
- [ ] Book title
- [ ] Status badge with colored dot: amber for "Draft", rose for "Ordered"
- [ ] Page count or creation date (if displayed)

**User interactions:**
- [ ] Click card body calls `onEditBook` with book ID
- [ ] Remove button visible on hover (desktop)
- [ ] Remove button always visible on mobile/touch
- [ ] Remove button click stops propagation (doesn't trigger edit)

### ConfirmDialog

**Renders correctly:**
- [ ] Modal overlay darkens background
- [ ] Dialog centered on screen
- [ ] Warning message clearly states the action
- [ ] Two buttons: Cancel and Confirm/Delete

**User interactions:**
- [ ] Confirm button calls `onRemoveBook`
- [ ] Cancel button closes dialog
- [ ] Clicking overlay closes dialog
- [ ] Escape key closes dialog

---

## Edge Cases

- [ ] User with very long name — text truncates or wraps
- [ ] Book with very long title — card title truncates with ellipsis
- [ ] Book with no cover image — shows placeholder with title
- [ ] Large number of books (20+) — grid scrolls properly
- [ ] Transition from populated to empty (delete last book) — empty state appears
- [ ] Transition from empty to populated (create first book) — grid appears
- [ ] Remove button click doesn't bubble to card click handler

---

## Responsive Tests

- [ ] Grid: 2 columns on mobile, 3 on sm, 4 on md, 5 on lg
- [ ] Profile header stacks vertically on mobile
- [ ] Remove button always visible on touch devices
- [ ] Confirm dialog is not wider than viewport on mobile
- [ ] Empty state centers on all screen sizes

---

## Accessibility Checks

- [ ] Book cards are keyboard accessible (focusable, activatable)
- [ ] Remove button has accessible label: "Remove [book title]"
- [ ] ConfirmDialog traps focus when open
- [ ] Dialog returns focus to trigger element on close
- [ ] Status badges have text alternative (not color alone)
- [ ] Empty state CTA is keyboard accessible

---

## Sample Test Data

```typescript
const mockUser = {
  id: "user-1",
  name: "Jane Doe",
  email: "jane@example.com",
  avatarUrl: "/avatars/jane.jpg"
};

const mockUserNoAvatar = {
  id: "user-2",
  name: "John Smith",
  email: "john@example.com",
  avatarUrl: null
};

const mockBooks = [
  {
    id: "book-1",
    title: "Summer Vacation 2025",
    status: "draft",
    coverUrl: "/covers/summer.jpg",
    pageCount: 12,
    createdAt: "2025-01-15"
  },
  {
    id: "book-2",
    title: "Wedding Album",
    status: "ordered",
    coverUrl: "/covers/wedding.jpg",
    pageCount: 24,
    createdAt: "2024-12-01"
  }
];

const mockEmptyBooks: ProfileBook[] = [];
```
