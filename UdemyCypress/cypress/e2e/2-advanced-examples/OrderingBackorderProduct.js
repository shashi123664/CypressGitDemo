describe('Ordering backorder product script', function(){

it('Ordering backorder product test case', function(){


    cy.visit('https://beta3.canprevcommons.ca')
    cy.get('#email').type('shashi_s@trigent.com')
    cy.get('#password').type('Welcome@123')
    cy.get(':nth-child(5) > .w-full').click()
    cy.contains('Accounts Management').click()
    cy.get('.c-show > .c-sidebar-nav-dropdown-items > :nth-child(1) > .c-sidebar-nav-link').click()
    cy.get('#filterInput').type('test1252b')
    cy.contains('test1252b').click()
    cy.get('#draft-order-dropdown__BV_button_').click()
    cy.get('#order_source').select('Phoned')
    cy.get('.multiselect__placeholder').type('{enter}')
    cy.get('.b-sidebar-body > .px-3 > :nth-child(5)').click()
    cy.get('.float-right > span > small').click()
    cy.get('#sidebar-right > .b-sidebar-header > .close > .bi-x').click()
    cy.wait(2000)
    cy.get('.col-md-8 > :nth-child(3)').click()
    cy.get('#confirm_order_modal___BV_modal_footer_ > .btn-primary').click()
    cy.get('#backorders-tab').click()
    var message=''
    cy.get(':nth-child(1) > .border > .text-center > .badge').each(($el , index , $list) =>{

            cy.log($el.text())
            if($el.text().includes('No records available!'))
            {
                let actualMessage = $el.text()
                cy.log(actualMessage)
                message= actualMessage
            }
                
            }).then(()=>{
                expect('No records available!').to.equals(message)
            })



})




})