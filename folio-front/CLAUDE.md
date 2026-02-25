# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # Type-check (tsc) then bundle with Vite
npm run lint      # ESLint across all TS/TSX files
npm run preview   # Preview production build locally
```

No test runner is configured yet.

## Architecture

**Folio** is a photo book creation web app (React 19 + TypeScript + Vite). The repo is in early implementation — the `product-plan/` directory is the authoritative source of truth for design intent, data contracts, and implementation order.

### Source vs. Product Plan

- `src/` — Application code to be built (currently a minimal starter)
- `product-plan/` — Design handoff: components, types, sample data, and specs for each section. These files are **reference material**, not production code. Integrate them into `src/` as you implement each section.

### Sections and Planned Routes

| Section | Route | Shell |
|---|---|---|
| `landing` | `/` | No |
| `authentication` | `/auth/signup`, `/auth/signin` | Yes |
| `book-designer` | `/designer` | No (standalone) |
| `book-preview` | `/preview` | No (standalone) |
| `profile-drafts` | `/profile` | Yes |
| `checkout` | `/checkout` | Yes |

Each section lives under `product-plan/sections/<section-id>/` with:
- `README.md` — Design intent
- `types.ts` — TypeScript interfaces (data contracts)
- `components/` — Pre-built React components to integrate
- `sample-data.json` — Test data
- `tests.md` — Behavior test specs (framework-agnostic)

### Implementation Order

Follow `product-plan/instructions/incremental/` for milestone-by-milestone guidance, or `product-plan/instructions/one-shot-instructions.md` for full implementation at once. Start with shell + design tokens before any section.

### Design System

- **Colors:** Rose (primary), Pink (secondary), Stone (neutral) — see `product-plan/design-system/tailwind-colors.md`
- **Typography:** Playfair Display (headings, Folio logo — italic rose), DM Sans (body), IBM Plex Mono (mono) — see `product-plan/design-system/fonts.md`
- **Tokens:** `product-plan/design-system/tokens.css`

### Shell (`AppShell`)

Sticky 64px header with: Folio logo (left), nav links — "Designer" / "My Books" (center), "Create Book" CTA + user avatar dropdown (right). Mobile: hamburger + slide-out drawer. Pre-built components in `product-plan/shell/components/`.

### Component Conventions

Components are **props-driven and backend-agnostic** — they accept data and fire callbacks (`onNavigate`, `onLogout`, `onCreateBook`, etc.). State management and routing library choice are left to the implementer. TypeScript strict mode is enforced (`tsconfig.app.json`).

### Key Entities

`User`, `Book`, `Page`, `Photo`, `Order` — data shapes defined in `product-plan/data-shapes/` and per-section `types.ts` files.

### Section Prompt Workflow

`product-plan/prompts/section-prompt.md` defines a repeatable prompt pattern for implementing each section: set `SECTION_NAME`, `SECTION_ID`, and `NN`, then follow the prompt to read the relevant product-plan files before implementing.
