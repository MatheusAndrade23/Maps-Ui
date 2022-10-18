import * as PrimitiveTooltip from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'
import { Button } from '../Button'

import { TooltipContent, TooltipArrow } from './styles'

export const Tooltip = ({
  triggerContent,
  tooltipContent,
  children,
  ...props
}: TooltipProps) => {
  return (
    <PrimitiveTooltip.Root>
      <PrimitiveTooltip.Trigger asChild>{children}</PrimitiveTooltip.Trigger>

      <PrimitiveTooltip.Portal>
        <TooltipContent {...props} sideOffset={5}>
          {tooltipContent}
          <TooltipArrow />
        </TooltipContent>
      </PrimitiveTooltip.Portal>
    </PrimitiveTooltip.Root>
  )
}
export interface TooltipProps {
  triggerContent: string
  tooltipContent: string
  children: ReactNode
}

Tooltip.displayName = 'Tooltip'

export const TooltipProvider = ({ children }: TooltipProviderProps) => {
  return <PrimitiveTooltip.Provider>{children}</PrimitiveTooltip.Provider>
}

export interface TooltipProviderProps {
  children: ReactNode
}

TooltipProvider.displayName = 'TooltipProvider'