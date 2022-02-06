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
        // api: process.env.API,
        api: "http://nodeaws-env.eba-vav83cwg.us-east-1.elasticbeanstalk.com/",
        // api: "http://localhost:8080/",
        wss: process.env.WSS,
    },
    reactStrictMode: true,
}
