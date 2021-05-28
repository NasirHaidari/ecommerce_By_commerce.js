import '../styles/globals.css'
import { StoreProvider } from '../components/Store'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import Router from 'next/router'

Router.events.on('routerChangeStart', () => NProgress.start())
Router.events.on('routerChangeComplete', () => NProgress.done())
Router.events.on('routerChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp

MyApp.getInitialProps = async () => {
  return {
    pageProps: {
      commercePublicKey: process.env.COMMERCE_PUBLIC_KEY,
    },
  }
}
