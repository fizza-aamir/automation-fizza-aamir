/// <reference types="cypress" />

//Elements
const createBillButton = '#app > div > h2 > a'
const billValueField = '#app > div > div:nth-child(2) > div:nth-child(1) > input[type=number]'
const paidCheckbox= '#app > div > div:nth-child(2) > div:nth-child(4) > div'
const saveButton= '#app > div > div.actions > a.btn.blue'
//const optionSelector= '#app > div > div.bills > div:nth-last-child > div.action > img' // bill id : 2
const optionSelector= '#app > div > div.bills > div:last-child > .action > img'// last bill
const editOption= '#app > div > div.bills > div:last-child > div.menu > a:nth-child(1)' // last bill
const saveButtonAfterEdit= '#app > div > div.actions > a.btn.blue'

//Functions
function createNewBill(cy, contentToConfirm){
    cy.get(createBillButton).click()
    cy.contains(contentToConfirm)
}
function inputValue(cy, value){
    cy.get(billValueField).type(value)
}
function saveNewBill(cy, contentToConfirm){
    cy.get(saveButton).click()
    cy.contains(contentToConfirm)
}

function editBill(cy){
    cy.get(optionSelector).click()
    cy.get(editOption).click()
    //cy.contains(contentToConfirm)
}
function billIsPaid(cy){
    cy.get(paidCheckbox).click()
}
function saveEditBill(cy, contentToConfirm){
    cy.get(saveButtonAfterEdit).click()
    cy.contains(contentToConfirm)
}

//Exports
module.exports = {
    createNewBill, 
    inputValue, 
    saveNewBill, 
    editBill, 
    saveEditBill, 
    billIsPaid
}