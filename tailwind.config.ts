import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#070A12',
        foreground: '#F6F0E8',
        navy: '#0B1020',
        sky: '#82C8E8',
        beige: '#E8D9C4'
      },
      borderRadius: { xl: '1rem', '2xl': '1.5rem' },
      boxShadow: { cinematic: '0 20px 80px rgba(0,0,0,.35)' }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
export default config;
