<h1 align="center">Maps Ui 🗺️</h1>

<div align="center">
 <img src="https://user-images.githubusercontent.com/84635540/197596655-b1acc048-b0f4-4a01-9d9e-3655f1dce0b2.jpg" width="400px" alt="FreePick Map Image"/>
</div>

<p align="center">
 <a href="#docs">Documentation</a> •
 <a href="#intro">Introduction</a> •
 <a href="#publication">Publication</a> •
 <a href="#tecs">Technologies</a> •
 <a href="#packages">Packages</a> •
 <a href="#footer">Footer</a>
</p>

<h3 align="center">Personal Design System with many customizable components, developed with React, documented with Storybook and published on npm.</h3>

---

<h2 id="intro">Introduction</h2>

To install the components package:

```sh
npm install @maps-ui/react
```

To use the components:

```js
import { Button, Box, Tooltip, TooltipProvider } from '@maps-ui/react'

export const MyPage = () => {
  return (
    <TooltipProvider>
      <Box as="section" css={{ padding: '55px' }}>
        <Tooltip content="Send Content">
          <Button variant="secondary">Send</Button>
        </Tooltip>
      </Box>
    </TooltipProvider>
  )
}
```

Result:

<img src="https://user-images.githubusercontent.com/84635540/197596732-f20ca6bd-623d-49c3-b0c2-74803305b95f.gif"/>

<br />

---

<h2 id="docs">Documentation</h2>

To access the complete documentation and see how to use and customize each component, <a href="https://matheusandrade23.github.io/Design-System/?path=/story/home--page">click here.</a>

<br />

---

<h2 id="publication">Publication</h2>

The project was published on `npm`, Node package manager, so anyone who wants can download it and use it in their applications. <a href="https://www.npmjs.com/package/@maps-ui/react">Click here to visit.</a>

<br />

---

<h2 id="tecs">Technologies</h2>

- **JS e TS** ➡️ Languages ​​used
- **React** ➡️ Library for creating components
- **Stitches** ➡️ Library for styling the components
- **Storybook** ➡️ Library for component documentation
- **Radix-Ui** ➡️ Library that helped in the creation of some more complex components
- **NPM** ➡️ Platform on which the project was published

<div style="display: inline_block"><br />
  <img align="center" alt="npm" height="35" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
  <img align="center" alt="JS" height="35" width="45" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-plain.svg">
  <img align="center" alt="TS" height="35" width="45" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-plain.svg">
  <img align="center" alt="React" height="35" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg">
  <img align="center" alt="Storybook" height="35" width="45" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg">
</div>

<br />

---

<h2 id="s">Packages</h2>

Maps Ui consists of 2 packages: **Tokens** and **React**. The components are in the React package: `npm i @maps-ui/react` and the Tokens, which consist of colors, font sizes and weights, spacings and so on, are in the other package: `npm i @maps-ui/ tokens`.

<a href="https://github.com/MatheusAndrade23/Maps-Ui/tree/main/packages/react">Click here to see how to use the components.</a>

<a href="https://github.com/MatheusAndrade23/Maps-Ui/tree/main/packages/tokens">Click here to see how to use the tokens.</a>

<br />

---

<p align="center">🌟 If you liked it, consider giving it a star! 🌟</p>
<div id="footer" align="center"><a href="https://www.linkedin.com/in/matheus-andrade23/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
<a href = "mailto:matheusandrade.ma2003@gmail.com"><img src="https://img.shields.io/badge/-Gmail-%23333?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a></div>
