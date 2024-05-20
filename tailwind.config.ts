import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '400px',
        '2xl': '1400px',
        '3xl': '1920px',
      },
      colors: {
        black: '#050507',
      },
      backgroundImage: {
        'ysl-pattern': "url('../public/images/ysl-background.jpg')",
        'ysl-triangle': "url('../public/images/ysl-triangle.svg')",
      },
      gridTemplateColumns: {
        '16': 'repeat(16, minmax(0, 1fr))',
        '18': 'repeat(18, minmax(0, 1fr))',
      },
      animation: {
        carousel: 'translatex 30s linear infinite',
      },
      keyframes: {
        translatex: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
