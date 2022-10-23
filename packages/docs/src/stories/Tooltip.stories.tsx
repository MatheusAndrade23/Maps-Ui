import { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Button,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@maps-ui/react'

export default {
  title: 'Tooltip/Tooltip',
  component: Tooltip,
  args: {
    content: 'This is my tooltip',
    component: <Button variant="secondary">Hover me</Button>,
    css: {},
  },
  argTypes: {
    content: {
      control: {
        type: 'text',
      },
      description: 'Tooltip content',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    component: {
      description: 'The component that needs the Tooltip',
      control: {
        type: null,
      },
      table: {
        type: {
          summary: 'React component',
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
  decorators: [
    (Story) => {
      return (
        <Box css={{ padding: '$16' }}>
          <TooltipProvider>{Story()}</TooltipProvider>
        </Box>
      )
    },
  ],
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
