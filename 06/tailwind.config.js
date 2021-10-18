module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container:{
      center: true,
    },
    fontFamily:{
      "body": "'Inter', san-serif"
    },
    extend: {
      width:{
        1200: '1200px',
        1110: '1110px',
        600: '600px',
        350:'350px',
        250:'250px',
      },
      height:{
        1200: '1200px',
        1260: '1260px',
        380:'380px'
      },
      colors:{
        'turquoise':{
          DEFAULT: '#2EC5CE',
          100: '#D5FAFC'
        },
        'brand-purple': {
          DEFAULT: '#8C30F5',
          800: '#D6B1FF'
        }
      },
      fontSize:{
        'h1': ["72px", "98px"],
        'h2': ["48px", "64px"],
        'h3': ["18px", "32px"],
        'h4': ["14px", "26px"]
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}