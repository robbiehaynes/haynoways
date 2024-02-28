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
        'brand-gunmetal': '#2B303A',
        'brand-coral': '#F7877F',
        'brand-dark-coral': '#E46D5E',
        'brand-vista-blue': '#8D9EC6',
        'brand-tea-green': '#D4E4BC',
        'brand-beige': '#EEF5DB',
        'gradient-orange': '#F5B59A',
        'gradient-yelow': '#FFF6DE',
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
        'text-slide': 'text-slide 12.5s cubic-bezier(0.83, 0, 0.17, 1) infinite',
      },
      keyframes: {
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

