/// <reference types="Cypress"/>

describe('Admin Tool',()=>{
    it('test case',()=>{
        cy.visit('https://admin.pebblego.com/')
        cy.get('#username').type('trexteacher').should('have.value','trexteacher')
        cy.get('#password').type('sm4ll4rms').should('have.value','sm4ll4rms')
        cy.get('#go-button').click().should('be.visible')
        //cy.url().should('include','/tools')
        //cy.url().should('eq','https://admin.pebblego.com//tools')
        cy.get('#standards-button > .tool-item-name',{timeout: 10000}).click().should('be.visible')
        cy.get('.methods-capstone-logo').should('be.visible')
        cy.get(':nth-child(1) > .card-title').click({force: true})
        cy.get('.standard-step > .step-title').should('be.visible')
    })
})