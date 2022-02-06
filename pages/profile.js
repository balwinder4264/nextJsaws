import instance from "@/src/config/axios";
import { destroyCookie } from "nookies"
import { useRouter } from "next/router";
const Profile = () => {
    const router = useRouter()
    const logoutHandler = () => {
        destroyCookie(null, "token");
        router.push('/login')

    }
    return <div className=" flex justify-center"><button className="p-3  bg-red-700" onClick={() => logoutHandler()}>Logout</button>
        Helo i am profile
    </div>
}

export default Profile;