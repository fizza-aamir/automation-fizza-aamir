/// <reference types="cypress" />

//Elements
const createClientButton='#app > div > h2 > a'
const nameField= '#app > div > div:nth-child(2) > div:nth-child(1) > input[type=text]'
const emailField= '#app > div > div:nth-child(2) > div:nth-child(2) > input[type=email]'
const phoneField= '#app > div > div:nth-child(2) > div:nth-child(3) > input[type=text]'
const saveButton = '#app > div > div.actions > a.btn.blue'

//Actions
function createNewClient(cy, contentToConfirm){
    cy.get(createClientButton).click()
    cy.contains(contentToConfirm)
}
function inputClientName(cy, name){
    cy.get(nameField).type(name)
}
function inputClientEmail(cy, email){
    cy.get(emailField).type(email)
}
function inputClientPhone(cy, phone){
    cy.get(phoneField).type(phone)
}
function saveNewClient(cy, contentToConfirm){
    cy.get(saveButton).click()
    cy.contains(contentToConfirm)
}
//Exports
module.exports= {
    createNewClient, 
    inputClientEmail, 
    inputClientName, 
    inputClientPhone, 
    saveNewClient
}