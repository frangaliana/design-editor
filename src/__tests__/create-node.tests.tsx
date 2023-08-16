import { defineFeature, loadFeature } from 'jest-cucumber'

import {
  givenTheUserIsOnTheDesignEditor,
  thenTheUserCanSeeTheNodeOnTheWhiteboard,
  whenTheUserClicksOnTheAddNodeButton,
  whenTheUserClicksOnTheWhiteboard,
} from '../tests/acceptance/create-node'

const feature = loadFeature('./src/tests/features/create-node.feature', {
  tagFilter: '@ui',
})

defineFeature(feature, (test) => {
  test('Create a node in the whiteboard', ({ given, then, when }) => {
    givenTheUserIsOnTheDesignEditor(given)
    whenTheUserClicksOnTheAddNodeButton(when)
    whenTheUserClicksOnTheWhiteboard(when)
    thenTheUserCanSeeTheNodeOnTheWhiteboard(then)
  })
})
