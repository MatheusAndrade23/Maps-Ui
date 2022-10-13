import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, CheckBox, CheckBoxProps } from '@ignite-ui/react'

export default {
  title: 'Form/Check Box',
  component: CheckBox,
  args: {},
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
