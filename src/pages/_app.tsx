import '@styles/globals.css'
import type { AppProps } from 'next/app'
import MainLayout from '@layout/MainLayout'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default App
