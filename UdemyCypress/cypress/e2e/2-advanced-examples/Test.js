/// <reference types="Cypress" />

describe("My First Test Suite",function(){

    it("My first test case",function(){

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(2000)
        //cy.get('.product:visible').should('have.length',4)
         cy.get('.products').as('productLocater')
        //parent-child chanining
        cy.get('@productLocater').find('.product').should('have.length',4)

        //cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click()

        cy.get('@productLocater').find('.product').each(($el, index, $list) => {

            const vegText=$el.find('h4.product-name').text()
            if(vegText.includes('Cashews'))
            {
                cy.wrap($el).contains('ADD TO CART').click()
            }
        })

       cy.get('.brand').then(function(logoElement)
       {
         cy.log(logoElement.text())
       })
       cy.get('.cart-icon > img').click()
       cy.contains('PROCEED TO CHECKOUT').click()
       cy.contains('Place Order').click()
    })
})