# Paigaldusjuhis

- Kontrolli, kas su masinasse on paigaldatud Node.js
- Klooni rakendus oma masinasse
- Jooksuta käsklust `npm install`

## Figma kasutamine

Figmas paigalda Figma Design Studio nimeline pistikprogramm. Sealt tuleb eksportida json fail, mille nimi peab olema `tokens.json`. Eksportida tuleb see otse siiinsesse kausta (kui see on juba paigaldatud oma masinasse) või kasutades pistikprogrammi enda võimalusi mõnda git'i repositooriumisse koos muu materjaliga.

## Käsklused

`package.json`sisaldab järgmisi käsklusi
Esimesed kolm võtavad failist `tokens.json` disainitookenid ning jagavad need eraldi teemafailidesse:

```javascript
    "build-transform-global": "npx token-transformer tokens.json tokens/global.json global",
    "build-transform-light": "npx token-transformer tokens.json tokens/light.json global,light,theme global",
    "build-transform-dark": "npx token-transformer tokens.json tokens/dark.json global,dark,theme global",
```

Neljas käsklus muudab eelmises käsus jagatud failid süsteemile sobivaks:

```javascript
    "build-transform": "npm run build-transform-global && npm run build-transform-light && npm run build-transform-dark",
```

Viies ehitab muutujad:

```javascript
    "build-sd": "node build.js",
```

Kuues genereerib Tailwindi stiilid:

```javascript
    "build-tw": "postcss ./styles.css -o ./tailwind.css",
```

Seitsmes jooksutab korraga kõik käsud;

```javascript
    "build": "npm run build-transform && npm run build-sd && npm run build-tw",
```

Kaheksas puhastab css-faili ebavajalikust sodist:

```javascript
    "normalglobal": "node updateclean.js"
```
