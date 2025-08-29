// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


// /** @type {import('tailwindcss').Config} */

// module.exports = {
//    darkMode:"class",
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // important for CRA
//   ],
  
//   theme: {
//     extend: {},
//   },
//   plugins: [require("daisyui")], // ✅ add daisyui here
// }

// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: false, // disables DaisyUI themes so Tailwind `dark:` works as expected
  },
};
