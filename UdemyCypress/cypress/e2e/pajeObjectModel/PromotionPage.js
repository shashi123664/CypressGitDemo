class PromotionPage
{
   getRequestPromotion()
   {
    return cy.get('.btn-primary')
   }

   getPriority()
   {
    return cy.get('#priority-type-radio > :nth-child(1) > .custom-control-label')
   }

   getPromonames()
   {
    return cy.get('#name')
   }

   getAllAccounts()
   {
    return cy.get(':nth-child(3) > .col-12 > .custom-control > .custom-control-label')
   }

   getStartdate()
   {
    return cy.get('#from_date__value_')
   }

   getAllProducts()
   {
    return cy.get(':nth-child(6) > .col-12 > .custom-control > .custom-control-label')
   }
   getPromotionRule()
   {
    return cy.get('#promotion_rule_id')
   }
}

export default PromotionPage;