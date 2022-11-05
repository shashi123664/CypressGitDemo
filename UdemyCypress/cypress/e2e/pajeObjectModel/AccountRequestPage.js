class AccountRequestPage
{
getNameField()
{
    return cy.get('#name')
}
getMainContactNameField()
{
    return cy.get('#main_contact_name')
}
getPhoneField()
{
    return cy.get('#phone')
}
getEmailField()
{
    return cy.get('#email')
}
getDuplicateAccountModalPopUp()
{
    return cy.get('#duplicate_accounts_model___BV_modal_header_ > .close')
}
getLocationAndContacts()
{
    return cy.contains('Location & Contacts')
}
getAddLocation()
{
    return cy.contains('Add Location')
}
getBillingCheckbox()
{
    return cy.contains('Billing(Default)')
}
getShippingCheckbox()
{
    return cy.contains('Shipping(Default)')
}
getLocationName()
{
    return cy.get('input[placeholder="Enter Name"]')
}
getLocationType()
{
    return cy.get('#location_category_id')
}
getLocationAddress()
{
    return cy.get('input[placeholder="Street number and name"]')
}
getLocationPhoneNumber()
{
    return cy.get('input[placeholder="(000)-000-0000"]')
}
getSubmitButtonInLocationPopUp()
{
    return cy.get('#account_location_model___BV_modal_footer_ > .btn-primary')
}
getAddContact()
{
    return cy.contains('Add Contact')
}
getFirstNameContact()
{
    return cy.get('#first_name')
}
getContactType()
{
    return cy.get('#account_contact_role_id')
}
getContactLocationType()
{
    return cy.get('form > :nth-child(2) > .form-group > :nth-child(2) > .multiselect > .multiselect__tags')
}
getSubmitButtonContactPopUp()
{
    return cy.get('#add_contact_modal___BV_modal_footer_ > .btn-primary')
}
getBusinessInformationAndManager()
{
    return cy.contains('Business Information and Manager')
}
getAccountType()
{
    return cy.get('#account_type_id')
}
getSubmitButton()
{
    return cy.contains('Submit')
}
getSendForApprovalButton()
{
    return cy.contains('Send for Approval')
}
}
export default AccountRequestPage;