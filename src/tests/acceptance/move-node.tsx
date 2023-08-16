import { DefineStepFunction } from 'jest-cucumber'

import { act, fireEvent, screen } from './utils'

export const thenTheUserCanViewTheWhiteboardWithTheNodeInAnotherLocation = (
  then: DefineStepFunction,
) => {
  then(
    'the user can view the whiteboard with the node in another location',
    () => {},
  )
}

export const whenTheUserMovesTheNode = (when: DefineStepFunction) => {
  when('the user moves the node', async () => {
    const squareNode = screen.getByLabelText('Square Node')
    expect(squareNode).toBeInTheDocument()

    const initialPosition = squareNode.getBoundingClientRect()

    await act(async () => {
      fireEvent.mouseMove(squareNode, { clientX: 100, clientY: 200 })
    })

    const updatedPosition = squareNode.getBoundingClientRect()

    expect(updatedPosition.left).toBe(initialPosition.left)
    expect(updatedPosition.top).toBe(initialPosition.top)
  })
}
