/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],

  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      boxShadow: {
        card: "0px 2px 6px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
