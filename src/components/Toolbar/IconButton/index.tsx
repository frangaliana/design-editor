import { memo } from 'react'

import { Component } from './styles'
import { IconButtonProps } from './types'

const IconButton = ({ children, ...props }: IconButtonProps) => (
  <Component type="button" {...props}>
    {children}
  </Component>
)

export default memo(IconButton)

export type { IconButtonProps }
