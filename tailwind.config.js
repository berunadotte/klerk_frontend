module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      percent: '-1%',
    },
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      colors: {
        'bg-gray': '#F5F5F8'
      }
    },
  },
  plugins: [],
}