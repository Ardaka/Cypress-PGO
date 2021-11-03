describe('cms editorial test cases ',()=>{
    it('kit tool test case',()=>{
        cy.visit('https://editorialqa.pebblego.com/login')
        cy.get('input[id="username"]').type('garage').should('have.value','garage')
        cy.get('input[id="password"]').type('capdig').should('have.value','capdig')
        cy.get('#go-button').click()
        cy.title().should('eq','Articles - CMS')
        cy.get('#kit-button').click().should('be.visible')
        cy.get('.import-button-text').click()
        cy.get('.kit-count',{ timeout: 25000 }).should('be.visible');
        cy.get('.debug-info').should('be.visible').should('have.text','version: 2.3.0')
        cy.get('.cms-tool-logout-button-text').click().should('be.visible')
        cy.get('#sign-in-text').should('have.text','CMS Login:')
        cy.log('Test Successfully Done')
    })
})