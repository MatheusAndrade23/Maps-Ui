import { StoryObj, Meta } from '@storybook/react'
import { Toast, ToastProps, ToastViewport } from '@ignite-ui/react'

import * as RadixToast from '@radix-ui/react-toast'

export default {
  title: 'Toast/Toast',
  component: Toast,
  args: {
    title: 'Custom title',
    description: 'Custom description',
    open: true,
  },
  decorators: [
    (Story) => {
      return (
        <RadixToast.Provider swipeDirection="right">
          {Story()}
          <ToastViewport />
        </RadixToast.Provider>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
