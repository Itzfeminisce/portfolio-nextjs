import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        prompt: ['"Prompt"', 'sans-serif'],
      },
      fontWeight: {
        thin: "100",
        extralight: "200",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      fontStyle: {
        normal: 'normal',
        italic: 'italic',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #ff7e5f, #feb47b)', 
      },
    }
  },
  variants: {
    fontStyle: ['responsive', 'hover', 'focus'], // Add other variants if needed
  },
  plugins: [],
};
export default config;
