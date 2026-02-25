# Book Preview

## Overview
Immersive, standalone page-flipping simulation where users experience their completed photo book before ordering. Uses react-pageflip-enhanced for realistic page turn animations.

## Shell
This section does NOT use the application shell (standalone page).

## Components

| Component | Description |
|-----------|-------------|
| `BookPreview` | Fullscreen preview with toolbar, flip book, and navigation controls |

## Props Interface

```typescript
interface BookPreviewProps {
  book: PreviewBook
  onOrderBook?: () => void
  onBackToDesigner?: () => void
  onSaveDraft?: () => void
}
```

## Dependencies

- `react-pageflip-enhanced` — page flip animation library

## User Flows

1. Preview loads showing front cover with title, photo, and theme
2. Click/drag page corners to flip with realistic animation
3. Previous/Next buttons for sequential navigation
4. "Order This Book" CTA → navigates to Checkout
5. "Back to Designer" → returns to Book Designer
6. "Save Draft" → persists book and navigates to Profile

## Tests

### Visual
- [ ] Book starts closed showing front cover
- [ ] Cover displays book title and cover photo
- [ ] Interior pages show photos at full quality
- [ ] Empty pages show blank placeholder
- [ ] Back cover shows Folio branding
- [ ] Page numbers visible on interior pages

### Interaction
- [ ] Page corners can be clicked/dragged to flip
- [ ] Previous/Next buttons navigate sequentially
- [ ] Prev disabled on cover, Next disabled on back cover
- [ ] "Order This Book" calls onOrderBook
- [ ] "Back to Designer" calls onBackToDesigner
- [ ] "Save Draft" calls onSaveDraft

### Responsive
- [ ] Book scales proportionally on smaller screens
- [ ] Navigation buttons reposition for mobile
- [ ] Mobile-only Save Draft button at bottom
