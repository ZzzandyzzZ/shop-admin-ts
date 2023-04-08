import { createContext } from 'react'
import { useAuthProvider } from '@hooks/useAuthProvider'

export const AuthContext = createContext<AuthContext | null>(null)

export const AuthProvider = ({ children }: AuthProviderProps): JSX.Element => {
  return (
    <AuthContext.Provider value={useAuthProvider()}>
      {children}
    </AuthContext.Provider>
  )
}
