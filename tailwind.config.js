/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Dark theme — near-black base, off-white type, one electric-blue accent
        ink: "#0a0a0a",
        coal: "#0e0e10",
        surface: "#121215",
        line: "rgba(255,255,255,0.08)",
        cream: "#f2f1ec",
        muted: "#98978f",
        accent: {
          DEFAULT: "#3e9fff",
          soft: "rgba(62,159,255,0.12)",
          dim: "#1c5fae",
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
        wideish: "0.22em",
      },
      animation: {
        "spin-slow": "spin 14s linear infinite",
      },
    },
  },
  plugins: [],
};
