# Profile Drafts

## Overview

A personal dashboard where users can view their account info and manage their photo book projects. All books — both in-progress drafts and previously ordered books — are displayed in a single grid with status badges so users can quickly see where each project stands.

## User Flows

- User sees their name, avatar, and email in a profile header area
- User views a grid of all their books, each shown as a thumbnail with a status badge (Draft or Ordered)
- User clicks a book thumbnail to open it in the Book Designer for editing
- User clicks the remove button overlaid on a book thumbnail to delete it; a confirmation dialog appears before deletion is committed
- User sees a simple empty state with a CTA button when they have no books yet
- User clicks the CTA to start creating their first book

## Design Decisions

- Profile header has a white/dark card style with the user's avatar, name, and email
- Avatar falls back gracefully to initials in a rose gradient circle if the image fails to load
- Book grid is responsive: 2 columns on mobile → 5 columns on desktop
- Cover thumbnails use a 2:3 aspect ratio (portrait, like a real book)
- Remove button is always visible on mobile (touch-first), hover-only on desktop — positioned top-right on the thumbnail
- Confirmation dialog has a rose accent strip at the top and a trash icon for clear intent
- Empty state features a decorative stacked-book illustration

## Data Shapes

**Entities:** User, Book (with status badge: "Draft" or "Ordered")

## Visual Reference

See `screenshot.png` for the target UI design.

## Components Provided

- `ProfileDraftsPage` — Full profile page with header, book grid, and empty state
- `BookCard` — Individual book thumbnail card with remove button and status badge
- `ConfirmDialog` — Confirmation modal for destructive actions

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onEditBook` | User clicks a book thumbnail to open it |
| `onRemoveBook` | User confirms deletion in the dialog |
| `onCreateBook` | User clicks "Create your first book" in the empty state |
