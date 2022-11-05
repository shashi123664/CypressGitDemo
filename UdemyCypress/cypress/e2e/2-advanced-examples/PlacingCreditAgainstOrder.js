describe('Placing credit against order script',function(){





it('Placing credit against order test case', function(){
    cy.visit('https://beta3.canprevcommons.ca')
    cy.get('#email').type('shashi_s@trigent.com')
    cy.get('#password').type('Welcome@123')
    cy.get(':nth-child(5) > .w-full').click()
    cy.contains('Accounts Management').click()
    cy.get('.c-show > .c-sidebar-nav-dropdown-items > :nth-child(1) > .c-sidebar-nav-link').click()
    cy.get('#filterInput').type('test1252b')
    cy.contains('test1252b').click()
    cy.get('#orders-tab').click()
    cy.get('.input-group > .form-control').type('408040')
    cy.get('[class="card-title"]').click()
    cy.get('.border-bottom > tr > .checkbox-col > .custom-control').click()
    cy.get('#__BVID__82__BV_toggle_').click()
    cy.get('.dropdown-menu > :nth-child(2) > .dropdown-item').click()
    cy.get('#reorder_confirm_modal___BV_modal_footer_ > .btn-primary').click()
    cy.get('#order_source').select('Phoned')
    cy.get('.multiselect__placeholder').type('{enter}')
    cy.get('.col-md-8 > :nth-child(3)').click()
    cy.get('#confirm_credit_order_modal___BV_modal_footer_ > .btn-primary').click()
    cy.get('#orders-tab').click()
    var creditNumber = ''
    cy.get('[class="col-md-12 col-lg-8 pr-lg-1"]').find('[class="mb-2"]').eq(0).then(function(ActualCreditNumber){
        creditNumber =ActualCreditNumber.text()
        cy.log(ActualCreditNumber.text())
        cy.log(creditNumber)
}).then(() =>{
    expect(creditNumber).to.includes('[Order: #408040]')
  })


})




})