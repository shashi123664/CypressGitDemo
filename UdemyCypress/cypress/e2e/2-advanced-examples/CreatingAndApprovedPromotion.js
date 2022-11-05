/// <reference types="Cypress" />
describe('Promotion Script', function(){

it('Promotion test case', function(){


cy.visit('https://beta3.canprevcommons.ca')
cy.get('#email').type('shashi_s@trigent.com')
cy.get('#password').type('Welcome@123')
cy.get(':nth-child(5) > .w-full').click()
cy.contains('Promotion Management').click()
cy.get('.btn-primary').click()
cy.get('#name').type('Test AutomatePromotion')
cy.get(':nth-child(3) > .col-12 > .custom-control > .custom-control-label').click()
cy.get('#from_date__value_').type('{enter}')
cy.get('#to_date__value_').type('{enter}')
cy.get(':nth-child(6) > .col-12 > .custom-control > .custom-control-label').click()
cy.get('#promotion_rule_id').select('Percentage')
cy.get('#value1').type('2')
cy.get('#add_edit_promotion_modal___BV_modal_footer_ > .btn-primary').click()
cy.wait(4000)
cy.get('td[aria-colindex="1"][ role="cell"]').each(($el , index , $list) =>{
      
    cy.wait(2000)
  if($el.text().includes('Test AutomatePromotion'))
  {
      cy.log(index)
      cy.get('[title="Approve"]').eq(index).click()
      cy.wait(5000)
      cy.get('#approve_reject_promotion_modal___BV_modal_footer_ > .btn-primary').click()
      cy.wait(2000)
      cy.contains('Promotion Management').click()
      cy.contains('Ongoing').click()
      cy.wait(2000)
      cy.get('td[aria-colindex="1"][ role="cell"]').each(($el , index , $list) =>{
      
        cy.wait(2000)
      if($el.text().includes('Test AutomatePromotion'))
      {
          cy.log("Promotion is approved and active")
      }
    
    })
  }

})


})


})