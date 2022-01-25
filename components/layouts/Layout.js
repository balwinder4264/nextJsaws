import Header from '@/components/global/Header'
import Footer from '@/components/global/Footer'
import Head from 'next/head'
import { LayoutTypes } from '@/src/types/LayoutTypes'

const Layout = ({ children, type = LayoutTypes.DEFAULT }) => {
    return (
        <>
            <Head>
                <title>MICC WebApp</title>
                <meta name="description" content="" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&family=Poppins:wght@700&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex h-screen flex-col">
                {type !== LayoutTypes.AUTH && <Header />}
                <main className={type === LayoutTypes.AUTH ? 'flex h-full items-center justify-center' : 'flex-grow'}>
                    {children}
                </main>
                {type !== LayoutTypes.AUTH && <Footer />}
            </div>
        </>
    )
}

export default Layout
