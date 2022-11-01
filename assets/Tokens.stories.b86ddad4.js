var p=Object.defineProperty;var n=(a,t)=>p(a,"name",{value:t,configurable:!0});import"./index.3af87e58.js";import{c as e,A as u,M as h}from"./Props.83048f71.js";import"./jsx-runtime.5e8ad24c.js";import"./iframe.940eee5f.js";import"./string.183c44e8.js";import"./index.b88e9ef9.js";import"./es.map.constructor.503aa838.js";import"./es.number.to-fixed.5d662ffa.js";function l(){return l=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(a[r]=o[r])}return a},l.apply(this,arguments)}n(l,"_extends");const m={},c="wrapper";function i({components:a,...t}){return e(c,l({},m,t,{components:a,mdxType:"MDXLayout"}),e(h,{title:"Tokens Package",mdxType:"Meta"}),e("h1",null,"Tokens \u{1F3A8}"),e("hr",null),e("br",null),e("h3",null,"Package with Tokens based on the biggest Ui libraries to use in your projects."),e("h4",null,e("a",{href:"https://github.com/MatheusAndrade23/Maps-Ui"},"View on GitHub")," -",e("a",{href:"https://www.npmjs.com/package/@maps-ui/tokens"}," View on NPM")),e("br",null),e("h2",null,"Available Tokens"),e("p",null,"Inside the tokens, there are default parameters for:"),e("ul",null,e("li",{parentName:"ul"},e("a",{href:"https://matheusandrade23.github.io/Maps-Ui/?path=/docs/tokens-colors--page"},"Colors")),e("li",{parentName:"ul"},e("a",{href:"https://matheusandrade23.github.io/Maps-Ui/?path=/docs/tokens-font-sizes--page"},"Font Sizes")),e("li",{parentName:"ul"},e("a",{href:"https://matheusandrade23.github.io/Maps-Ui/?path=/docs/tokens-font-weights--page"},"Font Weights")),e("li",{parentName:"ul"},e("a",{href:"https://matheusandrade23.github.io/Maps-Ui/?path=/docs/tokens-font-families--page"},"Font Families")),e("li",{parentName:"ul"},e("a",{href:"https://matheusandrade23.github.io/Maps-Ui/?path=/docs/tokens-line-heights--page"},"Line Heights")),e("li",{parentName:"ul"},e("a",{href:"https://matheusandrade23.github.io/Maps-Ui/?path=/docs/tokens-radii--page"},"Radii")),e("li",{parentName:"ul"},e("a",{href:"https://matheusandrade23.github.io/Maps-Ui/?path=/docs/tokens-space--page"},"Space"))),e("hr",null),e("h2",null,"Introduction"),e("p",null,"To install:"),e("pre",null,e("code",{parentName:"pre",className:"language-sh"},`npm install @maps-ui/tokens
`)),e("p",null,"To use:"),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { styled } from '../styles'
import { colors, radii, space } from '@maps-ui/tokens'

export const Text = styled('p', {
  fontFamily: fonts.default,
  lineHeight: lineHeights.base,
  color: colors.gray100,
  fontSize: fontSizes.md,
})
`)),e("p",null,"OBS: In this case, it was used with ",e("a",{href:"https://stitches.dev/"},"Stitches"),", but it is also possible to use with other ",e("inlineCode",{parentName:"p"},"CSS in JS")," libraries."),e("br",null),e("h2",null,"Set Tokens as Default (Stitches)"),e("p",null,"There is a way to set the tokens as the default for each given category:"),e("br",null),e("h3",null,"Folder structure"),e("pre",null,e("code",{parentName:"pre",className:"language-shell"},`root
 \u2514\u2500\u2500 src
      \u251C\u2500\u2500 components
      \u2502    \u2514\u2500\u2500 Text.jsx
      \u2514\u2500\u2500 styles
           \u2514\u2500\u2500 index.js
`)),e("h2",null),e("h3",null,"Stitches configuration file"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"src/styles/index.js")),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import * as Tokens from '@maps-ui/tokens'

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
`)),e("h2",null),e("h3",null,"Component"),e("p",null,"The ",e("inlineCode",{parentName:"p"},"src/components/Text.jsx")),e("pre",null,e("code",{parentName:"pre",className:"language-js"},`import { styled } from '../styles'

export const Text = styled('p', {
  fontFamily: '$default',
  lineHeight: '$base',
  color: '$gray100',
  fontSize: '$md',
})
`)),e("h4",null,"To better understand how to use Stitches, go to: ",e("a",{href:"https://stitches.dev/docs/introduction"},"stitches.dev/docs/introduction")),e("br",null),e("hr",null),e("p",null,"\u{1F31F} If you liked it, consider giving it a star on",e("a",{href:"https://github.com/MatheusAndrade23/Maps-Ui"}," GitHub!")," \u{1F31F}"))}n(i,"MDXContent");i.isMDXComponent=!0;const d=n(()=>{throw new Error("Docs-only story")},"__page");d.parameters={docsOnly:!0};const s={title:"Tokens Package",includeStories:["__page"]},g={};s.parameters=s.parameters||{};s.parameters.docs={...s.parameters.docs||{},page:()=>e(u,{mdxStoryNameToKey:g,mdxComponentAnnotations:s},e(i,null))};const w=["__page"];export{w as __namedExportsOrder,d as __page,s as default};
//# sourceMappingURL=Tokens.stories.b86ddad4.js.map
