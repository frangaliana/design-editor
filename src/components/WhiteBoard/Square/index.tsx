import { useSquare } from './hooks'
import { Component } from './styles'
import { SquareProps } from './types'

const Square = ({
  dragging,
  ghosting,
  id,
  selected,
  x,
  y,
  ...props
}: SquareProps) => {
  const { ref } = useSquare({ id })

  return (
    <Component
      aria-label="Square Node"
      $ghosting={ghosting}
      aria-busy={dragging}
      aria-selected={selected}
      id={id}
      ref={selected ? ref : undefined}
      style={{ left: x, top: y }}
      tabIndex={0}
      {...props}
    />
  )
}

export type { SquareProps }

export default Square
