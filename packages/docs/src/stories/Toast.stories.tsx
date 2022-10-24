import { StoryObj, Meta } from '@storybook/react'
import {
  Toast,
  ToastProps,
  ToastViewport,
  Text,
  Box,
  ToastProvider,
} from '@maps-ui/react'

export default {
  title: 'Special/Toast',
  component: Toast,
  parameters: {
    docs: {
      description: {
        component: '<br> ### A customizable tooltip component for your page',
      },
    },
  },
  args: {
    title: 'Custom title',
    description: 'Custom description',
    open: true,
    css: {},
  },
  argTypes: {
    title: {
      description: 'Toast title',
      table: {
        type: {
          summary: 'string',
        },
      },
    },
    open: {
      description: 'If the toast is visible or not',
      defaultValue: {
        summary: 'false',
      },
      table: {
        type: {
          summary: 'true | false',
        },
      },
    },
    description: {
      description: 'Toast description',
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
        <>
          <Box>
            <Text>See the toast in the lower right corner of the screen!</Text>
          </Box>
          <ToastProvider swipeDirection="right">
            {Story()}
            <ToastViewport />
          </ToastProvider>
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}

// export const CustomCSS: StoryObj<ToastProps> = {
//   args: {
//     css: { borderColor: '#1065C0' },
//   },
//   parameters: {
//     docs: {
//       description: {
//         story:
//           'By default, the Heading will always be an `h2` tag, but you can change this with the `as` property:',
//       },
//     },
//   },
// }
