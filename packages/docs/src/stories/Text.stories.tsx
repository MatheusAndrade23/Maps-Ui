import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@maps-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, nisi praesentium. Quasi odio ullam quas expedita! Eius dolorem, similique dolores, optio incidunt perferendis facilis et magnam architecto hic nihil corrupti.',
    size: 'md',
    as: 'p',
    css: {},
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
      description: 'Text size',
      defaultValue: {
        summary: 'md',
      },
      table: {
        type: {
          summary:
            'xxs | xs | sm | md | lg | 2xl | 4xl | 5xl | 6xl | 7xl | 8xl | 9xl',
        },
      },
    },
    as: {
      options: [
        'p',
        'strong',
        'span',
        'em',
        'blockquote',
        'pre',
        'li',
        'dt',
        'dd',
        'del',
        'sup',
        'sub',
        'small',
        'i',
        'b',
      ],
      control: {
        type: 'select',
      },
      description: 'Text HTML tag',
      table: {
        type: {
          summary:
            'p | strong | span | em | blockquote | pre | li | dt | dd | del | sup | sub | small | i | b',
        },
      },
      defaultValue: {
        summary: 'p',
      },
    },
    css: {
      control: 'object',
      description: 'Tooltip custom styles',
      defaultValue: {
        summary: '{}',
      },
      table: {
        type: {
          summary: 'CSS in JS',
        },
      },
    },
    children: {
      description: 'Text',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong',
  },
}

export const CustomSize: StoryObj<TextProps> = {
  args: {
    children: 'Small text',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the Text has a medium (md) size, but you can change this by passing one of the size options through the `size` property:',
      },
    },
  },
}

export const CustomCSS: StoryObj<TextProps> = {
  args: {
    children: 'Blue Text',
    css: { color: '#1065C0' },
  },
  parameters: {
    docs: {
      description: {
        story:
          'The component has a default style, however, it is possible to change any style by passing an object through the `css` property:',
      },
    },
  },
}
