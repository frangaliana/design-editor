@whiteboard
Feature: Create a node in the whiteboard

    As a user,
    I want to create a node in the whiteboard
    So that I can create a frame for low-fidelity prototypes

    @ui
    Scenario: Create a node in the whiteboard
        Given the user is on the Design Editor
        When the user clicks on the add node button
        And the user clicks on the Whiteboard
        Then the user can see the node on the Whiteboard