import { defineFeature, loadFeature } from 'jest-cucumber'

import {
  givenTheUserIsOnTheDesignEditor,
  whenTheUserClicksOnTheAddNodeButton,
  whenTheUserClicksOnTheWhiteboard,
} from '../tests/acceptance/create-node'
import {
  thenTheUserCanViewTheWhiteboardWithTheNodeInAnotherLocation,
  whenTheUserMovesTheNode,
} from '../tests/acceptance/move-node'
import { whenTheUserClicksOnTheNode } from '../tests/acceptance/remove-node'

const feature = loadFeature('./src/tests/features/move-node.feature', {
  tagFilter: '@ui',
})

defineFeature(feature, (test) => {
  test('Move a node in the whiteboard', ({ given, then, when }) => {
    givenTheUserIsOnTheDesignEditor(given)
    whenTheUserClicksOnTheAddNodeButton(when)
    whenTheUserClicksOnTheWhiteboard(when)
    whenTheUserClicksOnTheNode(when)
    whenTheUserMovesTheNode(when)
    thenTheUserCanViewTheWhiteboardWithTheNodeInAnotherLocation(then)
  })
})
