/// <reference types="Cypress" />

describe('Test suite',function(){

    it('Test script',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should('be.checked').should('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get('input[type="checkbox"]').check(['option2'])

        cy.get('#dropdown-class-example').select('option2').should('have.value','option2')

        cy.get('#autocomplete').type('Ind')
        cy.get('.ui-menu-item div').each(($el, index, $list) => {

            //const Text=$el.text();

            cy.wait(2000)

            if($el.text()==='India')
            {
               cy.wrap($el).click();
            }
        })
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        //cy.get('#show-textbox').click()

    })
})