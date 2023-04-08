import axios from 'axios'
import { useState } from 'react'
import endPoints from 'services/api'
import Cookie from 'js-cookie'

export const useAuthProvider = (): AuthContext => {
  const [user, setUser] = useState<User | null>(null)
  const [loginStatus, setLoginStatus] = useState<LoginStatus>('pending')
  const signIn = async ({ email, password }: Credentials): Promise<void> => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    try {
      const { data } = await axios.post(
        endPoints.auth.login,
        { email, password },
        options
      )
      Cookie.set('token', data.access_token, { expires: 5 })
      setLoginStatus('correct')
    } catch (error) {
      setLoginStatus('error')
    }
  }
  const resetLoginStatus = (): void => {
    setLoginStatus('pending')
  }
  return {
    user,
    loginStatus,
    resetLoginStatus,
    signIn,
  }
}
