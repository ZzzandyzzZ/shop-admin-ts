import { useContext } from 'react'
import { useProviderAuth } from '@hooks/useAuth'

export const AuthContext = useContext({})

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useProviderAuth}>
      {children}
    </AuthContext.Provider>
  )
}
