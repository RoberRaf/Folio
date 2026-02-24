import data from '@/../product/sections/authentication/data.json'
import { AuthPage } from './components/AuthPage'

export default function AuthPagePreview() {
  return (
    <AuthPage
      defaultMode={data.defaultMode as 'signIn' | 'signUp'}
      authErrors={data.authErrors}
      formStates={data.formStates}
      onSignIn={async (email, password) => {
        console.log('Sign in:', { email, password })
      }}
      onSignUp={async (email, password, name) => {
        console.log('Sign up:', { email, password, name })
      }}
      onGoogleAuth={async () => {
        console.log('Google auth triggered')
      }}
      onToggleMode={(mode) => {
        console.log('Toggle mode:', mode)
      }}
    />
  )
}
