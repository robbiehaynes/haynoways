/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-gunmetal': '#2B303A',
        'brand-coral': '#F7877F',
        'brand-vista-blue': '#8D9EC6',
        'brand-tea-green': '#D4E4BC',
        'brand-beige': '#EEF5DB',
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'jua': ['Jua', 'sans-serif'],
      },
    },
  },
  plugins: [
  ],
}

