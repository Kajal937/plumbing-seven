/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'custom-blue': 'rgba(0, 78, 137, 0.1)',
        customGray: '#262424',
        customBlue: 'rgb(0, 78, 137)',
        customGray1: 'rgb(156 163 175 / <alpha-value>)',
        customGray2: 'rgb(209 213 219 / <alpha-value>)',
        custom: 'rgb(246 244 244)',
      },
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px',
      },

    },
  },
  plugins: [],
};
