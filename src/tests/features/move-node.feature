@whiteboard
Feature: Move a node in the whiteboard

    As a user,
    I want to move a node in the whiteboard
    So that I can move a frame for low-fidelity prototypes

    @ui
    Scenario: Move a node in the whiteboard
        Given the user is on the Design Editor
        When the user clicks on the add node button
        And the user clicks on the Whiteboard
        And the user clicks on the node
        And the user moves the node
        Then the user can view the whiteboard with the node in another location