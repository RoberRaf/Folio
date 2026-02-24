# Authentication

## Overview
A single-page authentication experience that lets users sign in to or create a Folio account. The page toggles between Sign In and Sign Up modes. Supports email/password and Google OAuth.

## Shell
This section uses the application shell (shell: true).

## Components

| Component | Description |
|-----------|-------------|
| `AuthPage` | Split-panel layout with brand panel (left) and form (right) |

## Props Interface

```typescript
interface AuthProps {
  defaultMode?: AuthMode
  authErrors: AuthError[]
  formStates: Array<{ id: string; label: string }>
  onSignIn: (email: string, password: string) => Promise<void>
  onSignUp: (email: string, password: string, name: string) => Promise<void>
  onGoogleAuth: () => Promise<void>
  onToggleMode: (mode: AuthMode) => void
}
```

## User Flows

1. User arrives at auth page → sees Sign In mode by default
2. User can switch to Sign Up mode via toggle link
3. User enters email + password to sign in or register
4. Sign Up mode adds a display name field
5. "Continue with Google" button available on both modes
6. Inline validation errors displayed on failure
7. Loading spinner on submit button during auth request

## Tests

### Visual
- [ ] Left brand panel shows on desktop (md+), hidden on mobile
- [ ] Mobile shows Folio wordmark centered above form
- [ ] Sign In mode shows email and password fields only
- [ ] Sign Up mode adds display name field
- [ ] Google button has official G icon

### Interaction
- [ ] Mode toggle switches between Sign In and Sign Up
- [ ] Form fields clear error on mode switch
- [ ] Submit triggers onSignIn/onSignUp with correct params
- [ ] Google button triggers onGoogleAuth
- [ ] Loading state disables submit button and shows spinner
- [ ] Error message appears inline on auth failure

### Responsive
- [ ] Brand panel hidden below md breakpoint
- [ ] Form centers vertically on all screen sizes
