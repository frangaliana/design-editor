import { HTMLAttributes } from 'react'

export type SquareProps = Omit<HTMLAttributes<HTMLDivElement>, 'id'> & {
  dragging?: boolean
  ghosting?: boolean
  id: string
  selected?: boolean
  x: number
  y: number
}

export type ComponentProps = {
  $ghosting?: SquareProps['ghosting']
}

export type UseSquareProps = {
  id: SquareProps['id']
}
