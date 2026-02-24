# Authentication Specification

## Overview
A single-page authentication experience that lets users sign in to or create a Folio account. The page toggles between Sign In and Sign Up modes without a full navigation. Supports email/password credentials and Google OAuth.

## User Flows
- User arrives at auth page and sees Sign In mode by default
- User can switch to Sign Up mode via a toggle link
- User enters email + password to sign in or register
- User can alternatively tap "Continue with Google" for OAuth
- After successful auth, user is redirected to the last visited page

## UI Requirements
- Single page with inline toggle between Sign In and Sign Up modes
- Email and password fields; Sign Up mode adds a display name field
- "Continue with Google" button prominent on both modes
- Visual divider between social and email/password options
- Inline form validation error messages
- Loading state on submit button during auth request
- No Forgot Password flow

## Configuration
- shell: true
