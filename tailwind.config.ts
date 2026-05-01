import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // ── Primary Brand ──
        brand: {
          blue: "#4E6FD9",
          purple: "#6B5BC9",
          "deep-blue": "#3D4FA8",
          royal: "#4A5DC9",
        },
        // ── Accents ──
        accent: {
          pink: "#E85D8A",
          orange: "#E67A3D",
          cyan: "#00B8D9",
          green: "#00C98B",
        },
        // ── Semantic ──
        income: "#00C98B",
        expense: "#E85D8A",
        success: "#00C98B",
        error: "#E84D4D",
        warning: "#E6A545",
        info: "#4E6FD9",
        "on-track": "#40C4FF",
        // ── Dark surfaces ──
        dark: {
          bg: "#0A0B0D",
          "bg-secondary": "#12131A",
          surface: "#16171D",
          "surface-elevated": "#1D1E26",
          border: "#2D2E35",
          "border-subtle": "#23242B",
        },
        // ── Light surfaces ──
        light: {
          bg: "#F8F9FD",
          "bg-secondary": "#FFFFFF",
          surface: "#FFFFFF",
          "surface-elevated": "#F5F6FA",
          border: "#D1D2D9",
          "border-subtle": "#E8E9EE",
        },
        // ── Text ──
        "text-dark": {
          primary: "#E8E9ED",
          secondary: "#8A8B95",
          tertiary: "#5A5B65",
        },
        "text-light": {
          primary: "#1A1B1E",
          secondary: "#6B6C73",
          tertiary: "#9B9BA5",
        },
        // ── Grays ──
        gray: {
          50: "#FAFAFC",
          100: "#F5F6FA",
          200: "#E8E9EE",
          300: "#D1D2D9",
          400: "#B3B4BD",
          500: "#9B9BA5",
          600: "#6B6C73",
          700: "#4A4B52",
          800: "#2D2E33",
          900: "#1A1B1E",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        display: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
      },
      backgroundImage: {
        "gradient-hero": "linear-gradient(135deg, #2D3E85, #4A4A92)",
        "gradient-hero-purple": "linear-gradient(135deg, #4A4A92, #8B6DB8)",
        "gradient-cta": "linear-gradient(135deg, #2D3E85, #4A4A92)",
        "gradient-card-blue": "linear-gradient(135deg, #4E6FD9, #6B5BC9)",
        "gradient-card-pink": "linear-gradient(135deg, #E85D8A, #E87099)",
        "gradient-sunset": "linear-gradient(135deg, #BA4668, #BF5E33)",
        "gradient-ocean": "linear-gradient(135deg, #008FA8, #3D4FA8)",
        "gradient-dark":
          "linear-gradient(180deg, #0A0B0D 0%, #12131A 100%)",
        "gradient-radial-blue":
          "radial-gradient(ellipse at center, rgba(78,111,217,0.12) 0%, transparent 70%)",
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "24px",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "slide-up": "slideUp 0.8s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%": { opacity: "0.4" },
          "100%": { opacity: "0.8" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
