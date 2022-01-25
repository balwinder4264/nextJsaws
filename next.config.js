module.exports = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/login',
                permanent: true,
            },
        ]
    },
    env: {
        api: process.env.API,
        wss: process.env.WSS,
    },
    reactStrictMode: true,
}
