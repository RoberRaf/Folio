import { useState } from 'react'
import type { AuthProps, AuthMode, AuthErrorCode } from '@/../product/sections/authentication/types'

// Typography: Playfair Display (font-serif) for headings, DM Sans for body
// Colors: primary=rose, secondary=pink, neutral=stone

export function AuthPage({
  defaultMode = 'signIn',
  authErrors,
  onSignIn,
  onSignUp,
  onGoogleAuth,
  onToggleMode,
}: AuthProps) {
  const [mode, setMode] = useState<AuthMode>(defaultMode)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [errorCode, setErrorCode] = useState<AuthErrorCode | undefined>()

  const errorMessage = errorCode
    ? authErrors.find(e => e.code === errorCode)?.message
    : undefined

  const handleToggle = (newMode: AuthMode) => {
    setMode(newMode)
    setErrorCode(undefined)
    onToggleMode(newMode)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setErrorCode(undefined)
    try {
      if (mode === 'signIn') {
        await onSignIn(email, password)
      } else {
        await onSignUp(email, password, name)
      }
    } catch (err: unknown) {
      const code = (err as { code?: AuthErrorCode })?.code
      setErrorCode(code ?? 'network_error')
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogle = async () => {
    setIsLoading(true)
    setErrorCode(undefined)
    try {
      await onGoogleAuth()
    } catch (err: unknown) {
      const code = (err as { code?: AuthErrorCode })?.code
      setErrorCode(code ?? 'google_cancelled')
    } finally {
      setIsLoading(false)
    }
  }

  const inputClass =
    'w-full px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder-stone-400 dark:placeholder-stone-500 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 dark:focus:ring-rose-500 transition-shadow'

  const labelClass =
    'block text-xs font-medium text-stone-500 dark:text-stone-400 mb-1.5 uppercase tracking-wider'

  return (
    <div className="flex-1 flex min-h-0">
      {/* Left panel — editorial brand moment */}
      <div className="hidden md:flex md:w-5/12 lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-rose-600 via-rose-500 to-pink-500 dark:from-rose-950 dark:via-stone-900 dark:to-stone-950 flex-col items-start justify-between p-12 lg:p-16">
        {/* Decorative layered book shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -right-20 top-1/4 w-80 h-96 bg-white/10 rounded-2xl rotate-12" />
          <div className="absolute -right-10 top-1/3 w-72 h-88 bg-white/10 rounded-2xl rotate-6" />
          <div className="absolute right-6 top-[38%] w-64 h-80 bg-white/15 rounded-2xl rotate-1" />
          <div className="absolute -bottom-28 -left-28 w-80 h-80 bg-pink-400/20 dark:bg-rose-800/30 rounded-full" />
          <div className="absolute bottom-16 right-8 w-3 h-3 bg-white/30 rounded-full" />
          <div className="absolute bottom-24 right-16 w-2 h-2 bg-white/20 rounded-full" />
          <div className="absolute top-16 left-8 w-2 h-2 bg-white/20 rounded-full" />
        </div>

        {/* Wordmark */}
        <div className="relative z-10">
          <span className="font-serif text-2xl font-bold text-white tracking-tight">Folio</span>
        </div>

        {/* Headline */}
        <div className="relative z-10 max-w-xs">
          <h1 className="font-serif text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            Your memories,<br />
            <span className="italic text-pink-200">beautifully<br />bound.</span>
          </h1>
          <p className="text-rose-100/75 text-sm leading-relaxed">
            Design stunning photo books that you'll treasure — and share — forever.
          </p>
        </div>

        {/* Bottom caption */}
        <div className="relative z-10">
          <p className="text-white/40 text-xs tracking-widest uppercase">Folio · Photo Books</p>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center px-6 py-12 sm:px-10 bg-stone-50 dark:bg-stone-900 overflow-y-auto">
        <div className="w-full max-w-sm">
          {/* Mobile wordmark */}
          <div className="md:hidden mb-10 text-center">
            <span className="font-serif text-3xl font-bold text-rose-500 tracking-tight">Folio</span>
          </div>

          {/* Mode heading */}
          <div className="mb-8">
            <h2 className="font-serif text-3xl font-bold text-stone-900 dark:text-stone-50 leading-tight mb-1">
              {mode === 'signIn' ? 'Welcome back' : 'Create account'}
            </h2>
            <p className="text-stone-500 dark:text-stone-400 text-sm">
              {mode === 'signIn'
                ? 'Sign in to access your photo books.'
                : 'Start designing your first book today.'}
            </p>
          </div>

          {/* Google button */}
          <button
            type="button"
            onClick={handleGoogle}
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 text-sm font-medium hover:bg-stone-50 dark:hover:bg-stone-750 hover:border-stone-300 dark:hover:border-stone-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {/* Google G */}
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="flex-shrink-0">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4" />
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853" />
              <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05" />
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 6.29C4.672 4.163 6.656 3.58 9 3.58z" fill="#EA4335" />
            </svg>
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-stone-200 dark:bg-stone-700" />
            <span className="text-stone-400 dark:text-stone-500 text-xs uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-stone-200 dark:bg-stone-700" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name field — Sign Up only */}
            {mode === 'signUp' && (
              <div>
                <label className={labelClass}>Display Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  autoComplete="name"
                  className={inputClass}
                />
              </div>
            )}

            {/* Email */}
            <div>
              <label className={labelClass}>Email</label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
                autoComplete="email"
                className={inputClass}
              />
            </div>

            {/* Password */}
            <div>
              <label className={labelClass}>Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                autoComplete={mode === 'signIn' ? 'current-password' : 'new-password'}
                className={inputClass}
              />
            </div>

            {/* Inline error */}
            {errorMessage && (
              <div className="flex items-start gap-2.5 px-4 py-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60">
                <svg className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-rose-700 dark:text-rose-300">{errorMessage}</p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-rose-500 hover:bg-rose-600 dark:bg-rose-600 dark:hover:bg-rose-500 text-white text-sm font-semibold tracking-wide transition-colors disabled:opacity-70 disabled:cursor-not-allowed mt-1"
            >
              {isLoading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {mode === 'signIn' ? 'Signing in…' : 'Creating account…'}
                </>
              ) : (
                mode === 'signIn' ? 'Sign In' : 'Create Account'
              )}
            </button>
          </form>

          {/* Mode toggle */}
          <p className="text-center text-sm text-stone-500 dark:text-stone-400 mt-6">
            {mode === 'signIn' ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button
              type="button"
              onClick={() => handleToggle(mode === 'signIn' ? 'signUp' : 'signIn')}
              className="text-rose-500 dark:text-rose-400 font-semibold hover:underline underline-offset-2"
            >
              {mode === 'signIn' ? 'Sign up' : 'Sign in'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
