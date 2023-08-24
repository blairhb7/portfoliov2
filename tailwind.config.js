/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  

  theme: {
    extend: {
      backgroundVideo:{
        phonecall:'/phone-call.mp4'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        headline: ['var(--font-Pt_Sans)'],
        
      },
      screens: {
       
        '2xl': '1980px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
    // ...
  ],

}
