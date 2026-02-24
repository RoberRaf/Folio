# Authentication

## Overview

A single-page authentication experience that lets users sign in to or create a Folio account. The page toggles between Sign In and Sign Up modes without a full navigation. Supports email/password credentials and Google OAuth.

## User Flows

- User arrives at auth page and sees Sign In mode by default
- User can switch to Sign Up mode via a toggle link
- User enters email + password to sign in or register
- User can alternatively tap "Continue with Google" for OAuth
- After successful auth, user is redirected to the last visited page

## Design Decisions

- Split-panel layout: editorial brand panel on left (rose gradient with decorative book shapes), auth form on right
- The brand panel reinforces Folio's identity with an italic Playfair Display headline: "Your memories, beautifully bound."
- "Continue with Google" appears above the email/password form to encourage the easier path
- A clear "or" divider between social auth and email/password
- Inline error messages appear in a rose-tinted alert box — non-disruptive but clearly visible

## Data Shapes

**Entities:** AuthError, AuthMode

## Visual Reference

See `screenshot.png` for the target UI design.

## Components Provided

- `AuthPage` — Complete auth page with mode toggle, Google OAuth, email/password form, and error handling

## Callback Props

| Callback | Triggered When |
|----------|---------------|
| `onSignIn` | User submits the Sign In form |
| `onSignUp` | User submits the Sign Up form |
| `onGoogleAuth` | User clicks "Continue with Google" |
| `onToggleMode` | User toggles between Sign In and Sign Up |
