/// <reference types="Cypress" />
import LoginPage from '../pajeObjectModel/LoginPage'
import DashboardPage from '../pajeObjectModel/DashboardPage'
import AccountRequestPage from '../pajeObjectModel/AccountRequestPage'
import 'cypress-if'

describe('Account', function(){
    before(function(){
        cy.fixture('CanprevAcountCreation').then(function(data){
            this.data = data
        })
    })

  
it('Account Creation Script',function(){
    const loginPage = new LoginPage()
    const dashboardPage = new DashboardPage()
    const accountRequestPage = new AccountRequestPage()

cy.visit(this.data.url)
loginPage.getEmailIdField().type(this.data.email)
loginPage.getPasswordField().type(this.data.password)
loginPage.getSignInButton().click()
//cy.url().should('include',this.data.dashboardUrl)
cy.wait(2000)
dashboardPage.getAccountsManagement().click()
cy.wait(2000)
dashboardPage.getAccounts().click()
dashboardPage.getRequestAccount().click()
cy.url().should('include',this.data.accountRequestUrl)
accountRequestPage.getNameField().type(this.data.name)
accountRequestPage.getMainContactNameField().type(this.data.mainContactName)
/*cy.get('#duplicate_accounts_model___BV_modal_title_')
  .if('visible')
  .then(() => {
    accountRequestPage.getDuplicateAccountModalPopUp().click()
  })
  .else()
  .then(() => {
    cy.log('Already closed')
  })*/
  cy.get('#duplicate_accounts_model___BV_modal_title_').if('visible').contains('×').click()
/*try {
    accountRequestPage.getDuplicateAccountModalPopUp().click()
  } catch  (error) {
    console.error("Not found duplicate pop up")
  }*/
  
accountRequestPage.getPhoneField().type(this.data.phone)
accountRequestPage.getEmailField().type(this.data.accountEmail)
cy.wait(2000)
//accountRequestPage.getDuplicateAccountModalPopUp().click()
/*try {
    accountRequestPage.getDuplicateAccountModalPopUp().click()
  } catch (error) {
    console.error("Not found duplicate pop up")
  }*/
accountRequestPage.getLocationAndContacts().click()
accountRequestPage.getAddLocation().click()
accountRequestPage.getBillingCheckbox().click()
accountRequestPage.getShippingCheckbox().click()
accountRequestPage.getLocationName().type(this.data.LocationName)
accountRequestPage.getLocationType().select(this.data.LocationType)
accountRequestPage.getLocationAddress().type(this.data.Address)
cy.wait(2000)
accountRequestPage.getLocationAddress().type('{downarrow}{enter}')
accountRequestPage.getLocationPhoneNumber().type(this.data.LocationPhoneNumber)
accountRequestPage.getSubmitButtonInLocationPopUp().click()
/*accountRequestPage.getAddContact().click({force:true})
accountRequestPage.getDuplicateAccountModalPopUp().click()
accountRequestPage.getFirstNameContact.type(this.data.contactName)
accountRequestPage.getContactType().select(this.data.contactType)
//cy.get('form > :nth-child(2) > .form-group > :nth-child(2) > .multiselect > .multiselect__tags').type('Canada')

accountRequestPage.getContactLocationType().contains(this.data.contactLocation).type('{enter}')
accountRequestPage.getSubmitButtonContactPopUp().click()*/
cy.get('#duplicate_accounts_model___BV_modal_header_ > .close').click()
accountRequestPage.getBusinessInformationAndManager().click()
accountRequestPage.getAccountType().select(this.data.accountType)
accountRequestPage.getSubmitButton().click()
accountRequestPage.getSendForApprovalButton().click()
cy.url().should('include',this.data.accountUrl)
cy.log('Account is successfully created')
  
  })


})