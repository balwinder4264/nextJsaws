import '@/styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AuthProvider } from "../store/auth"
function WebApp({ Component, pageProps }) {
    return <><AuthProvider> <Component {...pageProps} /></AuthProvider> </>
}
export default WebApp
