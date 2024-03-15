/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gunmetal': '#2B303A',
        'light-gunmetal': '#444C5C',
        'black-bean': '#331917',
        'coral': '#F7877F',
        'van-dyke': '#4D3230',
        'cinereous': '#A28B89',
        'rosy-brown': '#CD8F8B',
      },
      textShadow: {
        sm: '0 1px 4px #00000060',
        DEFAULT: '0 4px 6px #00000060',
        lg: '0 8px 24px #00000060',
      },
      fontFamily: {
        'pacifico': ['Pacifico', 'cursive'],
        'jua': ['Jua', 'sans-serif'],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'text-slide': {
            '0%, 16%': {
                transform: 'translateY(0%)',
            },
            '20%, 36%': {
                transform: 'translateY(-16.66%)',
            },
            '40%, 56%': {
                transform: 'translateY(-33.33%)',
            },
            '60%, 76%': {
                transform: 'translateY(-50%)',
            },
            '80%, 96%': {
                transform: 'translateY(-66.66%)',
            },
            '100%': {
                transform: 'translateY(-83.33%)',
            },
        },                    
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
}

