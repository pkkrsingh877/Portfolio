/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}", "./public", "./index.html"],
  theme: {
    extend: {
      colors: {
        primary: '#222831', // from your CSS variable
        secondary: '#393E46', // from your CSS variable
        accent: '#00ADB5', // from your CSS variable
        light: '#EEEEEE', // from your CSS variable
      },
      fontSize: {
        small: '1rem',  // from your CSS variable
        medium: '1.5rem',     // from your CSS variable
        large: '2rem',   // from your CSS variable
        larger: "3rem",
        largest: '4rem'
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
        lato: ['Lato', 'sans-serif'],   // Add Lato
        roboto: ['Roboto', 'sans-serif'], // Add Roboto
        openSans: ['Open Sans', 'sans-serif'], // Add Sans Serif
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
