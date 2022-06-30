import '@/styles/globals.scss'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { AuthProvider } from "../store/auth"
import { ToastContainer } from 'react-toastify';
function WebApp({ Component, pageProps }) {
    return <ToastContainer>
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    </ToastContainer>
}
export default WebApp
