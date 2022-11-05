/// <reference types="Cypress" />
import LoginPage from '../pajeObjectModel/LoginPage'
import DashboardPage from '../pajeObjectModel/DashboardPage'
import AccountTablePage from '../pajeObjectModel/AccountTablePage'
import AccountDetailsPage from '../pajeObjectModel/AccountDetailsPage'
import PlacingOrderPage from '../pajeObjectModel/PlacingOrderPage'

describe('Placing a Order Suite',function(){
    before(function(){
        cy.fixture('PlacingOrder').then(function(data){
            this.data = data
        })
    })
it('Placing a Order Script',function(){
        const loginPage = new LoginPage()
        const dashboardPage = new DashboardPage()
        const accountTablePage = new AccountTablePage()
        const accountDetailsPage = new AccountDetailsPage()
        const placingOrderPage = new PlacingOrderPage()

    cy.visit(this.data.url)
    loginPage.getEmailIdField().type(this.data.email)
    loginPage.getPasswordField().type(this.data.password)
    loginPage.getSignInButton().click()
    cy.url().should('include',this.data.dashboardurl)
    cy.wait(2000)
    dashboardPage.getAccountsManagement().click()
    cy.wait(2000)
    dashboardPage.getAccounts().click()
    accountTablePage.getSearchField().type(this.data.accountID)
    accountTablePage.getAccountName().click()
    accountDetailsPage.getPlaceOrderButton().click()
    placingOrderPage.getOrderSource().select(this.data.orderSource)
    placingOrderPage.getOrderContact().type('{enter}')
    placingOrderPage.getQuantity().type(this.data.quantity)
    placingOrderPage.getSku().type(this.data.sku)
    cy.wait(2000)
    placingOrderPage.getSku().type('{downarrow}{enter}')
    cy.wait(2000)
    placingOrderPage.getSubmitButton().click()
    placingOrderPage.getSubmitButtonOnConformationPopUp().click()
    /*cy.get('#orders-tab').click()
    cy.contains('Order Approval').click({force:true})*/
    cy.url().should('include',this.data.accountUrl)
    cy.log('Order is successfully placed')
    

})
})
