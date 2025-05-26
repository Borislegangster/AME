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
          DEFAULT: '#0a1e37',
          light: '#1a2e47',
          dark: '#000e27'
        },
        secondary: {
          DEFAULT: '#3498db',
          light: '#44a8eb',
          dark: '#2488cb'
        }
      }
    },
  },
  plugins: [],
}