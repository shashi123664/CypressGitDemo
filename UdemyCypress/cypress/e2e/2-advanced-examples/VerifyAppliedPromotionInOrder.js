describe('Verify applied promotion in order script', function(){


it('Verify applied promotion in order test case', function(){

    cy.visit('https://beta3.canprevcommons.ca')
    cy.get('#email').type('shashi_s@trigent.com')
    cy.get('#password').type('Welcome@123')
    cy.get(':nth-child(5) > .w-full').click()
    cy.contains('Accounts Management').click()
    cy.get('.c-show > .c-sidebar-nav-dropdown-items > :nth-child(1) > .c-sidebar-nav-link').click()
    cy.get('#filterInput').type('test1252b')
    cy.contains('test1252b').click()
    cy.get('#draft-order-dropdown__BV_button_').click()
    cy.get('#order_source').select('Phoned')
    cy.get('.multiselect__placeholder').type('{enter}')
    cy.get('#order-item-qty-0').type('1')
    cy.get('#order-item-sku-0').type('194246').type('{downarrow}{enter}')
    cy.get('[rownumber="0"] > :nth-child(5) > .form-control').select('Test 07 Sept - 20%').should('have.value','493')

     cy.log('First automation is done')

})




})