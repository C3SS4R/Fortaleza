import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta "Horizonte Atlantico"
        abyss: { DEFAULT: '#062A3B', deep: '#04202D' },
        ocean: { DEFAULT: '#0C6E88', light: '#0F86A5' },
        lagoon: { DEFAULT: '#38B2C6', light: '#63C6D6' },
        sand: { DEFAULT: '#E4B570', light: '#EFCD97' },
        coral: { DEFAULT: '#EE7250', light: '#F28C6E' },
        foam: '#F3FAFB',
        mist: '#9DB3BC',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
        widest3: '0.5em',
      },
      maxWidth: {
        content: '1400px',
      },
      keyframes: {
        heroZoom: {
          from: { transform: 'scale(1.1)' },
          to: { transform: 'scale(1.2)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      animation: {
        heroZoom: 'heroZoom 22s ease-in-out infinite alternate',
        floatSlow: 'floatSlow 7s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
