describe('Creating the darft order and verify in draft order queue script', function(){


    it('Creating the darft order and verify in draft order queue test case',function(){
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
      cy.get('#order-item-qty-0').type('1')
      cy.get('#order-item-sku-0').type('194107').type('{downarrow}{enter}')
      cy.get('.btn-primary.mr-2').click()
      cy.get('#orders-tab').click()
      var orderNumber= ''
      var ordernumberInDraftOrder = ''
      cy.get('[class="col-md-12 col-lg-8 pr-lg-1"]').find('[class="mb-2"]').eq(0).then(function(ActualOrderNumber){
               orderNumber =ActualOrderNumber.text()
               cy.log(ActualOrderNumber.text())
               cy.log(orderNumber)
      }).then(() =>{ 
        cy.get(':nth-child(3) > .c-sidebar-nav-dropdown-toggle').click()
        cy.contains('Complete').click()
        cy.get('#order-queue-dropdownMenuButton').click()
        cy.get('.border-0 > :nth-child(3) > .d-flex > :nth-child(1) > .mb-1').click()
        cy.get('[class="col-md-12 col-lg-8 pr-lg-1"]').find('[class="mb-2"]').each(($el , index , $list) =>{
          if($el.text().includes(orderNumber))
          {
            ordernumberInDraftOrder = orderNumber
            cy.log(orderNumber)
            cy.log(ordernumberInDraftOrder)
          }
        })

      }).then(() =>{
        expect(ordernumberInDraftOrder).to.equals(orderNumber)
      })
     
      
    })
  
  
  })