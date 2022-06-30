import { createContext, useContext, useEffect, useState } from "react";

import instance from "@/src/config/axios";

import nookies, { setCookie, parseCookies, destroyCookie } from 'nookies'
import { useRouter } from "next/router";
const AuthContext = createContext({
    currentUser: null
});


export const AuthProvider = ({ children }) => {
    const router = useRouter()
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(null)
    useEffect(async () => {
        const token = (nookies.get('token'));
        // console.log("token=>", token.token)
        // return
        try {
            const response = await instance.get("/auth/status", {
                headers: {
                    "Authorization": `Barrer ${token.token}`
                }
            });
            if (response) {
                setCurrentUser(response.data.userInfo)
            }
            router.push('/profile')

        } catch (err) {
            destroyCookie(null, "token");
            router.push('/login')
        }
    }, [])

    return <AuthContext.Provider value={{ currentUser }}>
        {children}
    </AuthContext.Provider>

}

export const useAuth = () => useContext(AuthContext)