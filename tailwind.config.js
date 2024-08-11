/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "primary": "#c83b0e",
        "secondary": "#faf6f3",
      },
      fontFamily: {
        RedHatBold: ["RedHatText-Bold", "sans-serif"],
        RedHat: ["RedHatText-Regular", "sans-serif"],
      },
     
    },
  },
  plugins: [],
}

