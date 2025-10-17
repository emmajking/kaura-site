import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kaura-bg': '#0a0a0a',
        'kaura-text': '#e6e6e7',
        gold: 'var(--gold)',
      },
      boxShadow: {
        'kaura-card': '0 10px 30px rgba(245,190,60,0.08)',
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        playfair: ['var(--font-playfair)', 'serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
