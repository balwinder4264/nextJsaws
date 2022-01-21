module.exports = {
    apps: [
        {
            name: 'micc',
            script: 'yarn',
            instances: 'max',
            autorestart: true,
            env_local: {
                args: 'dev',
            },
            env_development: {
                args: 'start',
            },
            env_production: {
                args: 'start',
            },
        },
    ],
}
