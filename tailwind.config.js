/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-blue": "#13487d",
        "dark-blue": "#0D285F",
        "dark-slate": "#373d45",
        tan: "#ece1c8",
        "dark-tan": "#ecb782",
        "light-black": "#2c2825",
        rust: "#C83A26",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
