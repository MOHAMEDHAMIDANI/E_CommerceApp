/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors : {
        'mainColor': '#014A32',
        'secondColor': '#038A5D',
        'thirdColor' : '#04C988' ,
        'whiteColor' : '#FFFFFF',
        'goldColor' : '#fde047',
        'greyColor' : '#F5F7F9',
        'darkColor': '#0f0f10',
        'midNightColor': '#0c0c0d',
        'lateNightColor': '#18181b',
      }
    },
  },
  plugins: [require("daisyui")],
}
// 
