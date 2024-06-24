/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "main":"#0087ff",
        "alter":"#002f69",
      }
    },
  },
  plugins: [],
}

