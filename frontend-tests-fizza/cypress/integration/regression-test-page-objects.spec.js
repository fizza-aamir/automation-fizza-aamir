/// <reference types="cypress" />
import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as roomsFuncs from '../pages/roomsPage'
import * as clientsFuncs from '../pages/clientsPage'
import * as billFuncs from '../pages/billsPage'
import faker from 'faker'

// this is a test suite
describe('Test Suite with Page Objects', function(){
    beforeEach(() => {
        cy.visit(targets.base_url)
        indexFuncs.checkTitleOFIndexPage(cy)
    })

    it('Test case 1: Go to Create room and back', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 
            'Tester Hotel Overview')

        dashboardFuncs.navigateToRoomsPage(cy, 'Rooms')
        roomsFuncs.checkTitleOfRoomsPage(cy)
        roomsFuncs.goToCreateRoomForm(cy, 'New Room')
        roomsFuncs.useBackButton(cy, 'Rooms')
        roomsFuncs.performLogoutFromRoomsPage(cy, 'Login')

    })

    it('Test Case 2: Create a new room and back', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 
            'Tester Hotel Overview')

        dashboardFuncs.navigateToRoomsPage(cy, 'Rooms')
        roomsFuncs.checkTitleOfRoomsPage(cy)
        roomsFuncs.goToCreateRoomForm(cy, 'New Room')
        roomsFuncs.selectCategoryOfRoom(cy)
        let roomNumber=faker.random.number(1000)
        roomsFuncs.inputRoomNumber(cy, roomNumber)
        roomsFuncs.inputFloorNumber(cy)
        roomsFuncs.roomIsAvailable(cy)
        roomsFuncs.inputPrice(cy)
        roomsFuncs.selectRoomFeatures(cy, 'Balcony')
        roomsFuncs.saveNewRoom(cy, 'Rooms', roomNumber)
        dashboardFuncs.performLogout(cy, 'Login')
    })

    it('Test Case 3: Create new client', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 
            'Tester Hotel Overview')
        dashboardFuncs.navigateToClientsPage(cy, 'Clients')
        clientsFuncs.createNewClient(cy, 'New Client')
        clientsFuncs.inputClientName(cy)
        let clientEmail=faker.internet.email()
        clientsFuncs.inputClientEmail(cy, clientEmail)
        clientsFuncs.inputClientPhone(cy)
        clientsFuncs.saveNewClient(cy, 'Clients', clientEmail)
        dashboardFuncs.performLogout(cy, 'Login')
       // cy.contains(clientEmail)
    })

    it('Test Case 4- Create New Unpaid Bill', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 
            'Tester Hotel Overview')
        dashboardFuncs.navigateToBillsPage(cy, 'Bills')
        billFuncs.createNewBill(cy, 'New Bill')
        billFuncs.inputValue(cy, '7800')
        billFuncs.saveNewBill(cy, 'Bills')
        dashboardFuncs.performLogout(cy, 'Login')
    })

    it.only('Test Case 5: Edit Bill to Paid', function(){
        indexFuncs.performValidLogin(cy, targets.username, targets.password, 
            'Tester Hotel Overview')
        dashboardFuncs.navigateToBillsPage(cy, 'Bills')
        billFuncs.createNewBill(cy, 'New Bill') //
        billFuncs.inputValue(cy, '7800')//
        billFuncs.saveNewBill(cy, 'Bills')//
        billFuncs.editBill(cy)
        billFuncs.billIsPaid(cy)
        billFuncs.saveEditBill(cy, 'Bills')
    })
})