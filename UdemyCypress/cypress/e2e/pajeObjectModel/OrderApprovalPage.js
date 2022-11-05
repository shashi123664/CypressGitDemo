class OrderApprovalPage
{
    getClaimButton()
    {
        return cy.get('.rounded-circle')
    }
    getApproveButton()
    {
        return cy.get('div[class="d-flex justify-content-between"] :nth-child(6) button')
    }
    getSelectQueueDropdown()
    {
        return cy.get('#order-queue-dropdownMenuButton')
    }
    getAccountName()
    {
        return cy.get('a > .mb-2')
    }
    getorderNumber()
    {
        return cy.get('.justify-content-between > :nth-child(2) > .mb-2')
    }
    getPrintQueue()
    {
        return cy.get(':nth-child(3) > :nth-child(1) > .d-flex > :nth-child(1) > .mb-1')
    }
    getPickQueue()
    {
        return cy.get(':nth-child(3) > :nth-child(2) > .d-flex > :nth-child(1) > .mb-1')
    }
    getAuditQueue()
    {
        return cy.get(':nth-child(3) > :nth-child(3) > .d-flex > :nth-child(1) > .mb-1')
    }
    getShipQueue()
    {
       return cy.get(':nth-child(3) > :nth-child(4) > .d-flex > :nth-child(1) > .mb-1')
    }
    getCompleteQueue()
    {
        return cy.get(':nth-child(3) > :nth-child(5) > .d-flex > :nth-child(1) > .mb-1')
    }
}
export default OrderApprovalPage;