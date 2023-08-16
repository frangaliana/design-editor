import { useRef } from 'react'
import { useSearchParams } from 'react-router-dom'

import useOnClickOutside from '../../../lib/use-click-outside'
import { UseSquareProps } from './types'

export const useSquare = ({ id }: UseSquareProps) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const nodeId = searchParams.get('node-id') ?? undefined
  const ref = useRef<HTMLDivElement>(null)

  useOnClickOutside(() => {
    if (id !== nodeId) return

    searchParams.delete('node-id')
    setSearchParams(searchParams, { replace: true })
  }, ref)

  return { ref }
}
