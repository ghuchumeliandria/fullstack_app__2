
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
        background: "var(--background)",
        foreground: "var(--foreground)",
        bgmain : '#FBF9F7',
        borderColor : 'EFEDEB'
      },
      fontFamily : {
        DM_Sans : 'var(--font_DM_Sans)'
      }
    },
  },
  plugins: [],
};
export default config;
