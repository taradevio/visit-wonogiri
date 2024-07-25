/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      'reddish': '#ce4141',
      'yellowish': '#f3ca40',
      'white': '#f4eedb',
      'blue': '#003049'
    },
    extend: {
      backgroundImage: {
        'nampu': "url('https://i.pinimg.com/736x/e9/f8/50/e9f850c6aeef44604f8307c4541796d3.jpg')"
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
  },
};
