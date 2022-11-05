import 'cypress-iframe'
describe('test suite',function(){


    it('test script',function(){


        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

       /* cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')*/

        cy.contains('Top').click({force: true})
        cy.url().should('include','top')

        /*cy.get('#openwindow').then(function(el)
        {
            const url=el.prop('href')
            cy.visit(url)
        })*/
        cy.frameLoaded('#courses-iframe')
       // cy.iframe().find('a[href="#/mentorship"]').eq(0).click()
       
    })
})