/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        syne: ['var(--font-syne)', 'sans-serif'],
        dm: ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        ink: '#0a0a0f',
        paper: '#f5f3ef',
        accent: '#e8401c',
        accent2: '#1c4de8',
        mid: '#6b6b7a',
        line: '#d8d5cf',
      },
    },
  },
  plugins: [],
}
