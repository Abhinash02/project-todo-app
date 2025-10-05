/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6', // Blue for buttons
        secondary: '#1F2937', // Dark gray for text
        accent: '#10B981', // Green for edit/save
        danger: '#EF4444', // Red for delete
        bgLight: '#F3F4F6', // Light gray background
      },
    },
  },
  plugins: [],
};