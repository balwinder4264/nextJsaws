import Head from 'next/head'

const Home = () => {
    return (
        <>
            <Head>
                <title>MICC Web App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">
                <h1 className="text-3xl bg-red">MICC</h1>
            </main>
        </>
    )
}

export default Home
