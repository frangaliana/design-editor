import { useContext } from 'react'

import {
  GhostNodeContext,
  GhostNodeContextProps,
} from '../providers/GhostNodeProvider'

const useGhostNode = () => {
  const context = useContext<GhostNodeContextProps | undefined>(
    GhostNodeContext,
  )

  if (!context) {
    throw new Error('useNodesContext must be used within a NodesProvider')
  }

  return {
    createGhostNode: context.createGhostNode,
    ghostNode: context.ghostNode,
    removeGhostNode: context.removeGhostNode,
    updateGhostNode: context.updateGhostNode,
  }
}

export default useGhostNode
