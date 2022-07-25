/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "black": "#001324", 
          "gray":"#00132412",
          "red":"#FF5064",
          "blue":"#5361FF",
          "green":"#18EDBC",
          "orange":"#FEB92B",
        },
        secondary: {
          "gray":"#DEDEE3",
          "green":"#83FFB3",
          "blue":"#7580FC",
        },
        tertiary: {
          "gray": "#F7F7FA",
        },
        quaternary: {
          'gray': '#EBEBF0',
        },
        quinary: {
          'gray': '#F4F4F4',
        }
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif",],
      },
    },
  },
  plugins: [],
}
