# Book Designer

## Overview

The Book Designer is the core creation workspace where users build their photo book page by page. It presents a three-panel layout: a full-detail page preview, a scrollable thumbnail navigator for all pages, and a tabbed image library for placing photos. Users can drag or click photos onto pages, reorder pages, change the book theme, and proceed to preview when ready.

## User Flows

- **Place a photo**: Drag a photo from the image library onto a page slot in the preview, or click a photo to place it on the currently selected page
- **Remove a photo**: Remove a photo from the selected page, returning the slot to empty
- **Select a page**: Click a page thumbnail in the navigator to load it into the full preview
- **Reorder a page**: Use up/down arrow controls on a thumbnail to move the page earlier or later in the book
- **Add a page**: Tap the add page control to append a new blank page to the book
- **Remove a page**: Remove the currently selected page from the book
- **Change cover theme**: Select a theme from the cover theme picker to style the book's cover
- **Browse suggested covers**: Switch to the Suggested tab in the image library to view curated cover photo options
- **Upload photos**: Tap the "+" button in the Photos tab to upload new images; library is disabled during upload and shows per-photo progress
- **Preview book**: Tap the "Preview Book" CTA to navigate to the Book Preview section

## Design Decisions

- Standalone fullscreen layout (no shell) — the designer is a focused, immersive workspace
- Three-panel layout: page thumbnails (left strip), page preview (center), image library (right)
- On mobile, panels stack vertically for usability
- A completion progress bar in the header shows filled vs total pages
- The page preview supports drag-and-drop with a clear visual drop zone and "replace" overlay when a photo is already present
- Cover theme picker is accessible from the top-right of the preview panel
- Photos with uploading status show individual progress indicators and are non-interactive

## Data Shapes

**Entities:** Book, Page, Photo, SuggestedImage

## Visual Reference

See `screenshot.png` for the target UI design.

## Components Provided

- `BookDesigner` — Root three-panel workspace
- `PageThumbnailStrip` — Scrollable page navigator with reorder controls
- `PagePreview` — Full-detail page view with drag-and-drop and theme picker
- `ImageLibrary` — Tabbed photo grid with upload support

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onPlacePhoto` | User drags or clicks a photo onto a page |
| `onRemovePhoto` | User removes the photo from a page |
| `onUploadPhotos` | User selects files to upload |
| `onAddPage` | User clicks "Add page" |
| `onRemovePage` | User removes the selected page |
| `onReorderPage` | User clicks up/down arrow on a thumbnail |
| `onChangeTheme` | User selects a new cover theme |
| `onSelectPage` | User clicks a page thumbnail |
| `onPreviewBook` | User clicks "Preview Book" |
