/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0e0b0a',
          burgundy: '#5a121d',
          burgundyLight: '#781c29',
          amber: '#c9783e',
          gold: '#e2a35d',
          goldLight: '#f5d5a5',
          cream: '#f9f6f0',
          muted: '#8b8480',
          charcoal: '#1a1817',
          surface: '#151312',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 20% 40%, rgba(184, 92, 34, 0.45) 0%, rgba(70, 20, 20, 0.3) 40%, rgba(14, 11, 10, 0.95) 75%, #0a0807 100%)',
        'cosmic-gradient': 'radial-gradient(circle at 40% 30%, rgba(200, 110, 50, 0.3) 0%, rgba(40, 90, 120, 0.25) 35%, rgba(20, 25, 45, 0.9) 70%, #0d111a 100%)',
      }
    },
  },
  plugins: [],
}
