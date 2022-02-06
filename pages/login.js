import { useEffect, useState } from 'react'
import Layout from '@/components/layouts/Layout'
import { LayoutTypes } from '@/src/types/LayoutTypes'
import InputField from '@/components/forms/InputField'
import { faEnvelopeOpen, faUnlockAlt } from '@fortawesome/pro-light-svg-icons'
import Link from 'next/link'
import { setCookie } from 'nookies'
// import Logo from '@/components/global/Logo'
// import axios from 'axios'
import { useRouter } from 'next/router'
import instance from "@/src/config/axios"
const Login = () => {
    const router = useRouter()
    // state
    const [form, setForm] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState(null)

    // effect
    useEffect(() => { }, [])

    // methods
    const handleLogin = async () => {
        setCookie(null)
        try {
            const response = await instance.post("/auth/login", form);
            console.log("err=>", response)
            const token = response.data.token
            setCookie(null, "token", token, {});
            router.push('/profile')

        } catch (err) {
            console.log("err=>", err.response)
            if (err.response) {
                setError(err.response.data.message);
            }

        }

    }

    // return
    return (
        <>
            <div className="mx-auto max-w-xl space-y-6">
                <div className="flex items-center justify-center">
                    {/* <Logo /> */}
                </div>
                <h5 className="text-center">
                    {/* We are happy to see you again <br /> Login here */}
                </h5>
                <div className="mx-auto max-w-xs space-y-4">
                    <InputField
                        icon={faEnvelopeOpen}
                        placeholder={'Email'}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <InputField
                        type={'password'}
                        icon={faUnlockAlt}
                        flipIcon
                        placeholder={'Password'}
                        onChange={(e) => setForm({ ...form, password: e.target.value })}
                    />
                    {error ? <div className='text-red-600'>{error}</div> : null}
                    <button
                        className="w-full rounded-xl bg-purple-800 p-3 text-sm font-bold uppercase text-white"
                        onClick={handleLogin}
                    >
                        Sign In
                    </button>
                    <p className="text-center">
                        Donot have account?{' '}
                        <Link href="/signUp">
                            <a className="font-bold text-purple">Click here</a>
                        </Link>
                    </p>
                    <p className="text-center">
                        Forgot your password?{' '}
                        <Link href="/">
                            <a className="font-bold text-purple">Click here</a>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
