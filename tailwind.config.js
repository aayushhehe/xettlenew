/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      primary: "#015EFE",
      secondary: "#C7D6F0",
      text: "#081121",
      bg: "#F1F6FF",
      accent: "#31EF65",
    },
  },
  plugins: [],
};
