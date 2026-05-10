/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        theme: {
          bg: 'var(--bg-color)',
          text: 'var(--text-color)',
          muted: 'var(--text-muted)',
          faint: 'var(--text-faint)',
          'faint-hover': 'var(--text-faint-hover)',
          border: 'var(--border-color)',
          'border-faint': 'var(--border-faint)',
          accent: 'var(--accent)',
          'accent-soft': 'var(--accent-soft)',
        }
      }
    },
  },
  plugins: [],
}
