import { useDraggableNode, useWhiteBoard } from './hooks'
import Square from './Square'
import { Container } from './styles'
import { WhiteBoardProps } from './types'

const WhiteBoard = ({ ...props }: WhiteBoardProps) => {
  const { draggingNodeId, handleDragStartNode } = useDraggableNode()
  const {
    ghostNode,
    handleCreateNode,
    handleKeyDown,
    handleMoveGhostNode,
    nodeId,
    nodes,
  } = useWhiteBoard()

  return (
    <Container
      aria-busy={!!ghostNode}
      aria-label="Whiteboard"
      onClick={ghostNode ? handleCreateNode : undefined}
      onKeyDown={ghostNode ? undefined : handleKeyDown}
      onMouseMove={ghostNode ? handleMoveGhostNode : undefined}
      {...props}
    >
      {nodes.length
        ? nodes.map(({ id, x, y }) => (
            <Square
              dragging={draggingNodeId === id}
              id={id}
              key={id}
              onMouseDown={handleDragStartNode}
              selected={nodeId === id}
              x={x}
              y={y}
            />
          ))
        : null}
      {ghostNode ? (
        <Square ghosting id={ghostNode.id} x={ghostNode.x} y={ghostNode.y} />
      ) : null}
    </Container>
  )
}

export type { WhiteBoardProps }

export default WhiteBoard
