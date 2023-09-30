/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#ffe5b2",
        "secondary": "#de8b04",
        "third": "#f0e000",
        "fourth": "#a31000",
        "fifth": "#452101",
      },
    size: {
      "1d": "1300px"
    }
    },
  },
  plugins: [],
}

