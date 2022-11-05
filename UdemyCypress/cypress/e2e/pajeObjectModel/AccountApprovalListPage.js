class AccountApprovalListPage
{
    getNameOfAccounts()
    {
        return cy.get('div h6[class="card-title"]')
    }
    getCommentField()
    {
        return cy.get('#note')
    }
    getRejectButton()
    {
         return cy.contains('Reject')
    }
}

export default AccountApprovalListPage;