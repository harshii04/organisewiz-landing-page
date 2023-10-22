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
        "--highlight-purple": "rgba(163, 143, 219, 1)",
        "--stroke-purple": "rgba(53, 36, 100, 0.3)",
        "--dark-purple": "rgba(53, 36, 100, 1)",
        "--text-purple": "rgba(191, 185, 208, 1)",
        "--primary-purple": "rgba(139, 98, 255, 1)",
        "--icon-white": "rgba(255, 255, 255, 0.5)",
        "--btn-hover": "rgba(116, 79, 219, 1)",
      },
    },
  },
  plugins: [],
};
