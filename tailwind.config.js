const color = require("./node_modules/tailwindcss/colors")
const { default: fonts } = require("./tailwindConfig/fonts")

// const fonts = require("./tailwindConfig/fonts")

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'false', // or 'media' or 'class'
    theme: {
        screens: {
            'xs': { 'min': '0px', 'max': '696px' },

            'sm': { 'min': '696px', 'max': '768px' },
            // => @media (min-width: 640px and max-width: 767px) { ... }
            'md': { 'min': '768px', 'max': '1023px' },
            // => @media (min-width: 768px and max-width: 1023px) { ... }

            'lg': { 'min': '1024px', 'max': '1288px' },
            // => @media (min-width: 1024px and max-width: 1279px) { ... }

            'xl': { 'min': '1288px', 'max': '1599px' },
            // => @media (min-width: 1280px and max-width: 1535px) { ... }

            '2xl': { 'min': '1600px' },
            // => @media (min-width: 1536px) { ... }
        },
        extend: {
            colors: {
                "fuchsia": color.fuchsia,
                v1: {
                    "purple": "#2E134D",
                    "Stone": "#F6F4F5",
                    "tropicalViolet": "#CAB0E072",
                    "tropicalViolet": "#CAB0E072",
                    "Amethyst": "#9F67D1"
                }
            },
            fontFamily: {
                ...fonts.poppins,
                ...fonts.nunito,
                "Ubuntu": "'Ubuntu', 'sans-serif'",
                "Nunito-v1": "'Nunito', 'sans-serif'",
                "Poppins-v1": "'Poppins', 'sans-serif'",
                // "poppins-Italic": ["poppins-Italic"]

            },
        },
    },
    variants: {
        extend: {},
    }
}
