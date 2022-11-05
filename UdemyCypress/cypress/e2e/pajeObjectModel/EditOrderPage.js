class EditOrderPage
{
    getEditOrderButton()
    {
        return cy.get(':nth-child(2) > :nth-child(2) > .btn')
    }
}
export default EditOrderPage;