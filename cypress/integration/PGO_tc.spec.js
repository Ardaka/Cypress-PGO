/// <reference types="cypress" />

describe('PebbleGo suite',()=>{
    it('LoginPage',()=>{
        cy.visit('https://react.pebblego.com/')
        cy.location('protocol').should('eq','https:')
        cy.title().should('eq','Sign in: - PebbleGo')
        cy.get('.header-logo-pgo')
        .should('be.visible')
        cy.get('input[id="username"]')
        .type('trexstudent')
        .should('have.value','trexstudent')
        cy.get('input[id="password"]')
        .type('sm4ll4rms')
        .should('have.value','sm4ll4rms')
        cy.get('#go-button')
        .should('be.visible')
        .click()
        cy.get('#Animals').should('have.visible')
        cy.get('.module-button').should('have.length','10')
        cy.get('[aria-label="PebbleGo Next"] > .tab-image')
        .should('have.length','1')
        .click()
        cy.get('.pgn-module-title').should('have.length','5')
        cy.get('.drop-menu')
        .should('have.length',1)
        .should('be.visible')
        .click()
        cy.get('#sign-out-button')
        .should('have.length','1')
        .should('be.visible')
        .click()
        cy.get('.footer-link')
        .should('have.length',5)
        .should('be.visible')
        cy.get('#version-text')
        .should('be.visible')
        cy.log('Successfully done with test')      
    })
})