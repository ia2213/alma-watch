import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdf9f0',
          100: '#faf0d7',
          200: '#f4d99c',
          300: '#eec062',
          400: '#e8a83a',
          500: '#c8941e',
          600: '#a67818',
          700: '#835d14',
          800: '#614414',
          900: '#3e2c0d',
        },
        obsidian: '#0a0a0a',
        charcoal: '#1a1a1a',
        smoke: '#2a2a2a',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      letterSpacing: {
        'widest-xl': '0.4em',
      },
      animation: {
        'fade-up': 'fadeUp 1s ease forwards',
        'fade-in': 'fadeIn 1.5s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
