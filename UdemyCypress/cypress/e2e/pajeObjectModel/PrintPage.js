class PrintPage
{
    getOrderNumber()
    {
        return cy.get('.justify-content-between > :nth-child(2) > .mb-2')
    }
    getSendToQueueDropdown()
    {
        return cy.get('div button[class="btn dropdown-toggle btn-primary"]')
    }
    getSendToPickQueueOption()
    {
        return cy.get(':nth-child(3) > .dropdown-item')
    }

}
export default PrintPage;