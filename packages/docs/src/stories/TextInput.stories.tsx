import { StoryObj, Meta } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@maps-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  parameters: {
    docs: {
      description: {
        component: '<br> ### A customizable text input component for your page',
      },
    },
  },
  args: {
    placeholder: 'Type your email',
    disabled: false,
    prefix: '',
    css: {},
  },
  argTypes: {
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
      description: 'If the text input is disabled or not',
    },
    placeholder: {
      type: 'string',
      description: 'Placeholder text',
      control: {
        type: 'text',
      },
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    prefix: {
      type: 'string',
      description: 'Prefix text',
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
      description: 'Toast custom styles',
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
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    placeholder: '',
    prefix: 'cal.com/',
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can prefix the input, just pass a `string` in the `prefix` property.',
      },
    },
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can also choose whether the text input is enabled or not, via the `disabled` property, passing: `true` | `false`.',
      },
    },
  },
}

export const CustomCSS: StoryObj<TextInputProps> = {
  args: {
    css: {
      '&:has(input:focus)': {
        borderColor: '#00875F',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'The component has a default style, however, it is possible to change any style by passing an  object `CSS in JS` through the `css` property: `{ &:has(input:focus): { borderColor: #00875F } }`',
      },
    },
  },
}
