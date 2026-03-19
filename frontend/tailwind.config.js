module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1D4ED8', // Blue
        secondary: '#FBBF24', // Yellow
        accent: '#A855F7', // Purple
        background: '#F9FAFB', // Light Gray
        text: '#1F2937', // Dark Gray
      },
      animation: {
        fade: 'fade 0.5s ease-in-out',
        bounce: 'bounce 1s infinite',
      },
      keyframes: {
        fade: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
      },
    },
  },
  variants: {},
  plugins: [],
};