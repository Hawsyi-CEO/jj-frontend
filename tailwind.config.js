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
        },
        elegant: {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#e8e4dd',
          300: '#ddd5c8',
          400: '#cfc2ae',
          500: '#bfa994',
          600: '#a08973',
          700: '#8b7460',
          800: '#725f50',
          900: '#5d4f43',
          950: '#322a22',
        },
        rose: {
          50: '#fdf2f2',
          100: '#fce8e6',
          200: '#fbd5d1',
          300: '#f8b4b0',
          400: '#f48882',
          500: '#ec5e56',
          600: '#d63f37',
          700: '#b5302a',
          800: '#962c27',
          900: '#7c2d27',
          950: '#431411',
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