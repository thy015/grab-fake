/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Ggreen: {
          DEFAULT: '#00B14F', 
        },
      },
    },
  },
  plugins: [],
}

