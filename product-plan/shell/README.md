# Application Shell

## Overview

Folio uses a minimal sticky header layout. The header contains the Folio logo on the left, centered navigation links, and a persistent "Create Book" CTA with a user avatar menu on the right. The shell is clean and unobtrusive, keeping the focus on book content.

**Standalone pages (no shell):** Landing, Book Designer, Book Preview

**Pages with shell:** Authentication, Profile Drafts, Checkout

## Navigation Structure

| Label | Route |
|-------|-------|
| Designer | /designer |
| My Books | /profile |

## Layout Pattern

Minimal Header — a single sticky top bar (64px height) with a full-height content area beneath. No sidebar.

## Design Details

| Element | Light | Dark |
|---------|-------|------|
| Header background | white | stone-950 |
| Header border | stone-200 | stone-800 |
| Logo | Playfair Display italic, rose-600 | rose-400 |
| Active nav link | rose-600 text, rose-500 bottom border | rose-400 |
| Inactive nav links | stone-600, hover stone-900 | stone-400, hover stone-100 |
| Create Book CTA | bg-rose-600, hover bg-rose-700, white text | same |
| Content background | stone-50 | stone-900 |

## Responsive Behavior

On mobile (below `md` breakpoint):
- Center nav links are hidden
- A hamburger menu button appears on the right
- Tapping opens a left slide-out drawer with nav links + "Create Book" button

## Components

- `AppShell.tsx` — Main layout wrapper (sticky header + content area)
- `MainNav.tsx` — Navigation bar with logo, links, CTA, and user menu
- `UserMenu.tsx` — Avatar dropdown with user name and logout

## Dependencies

The shell uses:
- **lucide-react** — Icons (BookOpen, Menu, Plus, Settings, LogOut)
- **shadcn/ui** — Sheet (mobile drawer), DropdownMenu (user menu)

Install shadcn/ui components:
```bash
npx shadcn-ui@latest add sheet dropdown-menu
```

Or replace these imports with your own component library equivalents.

## Wiring Up

```tsx
<AppShell
  navigationItems={[
    { label: 'Designer', href: '/designer', isActive: pathname === '/designer' },
    { label: 'My Books', href: '/profile', isActive: pathname === '/profile' },
  ]}
  user={{ name: currentUser.name, avatarUrl: currentUser.avatarUrl }}
  onNavigate={(href) => router.push(href)}
  onCreateBook={() => router.push('/designer/new')}
  onLogout={() => signOut()}
>
  {children}
</AppShell>
```
