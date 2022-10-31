import { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@maps-ui/react'

import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: '<br> ### A customizable button component for your page',
      },
    },
  },
  args: {
    children: 'Send',
    variant: undefined,
    size: undefined,
    disabled: undefined,
    css: undefined,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
      table: {
        type: {
          summary: 'primary | secondary | tertiary',
        },
      },
      defaultValue: {
        summary: 'primary',
      },
      description: 'Button variant',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      table: {
        type: {
          summary: 'true | false',
        },
      },
      defaultValue: {
        summary: 'false',
      },
      description: 'If the button is disabled or not',
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
      table: {
        type: {
          summary: 'sm | md',
        },
      },
      defaultValue: {
        summary: 'md',
      },
      description: 'Button variant',
    },
    children: {
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
      description: 'Button text',
    },
    css: {
      control: 'object',
      description: 'Button custom styles',
      table: {
        type: {
          summary: 'CSS in JS',
        },
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Create',
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Through the `variant` property, you can choose the button model, passing: `primary` | `secondary` | `tertiary`. In this case, the button is of the `secondary` variant.',
      },
    },
  },
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Cancel',
    variant: 'tertiary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Through the `variant` property, you can choose the button model, passing: `primary` | `secondary` | `tertiary` . In this case, the button is of the `tertiary` variant.',
      },
    },
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Through the `size` property, you can choose the button size, passing: `md` | `sm`. In this case, the button is of the `sm` size.',
      },
    },
  },
}

export const WhitIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step <ArrowRight weight="bold" />
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'The component also has its styles prepared to receive an icon as a child.',
      },
    },
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can also choose whether the button is enabled or not, via the `disabled` property, passing: `true` | `false`.',
      },
    },
  },
}

export const CustomCSS: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
    css: {
      background: '#00875F',

      '&:not(:disabled):hover': {
        background: '#00B37E',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'The component has a default style, however, it is possible to change any style by passing an  object `CSS in JS` through the `css` property: `{ background: #00875F, &:not(:disabled):hover: { background: #00B37E }}`',
      },
    },
  },
}
