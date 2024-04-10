/** @type {import('tailwindcss').Config} */
export default {
  content: [
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
    "./src/**/*.{html,js,ts,jsx,tsx,vue}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}

