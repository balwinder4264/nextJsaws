import { useRouter } from "next/router"
const Home = () => {
    const router = useRouter()
    const gotoLoginScreen = () => {
        router.push('/login')

    }
    return <><button onClick={() => gotoLoginScreen()}> Go to login</button></>
}

export default Home
