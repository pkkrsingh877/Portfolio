/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./public", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#222831', // from your CSS variable
        secondary: '#393E46', // from your CSS variable
        accent: '#00ADB5', // from your CSS variable
        light: '#EEEEEE', // from your CSS variable
      },
      fontSize: {
        small: '0.875rem',  // from your CSS variable
        medium: '1rem',     // from your CSS variable
        large: '1.25rem',   // from your CSS variable
      },
      spacing: {
        xs: '0.25rem', // from your CSS variable
        sm: '0.5rem',  // from your CSS variable
        md: '1rem',    // from your CSS variable
        lg: '2rem',    // from your CSS variable
      },
      borderRadius: {
        DEFAULT: '0.5rem', // from your CSS variable
      },
      fontFamily: {
        display: ['Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
