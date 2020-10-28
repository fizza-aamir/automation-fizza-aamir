/// <reference types="cypress" />
import faker from 'faker'

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

function inputClientName(cy){
    let firstName=faker.name.firstName()
    let lastNAme=faker.name.lastName()
    let fullName= firstName + ' '+ lastNAme
    cy.get(nameField).type(fullName)
}
function inputClientEmail(cy, email){
    cy.get(emailField).type(email)
}
function inputClientPhone(cy){
    let phoneNumber=faker.phone.phoneNumber()
    cy.get(phoneField).type(phoneNumber)
}
function saveNewClient(cy, contentToConfirm1, contentToConfirm2){
    cy.get(saveButton).click()
    cy.contains(contentToConfirm1)
    cy.contains(contentToConfirm2)
}
//Exports
module.exports= {
    createNewClient, 
    inputClientEmail, 
    inputClientName, 
    inputClientPhone, 
    saveNewClient
}