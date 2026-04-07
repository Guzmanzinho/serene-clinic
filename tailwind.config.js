/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          sage: '#E3E8E4',
          accent: '#0284C7',
          surface: '#FFFFFF',
          bg: '#F8FAFC',
          text: '#1E293B'
        }
      },
      fontFamily: {
        heading: ['"DM Sans"', 'sans-serif'],
        body: ['"Nunito"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
