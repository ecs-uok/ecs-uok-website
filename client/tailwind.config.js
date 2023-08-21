/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0065AD',
        secondary: '#077DD3',
        overlay: '#00000090',
      },
    },
  },
  plugins: [
  ],
}

