/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f7f7f8',
          100: '#eeeef0',
          200: '#d9d9de',
          300: '#b8b8c1',
          400: '#92929f',
          500: '#747483',
          600: '#5e5e6b',
          700: '#4c4c57',
          800: '#41414a',
          900: '#2a2a32',
          950: '#1a1a1f',
        },
        accent: {
          50: '#f6f6f7',
          100: '#e9e9eb',
          200: '#d7d7db',
          300: '#b9b9c1',
          400: '#96969f',
          500: '#797983',
          600: '#66666d',
          700: '#54545a',
          800: '#48484c',
          900: '#3f3f42',
          950: '#282829',
        }
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-elegant': 'linear-gradient(135deg, #2a2a32 0%, #1a1a1f 100%)',
        'gradient-subtle': 'linear-gradient(135deg, #f7f7f8 0%, #eeeef0 100%)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}