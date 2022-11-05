class PlacingCreditPage
{
getCreditOrderType()
{
    return cy.get('#credit_order_type')
}
getCreditSource()
{
    return cy.get('#order_source')
}
getCreditContact()
{
    return cy.get('#account_contact_id')
}
getSkuField()
{
    return cy.get('#order-item-sku-0')
}
getQuantityField()
{
    return cy.get('#order-item-qty-0')
}
getSubmitButton()
{
    return cy.contains('Submit')
}
getSubmitButtonOnConformationPopUp()
{
    return cy.get('#confirm_credit_order_modal___BV_modal_footer_ > .btn-primary')
}
}
export default PlacingCreditPage;