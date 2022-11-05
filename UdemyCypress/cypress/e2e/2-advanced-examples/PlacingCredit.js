/// <reference types="Cypress" />
import LoginPage from '../pajeObjectModel/LoginPage'
import DashboardPage from '../pajeObjectModel/DashboardPage'
import AccountTablePage from '../pajeObjectModel/AccountTablePage'
import AccountDetailsPage from '../pajeObjectModel/AccountDetailsPage'
import PlacingCreditPage from '../pajeObjectModel/PlacingCreditPage'
import AccountRequestPage from '../pajeObjectModel/AccountRequestPage'


describe('Placing a Credit Suite',function(){
    before(function(){
        cy.fixture('PlacingCredit').then(function(data){
            this.data = data
        })
    })
    it('Placing a credit Script',function(){
        const loginPage = new LoginPage()
        const dashboardPage = new DashboardPage()
        const accountTablePage = new AccountTablePage()
        const accountDetailsPage = new AccountDetailsPage()
        const placingCreditPage = new PlacingCreditPage()
        const accountRequestPage = new AccountRequestPage()


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
        accountDetailsPage.getPlaceCreditButton().click()
        placingCreditPage.getCreditOrderType().select(this.data.creditOrdertype)
        placingCreditPage.getCreditSource().select(this.data.creditOrderSource)
        placingCreditPage.getCreditContact().select(this.data.contact)
        placingCreditPage.getQuantityField().type(this.data.quantity)
        placingCreditPage.getSkuField().type(this.data.sku)
        cy.wait(2000)
        placingCreditPage.getSkuField().type('{downarrow}{enter}')
        cy.wait(2000)
        placingCreditPage.getSubmitButton().click()
        placingCreditPage.getSubmitButtonOnConformationPopUp().click()
        /*cy.get('#orders-tab').click()
        cy.contains('Credit Approval').click({force:true})*/
        cy.url().should('include',this.data.accountUrl)
        cy.log('Credit is successfully placed')

        if(accountRequestPage.getDuplicateAccountModalPopUp().then($PopUp =>{$PopUp.is(':visible')}))
{
    accountRequestPage.getDuplicateAccountModalPopUp().click()
}

    })
})