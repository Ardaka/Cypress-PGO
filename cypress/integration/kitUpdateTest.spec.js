/// <reference types = "Cypress" />
describe('EditorialQA Test Cases', () => {
    beforeEach(() =>{
        cy.visit('https://editorialqa.pebblego.com');
    });


    it('kit update test', () =>{
        cy.request('https://cmsbackendqa.pebblego.com/api/v1/kit/update')
        .then(res =>{
            const { data } = res.body;
            cy.get('').each(($el, index) => {
                cy.wrap($el).find('h4').contains(data[index].title)
                cy.wrap($el).find('img').should('have.attr', 'src', data[index])
            })
        })




    });



})
