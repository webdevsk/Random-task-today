/** @type {import('tailwindcss').Config} */
// Supports weights 200-900
import defaultTheme from 'tailwindcss/defaultTheme'

const fontFamilyOverrides = {
  'mulish': ['Mulish Variable', ...defaultTheme.fontFamily.sans],
}
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: fontFamilyOverrides,
    },
  },
  plugins: [],
}

