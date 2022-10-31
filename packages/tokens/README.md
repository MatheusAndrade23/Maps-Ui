<h1 align="center">Maps Ui - Tokens 🎨</h1>

<div align="center">
 <img src="https://user-images.githubusercontent.com/84635540/197596998-05857062-5f53-434f-9a95-a01c98b61c3f.png" width="450px" alt="Pexels Colors Image"/>
</div>

<p align="center">
 <a href="#tokens">Tokens</a> •
 <a href="#intro">Introduction</a> •
 <a href="#config">Set Tokens as Default (Stitches)</a> •
 <a href="#footer">Footer</a>
</p>

<h3 align="center">Package with Tokens based on the biggest Ui libraries to use in your projects.</h3>

<h4 align="center">
  <a href="https://matheusandrade23.github.io/Maps-Ui/?path=/docs/home--page">Access Documentation</a> -
  <a href="https://github.com/MatheusAndrade23/Maps-Ui">View on GitHub</a>
</h4>

<br />

<h2 id="tokens">Available Tokens</h2>

Inside the tokens, there are default parameters for:

- <a href="https://matheusandrade23.github.io/Maps-Ui/?path=/docs/tokens-colors--page">
    Colors
  </a>
- <a href="https://matheusandrade23.github.io/Maps-Ui/?path=/docs/tokens-font-sizes--page">
    Font Sizes
  </a>
- <a href="https://matheusandrade23.github.io/Maps-Ui/?path=/docs/tokens-font-weights--page">
    Font Weights
  </a>
- <a href="https://matheusandrade23.github.io/Maps-Ui/?path=/docs/tokens-font-families--page">
    Font Families
  </a>
- <a href="https://matheusandrade23.github.io/Maps-Ui/?path=/docs/tokens-line-heights--page">
    Line Heights
  </a>
- <a href="https://matheusandrade23.github.io/Maps-Ui/?path=/docs/tokens-radii--page">
    Radii
  </a>
- <a href="https://matheusandrade23.github.io/Maps-Ui/?path=/docs/tokens-space--page">
    Space
  </a>

---

<a href="">Click here to see all tokens.</a>

<br />

---

<br />

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

<br />

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

<p>
  🌟 If you liked it, consider giving it a star on
  <a href="https://github.com/MatheusAndrade23/Maps-Ui"> GitHub!</a> 🌟
</p>
