/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,mjs}"],
  darkMode: "class", // allows toggling dark mode manually
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "Work Sans", ...defaultTheme.fontFamily.sans],
        serif: ["Source Serif Pro", "Lora", ...defaultTheme.fontFamily.serif],
      },
      maxWidth: {
        'reading': '1200px',
      },
      fontSize: {
        'reading': ['18px', '1.8'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
