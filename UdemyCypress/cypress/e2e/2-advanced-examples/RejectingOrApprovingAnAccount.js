/// <reference types="Cypress" />
import LoginPage from '../pajeObjectModel/LoginPage'
import DashboardPage from '../pajeObjectModel/DashboardPage'
import AccountApprovalListPage from '../pajeObjectModel/AccountApprovalListPage'

describe('Rejecting And Approving an account suite',function(){
  before(function(){
    cy.fixture('RejectingAccount').then(function(data){
        this.data = data
    })
})
   it('Rejecting And Approving an account test script',function(){
     const loginPage = new LoginPage()
     const dashboardPage = new DashboardPage()
     const accountApprovalListPage = new AccountApprovalListPage()

    cy.visit(this.data.url)
    loginPage.getEmailIdField().type(this.data.email)
    loginPage.getPasswordField().type(this.data.password)
    loginPage.getSignInButton().click()
    cy.url().should('include',this.data.dashboardurl)
    cy.wait(2000)
    dashboardPage.getAccountsManagement().click()
    cy.wait(2000)
    dashboardPage.getAccountApprovalList().click()
    accountApprovalListPage.getNameOfAccounts().each(($el , index , $list) =>{
      
        cy.wait(2000)
      if($el.text().includes('test1607'))
      {
          cy.log(index)
          cy.wrap($el).click()
          cy.wait(2000)
          accountApprovalListPage.getCommentField().type(this.data.comment)
          accountApprovalListPage.getRejectButton().click()
      }

    })


})
})

