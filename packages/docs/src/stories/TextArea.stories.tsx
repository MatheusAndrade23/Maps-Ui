import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextArea, TextAreaProps } from '@maps-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: '<br> ### A customizable text area component for your page',
      },
    },
  },
  args: {
    placeholder: 'Add any observations...',
    disabled: undefined,
    css: undefined,
  },
  argTypes: {
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
      description: 'If the text area is disabled or not',
    },
    css: {
      control: 'object',
      description: 'Toast custom styles',
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
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can also choose whether the text area is enabled or not, via the `disabled` property, passing: `true` | `false`.',
      },
    },
  },
}

export const CustomCSS: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
    disabled: false,
    css: {
      '&:focus': {
        outline: 0,
        borderColor: '#00875F',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'The component has a default style, however, it is possible to change any style by passing an  object `CSS in JS` through the `css` property: `{ &:focus: { outline: 0, borderColor: #00875F} }`',
      },
    },
  },
}
