/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#eb212e",

          "secondary": "#ffffff",

          "accent": "#ede747",

          "neutral": "#18171C",

          "base-100": "#ffffff",

          "info": "#3D9AE1",

          "success": "#60E2BB",

          "warning": "#E09006",

          "error": "#FF3811",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

/* 
#ffffff
#eb212e
#ea454c
#e96a6a
#e88f89
*/