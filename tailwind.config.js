module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "scale(-1,1) translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "scale(-1,1) translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "scale(-1,1) translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "scale(-1,1) translate3d(-4px, 0, 0)",
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
