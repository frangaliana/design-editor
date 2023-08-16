import { defineFeature, loadFeature } from 'jest-cucumber'

import {
  givenTheUserIsOnTheDesignEditor,
  whenTheUserClicksOnTheAddNodeButton,
  whenTheUserClicksOnTheWhiteboard,
} from '../tests/acceptance/create-node'
import {
  thenTheUserCanViewTheWhiteboardWithoutTheNode,
  whenTheUserClicksOnTheNode,
  whenTheUserClicksOnTheRemoveNodeButton,
} from '../tests/acceptance/remove-node'

const feature = loadFeature('./src/tests/features/remove-node.feature', {
  tagFilter: '@ui',
})

defineFeature(feature, (test) => {
  test('Remove a node in the whiteboard', ({ given, then, when }) => {
    givenTheUserIsOnTheDesignEditor(given)
    whenTheUserClicksOnTheAddNodeButton(when)
    whenTheUserClicksOnTheWhiteboard(when)
    whenTheUserClicksOnTheNode(when)
    whenTheUserClicksOnTheRemoveNodeButton(when)
    thenTheUserCanViewTheWhiteboardWithoutTheNode(then)
  })
})
