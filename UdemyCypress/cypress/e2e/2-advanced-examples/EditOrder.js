import LoginPage from '../pajeObjectModel/LoginPage'
import DashboardPage from '../pajeObjectModel/DashboardPage'
import OrderApprovalPage from '../pajeObjectModel/OrderApprovalPage'
import PlacingOrderPage from '../pajeObjectModel/PlacingOrderPage'
import EditOrderPage from '../pajeObjectModel/EditOrderPage'

describe('Edit Order Suite', function(){
  before(function(){
    cy.fixture('EditOrder').then(function(data){
        this.data= data
    })
})
  it('Edit Order Script',function(){
    const loginPage = new LoginPage()
    const dashboardPage = new DashboardPage()
    const orderApprovalPage = new OrderApprovalPage()
    const placingOrderPage = new PlacingOrderPage()
    const editOrderPage = new EditOrderPage()

    cy.visit(this.data.url)
    loginPage.getEmailIdField().type(this.data.email)
    loginPage.getPasswordField().type(this.data.password)
    loginPage.getSignInButton().click()
    cy.url().should('include',this.data.dashboardurl)
    cy.wait(2000)
    /*cy.contains('Accounts Management').click()
    cy.wait(2000)
    cy.get('.c-show > .c-sidebar-nav-dropdown-items > :nth-child(1) > .c-sidebar-nav-link').click()
    cy.get('#filterInput').type(this.data.accountID")
    cy.contains(this.data.accountName).click()
    cy.get('#draft-order-dropdown__BV_button_').click()
    cy.get('#order_source').select(this.data.orderSource1)
    cy.get('.multiselect__placeholder').type('{enter}')
    cy.get('#order-item-qty-0').type(this.data.quantity)
    cy.get('#order-item-sku-0').type(this.data.sku)
    cy.wait(2000)
    cy.get('#order-item-sku-0').type('{downarrow}{enter}')
    cy.wait(2000)
    cy.contains('Submit').click()
    cy.get('#confirm_order_modal___BV_modal_footer_ > .btn-primary').click()
    cy.url().should('include',this.data.accountUrl)
    cy.log('Order is successfully placed')
    cy.get('#orders-tab').click()
    cy.contains('Order Approval').click({force:true})*/
    dashboardPage.getOrderManagement().click()
        dashboardPage.getOrderApproval().click()
        
        orderApprovalPage.getAccountName().then(function(accountName){

                   const actualname=accountName.text()    
                   cy.log(actualname)
                   const expectName = this.data.accountName
                   expect(expectName).to.equal(actualname)
                   
        })
        orderApprovalPage.getClaimButton().click()
        editOrderPage.getEditOrderButton().click()
        placingOrderPage.getOrderSource().select(this.data.orderSource2)
        placingOrderPage.getSubmitButton().click()
        placingOrderPage.getSubmitButtonOnConformationPopUp().click()
        cy.url().should('include',this.data.queueUrl)
        cy.log('Order is sucessfully edited')

    

  })


})