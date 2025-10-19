// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#3B82F6', // Blue for buttons
//         secondary: '#1F2937', // Dark gray for text
//         accent: '#10B981', // Green for edit/save
//         danger: '#EF4444', // Red for delete
//         bgLight: '#F3F4F6', // Light gray background
//       },
//     },
//   },
//   plugins: [],
// };

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#3B82F6', // Blue for buttons
//         secondary: '#1F2937', // Dark gray for text
//         accent: '#10B981', // Green for edit/save
//         danger: '#EF4444', // Red for delete
//         bgLight: '#F3F4F6', // Light gray background
//       },
//       animation: {
//         'fade-in': 'fadeIn 0.3s ease-out',
//       },
//       keyframes: {
//         fadeIn: {
//           '0%': { opacity: '0', transform: 'scale(0.9)' },
//           '100%': { opacity: '1', transform: 'scale(1)' },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#1F2937',
        accent: '#10B981',
        danger: '#EF4444',
        bgLight: '#F3F4F6',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
    },
  },
  plugins: [],
};