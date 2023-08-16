import { FC, forwardRef } from 'react'

import { Container, Tooltip } from './styles'
import { TooltipProps, WithTooltipProps } from './types'

export const withTooltip = <
  Props,
  RefElement extends HTMLElement = HTMLElement,
>(
  Component: FC<Props>,
) =>
  forwardRef<RefElement, WithTooltipProps<Props>>(
    ({ className, tooltip, ...props }, ref) => {
      const component = (
        <Component
          aria-label={tooltip}
          className={tooltip ? undefined : className}
          {...(props as Props)}
          ref={tooltip ? undefined : ref}
        />
      )

      if (!tooltip) return component

      return (
        <Container className={className} ref={ref}>
          {component}
          <Tooltip aria-hidden>{tooltip}</Tooltip>
        </Container>
      )
    },
  )

export default Tooltip

export type { TooltipProps }
