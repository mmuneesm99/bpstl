import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{vue,js,ts}',
    './nuxt.config.ts',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f4f1eb',
        ink: '#121316',
        pulse: '#e10600',
        medical: {
          50: '#fff1f0',
          100: '#ffd9d6',
          200: '#ffb1ab',
          500: '#e10600',
          600: '#b80500',
          700: '#7a0400',
        },
        emeraldbrand: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        },
        redalert: '#ef4444',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
    },
  },
  plugins: [],
} satisfies Config
