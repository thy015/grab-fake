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
      screens:{
        'mobile':{'max':'480px'},
        'small':{'max':'600px'},
        'extend-md':{'max':'768px'},
        'medium':{'max':'1133px'}
      },
    },
  },
  plugins: [],
}

