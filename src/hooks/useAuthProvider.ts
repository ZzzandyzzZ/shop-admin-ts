import axios from 'axios'
import { useEffect, useState } from 'react'
import endPoints from 'services/api'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { tokenCookieName } from 'contants/user'

export const useAuthProvider = (): IAuthContext => {
  const [user, setUser] = useState<User | null>(null)
  const [loginStatus, setLoginStatus] = useState<LoginStatus>('pending')
  const router = useRouter()

  useEffect(() => {
    const token = Cookie.get(tokenCookieName)
    if (token === undefined || loginStatus === 'correct') return
    const signInFromToken = async (token: string): Promise<void> => {
      axios.defaults.headers.Authorization = `Bearer ${token}`
      const { data } = await axios.get<User>(endPoints.auth.profile)
      setUser(data)
      setLoginStatus('correct')
    }
    void signInFromToken(token)
  }, [loginStatus, user])

  const signIn = async ({ email, password }: Credentials): Promise<void> => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    try {
      const {
        data: { access_token: token },
      } = await axios.post<AuthLogin>(
        endPoints.auth.login,
        { email, password },
        options
      )
      Cookie.set(tokenCookieName, token, { expires: 5 })
      axios.defaults.headers.Authorization = `Bearer ${token}`
      const { data } = await axios.get<User>(endPoints.auth.profile)
      setUser(data)
      setLoginStatus('correct')
      await router.push('/dashboard')
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
