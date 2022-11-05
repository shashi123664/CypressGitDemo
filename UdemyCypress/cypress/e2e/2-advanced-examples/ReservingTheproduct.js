/// <reference types="Cypress" />
describe('Reserving the product Script', function(){

    it('Reserving the product testcase', function(){

        cy.visit('https://beta3.canprevcommons.ca')
        cy.get('#email').type('shashi_s@trigent.com')
        cy.get('#password').type('Welcome@123')
        cy.get(':nth-child(5) > .w-full').click()
        cy.contains('Accounts Management').click()
        cy.get('.c-show > .c-sidebar-nav-dropdown-items > :nth-child(1) > .c-sidebar-nav-link').click()
        cy.get('#filterInput').type('test1252b')
        cy.contains('test1252b').click()
        cy.get('#backorders-tab').click()
        cy.get('.m-2 > .btn') .trigger('mouseover').wait(1000).click().click({force:true})
        cy.get('#reserve-qty').type('10')
        cy.get('.book-res').type('194246').wait(2000)
        cy.get('.book-res').type('{downarrow}{enter}')
        cy.get('#reserve-comment').type('Test')
        cy.get('#book-reservation-modal___BV_modal_footer_ > .btn-primary').click()
        cy.wait(7000)
        var name =''
        cy.get('h5').each(($el , index , $list) =>{

            cy.log($el.text())
            if($el.text().includes('194246 - Thyroid Spark 60 v-caps'))
            {
                let actualName = $el.text()
                cy.log(actualName)
                name = actualName
                cy.log(name)
            }
                
            })
            .then(() => {expect('194246 - Thyroid Spark 60 v-caps').to.equals(name)})
            
})
        



    })


