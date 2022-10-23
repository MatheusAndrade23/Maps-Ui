import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps, ToastViewport, Text, Box } from '@maps-ui/react'

import * as RadixToast from '@radix-ui/react-toast'
export default {
  title: 'Toast/Toast',
  component: Toast,
  args: {
    title: 'Custom title',
    description: 'Custom description',
    open: false,
    css: {},
  },
  argTypes: {
    title: {
      description: 'Toast title',
    },
    open: {
      description: 'If the toast is visible or not',
      defaultValue: {
        summary: 'false',
      },
    },
    description: {
      description: 'Toast description',
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
          <RadixToast.Provider swipeDirection="right">
            {Story()}
            <ToastViewport />
          </RadixToast.Provider>
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
