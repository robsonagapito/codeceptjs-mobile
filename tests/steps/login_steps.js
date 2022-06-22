const LoginPage = require("../pages/LoginPage")
const ErrorPage = require("../pages/ErrorPage")

const { I } = inject()

let loginPage = new LoginPage()
let errorPage = new ErrorPage()

Given('the user opens app', () => {    
})

When(/^the user fills your login as "(.*)"/, (username) => {
    loginPage.fillUser(username)
})

When(/^the user fills your password as "(.*)"/, (password) => {
    loginPage.fillPassword(password)
})

When('the user clicks on auth button', () => {
    loginPage.clickAuth()
}) 

Then(/^the user should see the message "(.*)"/, (message) => {
    I.see(message)
})
