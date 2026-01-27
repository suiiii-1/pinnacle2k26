/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/data/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0b0b0b',
        accent: '#d4af37',
        accentDeep: '#8c0f0f',
        text: '#f5f5f5',
      },
      boxShadow: {
        glow: '0 0 30px rgba(212, 175, 55, 0.35)',
      },
    },
  },
  plugins: [],
};
