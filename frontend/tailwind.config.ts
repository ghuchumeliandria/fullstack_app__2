import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgmain: "var(--bgmain)",
        borderColor: "var(--borderColor)",
      },
      fontFamily: {
        DM_Sans: "var(--font_DM_Sans)",
      },
    },
  },
  plugins: [],
};

export default config;
