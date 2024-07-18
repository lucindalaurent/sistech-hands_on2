/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      accent: "#374060",
      pink: "#a1096a",
      lightPink: "#fcf4f8",
      boldPink: "#fe31f8",
      pinkish: "#f6b9f3",
      darkmagenta: "#8b008b",
      orchid: "#a72778",
      accentDark: "#0E183B",
      lightGray: "#d4cfd2",
      gray: '#919090',
      transition: '#FE31F8',
      ink: "#333",
      subtle: "#EBEBEBD2",
      border: "#E5E5E5",
      dark: "#2A2A2A",
      invert: "#fff",
      purple: "#58017d",
      brightPurple: "#680095",
      darkPurple: "#72127F",
      varPurple: '#f7d2fa',
      fusion: "#af009e",
    },
    fontFamily: {
      sans: ['Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', 'Verdana', 'sans-serif'],
      serif: ["Merriweather", "serif"],
      poppins: ["Poppins", "sans-serif"],
      playwrite: ["var(--font-playwrite)"],
      // withLove : ['With Love', 'sans-serif'],
      // handwriting: ['Pacifico', 'cursive'],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        '25': '100px',
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
};
