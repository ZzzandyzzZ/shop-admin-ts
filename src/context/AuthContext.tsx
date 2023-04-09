import { createContext } from 'react'
import { useAuthProvider } from '@hooks/useAuthProvider'

export const AuthContext = createContext<IAuthContext>({
  user: null,
  loginStatus: 'pending',
  resetLoginStatus: () => {},
  signIn: async (credentials: Credentials) => {},
})

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  return (
    <AuthContext.Provider value={useAuthProvider()}>
      {children}
    </AuthContext.Provider>
  )
}
