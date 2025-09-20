/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-bg': '#0a0a0a',
        'secondary-bg': '#1a1a1a',
        'primary-accent': '#ff6b00',
        'hover-accent': '#ff8533',
        'text-primary': '#ffffff',
        'text-secondary': '#cccccc',
        'border-color': 'rgba(255, 255, 255, 0.1)',
      },
      fontFamily: {
        'heading': ['Poppins', 'sans-serif'],
        'body': ['Open Sans', 'sans-serif'],
      },
      maxWidth: {
        'container': '1200px',
      },
      boxShadow: {
        'card': '0 4px 12px rgba(0,0,0,0.3)',
        'card-hover': '0 8px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'marquee': 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
