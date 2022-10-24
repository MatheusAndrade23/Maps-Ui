import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?:
    | 'div'
    | 'label'
    | 'section'
    | 'ol'
    | 'ul'
    | 'header'
    | 'nav'
    | 'main'
    | 'aside'
    | 'footer'
    | 'table'
}

Box.displayName = 'Box'
