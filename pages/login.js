import { useEffect, useState } from 'react'
import Layout from '@/components/layouts/Layout'
import { LayoutTypes } from '@/src/types/LayoutTypes'
import InputField from '@/components/forms/InputField'
import { faEnvelopeOpen, faUnlockAlt } from '@fortawesome/pro-light-svg-icons'
import Link from 'next/link'
import Logo from '@/components/global/Logo'

const Login = () => {
    // state
    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    // effect
    useEffect(() => {}, [])

    // methods
    const handleLogin = async () => {}

    // return
    return (
        <Layout type={LayoutTypes.AUTH}>
            <div className="mx-auto max-w-xl space-y-6">
                <div className="flex items-center justify-center">
                    <Logo />
                </div>
                <h5 className="text-center">
                    We are happy to see you again <br /> Login here
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
                    <button
                        className="w-full rounded-xl bg-purple p-3 text-sm font-bold uppercase text-white"
                        onClick={handleLogin}
                    >
                        Sign In
                    </button>
                    <p className="text-center">
                        Forgot your password?{' '}
                        <Link href="/">
                            <a className="font-bold text-purple">Click here</a>
                        </Link>
                    </p>
                </div>
            </div>
        </Layout>
    )
}

export default Login
