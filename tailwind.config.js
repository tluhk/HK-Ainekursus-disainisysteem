const { filterTokensByType } = require('./fns');
const tokens = require('./output/light.json');
const globalTokens = require('./output/global.json');

const colors = filterTokensByType('color', tokens);
const globalColors = filterTokensByType('color', globalTokens);

const plugin = require('tailwindcss/plugin'); // for adding base styles

const baseFontSize = 1; // Base font size in rem's.
// Next is for fetching scaleRatio value from global.json
const scaleRatio = parseFloat(
  globalTokens.find((variable) => variable.name === 'font-scale-multiplyer')
    .value
);

const modularScale = (step) =>
  `${(baseFontSize * Math.pow(scaleRatio, step)).toFixed(2)}rem`;

module.exports = {
  content: ['./src/**/*.{html,js}', './src/index.html', 'index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontSize: {
      xs: modularScale(-2),
      sm: modularScale(-1),
      base: modularScale(0),
      lg: modularScale(1),
      xl: modularScale(2),
      '2xl': modularScale(3),
      '3xl': modularScale(4),
      '4xl': modularScale(5),
      '5xl': modularScale(6),
      '6xl': modularScale(7),
      '7xl': modularScale(8),
    },
    colors: {
      ...globalColors, // tokens from clobal.json
      ...colors, // tokens from light.json (they are switchable with dark.json)
    },
  },
  variants: {},
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: {
          fontSize: '18px',
          fontFamily: 'Montserrat',
        },
        h1: {
          fontSize: theme('fontSize.4xl'),
          fontWeight: '800',
          fontFamily: 'Roboto Serif',
        },
        h2: {
          fontSize: theme('fontSize.3xl'),
          fontWeight: '700',
          fontFamily: 'Roboto Serif',
        },
        h3: {
          fontSize: theme('fontSize.2xl'),
          fontWeight: '700',
        },
        h4: {
          fontSize: theme('fontSize.xl'),
          fontWeight: '700',
        },
        h5: {
          fontSize: theme('fontSize.lg'),
          fontWeight: '700',
        },
        h6: {
          fontWeight: '700',
        },
      });
    }),
  ],
};
