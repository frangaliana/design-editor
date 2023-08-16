import { MouseEventHandler, useCallback, useState } from 'react'

export const useFollowerTooltip = () => {
  const [leftPosition, setLeftPosition] = useState({ left: 0, top: 0 })
  const [rightPosition, setRightPosition] = useState({ right: 0, top: 0 })

  const handleLeftTooltipMove: MouseEventHandler<HTMLElement> = useCallback(
    ({ clientX, clientY, currentTarget }) => {
      const rect = currentTarget.getBoundingClientRect()

      setLeftPosition({
        left: clientX - rect.left,
        top: clientY - rect.top + 18,
      })
    },
    [],
  )

  const handleRightTooltipMove: MouseEventHandler<HTMLElement> = useCallback(
    ({ clientX, clientY, currentTarget }) => {
      const rect = currentTarget.getBoundingClientRect()

      setRightPosition({
        right: rect.right - clientX - 2,
        top: clientY - rect.top + 18,
      })
    },
    [],
  )

  return {
    handleLeftTooltipMove,
    handleRightTooltipMove,
    leftPosition,
    rightPosition,
  }
}
