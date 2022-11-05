class AccountDetailsPage{

    getPlaceOrderButton()
    {
         return cy.get('#draft-order-dropdown__BV_button_')
    }
    getPlaceCreditButton()
    {
         return cy.get('a[title="Place Credit"]')
    }
    getOrderApprovalLink()
    {
        return cy.contains('Order Approval')
    }
    getCreditApprovaLink()
    {
       return cy.contains('Credit Approval')
    }
    getOrdersTab()
    {
        return cy.get('#orders-tab')
    }
}
export default AccountDetailsPage;