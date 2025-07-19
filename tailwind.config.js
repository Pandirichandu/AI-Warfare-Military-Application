/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A192F',
          800: '#112240',
          700: '#1E3A8A',
        },
        accent: {
          red: '#FF3D00',
          teal: '#00B8D4',
          yellow: '#FFD600',
        },
        success: {
          DEFAULT: '#00C853',
          light: '#69F0AE',
        },
        warning: {
          DEFAULT: '#FFD600',
          light: '#FFFF00',
        },
        error: {
          DEFAULT: '#FF3D00',
          light: '#FF6E40',
        },
        neutral: {
          100: '#F5F5F7',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar': 'radar 3s infinite',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        }
      },
    },
  },
  plugins: [],
};