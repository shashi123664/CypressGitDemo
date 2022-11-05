describe('Creating the darft credit and verify in draft credit queue script', function(){


    it('Creating the darft credit and verify in draft credit queue test case',function(){
      cy.visit('https://beta3.canprevcommons.ca')
      cy.get('#email').type('shashi_s@trigent.com')
      cy.get('#password').type('Welcome@123')
      cy.get(':nth-child(5) > .w-full').click()
      cy.contains('Accounts Management').click()
      cy.get('.c-show > .c-sidebar-nav-dropdown-items > :nth-child(1) > .c-sidebar-nav-link').click()
      cy.get('#filterInput').type('test1252b')
      cy.contains('test1252b').click()
      cy.get('a[title="Place Credit"]').click()
      cy.get('#order_source').select('Phoned')
      cy.get('.multiselect__placeholder').type('{enter}')
      cy.get('#order-item-qty-0').type('1')
      cy.get('#order-item-sku-0').type('194107').type('{downarrow}{enter}')
      cy.get('.btn-primary.mr-2').click()
      cy.get('#orders-tab').click()
      var creditNumber = ''
      var creditnumberInDraftCredit = ''
      cy.get('[class="col-md-12 col-lg-8 pr-lg-1"]').find('[class="mb-2"]').eq(0).then(function(ActualCreditNumber){
               creditNumber =ActualCreditNumber.text()
               cy.log(ActualCreditNumber.text())
               cy.log(creditNumber)
      }).then(() =>{ 
        cy.get(':nth-child(3) > .c-sidebar-nav-dropdown-toggle').click()
        cy.contains('Complete').click()
        cy.get('#order-queue-dropdownMenuButton').click()
        cy.get('.border-0 > :nth-child(4) > .d-flex > :nth-child(1) > .mb-1').click()
        cy.log(creditNumber)
        cy.get('[class="col-md-12 col-lg-8 pr-lg-1"]').find('[class="mb-2"]').each(($el , index , $list) =>{
          cy.log($el.text())
          cy.wait(2000)
          cy.debug()
          if($el.text().includes(creditNumber))
          {
            creditnumberInDraftCredit = creditNumber
            cy.log(creditNumber)
            cy.log(creditnumberInDraftCredit)
          }
        })

      }).then(() =>{
        expect(creditnumberInDraftCredit).to.equals(creditNumber)
      })
     
      
    })
  
  
  })