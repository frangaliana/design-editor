import {
  KeyboardEvent,
  MouseEventHandler,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { useSearchParams } from 'react-router-dom'

import useGhostNode from '../../hooks/useGhostNode'
import useNodes from '../../hooks/useNodes'
import { Node } from '../../models/Node'

export const useDraggableNode = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [draggingNodeId, setDraggingNodeId] = useState<string>()
  const [initialPosition, setInitialPosition] = useState<Omit<Node, 'id'>>()
  const [cursorPosition, setCursorPosition] = useState<Omit<Node, 'id'>>()
  const { updateNode } = useNodes()

  const handleDragStartNode: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      const id = event.currentTarget.getAttribute('id')

      if (!id) return

      setDraggingNodeId(id)
      searchParams.set('node-id', id)
      setSearchParams(searchParams, { replace: true })
      setCursorPosition({ x: event.clientX, y: event.clientY })
      setInitialPosition({
        x: event.currentTarget.getBoundingClientRect().left,
        y: event.currentTarget.getBoundingClientRect().top,
      })
    },
    [searchParams, setSearchParams],
  )

  const handleDragOverNode = useCallback(
    (event: globalThis.MouseEvent) => {
      if (!(cursorPosition && draggingNodeId && initialPosition)) return

      updateNode({
        id: draggingNodeId,
        x: initialPosition.x + (event.clientX - cursorPosition.x),
        y: initialPosition.y + (event.clientY - cursorPosition.y),
      })
    },
    [cursorPosition, draggingNodeId, initialPosition, updateNode],
  )

  const handleDragEndNode = useCallback(() => {
    setDraggingNodeId(undefined)
  }, [])

  useEffect(() => {
    if (draggingNodeId) {
      document.addEventListener('mousemove', handleDragOverNode)
      document.addEventListener('mouseup', handleDragEndNode)
    } else {
      document.removeEventListener('mousemove', handleDragOverNode)
      document.removeEventListener('mouseup', handleDragEndNode)
    }

    return () => {
      document.removeEventListener('mousemove', handleDragOverNode)
      document.removeEventListener('mouseup', handleDragEndNode)
    }
  }, [draggingNodeId, handleDragEndNode, handleDragOverNode])

  return { draggingNodeId, handleDragStartNode }
}

export const useWhiteBoard = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const nodeId = searchParams.get('node-id') ?? undefined
  const { ghostNode, removeGhostNode, updateGhostNode } = useGhostNode()
  const { createNode, nodes, removeNode } = useNodes()

  const handleCreateNode: MouseEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      if (!ghostNode) return

      removeGhostNode()
      createNode({ id: '-1', x: event.clientX, y: event.clientY })
    },
    [createNode, ghostNode, removeGhostNode],
  )

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (!['Backspace', 'Escape'].includes(event.key)) return

      event.preventDefault()
      event.stopPropagation()

      switch (event.key) {
        case 'Backspace':
          if (!nodeId) return

          searchParams.delete('node-id')
          setSearchParams(searchParams, { replace: true })
          removeNode(nodeId)

          return
        case 'Escape':
          if (!nodeId) return

          searchParams.delete('node-id')
          setSearchParams(searchParams, { replace: true })

          return
      }
    },
    [nodeId, removeNode, searchParams, setSearchParams],
  )

  const handleMoveGhostNode: MouseEventHandler<HTMLElement> = useCallback(
    (event) => {
      if (!ghostNode) return

      updateGhostNode({ ...ghostNode, x: event.clientX, y: event.clientY })
    },
    [ghostNode, updateGhostNode],
  )

  return {
    ghostNode,
    handleCreateNode,
    handleKeyDown,
    handleMoveGhostNode,
    nodeId,
    nodes,
  }
}
