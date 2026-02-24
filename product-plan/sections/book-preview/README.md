# Book Preview

## Overview

The Book Preview is an immersive, standalone page-flipping simulation where users experience their completed photo book before ordering. The book opens closed on its cover — users click or drag page corners to flip through, or use Previous/Next buttons. From here, users can proceed to checkout, return to the designer, or save the book as a draft.

## User Flows

- **View cover**: The preview loads with the book closed, displaying the cover with the book title, cover photo, and selected theme styling
- **Flip pages**: Click or drag a page corner to turn it with a realistic page-flip animation (powered by react-pageflip-enhanced)
- **Navigate with buttons**: Use Previous/Next buttons to step through pages sequentially
- **Proceed to checkout**: Tap the "Order This Book" CTA to navigate to the Checkout section
- **Go back to designer**: Tap a back button to return to the Book Designer to make changes
- **Save as draft**: Tap "Save Draft" to persist the current book state and return to Profile and Drafts

## Design Decisions

- Standalone fullscreen layout (no shell) — the preview is an immersive, product-focused experience
- A semi-transparent frosted-glass toolbar overlays the top with back/save/order actions
- The book renders with a floor shadow and atmospheric radial gradient background
- Front cover displays the book title at the bottom with an elegant divider line
- Interior pages show photos with a subtle spine shadow on the binding edge
- Back cover shows the Folio branding
- Empty pages render as a clean white page with a subtle placeholder
- On mobile, "Save Draft" moves to a sticky bottom bar for easier thumb reach

## Data Shapes

**Entities:** PreviewBook (with coverPhoto), Page, Photo

## Dependencies

- **react-pageflip-enhanced** — Install: `npm install react-pageflip-enhanced`

## Visual Reference

See `screenshot.png` for the target UI design.

## Components Provided

- `BookPreview` — Complete page-flip simulation with toolbar and navigation controls

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onOrderBook` | User clicks "Order This Book" |
| `onBackToDesigner` | User clicks "Back to Designer" |
| `onSaveDraft` | User clicks "Save Draft" |
