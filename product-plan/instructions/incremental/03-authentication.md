# Milestone 3: Authentication

> **Provide alongside:** `product-overview.md`
> **Prerequisites:** Milestone 1 (Shell) complete

---

## About This Handoff

**What you're receiving:**
- Finished UI designs (React components with full styling)
- Product requirements and user flow specifications
- Design system tokens (colors, typography)
- Sample data showing the shape of data components expect
- Test specs focused on user-facing behavior

**Your job:**
- Integrate these components into your application
- Wire up callback props to your routing and business logic
- Replace sample data with real data from your backend
- Implement loading, error, and empty states

The components are props-based — they accept data and fire callbacks. How you architect the backend, data layer, and business logic is up to you.

---

## Goal

Implement the Authentication feature — sign in and sign up flows with email/password and Google OAuth.

## Overview

A single-page authentication experience that lets users sign in or create a Folio account. The page uses a split-panel layout: a brand panel on the left (desktop only) and the auth form on the right. Users can toggle between Sign In and Sign Up modes. Google OAuth provides a quick alternative.

**Key Functionality:**
- Toggle between Sign In and Sign Up modes
- Email/password authentication
- Google OAuth ("Continue with Google")
- Inline validation and error messages
- Loading state on submit
- Brand panel with Folio identity (desktop)

## Components Provided

Copy from `product-plan/sections/authentication/components/`:

- `AuthPage` — Split-panel layout with brand panel and auth form

## Props Reference

**Data props:**

```typescript
type AuthMode = 'signin' | 'signup'

interface AuthError {
  id: string
  field?: string
  message: string
}
```

**Callback props:**

| Callback | Triggered When |
|----------|---------------|
| `onSignIn` | User submits sign in form (email, password) |
| `onSignUp` | User submits sign up form (email, password, name) |
| `onGoogleAuth` | User clicks "Continue with Google" |
| `onToggleMode` | User switches between Sign In / Sign Up |

## Expected User Flows

### Flow 1: Sign In with Email

1. User arrives at auth page (Sign In mode by default)
2. User enters email and password
3. User clicks "Sign In"
4. **Outcome:** User is authenticated and redirected to profile/dashboard

### Flow 2: Sign Up with Email

1. User clicks "Sign Up" toggle link
2. Display name field appears
3. User enters name, email, and password
4. User clicks "Sign Up"
5. **Outcome:** Account created, user is authenticated

### Flow 3: Google OAuth

1. User clicks "Continue with Google"
2. **Outcome:** Google OAuth flow initiated

### Flow 4: Auth Error

1. User submits invalid credentials
2. Inline error message appears
3. Form data preserved for correction
4. **Outcome:** User can fix and retry

## Empty States

- Fresh page load: No errors, form fields empty, submit enabled
- After mode switch: Errors cleared, fields may reset

## Testing

See `product-plan/sections/authentication/tests.md` for UI behavior test specs covering:
- Sign In / Sign Up form flows
- Google OAuth
- Error handling and validation
- Mode toggling

## Files to Reference

- `product-plan/sections/authentication/README.md` — Feature overview
- `product-plan/sections/authentication/tests.md` — UI behavior test specs
- `product-plan/sections/authentication/components/` — React components
- `product-plan/sections/authentication/types.ts` — TypeScript interfaces
- `product-plan/sections/authentication/sample-data.json` — Test data

## Done When

- [ ] Auth page renders with shell (within app layout)
- [ ] Sign In mode shows email + password fields
- [ ] Sign Up mode adds display name field
- [ ] Mode toggle switches between Sign In / Sign Up
- [ ] "Continue with Google" triggers OAuth flow
- [ ] Loading spinner on submit button
- [ ] Inline error messages on auth failure
- [ ] Successful auth redirects to profile/dashboard
- [ ] Brand panel hidden on mobile
- [ ] Responsive and dark mode support
