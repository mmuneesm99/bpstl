import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './nuxt.config.ts',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f4f5f6',
        ink: '#1a1d21',
        pulse: '#d0121a',
        medical: {
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          500: '#0f8f8a',
          600: '#0c746f',
          700: '#115e59',
        },
        emeraldbrand: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        redalert: '#ef4444',
      },
      fontFamily: {
        sans: ['Figtree', '"Segoe UI"', 'sans-serif'],
        display: ['"Bricolage Grotesque"', 'Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
