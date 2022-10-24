<h1 align="center">Maps Ui - Tokens 🎨</h1>

<div align="center">
 <img src="../../github/colors.png" width="450px" alt="Pexels Colors Image"/>
</div>

<p align="center">
 <a href="#tokens">Tokens</a> •
 <a href="#intro">Introduction</a> •
 <a href="#config">Set Tokens as Default (Stitches)</a> •
 <a href="#footer">Footer</a>
</p>

<h3 align="center">Package with Tokens based on the biggest Ui libraries to use in your projects.</h3>

<h4 align="center">
  <a href="">Access Documentation</a> -
  <a href="https://www.npmjs.com/package/@maps-ui/tokens"> View on NPM</a>
</h4>

---

<h2 id="tokens">Available Tokens</h2>

Inside the tokens, there are default parameters for:

- Colors
- Font Sizes
- Font Weights
- Font Families
- Line Heights
- Radii
- Space

<a href="">Click here to see all tokens.</a>

<br />

---

<h2 id="intro">Introduction</h2>

To install:

```sh
npm install @maps-ui/tokens
```

To use:

```js
import { styled } from '../styles'
import { colors, radii, space } from '@maps-ui/tokens'

export const Text = styled('p', {
  fontFamily: fonts.default,
  lineHeight: lineHeights.base,
  color: colors.gray100,
  fontSize: fontSizes.md,
})
```

OBS: In this case, it was used with <a href="https://stitches.dev/">Stitches</a>, but it is also possible to use with other `CSS in JS` libraries.

<br />

---

<h2 id="config">Set Tokens as Default (Stitches)</h2>

There is a way to set the tokens as the default for each given category:

##

### Folder structure

```shell
  root
   └── src
       ├── components
       │    └── Text.jsx
       └── styles
            └── index.js
```

##

### Stitches configuration file

The `src/styles/index.js`

```js
import * as Tokens from '@maps-ui/tokens'

import { createStitches, defaultThemeMap } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },

  theme: {
    ...Tokens, //Maps-ui tokens
  },
})
```

##

### Component

The `src/components/Text.jsx`

```js
import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  color: '$gray100',
  fontSize: '$md',
})
```

#### To better understand how to use Stitches, go to: <a href="https://stitches.dev/docs/introduction">stitches.dev/docs/introduction</a>

<br />

---

<p align="center">🌟 If you liked it, consider giving it a star! 🌟</p>
<div id="footer" align="center"><a href="https://www.linkedin.com/in/matheus-andrade23/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href = "mailto:matheusandrade.ma2003@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a></div>