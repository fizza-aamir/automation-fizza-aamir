/// <reference types="cypress" />
import faker from 'faker'
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
    let roomCategory=['Double', 'Single', 'Twin']
    const random = Math.floor(Math.random() * roomCategory.length);
    cy.get(categorySelectorField).select(roomCategory[random]) // to do as parameter
}
function inputRoomNumber(cy, roomnumber){
    
    cy.get(roomNumberField).type(roomnumber)
}
function inputFloorNumber(cy){
    let floorNumber=faker.random.number(200)
    cy.get(floorNumberField).type(floorNumber)
}
function roomIsAvailable(cy){
    cy.get(roomAvailabilityCheckBox).click()
}
function inputPrice(cy){
    let price=faker.random.number({min:200, max:10000})
    cy.get(priceField).type(price)
}
function selectRoomFeatures(cy, feature){
    cy.get(featureSelector).select(feature)
}

function saveNewRoom(cy, contentToConfirm1, contentToConfirm2){
    cy.get(saveButton).click()
    cy.contains(contentToConfirm1)
    cy.contains(contentToConfirm2)
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