/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "rgb(255,255,255)",
      "light-violet": "hsl(246, 80%, 60%)",
      yellow: "hsl(44, 82%, 65%)",
      "soft-blue": "hsl(195, 74%, 62%)",
      "light-red": "hsl(348, 99%, 68%)",
      "lime-green": "hsl(145, 58%, 55%)",
      violet: "hsl(264, 64%, 52%)",
      "soft-orange": "hsl(15, 100%, 70%)",
      "dark-blue": "hsl(235, 46%, 20%)",
      "desaturated-blue": "hsl(235, 45%, 61%)",
      "pale-blue": "hsl(236, 100%, 87%)",
      "dark-blue-hover": "hsl(235, 46%, 30%)",
    },
    extend: {},
  },
  plugins: [],
};
