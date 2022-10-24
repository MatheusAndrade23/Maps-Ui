import { addons } from '@storybook/addons'
import { themes } from '@storybook/theming'

addons.setConfig({
  theme: {
    ...themes.dark,
    brandTitle: 'Maps Ui',
    brandUrl: 'https://github.com/MatheusAndrade23/Maps-Ui',
    brandImage:
      'https://user-images.githubusercontent.com/84635540/197601128-967997fd-7131-4733-87d4-fe1c959296ae.png',
    brandTarget: '_self',
  },
})
