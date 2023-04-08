type LoginStatus = 'error' | 'correct' | 'pending'

interface AuthProviderProps {
  children: JSX.Element
}

interface Credentials {
  email: string
  password: string
}
interface AuthContext {
  user: User | null
  loginStatus: LoginStatus
  resetLoginStatus: () => void
  signIn: (credentials: Credentials) => Promise<void>
}
