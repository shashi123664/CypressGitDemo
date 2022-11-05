class LoginPage
{
    getEmailIdField()
    {
        return cy.get('#email')
    }
    getPasswordField()
    {
        return cy.get('#password')
    }
    getSignInButton()
    {
        return cy.get(':nth-child(5) > .w-full')
    }
}

export default LoginPage;
