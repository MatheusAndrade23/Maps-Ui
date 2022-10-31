import { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@maps-ui/react'
export default {
  title: 'Surfaces/Box',
  component: Box,
  parameters: {
    docs: {
      description: {
        component: '<br> ### A customizable box component for your page',
      },
    },
  },
  args: {
    children: <Text>This is my box</Text>,
    css: undefined,
    as: undefined,
  },
  argTypes: {
    children: {
      type: 'string',
      description: 'Box Children',
      control: {
        type: 'null',
      },
      table: {
        type: {
          summary: 'React components',
        },
      },
    },
    css: {
      control: 'object',
      description: 'Box custom styles',
      table: {
        type: {
          summary: 'CSS in JS',
        },
      },
    },
    as: {
      options: [
        'div',
        'label',
        'section',
        'ol',
        'ul',
        'header',
        'nav',
        'main',
        'aside',
        'footer',
        'table',
      ],
      control: {
        type: 'select',
      },
      type: 'string',
      description: 'Box HTML tag',
      defaultValue: {
        summary: 'div',
      },
      table: {
        type: {
          summary:
            'div | label | section | ol | ul | header | nav | main | aside | footer | table',
        },
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

export const CustomTag: StoryObj<BoxProps> = {
  args: {
    children: <Text>Section Box</Text>,
    as: 'section',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the Box ia a `div` tag, but you can change this with the `as` property, passing: `div` | `label` | `section` | `ol` | `ul` | `header` | `nav` | `main` | `aside` | `footer` | `table`. In this case, the component is a `section` tag box',
      },
    },
  },
}

export const CustomCSS: StoryObj<BoxProps> = {
  args: {
    children: <Text>Box with custom border</Text>,
    css: { border: '2px solid #1065C0' },
  },
  parameters: {
    docs: {
      description: {
        story:
          'The component has a default style, however, it is possible to change any style by passing an  object `CSS in JS` through the `css` property: `{ border: 2px solid #1065C0 }`',
      },
    },
  },
}
