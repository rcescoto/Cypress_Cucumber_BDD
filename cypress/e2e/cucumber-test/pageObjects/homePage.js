const URL = "https://www.saucedemo.com"
const USERNAME = "//*[@id='user_login']"
const PASSWORD = "//*[@id='user_password']"
const SUBMIT_BUTTON = "//*[@id='login_form']/div[2]/input"

class HomePage{
    static goToLogin() {
        cy.visit(URL)
    }
    static inputUsername(username) {
        cy.xpath(USERNAME).type(username)
    }
    static inputPassword(password) {
        cy.xpath(PASSWORD).type(password)
    }
    static submitCredentials() {
        cy.xpath(SUBMIT_BUTTON).click()
    }
}
    

export default HomePage
