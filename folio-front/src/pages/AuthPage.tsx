interface AuthPageProps {
  mode: 'signin' | 'signup'
}

export function AuthPage({ mode }: AuthPageProps) {
  return (
    <div className="flex flex-1 items-center justify-center min-h-[calc(100vh-4rem)]">
      <h1 className="text-3xl font-semibold text-stone-800 dark:text-stone-100">
        {mode === 'signin' ? 'Sign In' : 'Sign Up'}
      </h1>
    </div>
  )
}
