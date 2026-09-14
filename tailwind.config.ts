import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1A1816",
          pure: "#1A1816",
          soft: "#2C2825",
        },
        parchment: {
          DEFAULT: "#EFE8DA",
          light: "#F7F3EB",
          dark: "#E5DCCB",
        },
        bone: {
          DEFAULT: "#FAF7F0",
          pure: "#FAF7F0",
          warm: "#F5EFE4",
        },
        oxblood: {
          DEFAULT: "#6B2333",
          deep: "#541B28",
          light: "#822D3F",
        },
        brass: {
          DEFAULT: "#A6813C",
          muted: "#8F6E32",
          light: "#C19C52",
        },
        stone: {
          DEFAULT: "#8C8577",
          light: "#A8A295",
          dark: "#686256",
        },
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "serif"],
        sans: ["var(--font-work-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
