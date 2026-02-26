export type AuthMode = 'signIn' | 'signUp';

export type AuthErrorCode =
  | 'invalid_credentials'
  | 'email_taken'
  | 'weak_password'
  | 'google_cancelled'
  | 'network_error';

export interface AuthError {
  code: AuthErrorCode;
  message: string;
}

export interface AuthFormState {
  mode: AuthMode;
  email: string;
  password: string;
  name?: string; // Sign Up only
  isLoading: boolean;
  errorCode?: AuthErrorCode;
}

export interface AuthProps {
  // Data
  defaultMode?: AuthMode;
  authErrors: AuthError[];
  formStates: Array<{ id: string; label: string }>;

  // Callbacks
  onSignIn: (email: string, password: string) => Promise<void>;
  onSignUp: (email: string, password: string, name: string) => Promise<void>;
  onGoogleAuth: () => Promise<void>;
  onToggleMode: (mode: AuthMode) => void;
}
