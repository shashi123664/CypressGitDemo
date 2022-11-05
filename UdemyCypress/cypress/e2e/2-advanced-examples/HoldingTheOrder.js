describe('Holding the order and verify in holding queue script', function(){


    it('Holding the order and verify in holding queue test case',function(){

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
      cy.get('.col-md-8 > :nth-child(3)').click()
      cy.get('#confirm_order_modal___BV_modal_footer_ > .btn-primary').click()
      cy.get('#orders-tab').click()
      var orderNumber= ''
      var ordernumberInOrderApproval = ''
      var orderNumberInHoldQueue = ''
      cy.get('[class="col-md-12 col-lg-8 pr-lg-1"]').find('[class="mb-2"]').eq(0).then(function(ActualOrderNumber){
               orderNumber =ActualOrderNumber.text()
               cy.log(ActualOrderNumber.text())
               cy.log(orderNumber)
      }).then(() =>{ 
        cy.get(':nth-child(3) > .c-sidebar-nav-dropdown-toggle').click()
        cy.contains('Order Approval').click()
        cy.get('[class="col-md-12 col-lg-8 pr-lg-1"]').find('[class="mb-2"]').each(($el , index , $list) =>{
          if($el.text().includes(orderNumber))
          {
            ordernumberInOrderApproval = orderNumber
            cy.wrap($el).click()
            cy.get('.rounded-circle').click()
            cy.log(orderNumber)
            cy.log(ordernumberInOrderApproval)
            cy.get('.float-right > .custom-select').select('Hold Order')
            cy.get('.pt-2 > .form-control').type('TEST')
            cy.get('.card-footer > div > .btn').click()
            
          }
  
        })
        cy.get('#order-queue-dropdownMenuButton').click()
        cy.get('.border-0 > :nth-child(2) > .d-flex > :nth-child(1) > .mb-1').click()
          cy.wait(20000)
          cy.get('[class="col-md-12 col-lg-8 pr-lg-1"]').find('[class="mb-2"]').each(($el , index , $list) =>{
            if($el.text().includes(orderNumber))
            {
              orderNumberInHoldQueue  = orderNumber
              cy.log(orderNumber)
              cy.log(orderNumberInHoldQueue )
            }
          })
          
  
        
  
      }).then(() =>{
        expect(orderNumberInHoldQueue).to.equals(ordernumberInOrderApproval)
      })
  
      
    })
  
  
  })