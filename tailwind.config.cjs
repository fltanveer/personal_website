/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  safelist: ["hidden", "block", "bg-[#523857]", "grid-cols-2", "grid-cols-3"],
  theme: {
    extend: {
      maxWidth: {
        blog: "832px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
