class AccountTablePage
{
getSearchField()
{
    return cy.get('#filterInput')
}
getAccountName()
{
    return cy.contains('test1252b')
}
}
export default AccountTablePage ;