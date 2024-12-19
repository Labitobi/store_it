import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        error: {
          DEFAULT: "#FF0000",
          5: "rgba(255, 0, 0, 0.05)", 
        },
        brand: {
          DEFAULT: "#3A86FF",
          "100": "#56B8FF",
          "200": "#1F6F9E",
        },
        red: "#FF6B6B",
        orange: "#FFA556",
        pink: "#FF88CC",
        blue: {
          light: "#56B8FF",
          DEFAULT: "#3A86FF",
          dark: "#1F6F9E",
        },
        light: {
          "100": "#F3F4F6",
          "200": "#E5E7EB",
          "300": "#D1D5DB",
        },
        dark: {
          "100": "#1E293B",
          "200": "#0F172A",
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        "drop-light": "0 10px 20px rgba(56, 108, 247, 0.1)",
        "drop-dark": "0 8px 20px rgba(0, 0, 0, 0.3)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "slide-up": {
          "0%": {
            transform: "translateY(20px)",
            opacity: "0",
          },
          "100%": {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        "slide-up": "slide-up 0.4s ease-out",
        "fade-in": "fade-in 0.3s ease-in",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;

