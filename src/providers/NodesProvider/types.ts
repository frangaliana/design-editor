import { ReactNode } from 'react'

import { Node } from '../../models/Node'

export type NodesContextProps = {
  createNode: (node: Node) => void
  nodes: Node[]
  removeNode: (id: string) => void
  updateNode: (node: Node) => void
}

export type NodesProviderProps = { children: ReactNode }
