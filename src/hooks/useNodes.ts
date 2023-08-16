import { useContext } from 'react'

import { NodesContext, NodesContextProps } from '../providers/NodesProvider'

const useNodes = () => {
  const context = useContext<NodesContextProps | undefined>(NodesContext)

  if (!context) {
    throw new Error('useNodesContext must be used within a NodesProvider')
  }

  return {
    createNode: context.createNode,
    nodes: context.nodes,
    removeNode: context.removeNode,
    updateNode: context.updateNode,
  }
}

export default useNodes
