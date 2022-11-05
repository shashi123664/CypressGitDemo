describe('Multiselect script', function () {
    // test case
    it('Multiselect test case', function (){
      cy.visit('https://beta3.canprevcommons.ca')
      cy.get('#email').type('shashi_s@trigent.com')
      cy.get('#password').type('Welcome@123')
      cy.get(':nth-child(5) > .w-full').click()
      cy.contains('Accounts Management').click()
      cy.contains('Account Approval List').click()
      cy.get(':nth-child(2) > .multiselect > .multiselect__tags > .multiselect__placeholder').click()
      cy.get('[class="multiselect__element"]').eq(4).click()
      cy.get('[class="multiselect__element"]').eq(5).click()
      cy.get('[class="multiselect__element"]').eq(6).click()
      cy.get('[class="multiselect__element"]').eq(7).click()
    });
 })