/// <reference types="Cypress" />

describe('Multiple domain',function(){
    xit('Mulitple domain test case',function(){

       cy.visit('https://beta3.canprevcommons.ca/')
        cy.origin('https://sboxcanprev.dataninja.com/', () => {
            //cy.visit('https://beta3.canprevcommons.ca/')
           cy.visit('https://sboxcanprev.dataninja.com/Account/Login')
           /*cy.wait(10000)
           cy.get('#UserName').type('sharath_d@trigent.com')
           cy.wait(10000)
           cy.get('#password').type('Welcome@123')
           cy.wait(10000)*/
           cy.get('button[data-loading-text="Signing In..."]').click()
            cy.wait(10000)
            cy.log('able to visit muliple domain')
            })

    })
    it('Mulitple domain test case',function(){

        cy.visit('https://beta3.canprevcommons.ca/')
         cy.origin('https://hrms.trigent.com/dashboard', () => {
             //cy.visit('https://beta3.canprevcommons.ca/')
            cy.visit('https://hrms.trigent.com/dashboard')
            cy.wait(10000)
            cy.get('#txtUsername').type('shashis')
            /*cy.wait(10000)
            cy.get('#password').type('Welcome@123')
            cy.wait(10000)*/
            cy.get('button[data-loading-text="Signing In..."]').click()
             cy.wait(10000)
             cy.log('able to visit muliple domain')
             })
 
     })
})