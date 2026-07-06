import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0E16",
        surface: "#10151F",
        surfaceAlt: "#151B27",
        border: "#22293A",
        text: {
          primary: "#E7EAF0",
          secondary: "#9AA3B8",
          muted: "#5E6779",
        },
        accent: {
          DEFAULT: "#E8A33D",
          soft: "#F4C878",
        },
        signal: {
          DEFAULT: "#3FA9F5",
          soft: "#7FC4F8",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      maxWidth: {
        content: "1100px",
      },
    },
  },
  plugins: [],
} satisfies Config;
