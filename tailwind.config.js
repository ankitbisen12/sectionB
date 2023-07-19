/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        lay:{
          400:'#3062C8'
        },
        icons:{
          100:''
        }
      }
    },
  },
  plugins: [require('@tailwindcss/forms'),],
};
