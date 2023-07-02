import '@/styles/globals.css'
import ContextApi from './ContextApi/contextapi'

export default function App({ Component, pageProps }) {
  return <ContextApi>
   <Component {...pageProps} />
   </ContextApi>
}
