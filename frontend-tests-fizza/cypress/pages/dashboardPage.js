/// <reference types="cypress" />

//Elements
const titleOfDashboardPage='Tester Hotel'
const logoutButton= '.user > .btn'
const navRoomsLink= '#app > div > div > div:nth-child(1) > a'
const navClientsLink= '#app > div > div > div:nth-child(2) > a'
const navBillsLink = '#app > div > div > div:nth-child(3) > a'

//Actions
function checkTitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDashboardPage)
}

function performLogout(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}

function navigateToRoomsPage(cy, contentToConfirm){
    cy.get(navRoomsLink).click()
    cy.contains(contentToConfirm)
}

function navigateToClientsPage(cy, contentToConfirm){
    cy.get(navClientsLink).click()
    cy.contains(contentToConfirm)
}
function navigateToBillsPage(cy, contentToConfirm){
    cy.get(navBillsLink).click()
    cy.contains(contentToConfirm)
}
//Exports
module.exports= {
    checkTitleOfDashboardPage, 
    performLogout, 
    titleOfDashboardPage, 
    navigateToRoomsPage, 
    navigateToClientsPage, 
    navigateToBillsPage
}