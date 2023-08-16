import { DefineStepFunction } from 'jest-cucumber'

import Toolbar from '../../components/Toolbar'
import WhiteBoard from '../../components/WhiteBoard'
import { act, fireEvent, render, screen } from './utils'

export const givenTheUserIsOnTheDesignEditor = (given: DefineStepFunction) => {
  given('the user is on the Design Editor', () => {
    render(
      <>
        <Toolbar />
        <WhiteBoard />
      </>,
    )
  })
}

export const thenTheUserCanSeeTheNodeOnTheWhiteboard = (
  then: DefineStepFunction,
) => {
  then('the user can see the node on the Whiteboard', () => {
    const squareNode = screen.getByLabelText('Square Node')
    expect(squareNode).toBeInTheDocument()
  })
}

export const whenTheUserClicksOnTheAddNodeButton = (
  when: DefineStepFunction,
) => {
  when('the user clicks on the add node button', async () => {
    const whiteboard = screen.getByRole('main', { name: 'Whiteboard' })
    expect(whiteboard).toBeInTheDocument()

    const toolbar = screen.getByRole('toolbar', { name: 'Toolbar' })
    expect(toolbar).toBeInTheDocument()

    const button = screen.getByRole('button', { name: 'Add Node' })
    expect(button).toBeInTheDocument()

    await act(async () => {
      fireEvent.click(button)
    })
  })
}

export const whenTheUserClicksOnTheWhiteboard = (when: DefineStepFunction) => {
  when('the user clicks on the Whiteboard', async () => {
    const whiteboard = screen.getByRole('main', { name: 'Whiteboard' })
    expect(whiteboard).toBeInTheDocument()

    await act(async () => {
      fireEvent.click(whiteboard)
    })
  })
}
