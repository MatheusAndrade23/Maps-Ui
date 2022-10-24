import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, CheckBox, CheckBoxProps } from '@maps-ui/react'

export default {
  title: 'Form/Check Box',
  component: CheckBox,
  parameters: {
    docs: {
      description: {
        component: '<br> ### A customizable checkbox component for your page',
      },
    },
  },
  args: { css: {}, disabled: false },
  argTypes: {
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
      description: 'If the check box is disabled or not',
    },
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {}

export const Disabled: StoryObj<CheckBoxProps> = {
  args: {
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can also choose whether the check box is enabled or not, via the `disabled` property, passing: `true` | `false`.',
      },
    },
  },
}

export const CustomCSS: StoryObj<CheckBoxProps> = {
  args: {
    css: {
      '&[data-state="checked"]': {
        backgroundColor: '#00875F',
      },

      '&:focus': {
        border: '2px solid #00875F',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'The component has a default style, however, it is possible to change any style by passing an  object `CSS in JS` through the `css` property: `{ &[data-state="checked"]: {backgroundColor: #00875F}, &:focus:{ border: 2px solid #00875F} }`',
      },
    },
  },
}
