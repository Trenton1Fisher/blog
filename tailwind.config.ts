import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D1A49F',
        secondary: '#356F5E',
        tertiary: '#698CB7',
        light: '#F1E4E1',
      },
    },
  },
  plugins: [],
}
export default config
