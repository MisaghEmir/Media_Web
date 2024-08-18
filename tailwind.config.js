/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-mode="dark"]'],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      AcuminPro : 'Acumin Pro',
      AcuminProItalic : 'Acumin Pro Italic',
      AcuminProBold : 'Acumin Pro Bold',
      AcuminProBoldItalic : 'Acumin Pro Bold Italic',
    }
  },
  plugins: [],
}

