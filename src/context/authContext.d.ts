interface AuthProviderProps {
  children: JSX.Element
}

interface User {
  name?: string
  email: string
  password: string
}
interface Credentials {
  email: string
  password: string
}
interface AuthContext {
  user: User | null
  signIn: (credentials: Credentials) => Promise<void>
}
