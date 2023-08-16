import { useCallback, useState } from 'react'

import { Node } from '../../models/Node'
import { GhostNodeContextProps } from './types'

export const useGhostNodeProvider = () => {
  const [ghostNode, setGhostNode] = useState<Node>()

  const createGhostNode: GhostNodeContextProps['createGhostNode'] = useCallback(
    (node) => {
      setGhostNode(node)
    },
    [],
  )

  const removeGhostNode: GhostNodeContextProps['removeGhostNode'] =
    useCallback(() => {
      setGhostNode(undefined)
    }, [])

  const updateGhostNode: GhostNodeContextProps['updateGhostNode'] = useCallback(
    (node) => {
      setGhostNode(node)
    },
    [],
  )

  return { createGhostNode, ghostNode, removeGhostNode, updateGhostNode }
}
