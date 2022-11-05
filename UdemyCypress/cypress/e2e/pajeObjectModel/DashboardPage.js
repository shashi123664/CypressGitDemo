class DashboardPage{

    getAccountsManagement()
    {
        return cy.contains('Accounts Management')
    }
    getAccounts()
    {
        return cy.get('.c-show > .c-sidebar-nav-dropdown-items > :nth-child(1) > .c-sidebar-nav-link')
    }
    getRequestAccount()
    {
        return cy.contains('Request Account')
    }
    getAccountApprovalList()
    {
        return cy.contains('Account Approval List')
    }
    getOrderManagement()
    {
        return cy.contains('Orders Management')
    }
    getCreditApproval()
    {
        return cy.contains('Credit Approval')
    }
    getOrderApproval()
    {
        return cy.contains('Order Approval')
    }
}
export default DashboardPage;