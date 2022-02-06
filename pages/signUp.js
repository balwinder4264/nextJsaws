import { useEffect, useState } from 'react'

import InputField from '@/components/forms/InputField'
import { faEnvelopeOpen, faUnlockAlt, faUser } from '@fortawesome/pro-light-svg-icons'
import Link from 'next/link'
import instance from '@/src/config/axios'
import { useRouter } from 'next/router'
/**
 * SIGNUP Page
 * @returns {JSX.Element}
 * @constructor
 */
const Login = () => {
    const router = useRouter()
    // state
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
    })
    const [error, setError] = useState(null)

    // effect
    useEffect(() => { }, [])

    // methods
    const handleSignUp = async () => {
        console.log("Client =>", form)

        try {
            await instance.put('/auth/signup',
                form
            )
            alert("Account has been created")
            router.push("/login")
        } catch (err) {
            setError(err.response.data.message)
            // console.log(err.response.data.message)
        }


    }

    // return
    return (
        <>
            <div className="mx-auto max-w-xl space-y-6">
                <div className="flex items-center justify-center">
                    {/* <Logo /> */}
                </div>
                <h1 className="h5 text-center">
                    Welcome to the family  <br /> Create your admin account
                </h1>
                <div className="mx-auto max-w-xs space-y-4">
                    <InputField
                        icon={faUser}
                        placeholder={'Fullname'}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
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
                    {error ? error : null}
                    <button
                        className="w-full rounded-xl bg-red-800 p-3 text-sm font-bold uppercase text-white"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </button>
                    <p className="text-center">

                        Do you have account?{' '}
                        <Link href="/login">
                            <a className="font-bold text-purple"> Sign in</a>
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Login
//testing 