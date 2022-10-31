import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@maps-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  parameters: {
    docs: {
      description: {
        component:
          '<br> ### A customizable multi step component for your forms',
      },
    },
  },
  args: {
    size: undefined,
    currentStep: undefined,
    css: undefined,
  },
  argTypes: {
    size: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: 'Number of steps',
      defaultValue: {
        summary: '4',
      },
      table: {
        type: {
          summary: 'number',
        },
      },
    },
    currentStep: {
      control: { type: 'number', min: 1, max: 10, step: 1 },
      description: 'Current Step',
      defaultValue: {
        summary: '1',
      },
      table: {
        type: {
          summary: 'number',
        },
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
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    size: 5,
    currentStep: 5,
  },
  parameters: {
    docs: {
      description: {
        story:
          'You can customize the total number of steps and the current step, through the `size` and `currentStep` properties, both receive a number as a parameter.',
      },
    },
  },
}

export const CustomCSS: StoryObj<MultiStepProps> = {
  args: {
    size: 5,
    currentStep: 3,
    css: { border: '1px solid #1065C0', padding: '$3', borderRadius: '$sm' },
  },
  parameters: {
    docs: {
      description: {
        story:
          'The component has a default style, however, it is possible to change any style by passing an  object `CSS in JS` through the `css` property: `{ border: 1px solid #1065C0, padding: 12px, borderRadius: 6px }`',
      },
    },
  },
}
