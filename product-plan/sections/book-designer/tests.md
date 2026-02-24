# Test Specs: Book Designer

These test specs are **framework-agnostic**. Adapt them to your testing setup.

## Overview

The Book Designer is the core creation workspace with three panels: page preview (center), thumbnail strip (left), and image library (right). Tests cover photo placement, page management, theme switching, uploads, and navigation.

---

## User Flow Tests

### Flow 1: Place a Photo on a Page

**Scenario:** User selects a photo from the library and places it on the current page.

#### Success Path

**Setup:**
- Book with multiple pages, at least one empty
- Photo library with uploaded photos
- A page is selected

**Steps:**
1. User sees the selected page in the preview area
2. User clicks a photo in the "My Photos" tab of the image library
3. Photo is placed on the selected page

**Expected Results:**
- [ ] `onPlacePhoto` is called with the selected page ID and photo ID
- [ ] Preview updates to show the placed photo
- [ ] Photo thumbnail in library may show "used" indicator

#### Failure Path: Page Already Has Photo

**Steps:**
1. User clicks a photo when current page already has one

**Expected Results:**
- [ ] Photo replaces the existing one (or confirmation shown)
- [ ] `onPlacePhoto` called with new photo ID

---

### Flow 2: Remove a Photo from a Page

**Scenario:** User removes a photo from the current page.

**Steps:**
1. User views a page that has a photo placed
2. User clicks the remove/clear button on the page preview

**Expected Results:**
- [ ] `onRemovePhoto` is called with the page ID
- [ ] Page returns to empty state with dashed border placeholder

---

### Flow 3: Navigate Between Pages

**Scenario:** User selects different pages via thumbnails.

**Steps:**
1. User sees thumbnail strip with all pages
2. User clicks a different page thumbnail

**Expected Results:**
- [ ] `onSelectPage` is called with the clicked page ID
- [ ] Selected thumbnail shows rose ring highlight
- [ ] Preview panel updates to show the selected page

---

### Flow 4: Reorder Pages

**Scenario:** User changes the order of pages.

**Steps:**
1. User clicks the up/down arrow on a page thumbnail

**Expected Results:**
- [ ] `onReorderPage` is called with page ID and direction ('up' or 'down')
- [ ] Up arrow disabled on first page
- [ ] Down arrow disabled on last page

---

### Flow 5: Add and Remove Pages

**Scenario:** User adds a new page or removes an existing one.

**Steps (Add):**
1. User clicks "Add Page" button in thumbnail strip

**Expected Results:**
- [ ] `onAddPage` is called
- [ ] New page appears at the end of the strip

**Steps (Remove):**
1. User clicks delete/remove button on a page thumbnail

**Expected Results:**
- [ ] `onRemovePage` is called with the page ID
- [ ] Page is removed from strip

---

### Flow 6: Change Theme

**Scenario:** User changes the visual theme of the book.

**Steps:**
1. User opens theme picker dropdown in preview area
2. User selects a different theme

**Expected Results:**
- [ ] `onChangeTheme` is called with the selected theme name
- [ ] Preview updates to reflect new theme styling

---

### Flow 7: Upload Photos

**Scenario:** User uploads new photos to their library.

**Steps:**
1. User clicks the upload/add button in "My Photos" tab
2. File picker opens; user selects files

**Expected Results:**
- [ ] `onUploadPhotos` is called with selected files
- [ ] Upload progress overlay shown on uploading photos
- [ ] Library disabled during upload
- [ ] Photos appear in library after upload completes

---

### Flow 8: Preview Book

**Scenario:** User navigates to the book preview.

**Steps:**
1. User clicks "Preview Book" button

**Expected Results:**
- [ ] `onPreviewBook` callback is called

---

## Empty State Tests

### No Photos Uploaded

**Setup:** `photos` array is empty

**Expected Results:**
- [ ] "My Photos" tab shows empty state message
- [ ] Upload CTA is prominently displayed
- [ ] "Suggested" tab may still show suggested cover images

### Book with No Pages

**Setup:** `book.pages` is empty (edge case)

**Expected Results:**
- [ ] Thumbnail strip shows "Add Page" button only
- [ ] Preview area shows placeholder

### Empty Page (No Photo Placed)

**Setup:** Selected page has no photo

**Expected Results:**
- [ ] Page preview shows dashed border with placeholder prompt
- [ ] Remove button not shown (nothing to remove)

---

## Component Interaction Tests

### BookDesigner (Root)

**Renders correctly:**
- [ ] Header shows book title
- [ ] Completion progress bar reflects how many pages have photos
- [ ] Status badge shows "Draft" or appropriate status
- [ ] Three-panel layout visible on desktop

### PagePreview

**Renders correctly:**
- [ ] Shows full-detail view of selected page
- [ ] Photo fills page area with proper aspect ratio
- [ ] Theme picker dropdown visible
- [ ] Remove photo option visible when photo is placed

### PageThumbnailStrip

**Renders correctly:**
- [ ] Shows all pages as small thumbnails
- [ ] Selected page has rose ring highlight
- [ ] Reorder arrows on each thumbnail
- [ ] "Add Page" button at the bottom

### ImageLibrary

**Renders correctly:**
- [ ] Two tabs: "My Photos" and "Suggested"
- [ ] Photo grid shows thumbnails
- [ ] Upload button visible in "My Photos" tab
- [ ] Tab switching works correctly

---

## Edge Cases

- [ ] Book with only cover page (1 page) — reorder arrows disabled
- [ ] Maximum pages reached — "Add Page" button disabled or hidden
- [ ] Very large number of photos — library scrolls properly
- [ ] Placing photo on page that already has one replaces it
- [ ] Uploading during existing upload — handled gracefully
- [ ] Very long book title truncates with ellipsis in header

---

## Responsive Tests

- [ ] Three panels stack vertically on mobile
- [ ] Thumbnail strip becomes horizontal scroll on mobile
- [ ] Image library collapses or becomes full-screen on mobile
- [ ] All controls remain accessible on small screens

---

## Accessibility Checks

- [ ] All interactive elements keyboard accessible
- [ ] Drag and drop has keyboard alternative
- [ ] Upload button has accessible label
- [ ] Theme picker is keyboard navigable
- [ ] Page thumbnails have descriptive labels (e.g., "Page 1", "Page 2")
- [ ] Progress bar has aria-valuenow and aria-valuemax

---

## Sample Test Data

```typescript
const mockBook = {
  id: "book-1",
  title: "Summer Vacation 2025",
  theme: "Classic",
  status: "draft",
  pages: [
    { id: "page-1", pageNumber: 1, photoId: "photo-1", type: "cover" },
    { id: "page-2", pageNumber: 2, photoId: null, type: "interior" },
    { id: "page-3", pageNumber: 3, photoId: "photo-2", type: "interior" }
  ]
};

const mockPhotos = [
  { id: "photo-1", url: "/photos/beach.jpg", thumbnailUrl: "/photos/beach-thumb.jpg", name: "Beach sunset" },
  { id: "photo-2", url: "/photos/mountain.jpg", thumbnailUrl: "/photos/mountain-thumb.jpg", name: "Mountain view" }
];

const mockSuggestedImages = [
  { id: "sug-1", url: "/suggested/nature.jpg", thumbnailUrl: "/suggested/nature-thumb.jpg", category: "Nature" }
];

const mockEmptyPhotos: Photo[] = [];
const mockBookNoPages = { ...mockBook, pages: [] };
```
