import {Given, When, Then} from 'cypress-cucumber-preprocessor/steps'
import LoginPage from '../pageObjects/loginPage'


Given(" the user goes to Application", () => {
    LoginPage.goToLogin()
})
When("the user submits valid credentials" , () => {
    LoginPage.inputUsername('username')
    LoginPage.inputPassword('password')
    LoginPage.submitCredentials()
})
Then("the user should see homepage",() => {    
    cy.visit("http://zero.webappsecurity.com/login.html")
    cy.xpath("//*[@id='homeMenu']/div/strong").should('be.visible')
})

When("the user submits invalid username {string} password {string}" , (username, password) => {
    LoginPage.inputPassword(username)
    LoginPage.inputPassword(password)
})
And("the user clicks submit" , () => {
    LoginPage.submitCredentials()
})