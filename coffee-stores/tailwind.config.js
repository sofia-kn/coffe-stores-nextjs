/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "purple-main": "rgba(67, 56, 202, 1)",
      "purple-dark": "rgba(79, 70, 229, 1)",
      "black-main": "rgba(17, 24, 39, 1)",
      "white-main": "rgba(229, 231, 235, 1)",
      "white-span": "rgba(249, 250, 251, 1)",
      "dark-text": "rgba(55, 59, 100, 1)",
    },

    // extend: {},
  },
  plugins: [],
};
