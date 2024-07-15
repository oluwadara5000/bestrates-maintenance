import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1rem',
        lg: '1rem'
      }
    },

    screens: {
      sm: '374px',
      // => @media (min-width: 374px)

      md: '450px',
      // => @media (min-width: 450px)

      lg: '525px',
      // => @media (min-width: 525px)

      xl: '600px',
      // => @media (min-width: 600px)

      '2xl': '685px',
      // => @media (min-width: 685px)

      '3xl': '768px',
      // => @media (min-width: 768px)

      '4xl': '990px',
      // => @media (min-width: 990px)

      '5xl': '1024px',
      // => @media (min-width: 1024px)

      '6xl': '1280px',
      // => @media (min-width: 1280px)

      '7xl': '1536px'
      // => @media (min-width: 1536px)
    }
  },
  plugins: []
}
export default config;
