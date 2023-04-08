import axios from 'axios'
import { useState } from 'react'
import endPoints from 'services/api'

export const useAuthProvider = (): AuthContext => {
  const [user, setUser] = useState<User | null>(null)
  const signIn = async ({ email, password }: Credentials): Promise<void> => {
    const options = {
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
    }
    const {
      data: { access_token: token },
    } = await axios.post(endPoints.auth.login, { email, password }, options)
    console.log({ token })
  }
  return {
    user,
    signIn,
  }
}
