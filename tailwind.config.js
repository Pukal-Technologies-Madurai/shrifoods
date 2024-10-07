/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/styles/custom-utilities.css",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#04760A",
        "secondary": "#F6FC62",
        "accent": "#1fb6ff",
        "black": "#000000",
        "white": "#ffffff",
      },
      fontFamily: {
        sans: ["Lato", "sans-serif"],
      },
    },
  },
  plugins: [],
  experimental: {
    applyComplexClasses: true,
  }
}

