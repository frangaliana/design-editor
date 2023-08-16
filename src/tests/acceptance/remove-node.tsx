import { DefineStepFunction } from 'jest-cucumber'

import { act, fireEvent, screen } from './utils'

export const thenTheUserCanViewTheWhiteboardWithoutTheNode = (
  then: DefineStepFunction,
) => {
  then('the user can view the whiteboard without the node', () => {
    const squareNode = screen.queryByLabelText('Square Node')
    expect(squareNode).not.toBeInTheDocument()
  })
}

export const whenTheUserClicksOnTheNode = (when: DefineStepFunction) => {
  when('the user clicks on the node', async () => {
    const squareNode = screen.getByLabelText('Square Node')
    expect(squareNode).toBeInTheDocument()

    await act(async () => {
      fireEvent.mouseDown(squareNode)
    })
  })
}

export const whenTheUserClicksOnTheRemoveNodeButton = (
  when: DefineStepFunction,
) => {
  when('the user clicks on the remove node button', async () => {
    const toolbar = screen.getByRole('toolbar', { name: 'Toolbar' })
    expect(toolbar).toBeInTheDocument()

    const button = screen.getByRole('button', { name: 'Remove Node' })
    expect(button).toBeInTheDocument()

    await act(async () => {
      fireEvent.click(button)
    })
  })
}
