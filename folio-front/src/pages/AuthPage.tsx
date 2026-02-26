import { useNavigate, useLocation } from 'react-router-dom'
import { AuthPage as AuthView } from '@/components/auth'
import type { AuthMode } from '@/components/auth'

interface AuthPageProps {
  mode: 'signin' | 'signup'
}

const AUTH_ERRORS = [
  { code: 'invalid_credentials' as const, message: 'Email or password is incorrect.' },
  { code: 'email_taken' as const, message: 'An account with this email already exists.' },
  { code: 'weak_password' as const, message: 'Password must be at least 8 characters.' },
  { code: 'google_cancelled' as const, message: 'Google sign-in was cancelled.' },
  { code: 'network_error' as const, message: 'Something went wrong. Please try again.' },
]

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export function AuthPage({ mode }: AuthPageProps) {
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string } | null)?.from

  const defaultMode: AuthMode = mode === 'signin' ? 'signIn' : 'signUp'

  const handleSignIn = async (_email: string, _password: string) => {
    await delay(1500)
    navigate(from ?? '/profile', { replace: true })
  }

  const handleSignUp = async (_email: string, _password: string, _name: string) => {
    await delay(1500)
    navigate(from ?? '/profile', { replace: true })
  }

  const handleGoogleAuth = async () => {
    await delay(1500)
    navigate(from ?? '/profile', { replace: true })
  }

  const handleToggleMode = (newMode: AuthMode) => {
    navigate(newMode === 'signIn' ? '/auth/signin' : '/auth/signup', {
      state: location.state,
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <AuthView
        defaultMode={defaultMode}
        authErrors={AUTH_ERRORS}
        formStates={[]}
        onSignIn={handleSignIn}
        onSignUp={handleSignUp}
        onGoogleAuth={handleGoogleAuth}
        onToggleMode={handleToggleMode}
      />
    </div>
  )
}
