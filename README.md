# Paigaldusjuhis

Lisa fail "build.js"
Lisa fail "fns"
Konfigureeri package.json failis õige failirada, siin: "build-tw": "postcss ./src/main.css -o ./dist/styles.css",

Nüüd on tailwind.config.js selline:  
```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './src/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### lisame kõik vajaliku, et Tailwind hakkaks meie muutujaid kasutama:

```javascript
const { filterTokensByType } = require("./fns");
const lightTokens = require("./output/light.json")
const darkTokens = require("./output/dark.json")
const globalTokens = require("./output/global.json")

const lightColors = filterTokensByType('color', lightTokens)
const darkColors = filterTokensByType('color', darkTokens)
const globalColors = filterTokensByType('color', globalTokens)

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './src/index.html'],
  darkMode: 'class', 
  theme: {
    colors: {
      ...globalColors,
      ...lightColors,
      dark: darkColors // adding dark theme colors under a "dark" key
    }
  },
  variants: {},
  plugins: [],
}
```
