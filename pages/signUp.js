import { useEffect, useState } from 'react'
import Layout from '@/components/layouts/Layout'
import { LayoutTypes } from '@/src/types/LayoutTypes'
import InputField from '@/components/forms/InputField'
import { faEnvelopeOpen, faUnlockAlt, faUser } from '@fortawesome/pro-light-svg-icons'
import Link from 'next/link'
import Logo from '@/components/global/Logo'

/**
 * SIGNUP Page
 * @returns {JSX.Element}
 * @constructor
 */
const Login = () => {
    // state
    const [form, setForm] = useState({
        fullname: '',
        email: '',
        password: '',
    })

    // effect
    useEffect(() => { }, [])

    // methods
    const handleSignUp = async () => { }

    // return
    return (
        <Layout type={LayoutTypes.AUTH}>
            <div className="mx-auto max-w-xl space-y-6">
                <div className="flex items-center justify-center">
                    <Logo />
                </div>
                <h1 className="h5 text-center">
                    Welcome to the family  <br /> Create your admin account
                </h1>
                <div className="mx-auto max-w-xs space-y-4">
                    <InputField
                        icon={faUser}
                        placeholder={'Fullname'}
                        onChange={(e) => setForm({ ...form, fullname: e.target.value })}
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
                    <button
                        className="w-full rounded-xl bg-purple p-3 text-sm font-bold uppercase text-white"
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </button>
                    <p className="text-center">

                        Do you have account?{' '}
                        <Link href="/">
                            <a className="font-bold text-purple"> Sign in</a>
                        </Link>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Login
//testing 