import { useState } from 'react'

export const useAuthProvider = (): AuthContext => {
  const [user, setUser] = useState<User | null>(null)
  const signIn = async ({ email, password }: Credentials): Promise<void> => {
    setUser({ email, password })
  }
  return {
    user,
    signIn,
  }
}
