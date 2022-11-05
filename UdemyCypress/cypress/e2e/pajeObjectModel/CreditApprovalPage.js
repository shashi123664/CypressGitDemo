class CreditApprovalPage
{
    getAccountName()
    {
        return cy.get('a > .mb-2')
    }
    getCreditNumber()
    {
        return cy.get('.card-body > .justify-content-between > :nth-child(2) > .mb-2')
    }
    getClaimButton()
    {
       return cy.get('.rounded-circle')
    }
   getApproveButton()
   {
       return cy.get(':nth-child(4) > .btn')
   }
   getSelectQueueDropdown()
   {
       return cy.get('#order-queue-dropdownMenuButton')
   }
   getCompleteCredit()
   {
       return cy.get(':nth-child(2) > :nth-child(4) > .d-flex > :nth-child(1) > .mb-1')
   }  
}
export default CreditApprovalPage;