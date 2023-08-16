import { useCallback, useState } from 'react'

import { Node } from '../../models/Node'
import { NodesContextProps } from './types'

export const useNodesProvider = () => {
  const [nodes, setNodes] = useState<Node[]>([])

  const createNode: NodesContextProps['createNode'] = useCallback((node) => {
    setNodes((prevValue) => [
      ...prevValue,
      { id: prevValue.length.toString(), x: node.x, y: node.y },
    ])
  }, [])

  const removeNode: NodesContextProps['removeNode'] = useCallback((id) => {
    setNodes((prevValue) => prevValue.filter((value) => value.id !== id))
  }, [])

  const updateNode: NodesContextProps['updateNode'] = useCallback((node) => {
    setNodes((prevValue) =>
      prevValue.map((value) => {
        if (value.id !== node.id) return value

        return node
      }),
    )
  }, [])

  return {
    createNode,
    nodes,
    removeNode,
    updateNode,
  }
}
