/// <reference types="cypress" />

//Elements
const titleOfIndexPage= 'Testers Hotel'
const usernameTextField=':nth-child(1) > input'
const passwordTextField=':nth-child(2) > input'
const loginButton='.btn'

//Actions
function checkTitleOFIndexPage(cy){
    cy.title().should('eq', titleOfIndexPage)
}

function performValidLogin(cy, username, password, contentToConfirm){
    cy.get(usernameTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
}
//Exports
module.exports = {
    checkTitleOFIndexPage,
    performValidLogin
}