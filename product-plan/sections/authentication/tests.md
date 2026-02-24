# Test Specs: Authentication

These test specs are **framework-agnostic**. Adapt them to your testing setup.

## Overview

Authentication provides sign in and sign up flows via email/password and Google OAuth. Tests cover mode toggling, form validation, submission, and error handling.

---

## User Flow Tests

### Flow 1: Sign In with Email

**Scenario:** Existing user signs in with email and password.

#### Success Path

**Setup:**
- Auth page renders in Sign In mode (default)
- `onSignIn` callback provided

**Steps:**
1. User sees Sign In form with email and password fields
2. User enters email "user@example.com" in email field
3. User enters password "password123" in password field
4. User clicks "Sign In" button

**Expected Results:**
- [ ] `onSignIn` is called with email "user@example.com" and password "password123"
- [ ] Submit button shows loading spinner during request
- [ ] Submit button is disabled during loading

#### Failure Path: Invalid Credentials

**Steps:**
1. User enters email and password
2. User clicks "Sign In"
3. Server returns error

**Expected Results:**
- [ ] Error message appears inline: "Invalid email or password"
- [ ] Form fields preserve their values (not cleared)
- [ ] Submit button returns to enabled state

#### Failure Path: Empty Fields

**Steps:**
1. User leaves email or password empty
2. User clicks "Sign In"

**Expected Results:**
- [ ] Form validation prevents submission
- [ ] Required field indicators shown

---

### Flow 2: Sign Up with Email

**Scenario:** New user creates an account.

#### Success Path

**Setup:**
- Auth page in Sign Up mode

**Steps:**
1. User clicks "Sign Up" toggle link
2. User sees additional "Display Name" field
3. User enters name "Jane Doe"
4. User enters email "jane@example.com"
5. User enters password "securepass"
6. User clicks "Sign Up" button

**Expected Results:**
- [ ] `onSignUp` is called with email, password, and name
- [ ] Loading state shown during request

#### Failure Path: Email Already Exists

**Expected Results:**
- [ ] Error message: "An account with this email already exists"
- [ ] Form data preserved

---

### Flow 3: Google OAuth

**Scenario:** User authenticates with Google.

**Steps:**
1. User clicks "Continue with Google" button

**Expected Results:**
- [ ] `onGoogleAuth` callback is called
- [ ] Google button has recognizable G icon

---

### Flow 4: Toggle Between Modes

**Scenario:** User switches between Sign In and Sign Up.

**Steps:**
1. User is on Sign In mode
2. User clicks "Don't have an account? Sign Up" link
3. Mode switches to Sign Up
4. User clicks "Already have an account? Sign In" link
5. Mode switches back to Sign In

**Expected Results:**
- [ ] Sign In mode shows email + password fields only
- [ ] Sign Up mode adds display name field
- [ ] Error messages clear on mode switch
- [ ] `onToggleMode` is called with correct mode

---

## Empty State Tests

### No Errors State

**Setup:** Fresh page load with no `authErrors`

**Expected Results:**
- [ ] No error messages visible
- [ ] Form fields are empty and ready for input
- [ ] Submit button is enabled

---

## Component Interaction Tests

### AuthPage

**Visual — Desktop:**
- [ ] Left brand panel visible (shows Folio branding, tagline)
- [ ] Right panel shows auth form centered
- [ ] Split layout approximately 40/60

**Visual — Mobile:**
- [ ] Brand panel hidden
- [ ] Folio wordmark/logo visible above form
- [ ] Form centered on screen

**Form fields:**
- [ ] Email field has type="email" and placeholder
- [ ] Password field has type="password"
- [ ] Display name field only visible in Sign Up mode

---

## Edge Cases

- [ ] Rapid mode switching doesn't cause state corruption
- [ ] Double-clicking submit doesn't trigger multiple auth calls
- [ ] Very long email addresses render within field bounds
- [ ] Special characters in display name accepted
- [ ] Network timeout shows appropriate error message
- [ ] Form works with password manager autofill

---

## Accessibility Checks

- [ ] All form fields have associated labels
- [ ] Error messages are associated with fields via aria-describedby
- [ ] Tab order follows visual order (email → password → name → submit)
- [ ] Submit button accessible name is clear ("Sign In" or "Sign Up")
- [ ] Mode toggle link is keyboard accessible
- [ ] Loading state communicated to screen readers

---

## Sample Test Data

```typescript
const mockSignInData = {
  email: "user@example.com",
  password: "password123"
};

const mockSignUpData = {
  email: "jane@example.com",
  password: "securepass",
  name: "Jane Doe"
};

const mockAuthErrors = [
  { id: "1", field: "email", message: "Invalid email or password" }
];

const mockNoErrors: AuthError[] = [];
```
