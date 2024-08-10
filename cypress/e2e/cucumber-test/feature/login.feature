Feature: Login to Application
    As a user, I'll be able to login into the webite

    Scenario: Login with Valid credentials
        Given that the user goes to Application
        When the user submits valid credentials
        Then the user should see homepage

    Scenario: Login with Valid credentials
        Given that the user goes to Application
        When the user submits valid username "username" password "password"
        And the user clicks submit
        Then the user should see homepage