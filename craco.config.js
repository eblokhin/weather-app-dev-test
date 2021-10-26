const { ESLINT_MODES } = require("@craco/craco")
const autoprefixer = require('autoprefixer')
const tailwind = require('tailwindcss')

module.exports = {
    eslint: {
        mode: ESLINT_MODES.file
    },
    style: {
        postcss: {
            plugins: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },
    },
};