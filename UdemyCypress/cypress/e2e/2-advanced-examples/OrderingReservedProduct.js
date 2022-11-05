/// <reference types="Cypress" />
describe('Ordering the reserved product Script', function(){

    it('Ordering the reserved product testcase', function(){

        
        cy.visit('https://beta3.canprevcommons.ca')
        cy.get('#email').type('shashi_s@trigent.com')
        cy.get('#password').type('Welcome@123')
        cy.get(':nth-child(5) > .w-full').click()
        cy.contains('Accounts Management').click()
        cy.get('.c-show > .c-sidebar-nav-dropdown-items > :nth-child(1) > .c-sidebar-nav-link').click()
        cy.get('#filterInput').type('test1252b')
        cy.contains('test1252b').click()
        cy.get('#draft-order-dropdown__BV_button_').click()
        cy.get('.b-sidebar-body > .px-3 > :nth-child(5)').click()
        cy.get('#qty').type('10')
        cy.contains('Add to Order').click()
        cy.get('#sidebar-right > .b-sidebar-header > .close > .bi-x').click()
        cy.get('#order_source').select('Phoned')
        cy.get('.multiselect__placeholder').type('{enter}')
        cy.get('.col-md-8 > :nth-child(3)').click()
        cy.get('#confirm_order_modal___BV_modal_footer_ > .btn-primary').click()
        cy.get('#backorders-tab').click()
        cy.get('.m-2 > .btn') .should('be.visible')
        var text = ''
        cy.get('.pl-0 > .border > .text-center > .badge').then(function(message){
            text =message.text()
        }).then(()=> {
            expect('No records available!').to.equals(text)
        })

    })
})