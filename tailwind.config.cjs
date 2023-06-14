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
        'cardPriceSize': '11px',
        'title': '32px'
      },
      textColor: {
        'textGray': '#9D9D9D',
        'priceColor': '#BDBDBD'
      },
      borderRadius: {
        'cardRadius': '40px',
        'arrowBorder': '8px'
      }
    },
    lineHeight: {
      'title': '39px'
    },
    translate: {
      'buttonTranslate': '-3px'
    },
  },
  plugins: [],
}