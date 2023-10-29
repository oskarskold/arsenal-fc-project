/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      padding: {
        '1/3': '33.3333333%',
        '2/3': '66.6666666%',
      },
      backgroundImage: {
        'hero-pattern': "url('./public/emirates-stadium-arsenal.webp')",
      },
      colors: {
        'arsenal-red': '#EF0107',
        'arsenal-blue': '#0B1A3C',
        'arsenal-golden': '#9C824A',
        'arsenal-white': '#FFFFFF',
        'arsenal-black': '#000000',
        'arsenal-gray': '#7F7F7F',
        'arsenal-dark-gray': '#333333',
      },
    },
  },
  plugins: [],
};
