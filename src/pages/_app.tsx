import '@styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '@layout/MainLayout'
import { AuthProvider } from 'context/AuthContext'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <AuthProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </AuthProvider>
  )
}

export default App
