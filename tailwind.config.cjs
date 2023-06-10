/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'widthContainer': '1140px',
        'cardContainer': '210px',
        'textContainerCard': '150px'
      },
      margin: {
        'marginContainer': '85px',
        'marginHeaderBottom': '44px',
      },
      fontSize: {
        'customSizeText': '20px',
        'cardTextSize': '14px',
        'cardPriceSize': '11px'
      },
      textColor: {
        'textGray': '#9D9D9D',
        'priceColor': '#BDBDBD'
      },
      borderRadius: {
        'cardRadius': '40px'
      }
    },
  },
  plugins: [],
}