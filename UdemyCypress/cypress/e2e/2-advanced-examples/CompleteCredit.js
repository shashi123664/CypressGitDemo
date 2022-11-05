import LoginPage from '../pajeObjectModel/LoginPage'
import DashboardPage from '../pajeObjectModel/DashboardPage'
import CreditApprovalPage from '../pajeObjectModel/CreditApprovalPage'
import CompleteCreditPage from '../pajeObjectModel/CompleteCreditPage'


describe('Complete Credit Suite', function(){
  before(function(){
    cy.fixture('CompleteCredit').then(function(data){
        this.data = data
    })
})
    it('Complete Credit Script', function(){
      const loginPage = new LoginPage()
      const dashboardPage = new DashboardPage()
      const creditApprovalPage = new CreditApprovalPage()
      const completeCreditPage = new CompleteCreditPage()
  
      cy.visit(this.data.url)
      loginPage.getEmailIdField().type(this.data.email)
      loginPage.getPasswordField().type(this.data.password)
      loginPage.getSignInButton().click()
      cy.url().should('include',this.data.dashboardurl)
      cy.wait(2000) 
     /* cy.contains('Accounts Management').click()
      cy.wait(2000)
          cy.get('.c-show > .c-sidebar-nav-dropdown-items > :nth-child(1) > .c-sidebar-nav-link').click()
          cy.get('#filterInput').type(this.data.accountID")
          cy.contains(this.data.accountName).click()
          cy.get('a[title="Place Credit"]').click()
          cy.get('#credit_order_type').select(this.data.creditOrdertype)
          cy.get('#order_source').select(this.data.creditOrderSource1)
          cy.get('#account_contact_id').select(this.data.contact)
          cy.get('#order-item-qty-0').type(this.data.quantity)
          cy.get('#order-item-sku-0').type(this.data.sku)
          cy.wait(2000)
          cy.get('#order-item-sku-0').type('{downarrow}{enter}')
          cy.wait(2000)
          cy.contains('Submit').click()
          cy.get('#confirm_credit_order_modal___BV_modal_footer_ > .btn-primary').click()
          cy.url().should('include',this.data.accountUrl)
          cy.log('Credit is successfully placed') 
          cy.get('#orders-tab').click()
          cy.contains('Credit Approval').click({force:true})*/
  
          dashboardPage.getOrderManagement().click()
          dashboardPage.getCreditApproval().click()
          
          creditApprovalPage.getAccountName().then(function(accountName){
  
                     const actualname=accountName.text()    
                     cy.log(actualname)
                     const expectName = this.data.accountName
                     expect(expectName).to.equal(actualname)
                     
          })
          creditApprovalPage.getCreditNumber().then(function(creditNo){

            let actualCreditNumber = creditNo.text()
            this.actualCreditNumber=actualCreditNumber
          })
          creditApprovalPage.getClaimButton().click()
          creditApprovalPage.getApproveButton().click()
          creditApprovalPage.getSelectQueueDropdown().click()
          creditApprovalPage.getCompleteCredit().click()
          cy.wait(3000)
          completeCreditPage.getCreditNumber().then(function(creditNo){

            let expectedCreditNumber = creditNo.text()
            expect(expectedCreditNumber).to.equal(this.actualCreditNumber)
          })

  
          
  
  
     })
  
  })