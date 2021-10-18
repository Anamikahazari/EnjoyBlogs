module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex:{
      '1': '1 1 0%',
      '3':'3',
      '6':'6',
      '9':'9',
    },
    extend: {
      fontFamily:{
        josefinsans:['Josefin Sans', 'sans-serif'],
        loraserif:['Lora serif'],
      },
      height:{
        '50':'50px',
      },
      margin:{
        '10':'10px',
      },
      inset:{
        '1/2':'50%',
        '20%':'100px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
