# Application Shell Specification

## Overview
Folio uses a minimal sticky header layout. The header contains the Folio logo on the left, centered navigation links, and a persistent "Create Book" CTA with a user avatar menu on the right. The shell is clean and unobtrusive, keeping the focus on book content. Landing, authentication, and checkout pages are standalone and do not render the shell.

## Navigation Structure
- Designer → /designer
- My Books → /profile

## Layout Pattern
Minimal Header — a single sticky top bar (64px height) with a full-height content area beneath. No sidebar. The header uses a white/stone-950 background with a subtle bottom border. The logo uses Playfair Display in rose to establish brand identity. Nav links sit in the center on desktop. The "Create Book" CTA (rose-600) and the user avatar dropdown are always visible on the right.

## Responsive Behavior
On mobile (below md breakpoint), center nav links are hidden. A hamburger menu button appears on the right instead. Tapping it opens a left slide-out drawer containing the navigation links stacked vertically and the "Create Book" button at the bottom. The logo and user avatar remain visible in the header on all breakpoints.

## Design Notes
- Header background: white (light) / stone-950 (dark)
- Border: stone-200 (light) / stone-800 (dark)
- Logo: Playfair Display italic, rose-600 (light) / rose-400 (dark)
- Active nav link: rose-600 text with a rose-500 bottom border indicator
- Inactive nav links: stone-600 (light) / stone-400 (dark), hover stone-900 / stone-100
- CTA button: bg-rose-600, hover bg-rose-700, white text, rounded-lg
- Content area background: stone-50 (light) / stone-900 (dark)
- Standalone pages (no shell): Landing, Authentication, Checkout
