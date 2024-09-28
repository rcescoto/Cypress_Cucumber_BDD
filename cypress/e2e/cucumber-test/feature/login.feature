Feature: Login to Application
    As a user, I'll be able to login into the webite

    Scenario: Login with Valid credentials
        Given the user goes to Application
        When the user submits valid credentials
        Then the user should see homepage

    Scenario: Login with invalid credentials
        Given the user goes to Application
        When the user submits invalid username "username" password "secret_sauce"
        And the user clicks submit
        Then the user should see homepage

    Scenario: Login with Valid credentials and logout
        Given the user goes to Application
        When the user submits valid credentials
        And the user should see homepage
        And the user clicks logout
        Then the landing page is shown