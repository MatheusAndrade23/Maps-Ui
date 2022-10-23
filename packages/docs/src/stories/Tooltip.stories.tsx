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
    tooltipContent: 'This is my tooltip',
    component: <Button variant="secondary">Hover me</Button>,
  },
  argTypes: {
    component: {
      control: {
        type: null,
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
