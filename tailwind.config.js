/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-50': '#f0f9ff',
        'blue-600': '#2563eb',
        'blue-700': '#1d4ed8',
        'green-600': '#16a34a',
        'green-700': '#15803d',
        'gray-600': '#4b5563',
        'gray-700': '#374151',
      },
    },
  },
  plugins: [],
}

