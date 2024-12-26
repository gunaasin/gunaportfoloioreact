/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'autoBlur', // Your custom class
    'blur-animation', // Keyframe animation name
  ],
  theme: {
    extend: {
      animation: {
        'blur-animation': 'blur-animation 0.1s infinate'
         // Extend Tailwind animations
      },
      keyframes: {
        'blur-animation': {
          '0%': { filter: 'blur(40px)' },
          '50%, 53%': { filter: 'blur(0px)' },
          '100%': { filter: 'blur(40px)' },
        },
      },
      fontFamily: {
        'tsan': ['Noto Serif', 'serif'], // Extend font families
      },
    },
  },
  plugins: [],
};
