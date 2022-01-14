module.exports = {
  content: [
    "**/*.html"
  ],
  safelist: [
    "text-red-500", "text-body-2"
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
          "body": "'Inter', sans-serif",
          "body-2": "'Montserrat', sans-serif"
      },
      fontSize:{
        "h2": ["48px",{lineHeight: "64px"}],
        "h3": ["40px",{lineHeight: "56px"}]
      },
      borderRadius: {
        "example": "16px"
      },
      colors: {
        primary: "#8C30F5"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
