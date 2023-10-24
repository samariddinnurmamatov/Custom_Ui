import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      gray: "#6C7178",
      light: "#FFFFFF",
      stroke: "#d1d5db",
      "red-primary": "#D92E15",
      "hover-red": "#fda4af",
      "hover-red-tx": "#fb7185",
      "blue-primary": "#2563eb",
      "gray-500": "#A9B0B9",
      "light-gray": "#F7F8F8",
      "hover-light-gray": "#f3f3f3",
      "hover-light-blue": "#60a5fa",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config
