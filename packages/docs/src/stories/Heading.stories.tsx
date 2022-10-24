import { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@maps-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  parameters: {
    docs: {
      description: {
        component: '<br> ### A customizable title component for your page',
      },
    },
  },
  args: {
    children: 'Custom Heading',
    size: 'md',
    as: 'h2',
    css: {},
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'select',
      },
      description: 'Heading size',
      defaultValue: {
        summary: 'md',
      },
      table: {
        type: {
          summary: 'sm | md | lg | 2xl | 4xl | 5xl | 6xl',
        },
      },
    },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'select',
      },
      type: 'string',
      description: 'Heading HTML tag',
      defaultValue: {
        summary: 'h2',
      },
      table: {
        type: {
          summary: 'h1 | h2 | h3 | h4 | h5 | h6',
        },
      },
    },
    children: {
      type: 'string',
      description: 'Heading text',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
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
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the Heading will always be a `h2` tag, but you can change this with the `as` property, passing `h1` | `h2` | `h3` | `h4` | `h5` | `h6`. In this case, the component is a `h1` heading',
      },
    },
  },
}

export const CustomSize: StoryObj<HeadingProps> = {
  args: {
    children: 'Small Heading',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the Heading has a `md` size, but you can change this by passing one of the size options through the `size` property, passing `sm` | `md` | `lg` | `2xl` | `4xl` | `5xl` | `6xl`.',
      },
    },
  },
}

export const CustomCSS: StoryObj<HeadingProps> = {
  args: {
    children: 'Blue Heading',
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
