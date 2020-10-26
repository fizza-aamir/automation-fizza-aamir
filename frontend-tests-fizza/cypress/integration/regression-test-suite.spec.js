/// <reference types="cypress" />

// this is a test suite
describe('Regression test suite', function () {

    //This is a test case
    it('test case 1 -Go to Create room and back', function () {
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click() // login button clicked
        cy.contains('Tester Hotel Overview')
        cy.get('#app > div > div > div:nth-child(1) > a').click() //view button on rooms
        cy.contains('Rooms')
        cy.get('#app > div > h2 > a').click() // create room button 
        cy.contains('New Room')
        cy.get('#app > div > div.actions > a:nth-child(1)').click() //back button clicked
        cy.contains('Rooms')
        cy.get('.user > .btn').click() // logout button clicked
        cy.contains('Login')
    })

    //This is a test case
    it('test case 2 -Create a new room and back', function () {
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click() // login button clicked
        cy.contains('Tester Hotel Overview')
        cy.get('#app > div > div > div:nth-child(1) > a').click() //view button on rooms
        cy.contains('Rooms')
        cy.get('#app > div > h2 > a').click() // create room button 
        cy.contains('New Room')
        //cy.get('#app > div > div:nth-child(2) > div:nth-child(1) > select')
        cy.get(':nth-child(1) > select').select('Double')
        //cy.get('#app > div > div:nth-child(2) > div:nth-child(1) > select > option:nth-child(1)').click() //select double
        //cy.contains('Double')
        cy.get('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=number]').type('105')
        //cy.contains('105')
        cy.get('#app > div > div:nth-child(2) > div:nth-child(3) > input[type=number]').type('5')
       // cy.contains('5')
        cy.get('#app > div > div:nth-child(2) > div:nth-child(4) > div').click() //check available
        // assertion ?? todo
        cy.get('#app > div > div:nth-child(2) > div:nth-child(5) > input[type=number]').type('899') // price
        //cy.contains('899')
        //cy.get('#app > div > div:nth-child(2) > div:nth-child(6) > select > option:nth-child(1)').select('Balcony')// feature
        
        //assertion ??
        //cy.get('#app > div > div:nth-child(2) > div:nth-child(6) > label') // label features
        cy.get('#app > div > div:nth-child(2) > div:nth-child(6) > select').select('Balcony')
        //cy.get('[value="balcony"]').click()

        cy.get('#app > div > div.actions > a.btn.blue').click() // save button clicked


        cy.contains('Rooms')
        cy.contains('105')
        cy.contains('Floor 5, Room 105')
        //cy.contains('Features: Balcony')
        // assertion tha this room is available while their are duplicates ?????

        //cy.get('.user > .btn').click() // logout button clicked
        //cy.contains('Login')
    })

    it('Test Case 3- Create new client', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click() // login button clicked
        cy.contains('Tester Hotel Overview')
        cy.get('#app > div > div > div:nth-child(2) > a').click() //view button on clients
        cy.contains('Clients')
        cy.get('#app > div > h2 > a').click() // create client button
        cy.contains('New Client')
        cy.get('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=text]').type('Fizza Aamir') 
        cy.get('#app > div > div:nth-child(2) > div:nth-child(2) > input[type=email]').type('fizza.aamir@gmail.com')
        cy.get('#app > div > div:nth-child(2) > div:nth-child(3) > input[type=text]').type('0720329236')
        cy.get('#app > div > div.actions > a.btn.blue').click() //click save button
        cy.contains('Clients')
        cy.contains('Fizza Aamir')
        cy.contains('fizza.aamir@gmail.com')
        cy.contains('0720329236')

    })

it('Test Case 4- create bill', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click() // login button clicked
        cy.contains('Tester Hotel Overview')
        cy.get('#app > div > div > div:nth-child(3) > a').click() // create bill
        cy.contains('Bills')
        cy.get('#app > div > h2 > a').click() // create bill button
        cy.contains('New Bill')
        cy.get('#app > div > div:nth-child(2) > div:nth-child(1) > input[type=number]').type('7800')
        cy.get('#app > div > div.actions > a.btn.blue').click() // save button
        cy.contains('Bills')
        cy.contains('7800')

    })

    it('Test case 5 - edit bill', function(){
        cy.visit('http://localhost:3000')
        cy.title().should('include', 'Hotel')
        cy.contains('Login')
        cy.get(':nth-child(1) > input').type('tester01')
        cy.get(':nth-child(2) > input').type('GteteqbQQgSr88SwNExUQv2ydb7xuf8c')
        cy.get('.btn').click() // login button clicked
        cy.contains('Tester Hotel Overview')
        cy.get('#app > div > div > div:nth-child(3) > a').click() // create bill
        cy.contains('Bills') 
        cy.contains('7800')
        cy.get('#app > div > div.bills > div:nth-child(2) > div.action > img').click() // click on 3 dot selector
        cy.get('#app > div > div.bills > div:nth-child(2) > div.menu > a:nth-child(1)').click() // edit option
        cy.contains('Bill: 2')
        cy.get('#app > div > div:nth-child(2) > div:nth-child(4) > div').click() // check the box paid
        cy.get('#app > div > div.actions > a.btn.blue').click() // save button
        cy.contains('Bills')

    })


})