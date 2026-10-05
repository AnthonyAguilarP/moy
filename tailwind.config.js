/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        neumorph: {
          bg: '#e0e5ec',
          light: '#ffffff',
          dark: '#a3b1c6',
          accent: '#ff6b9d',
          accentSoft: '#ffeef4',
          gold: '#f7c948',
          goldSoft: '#fff8e7',
          sage: '#88b5a3',
          sageSoft: '#e8f4f0',
          lavender: '#b8a9e8',
          lavenderSoft: '#f3f1fc',
        }
      },
      boxShadow: {
        'neumorph': '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff',
        'neumorph-inset': 'inset 8px 8px 16px #a3b1c6, inset -8px -8px 16px #ffffff',
        'neumorph-sm': '4px 4px 8px #a3b1c6, -4px -4px 8px #ffffff',
        'neumorph-lg': '16px 16px 32px #a3b1c6, -16px -16px 32px #ffffff',
        'neumorph-accent': '8px 8px 16px #a3b1c6, -8px -8px 16px #ffffff, 0 0 20px rgba(255, 107, 157, 0.3)',
      },
      borderRadius: {
        'neumorph': '24px',
        'neumorph-sm': '16px',
        'neumorph-lg': '32px',
      },
      fontFamily: {
        'display': ['"Space Grotesk"', 'sans-serif'],
        'hand': ['"Dancing Script"', 'cursive'],
        'serif': ['"Playfair Display"', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
        'rotate-slow': 'rotateSlow 20s linear infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        rotateSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}