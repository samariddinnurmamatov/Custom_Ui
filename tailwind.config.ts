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
      green: "#047857",
      light: "#FFFFFF",
      stroke: "#d1d5db",
      white: "#FFFFFF",
      warning: "#fbbf24",
      dark: "#1c1917",
      "red-primary": "#D92E15",
      "hover-red": "#fda4af",
      "hover-red-tx": "#fb7185",
      "blue-primary": "#2563eb",
      "gray-500": "#A9B0B9",
      "light-gray": "#F7F8F8",
      "hover-light-gray": "#f3f3f3",
      "hover-light-blue": "#60a5fa",
      "hover-light-green": "#059669",
      hover: "0px 5px 9px 0px rgba(34, 60, 80, 0.12)",
      "table-gray": "#dddddd",
      tooltip: "#A9B0B9",
      "blue": "#007bff",
      customBlue: "#007bff",
      customRed: "#ff0000",
      customGreen: "#00ff00",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      top: {
        "-20px": "-20px",
      },
    },
  },
  plugins: [],
};
export default config
