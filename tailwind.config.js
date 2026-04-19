/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fafaf8",
        secondary: "#f0ede8",
        card: "#ffffff",
        navy: "#1a1a2e",
        orange: "#e85d26",
        green: "#2d6a4f",
        violet: "#9b5de5",
        textMain: "#1a1a2e",
        textMuted: "#6b7280",
        borderLight: "rgba(0,0,0,0.07)",
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'glow': '0 0 20px rgba(232, 93, 38, 0.4)',
      }
    },
  },
  plugins: [],
}
