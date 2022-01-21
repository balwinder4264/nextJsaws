module.exports = {
    env: {
        browser: true,
        es2021: true,
        amd: true,
        node: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:cypress/recommended'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'cypress'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
    },
}
