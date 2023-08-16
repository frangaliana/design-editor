import { HTMLAttributes, ReactNode } from 'react'

export type TooltipProps = HTMLAttributes<HTMLSpanElement>

export type WithTooltipProps<Props> = HTMLAttributes<HTMLElement> &
  Props &
  TooltipProps & {
    tooltip?: ReactNode
  }
