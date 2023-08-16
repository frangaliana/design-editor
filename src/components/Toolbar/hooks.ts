import { MouseEventHandler, useCallback } from 'react'
import { useSearchParams } from 'react-router-dom'

import useGhostNode from '../../hooks/useGhostNode'
import useNodes from '../../hooks/useNodes'

export const useToolbar = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const nodeId = searchParams.get('node-id') ?? undefined
  const { createGhostNode } = useGhostNode()
  const { removeNode } = useNodes()

  const handleCreateGhostNode: MouseEventHandler<
    HTMLElement | HTMLButtonElement | HTMLSpanElement
  > = useCallback(
    (event) => {
      createGhostNode({ id: '-1', x: event.clientX, y: event.clientY })
    },
    [createGhostNode],
  )

  const handleDeleteNode = useCallback(() => {
    if (!nodeId) return

    removeNode(nodeId)
    searchParams.delete('node-id')
    setSearchParams(searchParams, { replace: true })
  }, [nodeId, removeNode, searchParams, setSearchParams])

  const selected = !!nodeId

  return { handleCreateGhostNode, handleDeleteNode, selected }
}
