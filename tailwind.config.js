/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          light: '#00CF60',
          main: '#0F89FF',
          lightest: '#42A2FF',
        },
        secondary: {
          main: '#5F5F5F',
          light: '#ffffff80',
          'cta-color': '#D0F9FF',
          'cta-text-color': '#5F5F5F',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat'],
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /^rotate-|bg-|text-|border-|rounded-|overflow-|pt-|pb-|pl-|pr-|truncate-|shrink/,
    },
  ],
}
