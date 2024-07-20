import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        text: {
          50: "#f0ebf9",
          100: "#e0d8f3",
          200: "#c2b0e8",
          300: "#a389dc",
          400: "#8562d0",
          500: "#663bc4",
          600: "#522f9d",
          700: "#3d2376",
          800: "#29174f",
          900: "#140c27",
          950: "#0a0614",
        },
        backgroundcolor: {
          50: "#eeebfa",
          100: "#dcd6f5",
          200: "#baadeb",
          300: "#9785e0",
          400: "#745cd6",
          500: "#5233cc",
          600: "#4129a3",
          700: "#311f7a",
          800: "#211452",
          900: "#100a29",
          950: "#080514",
        },
        primarycolor: {
          50: "#eeebf9",
          100: "#ded8f3",
          200: "#bcb0e8",
          300: "#9b89dc",
          400: "#7a62d0",
          500: "#583bc4",
          600: "#472f9d",
          700: "#352376",
          800: "#23174f",
          900: "#120c27",
          950: "#090614",
        },
        secondarycolor: {
          50: "#f8f9eb",
          100: "#f2f3d8",
          200: "#e4e7b1",
          300: "#d7db8a",
          400: "#cacf63",
          500: "#bcc33c",
          600: "#979c30",
          700: "#717524",
          800: "#4b4e18",
          900: "#26270c",
          950: "#131406",
        },
        accentcolor: {
          50: "#edf9eb",
          100: "#daf3d8",
          200: "#b5e7b1",
          300: "#91db8a",
          400: "#6ccf63",
          500: "#47c33c",
          600: "#399c30",
          700: "#2b7524",
          800: "#1c4e18",
          900: "#0e270c",
          950: "#071406",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        FormImageParticulier: "url('/formhouse.jpeg')",
        FormImageProfessionnel: "url('/DES-11.jpg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
