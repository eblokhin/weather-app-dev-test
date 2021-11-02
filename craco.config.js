/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv-flow').config()

const { ESLINT_MODES } = require('@craco/craco')

module.exports = {
  eslint: {
    mode: ESLINT_MODES.file,
  },
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
}
