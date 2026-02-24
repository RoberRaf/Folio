# Application Shell

## Overview

Folio uses a minimal sticky header layout. The header contains the Folio logo on the left, centered navigation links, and a persistent "Create Book" CTA with a user avatar menu on the right. The shell is clean and unobtrusive, keeping the focus on book content. Landing, authentication, and checkout pages are standalone and do not render the shell.

## Navigation Structure

- Designer → /designer
- My Books → /profile

## Layout Pattern

Minimal Header — a single sticky top bar (64px height) with a full-height content area beneath. No sidebar.

## Design Decisions

- Header uses white/stone-950 background with a subtle bottom border
- Logo uses Playfair Display italic in rose to establish brand identity
- Active nav link: rose-600 text with a rose-500 bottom border indicator
- CTA button: bg-rose-600, hover bg-rose-700, white text, rounded-lg
- Content area: stone-50 (light) / stone-900 (dark)
- Mobile: hamburger menu with left slide-out drawer

## Components Provided

- `AppShell` — Main layout wrapper, renders MainNav and children
- `MainNav` — Sticky header with logo, nav links, CTA, and user menu
- `UserMenu` — Avatar dropdown with settings and logout

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onNavigate` | User clicks a nav link or logo |
| `onLogout` | User clicks "Log out" in the user menu |
| `onCreateBook` | User clicks "Create Book" CTA |

## Dependencies

- `lucide-react` — Icons (BookOpen, Menu, Plus, Settings, LogOut)
- shadcn/ui `Sheet` — Mobile navigation drawer
- shadcn/ui `DropdownMenu` — User menu dropdown
