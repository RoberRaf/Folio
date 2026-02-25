# Book Designer

## Overview
The core creation workspace where users build their photo book page by page. Three-panel layout: page preview (center), page thumbnail navigator (left strip), and tabbed image library (right panel).

## Shell
This section does NOT use the application shell (standalone page).

## Components

| Component | Description |
|-----------|-------------|
| `BookDesigner` | Root workspace with header and 3-panel layout |
| `PagePreview` | Full-detail preview of selected page with drag-and-drop, theme picker |
| `PageThumbnailStrip` | Scrollable strip of page thumbnails with reorder controls |
| `ImageLibrary` | Tabbed panel with "My Photos" and "Suggested" grids |

## Props Interface

```typescript
interface BookDesignerProps {
  book: Book
  photos: Photo[]
  suggestedCoverImages: SuggestedImage[]
  selectedPageId: string
  onPlacePhoto: (pageId: string, photoId: string) => void
  onRemovePhoto: (pageId: string) => void
  onUploadPhotos: (files: File[]) => void
  onAddPage: () => void
  onRemovePage: (pageId: string) => void
  onReorderPage: (pageId: string, direction: 'up' | 'down') => void
  onChangeTheme: (theme: string) => void
  onSelectPage: (pageId: string) => void
  onPreviewBook: () => void
}
```

## User Flows

1. **Place a photo**: Drag from library or click to place on selected page
2. **Remove a photo**: Click remove to clear the page slot
3. **Select a page**: Click thumbnail to load into preview
4. **Reorder pages**: Arrow controls on thumbnails
5. **Add/remove pages**: Controls in thumbnail strip
6. **Change theme**: Theme picker dropdown in preview area
7. **Upload photos**: "+" button in My Photos tab with progress overlay
8. **Preview book**: "Preview Book" CTA navigates to Book Preview

## Tests

### Visual
- [ ] Header shows book title, completion progress bar, status badge
- [ ] Three panels visible on desktop: thumbnails, preview, library
- [ ] Selected thumbnail has rose ring highlight
- [ ] Empty page shows dashed border with placeholder prompt
- [ ] Uploading photos show progress bar overlay

### Interaction
- [ ] Drag photo from library → drop on page preview places photo
- [ ] Click photo in library places it on selected page
- [ ] Theme picker opens/closes and applies selected theme
- [ ] Upload button triggers file input; library disabled during upload
- [ ] Page reorder arrows move pages up/down

### Responsive
- [ ] Panels stack vertically on mobile
- [ ] Thumbnail strip becomes horizontal scroll on mobile
