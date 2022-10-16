import * as RadixToast from '@radix-ui/react-toast'
import { styled } from '../../styles'

import { X } from 'phosphor-react'

import { Heading } from '../..'
import { Button } from '../..'
import { Text } from '../..'

import { ToastContainer } from './styles'

export const Toast = ({
  title,
  description,
  open,
  ...props
}: ToastInputProps) => {
  return (
    <ToastContainer open={open} {...props}>
      <RadixToast.Title asChild>
        <Heading as="h6" size="sm" css={{ marginBottom: '$2' }}>
          {title}
        </Heading>
      </RadixToast.Title>

      <RadixToast.Description asChild>
        <Text size="sm" css={{ color: '$gray200' }}>
          {description}
        </Text>
      </RadixToast.Description>

      <RadixToast.Close asChild>
        <Button
          variant="tertiary"
          css={{
            'min-width': 0,
            position: 'absolute',
            top: '$1',
            right: '$1',
          }}
        >
          <X size={30} weight="bold" />
        </Button>
      </RadixToast.Close>
    </ToastContainer>
  )
}
export interface ToastInputProps {
  title: string
  description: string
  open: boolean
}

Toast.displayName = 'Toast'

export const ToastViewport = styled(RadixToast.Viewport, {
  position: 'fixed',
  bottom: 20,
  right: 20,
  display: 'flex',
  flexDirection: 'column',
  padding: '$4',
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
})

ToastViewport.displayName = 'Viewport'
