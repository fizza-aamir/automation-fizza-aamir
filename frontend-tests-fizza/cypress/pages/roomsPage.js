/// <reference types="cypress" />

//Elements
const titleOfRoomsPage='Testers Hotel'
const createRoomButton= '#app > div > h2 > a'
const backButton= '#app > div > div.actions > a:nth-child(1)'
const logoutButton='.user > .btn'
const categorySelectorField=':nth-child(1) > select'
const roomNumberField='#app > div > div:nth-child(2) > div:nth-child(2) > input[type=number]'
const floorNumberField= '#app > div > div:nth-child(2) > div:nth-child(3) > input[type=number]'
const roomAvailabilityCheckBox='#app > div > div:nth-child(2) > div:nth-child(4) > div'
const priceField='#app > div > div:nth-child(2) > div:nth-child(5) > input[type=number]'
const featureSelector= '#app > div > div:nth-child(2) > div:nth-child(6) > select'
const saveButton = '#app > div > div.actions > a.btn.blue'

//Actions
function checkTitleOfRoomsPage(cy){
    cy.title().should('eq', titleOfRoomsPage)
}

function goToCreateRoomForm(cy, contentToConfirm){
    cy.get(createRoomButton).click()
    cy.contains(contentToConfirm)
}

function useBackButton(cy, contentToConfirm){
    cy.get(backButton).click()
    cy.contains(contentToConfirm)
}
function performLogoutFromRoomsPage(cy, contentToConfirm){
    cy.get(logoutButton).click()
    cy.contains(contentToConfirm)
}
function selectCategoryOfRoom(cy){
    cy.get(categorySelectorField).select('Double') // to do as parameter
}
function inputRoomNumber(cy, roomnumber){
    cy.get(roomNumberField).type(roomnumber)
}
function inputFloorNumber(cy, floornumber){
    cy.get(floorNumberField).type(floornumber)
}
function roomIsAvailable(cy){
    cy.get(roomAvailabilityCheckBox).click()
}
function inputPrice(cy, price){
    cy.get(priceField).type(price)
}
function selectRoomFeatures(cy, feature){
    cy.get(featureSelector).select(feature)
}

function saveNewRoom(cy, contentToConfirm){
    cy.get(saveButton).click()
}
//Exports
module.exports= {
    checkTitleOfRoomsPage,
    goToCreateRoomForm, 
    useBackButton, 
    performLogoutFromRoomsPage, 
    selectCategoryOfRoom, 
    inputRoomNumber, 
    inputFloorNumber, 
    roomIsAvailable, 
    inputPrice,
    selectRoomFeatures, 
    saveNewRoom
}