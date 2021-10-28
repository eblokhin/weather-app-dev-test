/* eslint-disable @typescript-eslint/no-var-requires */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFFFFF',
      'main-bg': '#E5E5E5',
      'gray-100': '#FAFAF9',
      'gray-200': '#E4E0DF',
      'gray-300': '#D6D2D1',
      'gray-400': '#8E8B8B',
      'gray-500': '#272525',
      'purple-100': '#730641',
    },
    fontFamily: {
      serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
      sans: ['PT Root', ...defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
