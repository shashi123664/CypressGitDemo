describe('Test upload script',function(){


it('Test upload testcase',function(){

    cy.visit('https://beta3.canprevcommons.ca')
    cy.get('#email').type('shashi_s@trigent.com')
    cy.get('#password').type('Welcome@123')
    cy.get(':nth-child(5) > .w-full').click()
    cy.contains('User Management').click()
    cy.contains('New User').click()
   cy.get('#headlessui-menu-button-4 > .h-5').click()
   cy.contains('Add Profile Photo').click()
    
      // in project root
   //cy.get('.max-w-lg').selectFile('Picture.png', { action: 'drag-drop' })

   cy.get('.max-w-lg').click().type('C:\Users\shashi_s\Downloads\1642394769_5-HTP-100.png').enter()
   //.selectFile('Picture.png', { force: true })
})



})