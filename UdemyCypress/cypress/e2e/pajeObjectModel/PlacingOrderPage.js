class PlacingOrderPage
{
    getOrderSource()
    {
        return cy.get('#order_source')
    }
    getOrderContact()
    {
        return cy.get('.multiselect__placeholder')
    }
    getQuantity()
    {
        return cy.get('#order-item-qty-0')
    }
    getSku()
    {
        return cy.get('#order-item-sku-0')
    }
    getSubmitButton()
    {
        return cy.get('.col-md-8 > :nth-child(3)')
    }
    getSubmitButtonOnConformationPopUp()
    {
        return cy.get('#confirm_order_modal___BV_modal_footer_ > .btn-primary')
    }
}
export default PlacingOrderPage;