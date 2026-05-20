/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', "serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#0a0a0b",
        charcoal: "#16161a",
        bone: "#f5f1e8",
        beige: "#d8c9a8",
        gold: "#c9a96a",
        goldsoft: "#e4cf9a",
        neon: "#a78bfa",
        neon2: "#7c3aed",
      },
      boxShadow: {
        gold: "0 10px 40px -10px rgba(201,169,106,0.5)",
        glow: "0 0 80px -10px rgba(167,139,250,0.45)",
      },
      backgroundImage: {
        aurora:
          "linear-gradient(135deg, #c9a96a 0%, #e4cf9a 30%, #a78bfa 70%, #7c3aed 100%)",
        gold: "linear-gradient(135deg, #c9a96a, #e4cf9a)",
      },
      animation: {
        "fade-up": "fadeUp .6s ease-out both",
        float: "float 8s ease-in-out infinite",
        shimmer: "shimmer 2.2s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(14px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-18px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-400px 0" },
          "100%": { backgroundPosition: "400px 0" },
        },
      },
    },
  },
  plugins: [],
};
