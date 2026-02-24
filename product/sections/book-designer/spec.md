# Book Designer

## Overview
The Book Designer is the core creation workspace where users build their photo book page by page. It presents a three-panel layout: a full-detail page preview, a scrollable thumbnail navigator for all pages, and a tabbed image library for placing photos. Users can drag or click photos onto pages, reorder pages, change the book theme, and proceed to preview when ready.

## Configuration
shell: false

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

## UI Requirements

- Three-panel layout: large page preview (left/center), page thumbnail navigator (right strip or bottom strip on mobile), and image library panel (right or bottom on mobile)
- Page preview shows the selected page at full detail; empty slots display a placeholder with a prompt to add a photo
- Thumbnail navigator displays all pages numbered in order; selected page is visually highlighted; arrow controls on each thumbnail for reordering
- Image library has two tabs: "My Photos" and "Suggested"
- "My Photos" tab shows a grid of photo thumbnails; photos with `status: 'uploading'` show an upload progress overlay and are non-interactive
- "Suggested" tab shows a curated grid of cover image options
- "+" upload button is visible in the "My Photos" tab; entire library panel is disabled and shows a loading state while any photo is uploading
- Cover theme selector is accessible from the page preview or a toolbar; applies to the full book
- "Preview Book" primary CTA button is always visible
- Responsive: stacks panels vertically on mobile
- Supports light and dark mode
