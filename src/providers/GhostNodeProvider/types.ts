import { ReactNode } from 'react'

import { Node } from '../../models/Node'

export type GhostNodeContextProps = {
  createGhostNode: (node: Node) => void
  ghostNode?: Node
  removeGhostNode: () => void
  updateGhostNode: (node: Node) => void
}

export type GhostNodeProviderProps = { children: ReactNode }
