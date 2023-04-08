import { useState } from 'react'

export const useProviderAuth = () => {
  const [user, setUser] = useState('')
  const signIn = async ({ email, password }: any) => {
    setUser('login')
  }
  return {
    user,
    signIn,
  }
}
