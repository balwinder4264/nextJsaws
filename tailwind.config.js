module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '696px',
            // => @media (min-width: 696px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1288px',
            // => @media (min-width: 1288px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
        colors: {
            transparent: 'transparent',
            white: {
                DEFAULT: '#ffffff',
            },
            gray: {
                DEFAULT: '#f6f4f5',
                dark: '#191919',
            },
            purple: {
                DEFAULT: '#2E134D',
            },
        },
        fontFamily: {
            sans: ['Nunito', 'Helvetica Neue', 'Arial', 'sans-serif'],
        },
        fontSize: {
            xs: '.64rem',
            sm: '.9rem',
            base: '1rem',
            lg: '1.125rem',
            xl: '1.25rem',
            '2xl': '1.52rem',
            '3xl': '1.953rem',
            '4xl': '2.441rem',
            '5xl': '3.052rem',
            '6xl': '3.815rem',
            '7xl': '5rem',
        },
    },
    plugins: [require('@tailwindcss/forms')],
}
