# Milestone 4: Book Designer

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestones 1-3 complete (Shell, Landing, Auth)

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

Implement the Book Designer — the core creation workspace where users build photo books page by page.

## Overview

The Book Designer is Folio's core creation workspace. Users build their photo book through a three-panel layout: page thumbnails on the left for navigation and reordering, a large page preview in the center for detailed editing, and an image library on the right for browsing and placing photos. This is a standalone page — no shell.

**Key Functionality:**
- Place photos on pages from image library
- Remove photos from pages
- Navigate between pages via thumbnail strip
- Reorder pages with up/down controls
- Add and remove pages
- Change book theme
- Upload new photos with progress indication
- Preview the finished book

## Components Provided

Copy from `product-plan/sections/book-designer/components/`:

- `BookDesigner` — Root workspace with header and three-panel layout
- `PagePreview` — Full-detail preview of selected page, theme picker
- `PageThumbnailStrip` — Scrollable strip of page thumbnails with controls
- `ImageLibrary` — Tabbed panel with "My Photos" and "Suggested" grids

## Props Reference

**Data props:**

```typescript
interface Book {
  id: string
  title: string
  theme: string
  status: string
  pages: Page[]
}

interface Page {
  id: string
  pageNumber: number
  photoId: string | null
  photoUrl: string | null
  type: 'cover' | 'back-cover' | 'interior'
}

interface Photo {
  id: string
  url: string
  thumbnailUrl: string
  name: string
  uploadedAt: string
}

interface SuggestedImage {
  id: string
  url: string
  thumbnailUrl: string
  category: string
  tags: string[]
}
```

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onPlacePhoto` | User places a photo on a page (pageId, photoId) |
| `onRemovePhoto` | User removes a photo from a page (pageId) |
| `onUploadPhotos` | User uploads new photos (files) |
| `onAddPage` | User adds a new page |
| `onRemovePage` | User removes a page (pageId) |
| `onReorderPage` | User reorders a page (pageId, direction) |
| `onChangeTheme` | User changes the book theme (theme) |
| `onSelectPage` | User selects a page to edit (pageId) |
| `onPreviewBook` | User clicks "Preview Book" |

## Expected User Flows

### Flow 1: Place a Photo

1. User selects a page from the thumbnail strip
2. User clicks a photo in the image library
3. Photo appears on the selected page in the preview
4. **Outcome:** Page now shows the selected photo

### Flow 2: Manage Pages

1. User clicks "Add Page" to add a new blank page
2. User uses up/down arrows to reorder pages
3. User clicks remove on a page to delete it
4. **Outcome:** Page list updated accordingly

### Flow 3: Upload Photos

1. User clicks upload button in "My Photos" tab
2. File picker opens, user selects images
3. Upload progress indicator appears
4. **Outcome:** New photos appear in the library

### Flow 4: Preview Book

1. User clicks "Preview Book" CTA
2. **Outcome:** Navigation to Book Preview page

## Empty States

- **No photos uploaded:** "My Photos" tab shows empty state with upload CTA
- **Empty page (no photo):** Dashed border with placeholder prompt
- **No pages:** Thumbnail strip shows only "Add Page" button

## Testing

See `product-plan/sections/book-designer/tests.md` for comprehensive test specs.

## Files to Reference

- `product-plan/sections/book-designer/README.md` — Feature overview
- `product-plan/sections/book-designer/tests.md` — UI behavior test specs
- `product-plan/sections/book-designer/components/` — React components
- `product-plan/sections/book-designer/types.ts` — TypeScript interfaces
- `product-plan/sections/book-designer/sample-data.json` — Test data

## Done When

- [ ] Designer renders as standalone page (no shell)
- [ ] Three-panel layout: thumbnails, preview, library
- [ ] Photos can be placed on pages from library
- [ ] Photos can be removed from pages
- [ ] Pages can be added, removed, and reordered
- [ ] Theme picker changes book theme
- [ ] Photo upload with progress indication
- [ ] "Preview Book" navigates to Book Preview
- [ ] Selected page highlighted in thumbnail strip
- [ ] Empty states render properly
- [ ] Responsive (panels stack on mobile)
- [ ] Dark mode support
