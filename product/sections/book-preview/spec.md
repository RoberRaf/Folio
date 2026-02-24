# Book Preview Specification

## Overview
The Book Preview is an immersive, standalone page-flipping simulation where users experience their completed photo book before ordering. The book opens closed on its cover — users click or drag page corners to flip through, or use Previous/Next buttons. From here, users can proceed to checkout, return to the designer, or save the book as a draft.

## User Flows
- **View cover**: The preview loads with the book closed, displaying the cover with the book title, cover photo, and selected theme styling
- **Flip pages**: Click or drag a page corner to turn it with a realistic page-flip animation (powered by react-pageflip-enhanced)
- **Navigate with buttons**: Use Previous/Next buttons to step through pages sequentially
- **Proceed to checkout**: Tap the "Order This Book" CTA to navigate to the Checkout section
- **Go back to designer**: Tap a back button to return to the Book Designer to make changes
- **Save as draft**: Tap "Save Draft" to persist the current book state and return to Profile and Drafts

## UI Requirements
- Standalone fullscreen layout (no app shell), with a subtle top toolbar for back/save/order actions
- Book starts closed showing the front cover — cover displays the book title, cover photo, and theme-appropriate styling
- Realistic page-flip animation using react-pageflip-enhanced: click or drag the page corner to turn
- Previous and Next buttons positioned below or beside the book for sequential navigation
- Each page displays its photo at full quality within the page area; empty pages show a blank page
- Back cover is visible as the last page
- "Order This Book" primary CTA button always visible in the toolbar
- "Back to Designer" secondary button in the toolbar
- "Save Draft" tertiary button in the toolbar
- Responsive: book scales proportionally on smaller screens; buttons reposition for mobile
- Supports light and dark mode with a neutral background that doesn't distract from the book content

## Configuration
- shell: false
