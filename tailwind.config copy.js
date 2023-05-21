const { filterTokensByType } = require('./fns');
const lightTokens = require('./output/light.json');
const darkTokens = require('./output/dark.json');
const globalTokens = require('./output/global.json');

const lightColors = filterTokensByType('color', lightTokens);
const darkColors = filterTokensByType('color', darkTokens);
const globalColors = filterTokensByType('color', globalTokens);

const plugin = require('tailwindcss/plugin');

const baseFontSize = 1; // Base font size in rem's. If browser default size 16px, then now it is 18px
const scaleRatio = 1.25; // Modular scale ratio
const modularScale = (step) =>
  `${(baseFontSize * Math.pow(scaleRatio, step)).toFixed(2)}rem`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './src/index.html'],
  darkMode: 'class',
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
      ...globalColors,
      light: lightColors,
      dark: darkColors, // adding dark theme colors under a "dark" key
    },
  },
  variants: {},
  plugins: [
    plugin(({ addBase, theme }) => {
      addBase({
        html: { fontSize: '18px' },
        h1: {
          fontSize: theme('fontSize.4xl'),
          fontWeight: '700',
          lineHeight: '1.2',
          marginTop: '1.25rem',
          marginBottom: '1.25rem',
        },
        h2: {
          fontSize: theme('fontSize.3xl'),
          fontWeight: '700',
          lineHeight: '1.2',
          marginTop: '1.25rem',
          marginBottom: '1.25rem',
        },
        h3: {
          fontSize: theme('fontSize.2xl'),
          fontWeight: '700',
          lineHeight: '1.2',
          marginTop: '1.25rem',
          marginBottom: '1.25rem',
        },
        h4: {
          fontSize: theme('fontSize.xl'),
          fontWeight: '700',
          lineHeight: '1.2',
          marginTop: '1.25rem',
          marginBottom: '1.25rem',
        },
        h5: {
          fontSize: theme('fontSize.lg'),
          fontWeight: '700',
          lineHeight: '1.2',
          marginTop: '1.25rem',
          marginBottom: '1.25rem',
        },
        h6: {
          fontWeight: '700',
          marginTop: '1.25rem',
        },
        p: {
          marginBottom: '1.25rem',
          marginTop: '1.25rem',
        },
      });
    }),
  ],
};
