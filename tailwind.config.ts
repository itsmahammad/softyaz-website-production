import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        softy: {
          bg: "#050816",
          panel: "#0B1020",
          blue: "#3B82F6",
          cyan: "#22D3EE",
          purple: "#8B5CF6"
        }
      },
      boxShadow: {
        glow: "0 0 50px rgba(34, 211, 238, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
