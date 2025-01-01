import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      colors: {
        background: "#060b1c",
        foreground: "#ffffff",
        border: "#374151",
        primary: "#060b1c",
        secondary: "#60a5fa",
        tertiary: "#facc15",
        neutral: {
          lightest: "#f0f0f0",
          medium: "#9ca3af",
          darkest: "#374151",
        },
        gradient: {
          start: "#060b1c",
          mid: "#0a152b",
          end: "#041028",
        },
      },
      backgroundImage: {
        "hero-pattern": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      },
      fontFamily: {
        header: ["Poppins", "sans-serif"],
        body: ["Roboto", "sans-serif"],
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
export default config;
