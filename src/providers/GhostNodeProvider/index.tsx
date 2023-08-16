import { createContext } from 'react'

import { useGhostNodeProvider } from './hooks'
import { GhostNodeContextProps, GhostNodeProviderProps } from './types'

export const GhostNodeContext = createContext<
  GhostNodeContextProps | undefined
>(undefined)

export const GhostNodeProvider = ({ children }: GhostNodeProviderProps) => {
  const { createGhostNode, ghostNode, removeGhostNode, updateGhostNode } =
    useGhostNodeProvider()

  return (
    <GhostNodeContext.Provider
      value={{ createGhostNode, ghostNode, removeGhostNode, updateGhostNode }}
    >
      {children}
    </GhostNodeContext.Provider>
  )
}

export type { GhostNodeContextProps }

export default GhostNodeProvider
