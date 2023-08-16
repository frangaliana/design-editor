@whiteboard
Feature: Remove a node in the whiteboard

    As a user,
    I want to remove a node in the whiteboard
    So that I can remove a frame for low-fidelity prototypes

    @ui
    Scenario: Remove a node in the whiteboard
        Given the user is on the Design Editor
        When the user clicks on the add node button
        And the user clicks on the Whiteboard
        And the user clicks on the node
        And the user clicks on the remove node button
        Then the user can view the whiteboard without the node