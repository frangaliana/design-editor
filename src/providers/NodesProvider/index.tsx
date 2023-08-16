import { createContext } from 'react'

import { useNodesProvider } from './hooks'
import { NodesContextProps, NodesProviderProps } from './types'

export const NodesContext = createContext<NodesContextProps | undefined>(
  undefined,
)

export const NodesProvider = ({ children }: NodesProviderProps) => {
  const { createNode, nodes, removeNode, updateNode } = useNodesProvider()

  return (
    <NodesContext.Provider
      value={{ createNode, nodes, removeNode, updateNode }}
    >
      {children}
    </NodesContext.Provider>
  )
}

export type { NodesContextProps }

export default NodesProvider
