describe('Place backorder from limited stock pop up script',function(){


    it('Place backorder from limited stock pop up test case', function(){
        
        
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
        cy.get('#order-item-qty-0').type('30')
        cy.get('#order-item-sku-0').type('194246').type('{downarrow}{enter}')
        var popUpName=''
        cy.get('#add_backorder_partial_modal___BV_modal_title_').then(function(popUpTitle){
            popUpName = popUpTitle.text()
        }).then(()=>{


            expect('Limited Stock').to.equals(popUpName)
        })
        cy.get(':nth-child(3) > :nth-child(4) > :nth-child(1) > .form-control').clear()
        cy.get(':nth-child(3) > :nth-child(4) > :nth-child(1) > .form-control').type(1)
        cy.get('#comments').type('Test')
        cy.get('#add_backorder_partial_modal___BV_modal_footer_ > .btn-primary').click()
        cy.get('.col-md-8 > :nth-child(3)').click()
        cy.get('#confirm_order_modal___BV_modal_footer_ > .btn-primary').click()
        cy.get('#backorders-tab').click()
        var productName=''
        cy.get('.card-header > .p-0').each(($el , index , $list) =>{

            cy.log($el.text())
            if($el.text().includes('194246 - Thyroid Spark 60 v-caps'))
            {
                let actualProductName = $el.text()
                cy.log(actualProductName)
                productName = actualProductName
            }
                
            }).then(()=>{
                expect('194246 - Thyroid Spark 60 v-caps').to.equals(productName)
            })
        
    })
})