class ShipPage
{
getOrderNumber()
{
    return cy.get('.justify-content-between > :nth-child(2) > .mb-2')
}
getCreateShipmentButton()
{
    return cy.get('.form-row > .btn')
}
getContinueButtonInSelectCourier()
{
    return cy.get('#add_shipment_modal___BV_modal_footer_ > .btn-primary')
}
getContinueButtonInAddressTab()
{
    return cy.get('#add_shipment_modal___BV_modal_footer_ > .btn-primary')
}
getCourierType()
{
    return cy.get('#courier_id-0')
}
getTrackingNumberField()
{
    return cy.get('#tracking_number-0')
}
getFinishButton()
{
    return cy.get('#add_shipment_modal___BV_modal_footer_ > .btn-primary')
}
}
export default ShipPage;