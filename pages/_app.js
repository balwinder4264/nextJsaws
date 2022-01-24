import MetaTags from '../components/metaTags/metatags'
import '../styles/globals.scss'

function Webapp({ Component, pageProps }) {
    return <>
        <MetaTags />
        <Component {...pageProps} />
    </>
}
export default Webapp
