import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: "rgba(255,255,255,0.5)",
          100: "#FAFAFA",
          200: "#F1F1F1",
          900: "#101010",
        },
        orange: {
          100: "#FBAF85",
          200: "#D87D4A",
        },
      },
      screens: {
        sm: "375px",
        smd: "550px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
      maxWidth: {
        mobile: "500px",
        tablet: "689px",
        "desktop-sm": "896px",
        "desktop-lg": "1110px",
      },
    },
  },
  plugins: [],
};
export default config;
