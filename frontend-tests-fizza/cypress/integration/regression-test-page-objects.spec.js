/// <reference types="cypress" />
import * as indexFuncs from '../pages/indexPage'
import * as dashboardFuncs from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as roomsFuncs from '../pages/roomsPage'
import * as clientsFuncs from '../pages/clientsPage'
import * as billFuncs from '../pages/billsPage'

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
        roomsFuncs.inputRoomNumber(cy, '105')
        roomsFuncs.inputFloorNumber(cy, '5')
        roomsFuncs.roomIsAvailable(cy)
        roomsFuncs.inputPrice(cy, '899')
        roomsFuncs.selectRoomFeatures(cy, 'Balcony')
        roomsFuncs.saveNewRoom(cy, 'Floor 5, Room 105')
    })

    it('Test Case 3: Create new client', function(){
        dashboardFuncs.navigateToClientsPage(cy, 'Clients')
        clientsFuncs.createNewClient(cy, 'New Client')
        clientsFuncs.inputClientName(cy, 'Fizza Aamir')
        clientsFuncs.inputClientEmail(cy, 'fizza.aamir@gmail.com')
        clientsFuncs.inputClientPhone(cy, '0720329236')
        clientsFuncs.saveNewClient(cy, 'Clients')
    })

    it('Test Case 4- Create New Unpaid Bill', function(){
        dashboardFuncs.navigateToBillsPage(cy, 'Bills')
        billFuncs.createNewBill(cy, 'New Bill')
        billFuncs.inputValue(cy, '7800')
        billFuncs.saveNewBill(cy, 'Bills')
    })

    it('Test Case 5: Edit Bill to Paid', function(){
        dashboardFuncs.navigateToBillsPage(cy, 'Bills')
        billFuncs.editBill(cy, 'Bill: 2')
        billFuncs.billIsPaid(cy)
        billFuncs.saveEditBill(cy, 'Bills')
    })
})