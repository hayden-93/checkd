import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/assets/images/banner.jpg')",
      },
    },
    plugins: [],
  },
};

export default config;
