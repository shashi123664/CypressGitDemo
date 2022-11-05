class AuditPage{
    getOrderNumber()
    {
        return cy.get('.justify-content-between > :nth-child(2) > .mb-2')
    }
    getOverrideButton()
    {
        return cy.get('.col-md-9 > :nth-child(2) > :nth-child(1) > .btn')
    }
    getEmailField()
    {
        return cy.get('#override_email')
    }
    getPasswordField()
    {
        return cy.get('#override_pwd')
    }
    getSubmitButton()
    {
        return cy.get('#password_verify_modal___BV_modal_footer_ > .btn-primary')
    }

}
export default AuditPage;