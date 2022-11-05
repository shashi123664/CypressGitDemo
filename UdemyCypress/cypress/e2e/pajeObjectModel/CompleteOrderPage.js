class CompleteOrderPage
{
    getOrderNumber()
    {
        return cy.get('.justify-content-between > :nth-child(2) > .mb-2')
    }
}
export default CompleteOrderPage;