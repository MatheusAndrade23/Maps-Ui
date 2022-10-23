import * as PrimitiveTooltip from '@radix-ui/react-tooltip'
import { ReactNode, ComponentProps } from 'react'

import { TooltipContent, TooltipArrow } from './styles'

export const Tooltip = ({
  triggerContent,
  content,
  component,
  ...props
}: TooltipProps) => {
  return (
    <PrimitiveTooltip.Root>
      <PrimitiveTooltip.Trigger asChild>{component}</PrimitiveTooltip.Trigger>

      <PrimitiveTooltip.Portal>
        <TooltipContent {...props} sideOffset={5}>
          {content}
          <TooltipArrow />
        </TooltipContent>
      </PrimitiveTooltip.Portal>
    </PrimitiveTooltip.Root>
  )
}
export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  triggerContent: string
  content: string
  component: ReactNode
}

Tooltip.displayName = 'Tooltip'

export const TooltipProvider = ({ children }: TooltipProviderProps) => {
  return <PrimitiveTooltip.Provider>{children}</PrimitiveTooltip.Provider>
}

export interface TooltipProviderProps
  extends ComponentProps<typeof PrimitiveTooltip.Provider> {
  children: ReactNode
}

TooltipProvider.displayName = 'TooltipProvider'
