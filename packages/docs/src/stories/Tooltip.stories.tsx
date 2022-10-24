import { StoryObj, Meta } from '@storybook/react'
import {
  Box,
  Button,
  Tooltip,
  TooltipProps,
  TooltipProvider,
} from '@maps-ui/react'

export default {
  title: 'Special/Tooltip',
  component: Tooltip,
  args: {
    content: 'Send Content',
    children: <Button variant="secondary">Send</Button>,
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
    children: {
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
