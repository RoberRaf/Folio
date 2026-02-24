# Profile Drafts Specification

## Overview
A personal dashboard where users can view their account info and manage their photo book projects. All books — both in-progress drafts and previously ordered books — are displayed in a single grid with status badges so users can quickly see where each project stands.

## User Flows
- User sees their name, avatar, and email in a profile header area
- User views a grid of all their books, each shown as a thumbnail with a status badge (Draft or Ordered)
- User clicks a book thumbnail to open it in the Book Designer for editing
- User clicks the remove button overlaid on a book thumbnail to delete it; a confirmation dialog appears before deletion is committed
- User sees a simple empty state with a CTA button when they have no books yet
- User clicks the CTA to start creating their first book

## UI Requirements
- Profile header displays avatar image, display name, and email address
- Book grid uses a responsive card layout (thumbnail + title + status badge + page count)
- Remove button is overlaid on the thumbnail, visible on hover (or always visible on touch devices)
- Confirmation dialog asks the user to confirm removal before the action is taken
- Status badge differentiates Draft (in progress) from Ordered (submitted for printing)
- Empty state shows a short message and a prominent "Create your first book" button
- No inline editing of profile info — display only

## Configuration
- shell: true
