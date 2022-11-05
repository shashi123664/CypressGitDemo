describe('Creating user management script', function(){


    it('Creating user management test case',function(){
  
        cy.visit('https://beta3.canprevcommons.ca')
        cy.get('#email').type('shashi_s@trigent.com')
        cy.get('#password').type('Welcome@123')
        cy.get(':nth-child(5) > .w-full').click()
        cy.contains('User Management').click()
        cy.contains('New User').click()
        /*cy.get('#headlessui-menu-button-4 > .h-5').click()
        cy.get('#headlessui-menu-item-10').click()
        const p = 'Picture.png'
        cy.contains('Upload').attachFile(p)*/
        cy.get('#first_name').type('Test')
        cy.get('#last_name').type('Active user')
        cy.get('#email').type('shashishoumya@outlook.com')
        cy.get('#mobile').type('9370828901')
        cy.contains('CanPrev Commons').click()
        cy.get('#role').select('Systems Admin')
        cy.contains('CanPrev Codex').click()
        cy.get('[id="role"]').eq(0).select('Systems')
        cy.get('[id="role"]').eq(1).select('Super Admin')
        cy.wait(3000)
        cy.contains('Save').click()
        cy.url().should('equal' ,'https://beta3-auth.canprevcommons.ca/members')
            

      
    })
  
  
  })