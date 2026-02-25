# Profile & Drafts

## Overview
Personal dashboard where users view their account info and manage photo book projects. Shows all books in a grid with status badges (Draft/Ordered). Supports editing and deleting books.

## Shell
This section uses the application shell (shell: true).

## Components

| Component | Description |
|-----------|-------------|
| `ProfileDraftsPage` | Full page with profile header and book grid |
| `BookCard` | Book thumbnail card with cover image, title, status badge, and remove button |
| `ConfirmDialog` | Modal dialog for delete confirmation |

## Props Interface

```typescript
interface ProfileDraftsProps {
  user: User
  books: Book[]
  onEditBook: (bookId: string) => void
  onRemoveBook: (bookId: string) => void
  onCreateBook: () => void
}
```

## User Flows

1. User sees profile header with avatar, name, and email
2. User views grid of books with status badges
3. Click book thumbnail → opens in Book Designer
4. Click remove button → confirmation dialog appears
5. Confirm removal → book is deleted
6. Empty state shows "Create your first book" CTA

## Tests

### Visual
- [ ] Profile header shows avatar (fallback to initials), name, email
- [ ] Books display in responsive grid with cover thumbnails
- [ ] Draft badge shows amber dot, Ordered badge shows rose dot
- [ ] Empty state shows decorative book stack icon and CTA button
- [ ] Books with no cover show placeholder with title

### Interaction
- [ ] Click book card calls onEditBook with book ID
- [ ] Remove button overlay visible on hover (desktop) or always (mobile)
- [ ] Remove triggers ConfirmDialog before deletion
- [ ] Confirm calls onRemoveBook; Cancel dismisses dialog
- [ ] Empty state CTA calls onCreateBook

### Responsive
- [ ] Grid: 2 cols on mobile, 3 on sm, 4 on md, 5 on lg
- [ ] Remove button always visible on touch devices
