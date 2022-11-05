/// <reference types="Cypress" />
import LoginPage from '../pajeObjectModel/LoginPage'
import DashboardPage from '../pajeObjectModel/DashboardPage'
import AccountTablePage from '../pajeObjectModel/AccountTablePage'
import AccountDetailsPage from '../pajeObjectModel/AccountDetailsPage'
import PlacingOrderPage from '../pajeObjectModel/PlacingOrderPage'
import OrderApprovalPage from '../pajeObjectModel/OrderApprovalPage'
import PrintPage from '../pajeObjectModel/PrintPage'
import PickPage from '../pajeObjectModel/PickPage'
import AuditPage from '../pajeObjectModel/AuditPage'
import ShipPage from '../pajeObjectModel/ShipPage'
import CompleteOrderPage from '../pajeObjectModel/CompleteOrderPage'


describe('Placing a Order Suite',function(){
    before(function(){
        cy.fixture('CompleteOrder').then(function(data){
            this.data = data
        })
    })
    it('Placing a Order Script',function(){
        const loginPage=new LoginPage()
        const dashboardPage = new DashboardPage()
        const accountTablePage = new AccountTablePage()
        const accountDetailsPage = new AccountDetailsPage()
        const placingOrderPage = new PlacingOrderPage()
        const orderApprovalPage = new OrderApprovalPage()
        const printPage = new PrintPage()
        const pickPage = new PickPage()
        const auditPage = new AuditPage()
        const shipPage = new ShipPage()
        const completeOrderPage = new CompleteOrderPage()


        cy.visit(this.data.url)
        loginPage.getEmailIdField().type(this.data.email)
        loginPage.getPasswordField().type(this.data.password)
        loginPage.getSignInButton().click()
        cy.url().should('include',this.data.dashboardUrl)
        cy.wait(2000)
        dashboardPage.getAccountsManagement().click()
        cy.wait(2000)
        dashboardPage.getAccounts().click()
        accountTablePage.getSearchField().type(this.data.accountId)
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
        cy.url().should('include',this.data.accountUrl)
        cy.log('Order is successfully placed')
        dashboardPage.getOrderManagement().click()
        dashboardPage.getOrderApproval().click()
        orderApprovalPage.getorderNumber().then(function(orderNumber){
            let actualOrderNumber = orderNumber.text()
            cy.log(actualOrderNumber)
             this.actualOrderNumber = this.actualOrderNumber
        })
        orderApprovalPage.getAccountName().then(function(accountName){
            let actualAccountName= accountName.text()
            this.actualAccountName = actualAccountName
            let expectedAccountName= this.data.accountName
            expect(expectedAccountName).to.equal(this.actualAccountName)
       })
       orderApprovalPage.getClaimButton().click()
       cy.wait(2000)
       orderApprovalPage.getApproveButton().click({force:true})
       orderApprovalPage.getSelectQueueDropdown().click()
       orderApprovalPage.getPrintQueue().click()
       printPage.getOrderNumber().then(function(orderNumberPrintQueue){
           let actualOrderNumberPrintQueue = orderNumberPrintQueue.text()
           cy.log(actualOrderNumberPrintQueue)
           this.actualOrderNumberPrintQueue = actualOrderNumberPrintQueue
       })
       if(this.actualOrderNumberPrintQueue == this.actualOrderNumber)
       {
        //cy.get(':nth-child(1) > :nth-child(1) > .checkbox-print > .custom-control-label').check()
        printPage.getSendToQueueDropdown().click()
       // cy.contains('Mark as Printed').click()
       printPage.getSendToPickQueueOption().click()
        
       }
      orderApprovalPage.getSelectQueueDropdown().click()
       orderApprovalPage.getPickQueue().click()
       pickPage.getOrderNumber().then(function(orderNumberPickQueue){
           let actualOrderNumberPickQueue = orderNumberPickQueue.text()
           cy.log(actualOrderNumberPickQueue)
           this.actualOrderNumberPickQueue = actualOrderNumberPickQueue
       })
       if(this.actualOrderNumberPickQueue == this.actualOrderNumber)
       {
           pickPage.getOverrideButton().click()
           pickPage.getEmailField().type(this.data.email)
           pickPage.getPasswordField().type(this.data.password)
           pickPage.getSubmitButton().click()
       }
       orderApprovalPage.getSelectQueueDropdown().click()
       orderApprovalPage.getAuditQueue().click()
       auditPage.getOrderNumber().then(function(ordeNumberAuditQueue){

        let actualOrdeNumberAuditQueue = ordeNumberAuditQueue.text()
        this.actualOrdeNumberAuditQueue = actualOrdeNumberAuditQueue
       })
       if(this.actualOrdeNumberAuditQueue == this.actualOrderNumber)
       {
        auditPage.getOverrideButton().click()
        auditPage.getEmailField().type(this.data.email)
        auditPage.getPasswordField().type(this.data.password)
        auditPage.getSubmitButton().click()
       }
       orderApprovalPage.getSelectQueueDropdown().click()
       orderApprovalPage.getShipQueue().click()
       shipPage.getOrderNumber().then(function(orderNumberShipQueue){
           let actualOrderNumberShipQueue = orderNumberShipQueue.text()
           this.actualOrdeNumberShipQueue = actualOrderNumberShipQueue
       })
       if(this.actualOrdeNumberShipQueue == this.actualOrderNumber)
       {
        shipPage.getCreateShipmentButton().click()
        shipPage.getContinueButtonInSelectCourier().click()
        cy.wait(2000)
        shipPage.getContinueButtonInAddressTab().click()
        shipPage.getCourierType().select(this.data.courierName)
        shipPage.getTrackingNumberField().type(this.data.TrackingId)
        shipPage.getFinishButton().click()
       }
       orderApprovalPage.getSelectQueueDropdown().click()
       orderApprovalPage.getCompleteQueue().click()
       completeOrderPage.getOrderNumber().then(function(orderNumberCompleteQueue){
           let actualOrderNumberCompleteQueue = orderNumberCompleteQueue
           this.actualOrderNumberCompleteQueue = actualOrderNumberCompleteQueue
       })
       if(this.actualOrderNumberCompleteQueue == this.actualOrderNumber)
       {
           cy.log('Order is succesfully completed')
       }
    
    })
    })