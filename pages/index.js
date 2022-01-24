import Head from 'next/head'

const Home = () => {
    return (
        <>
            {/* <Head>
                <title>MICC Web App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head> */}

            <main >HEloo</main>
        </>
    )
}

export default Home

export async function getServerSideProps(context) {
    return {
        redirect: {
            destination: '/auth/login',
            permanent: false,
        },
    }
}
