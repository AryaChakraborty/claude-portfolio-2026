/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F3EFE6",
        "cream-2": "#E9E3D4",
        "cream-3": "#DED7C4",
        ink: "#0F0F0D",
        "ink-2": "#1A1A16",
        muted: "#6B6A5F",
        line: "#CFC8B5",
        "line-2": "#E0DAC8",
        accent: "#DFFB3A",
        "accent-ink": "#111",
        coral: "#FF5C3A",
      },
      fontFamily: {
        sans: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        display: [
          '"Helvetica Neue"',
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: ['"JetBrains Mono"', "ui-monospace", "Menlo", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.04em",
        "tighter-2": "-0.035em",
      },
    },
  },
  plugins: [],
};
