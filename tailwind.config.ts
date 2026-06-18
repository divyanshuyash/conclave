import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        conclave: {
          black: "#0B0B0B",
          charcoal: "#161616",
          gold: "#D9A520",
          offwhite: "#F3F3F3",
          muted: "#9A958C",
          wine: "#301315",
          platinum: "#D8D2C3"
        }
      },
      fontFamily: {
        display: ["Anton", "Bebas Neue", "Impact", "Arial Narrow", "sans-serif"],
        body: ["Montserrat", "Poppins", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(217,165,32,0.26), 0 18px 58px rgba(0,0,0,0.52)",
        "gold-soft": "0 10px 35px rgba(217,165,32,0.13)"
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #FFF5BA 0%, #D9A520 42%, #8B5D10 100%)",
        "dark-radial": "linear-gradient(135deg, rgba(48,19,21,0.28), transparent 38%), linear-gradient(180deg, #11100d, #070707)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        shine: {
          "0%": { transform: "translateX(-120%) skewX(-18deg)" },
          "100%": { transform: "translateX(220%) skewX(-18deg)" }
        },
        pulseGold: {
          "0%, 100%": { opacity: "0.36", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.08)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        shine: "shine 4.5s ease-in-out infinite",
        "pulse-gold": "pulseGold 3.5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
