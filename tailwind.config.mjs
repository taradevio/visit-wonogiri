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
        'nampu': "url('https://steemitimages.com/DQmbaQT8tuqWdBh2mGkd2JjasUMDR4HxLNzQWZK4ECU6duV/IMG_0950.JPG')"
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    base: false,
  },
};
