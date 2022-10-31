import { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@maps-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  parameters: {
    docs: {
      description: {
        component: '<br> ### A customizable text component for your page',
      },
    },
  },
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    size: undefined,
    as: undefined,
    css: undefined,
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
  parameters: {
    docs: {
      description: {
        story:
          'By default, the Text will always be a `p` tag, but you can change this with the `as` property, passing `p` | `strong` | `span` | `em` | `blockquote` | `pre` | `li` | `dt` | `dd` | `del` | `sup` | `sub` | `small` | `i` | `b`. In this case, the component is a `strong` text',
      },
    },
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
          'By default, the Text has a `md` size, but you can change this by passing one of the size options through the `size` property, passing | `xxs` | `xs` | `sm` | `md` | `lg` | `2xl` | `4xl` | `5xl` | `6xl`.',
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
          'The component has a default style, however, it is possible to change any style by passing an  object `CSS in JS` through the `css` property: `{ color: "#1065C0" }`',
      },
    },
  },
}
