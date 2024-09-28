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

        customcolors: {
          text: "#050316",
          background: "#fbfbfe",
          primary: {
            50: "#031616",
            100: "#072b2c",
            200: "#0e5758",
            300: "#158284",
            400: "#1caeb0",
            500: "#22d9dd",
            600: "#4fe1e3",
            700: "#7be8ea",
            800: "#a7f0f1",
            900: "#d3f7f8",
            950: "#e9fbfc",
          },
          secondary: {
            50: "#0b0e0d",
            100: "#161d19",
            200: "#2c3a33",
            300: "#43564c",
            400: "#597366",
            500: "#6f907f",
            600: "#8ca699",
            700: "#a9bcb2",
            800: "#c5d3cc",
            900: "#e2e9e5",
            950: "#f1f4f2",
          },
          accent: {
            50: "#0f0f0a",
            100: "#1e1d15",
            200: "#3c3b2a",
            300: "#5a583f",
            400: "#787654",
            500: "#969369",
            600: "#aba987",
            700: "#c0bea5",
            800: "#d5d4c3",
            900: "#eae9e1",
            950: "#f5f4f0",
          },
        },

        "heavy-metal": {
          DEFAULT: "#171C1A",
          50: "#CDD6D2",
          100: "#C1CCC8",
          200: "#ABBAB4",
          300: "#95A8A0",
          400: "#7E958C",
          500: "#6A8178",
          600: "#576A63",
          700: "#45544E",
          800: "#333E39",
          900: "#202724",
          950: "#171C1A",
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

        "slide-left": {
          "0%": {
            transform: "translateX(0%)",
          },
          "100%": {
            transform: "translateX(var(--translate-x, -100%))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "slide-left": "slide-left 15s linear infinite",
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
